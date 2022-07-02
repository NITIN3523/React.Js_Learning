import React from 'react'

export default function Todocard(probs) {
    return (
        <div className='flex flex-col justify-between bg-purple-700 p-1 hover:bg-purple-400 text-2xl font-semibold text-white mt-4 w-96 h-fit' key={probs.index} >
            <div className='overflow-y-auto break-words max-h-48 mb-2'>
                <h1 className='pl-3' id={probs.index}>{probs.itemval}</h1>
            </div>
            <div className="icon border-t-2 w-80 mx-5 border-white flex gap-4 justify-end">
                <i className="fa-solid fa-trash mt-2"
                    title='Delete Item'
                    onClick={() => probs.deleteitemlist(probs.index)}
                    onMouseEnter={(e) => e.target.style.color = "Black"}
                    onMouseLeave={(e) => e.target.style.color = "White"} />
                <i className="fa-solid fa-pen-to-square mt-2"
                    title='Update Item'
                    onClick={() => probs.edititem(probs.index)}
                    onMouseEnter={(e) => e.target.style.color = "Black"}
                    onMouseLeave={(e) => e.target.style.color = "White"} >
                </i>
            </div>
        </div>
    )
}
