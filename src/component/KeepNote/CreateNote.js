import React, { useState } from 'react'
import Add from '../../images/add.png'

export default function CreateNote(probs) {

    const [note, setnote] = useState({
        title: "",
        content: ""
    })

    const AddNote = (event) => {
        const { name, value } = event.target;
        setnote((predata) => {
            return {
                ...predata, [name]: value
            }
        })
        console.log(note)
    }

    const AddEvent = (event) => {
        event.preventDefault()
        probs.passNotes(note);
        setnote({
            title: "",
            content: "",
        })
    }
    const [heading, setheading] = useState(false)
    return (
        <div className='mt-10 flex justify-center '>
            <form className='flex flex-col w-4/12 relative shadow-xl bg-white'>
                <input className='p-2 font-medium outline-none text-lg'
                    type="text" placeholder={heading ? "Title" : "Write Your Note"} name='title' value={note.title} onChange={AddNote} onClick={() => setheading(!heading)} />
                <hr />
                {
                    heading &&
                    <textarea className='p-2 outline-none'
                        name="content" value={note.content} rows="5" placeholder='Content' onChange={AddNote}></textarea>
                }
                {
                    heading && <button className='absolute -bottom-3 p-1 right-5 shadow-lg bg-yellow-500 rounded-md hover:bg-blue-200'
                    onClick={AddEvent}>
                    <img src={Add} alt="" className='h-6 w-6' />
                </button>
                }
            </form>
        </div>
    )
}
