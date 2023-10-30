/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { GrView } from 'react-icons/gr'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'


const Table = ({ todos, setTodos, isLoading }) => {


  return (
    <div data-theme="forest" className='py-2 overflow-x-auto'>
      {/* Search Button */}
      <input className='input input-bordered input-xs join-item' placeholder='Search' />
      <select className='select select-xs select-bordered join-item'>
        <option disabled selected>Filter</option>
        <option>AJB</option>
        <option>PBB</option>
        <option>SHM</option>
        <option>HGB</option>
      </select>
      <div className="indicator">
        <button className="btn btn-accent btn-xs join-item">Search</button>
      </div>
      {/* Search Button End */}
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
                    <td className='p-3 font-medium grid grid-flow-col items-center'>
                      <button className="btn btn-ghost btn-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                      </svg>
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