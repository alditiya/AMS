/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { pdfjs } from 'react-pdf';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Button,
  Center,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const TableView = ({ todos, setTodos, isLoading }) => {


  const forceDownload = (response, title) => {
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', title + '.pdf')
    document.body.appendChild(link)
    link.click()

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  const downloadWithAxios = (url, title) => {
    axios({
      method: 'get',
      url,
      responseType: 'arraybuffer'
    }).then((response) => {
      forceDownload(response, title)
    }).catch((error) => console.log(error))

  }

  const viewWithAxios = (url, title) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };

    const goToPrevPage = () =>
      setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
      setPageNumber(
        pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
      );

  }





  return (

    <TableContainer>
      <div data-theme="forest" className='py-2 overflow-x-auto'>

        {/*Table Start */}
        <Table size='sm' textAlign='center' variant='striped' className='table table-auto table-zebra table-xs'>
          <Thead>
            <Tr>
              <Th className='p-3 text-xs font-semibold text-center'>No.</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Nomor Dokumen</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Nama Properti</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Jenis Dokumen</Th>
              <Th className='p-3 text-sm font-semibold text-center'>PPAT</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Alamat Properti</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Status</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Expired Date</Th>
              <Th className='p-3 text-sm font-semibold text-center'>Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            {isLoading ?
              <span className="loading loading-spinner text-info">Backend ENGINE Not Running</span>
              :
              <>
                {todos.map((todoItem) => {
                  return (
                    <Tr key={todoItem.id} className='border-t-2 items-center text-center'>
                      <Td extAlign="center">{todoItem.id}.</Td>
                      <Td className='p-3 text-center'>{todoItem.noDoc}</Td>
                      <Td className='p-3 text-center'>{todoItem.nameDoc}</Td>
                      <Td className='p-3 text-center'>{todoItem.jenisDokumen}</Td>
                      <Td className='p-3 text-center'>{todoItem.ppat}</Td>
                      <Td className='p-3 text-center'>{todoItem.alamatProperti}</Td>
                      <Td className='p-3 text-center'>
                        <span className={`p-1.5 text-black text-xs font-normal tracking-wider ${todoItem.completed ? 'bg-green-400' : 'bg-red-400'}`}>
                          {todoItem.completed ? 'Available' : 'Borrowed'}
                        </span>
                      </Td>
                      <Td className='p-3 text-center'>{new Date(todoItem.created).toLocaleDateString()}</Td>
                      <Td className='p-3 font-medium text-center'>
                        <a href="" target="_blank" ></a>
                        <Button onClick={() => open(todoItem.pdf)} className="btn btn-ghost items-center">

                          <LuEye />

                        </Button>
                        <Button onClick={() => downloadWithAxios(todoItem.pdf, todoItem.nameDoc + "_" + todoItem.jenisDokumen)} className="btn items-center btn-ghost">
                          <FaCloudDownloadAlt />

                        </Button>
                      </Td>
                    </Tr>
                  )
                })
                }</>}
          </Tbody>
        </Table>
        {/*Table End */}
      </div>
    </TableContainer >

  )
}
export default TableView