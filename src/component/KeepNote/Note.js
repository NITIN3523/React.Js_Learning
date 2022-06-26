import React from 'react'
import Delete from '../../images/delete.png'
export default function Note(probs) {
  const DeleteItem = () => {
    probs.Dnote(probs.id);
  }
  return (
    <div className='bg-white rounded-md shadow-lg w-full h-80 border-2 border-gray-400 flex flex-col pt-4 px-4'>
      <div className='font-medium text-xl'>
        <h1>{probs.title}</h1>
      </div>
      <hr />
      <div className='flex-1 overflow-y-auto mt-2'>
        <p>{probs.content}</p>
      </div>
      <div className='mt-2 text-right'>
        <hr />
        <button onClick={DeleteItem} className='hover:bg-blue-200 p-1 rounded-md'><img src={Delete} alt="" /></button>
      </div>
    </div>
  )
}
