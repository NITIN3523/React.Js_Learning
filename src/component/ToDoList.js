import React, { useState } from 'react';
export default function ToDoList() {
    const [item, setitem] = useState("");
    const [aditem, setaditem] = useState([])
    const textchange = (event) => {
        const value = event.target.value;
        setitem(value)
    }
    const additem = () => {
        setaditem((aditems) => {
            return [...aditems, item];
        });
        setitem('');
    }
    const deleteItem = (i) => {
        setaditem((old) => {
            return old.filter((arval, index) => {
                return index !== i;
            });
        });  
    }
    return (
        <>
            <div className='card h-screen flex flex-col justify-center items-center bg-teal-400'>
                <div className='content bg-slate-200 w-fit h-fit rounded-lg shadow-md shadow-black '>
                    <br />
                    <p className='bg-indigo-400 text-center text-3xl font-semibold'>ToDo List</p>
                    <br />
                    <div className="insidecontent p-4">
                        <div className="input-button gap-4 flex flex-row">
                            <input type="text"
                                value={item}
                                placeholder='Add a Item' className='outline-none border-b-2 border-black text-left bg-slate-200 text-2xl font-medium text-indigo-500' onChange={textchange} />
                            <button onClick={additem} className="text-4xl font-extrabold text-white bg-indigo-500 rounded-lg p-1 hover:bg-green-500">+</button>
                        </div>
                        <ol>
                            {aditem.map((itemval, index) => {
                                return (
                                    <div key={index} className="flex flex-row gap-4 mt-3">
                                        <button className="text-xl font-extrabold text-white bg-indigo-500 rounded p-1 hover:bg-red-500"
                                            onClick={() => deleteItem(index)}>x</button>
                                        <li className='text-2xl font-medium text-indigo-500'>
                                            {itemval}
                                        </li>
                                    </div>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
