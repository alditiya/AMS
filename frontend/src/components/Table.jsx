/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { GrView } from 'react-icons/gr'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'


const Table = ({ todos, setTodos, isLoading }) => {


  return (
    <div data-theme="forest" className='py-2 overflow-x-auto'>
      {/* Search Button */}
      <input className='input input-bordered input-sm join-item' placeholder='Search' />
      <select className='select select-sm select-bordered join-item'>
        <option disabled selected>Filter</option>
        <option>AJB</option>
        <option>PBB</option>
        <option>SHM</option>
        <option>HGB</option>
      </select>
      <div className="indicator">
        <button className="btn btn-secondary btn-sm join-item">Search</button>
      </div>
      {/* Search Button End */}
      {/*Table Start */}
      <table className='table table-zebra table-xs'>
        <thead data-theme="forest" className="tracking-wider text-white">
          <tr>
            <th className='p-3 text-sm font-semibold text-center'>No.</th>
            <th className='p-3 text-sm font-semibold text-center'>Nomor Dokumen</th>
            <th className='p-3 text-sm font-semibold text-center'>Nama Properti</th>
            <th className='p-3 text-sm font-semibold text-center'>Jenis Dokumen</th>
            <th className='p-3 text-sm font-semibold text-center'>PPAT</th>
            <th className='p-3 text-sm font-semibold text-center'>Alamat Properti</th>
            <th className='p-3 text-sm font-semibold text-center'>Status</th>
            <th className='p-3 text-sm font-semibold text-center'>Date Submit</th>
            <th className='p-3 text-sm font-semibold text-center'>Actions</th>
          </tr>
        </thead>
        <tbody data-theme="light" className=' text-black text-sm tracking-wider text-center'>
          {isLoading ? <div>
            <span className="loading loading-spinner text-info">Backend ENGINE Not Running</span>
          </div> :
            <>
              {todos.map((todoItem, index) => {
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
                        {todoItem.completed ? 'Completed' : 'Incompleted'}
                      </span>
                    </td>
                    <td className='p-3'>{new Date(todoItem.created).toLocaleString()}</td>
                    <td className='p-3 font-medium grid grid-flow-col items-center mt-3 ml-5'>
                      <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                      </th>
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