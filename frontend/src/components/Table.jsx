/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Table = ({ todos, setTodos, isLoading }) => {


  let api = 'http://127.0.0.1:8000/api'


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
    <div data-theme="forest" className='py-2 overflow-x-auto'>
      {/*Table Start */}
      <table className='table table-auto table-zebra table-xs'>
        <thead data-theme="forest" className="tracking-wider text-white">
          <tr>
            <th className='p-3 text-sm font-semibold text-center'>No.</th>
            <th className='p-3 text-sm font-semibold text-center'>Nomor Dokumen</th>
            <th className='p-3 text-sm font-semibold text-center'>Nama Properti</th>
            <th className='p-3 text-sm font-semibold text-center'>Jenis Dokumen</th>
            <th className='p-3 text-sm font-semibold text-center'>PPAT</th>
            <th className='p-3 text-sm font-semibold text-center'>Alamat Properti</th>
            <th className='p-3 text-sm font-semibold text-center'>Status</th>
            <th className='p-3 text-sm font-semibold text-center'>Expired Date</th>
            <th className='p-3 text-sm font-semibold text-center'>Actions</th>
          </tr>
        </thead>
        <tbody data-theme="light" className=' text-black text-sm tracking-wider text-center'>
          {isLoading ? <div data-theme='forest' className='content-center'>
            <span className="loading loading-spinner text-info">Backend ENGINE Not Running</span>
          </div> :
            <>
              {todos.map((todoItem, Files) => {
                return (
                  <tr key={todoItem.id} className='border-t-2'>
                    <td className='p-3'>{todoItem.id}.</td>
                    <td className='p-3'>{todoItem.noDoc}</td>
                    <td className='p-3'>{todoItem.nameDoc}</td>
                    <td className='p-3 '>{todoItem.jenisDokumen}</td>
                    <td className='p-3'>{todoItem.ppat}</td>
                    <td className='p-3'>{todoItem.alamatProperti}</td>
                    <td className='p-3'>
                      <span data-theme="dracula" className={`p-1.5 text-black text-xs font-medium tracking-wider ${todoItem.completed ? 'bg-green-400' : 'bg-red-400'}`}>
                        {todoItem.completed ? 'Available' : 'Borrowed'}
                      </span>
                    </td>
                    <td className='p-3'>{new Date(todoItem.created).toLocaleDateString()}</td>
                    <td className='p-3 font-medium grid grid-flow-col items-center'>
                      <a href="" target="_blank" rel="noreferrer"></a>
                      <button onClick={() => open(todoItem.pdf)} className="btn btn-ghost btn-xs">
                        <LuEye />
                        Details
                      </button>
                      <button onClick={() => downloadWithAxios(todoItem.pdf, todoItem.nameDoc + " " + todoItem.jenisDokumen)} className="btn btn-ghost btn-xs">
                        <FaCloudDownloadAlt />
                        Downloads
                      </button>
                    </td>
                  </tr>
                )
              })
              }</>}
        </tbody>
      </table>
      {/*Table End */}
    </div>
  )
}




export default Table