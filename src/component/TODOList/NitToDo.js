import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Todocard from './Todocard';

const getloacalstoragelist = () => {
    let list = localStorage.getItem('List')
    console.log("Localget ==> "+list)
    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}

export default function NitToDo() {
    const [item, setitem] = useState("");
    const [itemlist, setitemlist] = useState(getloacalstoragelist())
    const [edit, setedit] = useState(false)
    const [id, setid] = useState("")

    const additem = () => {
        if (!item) {
            alert("Not Be Empty")
        }
        else {
            setitemlist([item, ...itemlist]);
            setitem('')
            document.getElementById("input").value = "";
        }
    }
    const deleteitemlist = (index) => {
        setitemlist(itemlist.filter((val, i) => {
            return i != index;
        }))
    }
    const edititem = (index) => {
        setedit(true)
        setitem(itemlist[index])
        setid(index)
    }
    const editing = () => {
        itemlist[id] = item;
        setitemlist(itemlist);
        setedit(false);
        setitem("");
        setid("");
        console.log(itemlist)
    }
    useEffect(() => {
        console.log("Localset ==> "+itemlist)
        localStorage.setItem("List", JSON.stringify(itemlist))
    },[item,itemlist])
    return (
        <div className=' bg-gray-900 h-full flex justify-center'>
            <div className="content mt-20 flex items-center flex-col">
                <div className="itemsadding h-28 w-96 p-3 bg-gray-300 rounded-lg">
                    <div className="heading bg-blue-400 text-center font-bold rounded-lg">
                        <h1 className='text-2xl'>ToDo List</h1>
                    </div>
                    <div className="itemsadding mt-5 flex justify-between">
                        <input
                            id='input'
                            type='text'
                            placeholder='✍ Add Items...'
                            value={item}
                            className='text-xl p-1 outline-none bg-gray-300 border-b-2 border-black'
                            onKeyDown={(e) => { if (e.key === 'Enter') additem() }}
                            onChange={(e) => setitem(e.target.value)} />
                        <button
                            className='text-2xl hover:bg-blue-400 p-1'
                            onClick={edit ? () => editing() : () => additem()}
                            title={edit ? "Update Item" : "Add Item"}>
                            {edit ? '✔' : '➕'}
                        </button>
                    </div>
                </div>
                <div className="addeditems mt-10 flex flex-wrap justify-around gap-2">
                    {
                        itemlist.map((itemval, index) => {
                            return (
                                <Todocard
                                index = {index}
                                itemval = {itemval}
                                deleteitemlist = {deleteitemlist}
                                edititem = {edititem}/>
                            )
                        })
                    }
                </div>
                <div className="clearallbtn flex justify-center mt-5">
                    <button className='text-2xl font-semibold p-2 bg-gray-400 text-white hover:bg-purple-700 rounded-lg' onClick={() => setitemlist([])}>Clear All</button>
                </div>
            </div>
        </div>
    )
}
