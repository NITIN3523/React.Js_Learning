import React, { useState } from "react";
import copyright from "../../images/copyright.png"
import CreateNote from "./CreateNote"
import Note from "./Note";

export default function Main() {
    const year = new Date().getFullYear();
    const [additem, setadditem] = useState([]);
    const AddKeepNotes = (note) => {
        setadditem((pre) => {
            console.log(note);
            return [...pre, note];
        });
    };
    const DeletNote = (id) =>{
        setadditem((additem) => {
            return additem.filter((arval, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div className="MainContent relative h-screen">
            <div className="Header bg-indigo-400 p-2">
                <p className=" text-white ml-20 text-3xl font-bold">NitKeepNote</p>
            </div>
            <div className="midcontent p-4">
                <CreateNote passNotes={AddKeepNotes} />
                <div className="KeepNotes grid grid-cols-4 gap-4 mt-10">
                    {additem.map((value, index) => {
                        return (
                            <div>
                                <Note
                                    key={index}
                                    id={index}
                                    title={value.title}
                                    content={value.content}
                                    Dnote={DeletNote}
                                />
                            </div>
                        );
                    }
                    )}
                </div>
            </div>
        </div>
    )
}