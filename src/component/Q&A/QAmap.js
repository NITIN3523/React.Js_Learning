import React from 'react'
import QA from './QandA'
import Card from './Card'

export default function QAmap() {
    return (
        <div className='main flex flex-col items-center h-fit mt-20 mb-20'>
            <div className="content w-10/12 h-fit bg-gray-100 shadow-xl">
                <div className="title bg-rose-400 p-2 mt-4">
                    <p className='text-center text-4xl font-bold text-white'>React Question And Answer</p>
                </div>
                <div className="innercontent">
                    {QA.map((value) => {
                        return (
                            <Card
                                question={value.Question}
                                answer={value.Answer}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
