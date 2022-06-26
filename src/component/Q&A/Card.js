import React, { useState } from 'react'

// export default function Card(probs) {
//     const [n, setn] = useState({
//         btname: "➕",
//         stylprop: "none"
//     })
//     const displayanswer = () => {
//         setn(() => {
//             if(n.btname=="➕")
//             {
//                 return {
//                     btname: "➖",
//                     stylprop: "block"
//                 }
//             }
//             else if (n.btname=="➖")
//             {
//                 return {
//                     btname: "➕",
//                     stylprop: "none"
//                 }
//             }
//         })
//     }
//     return (
//         <div className="innercard mt-2 p-2">
//             <div className="question flex gap-4 bg-red-200 shadow-md">
//                 <div className="icon border-r-4 border-teal-600 hover:bg-green-300">
//                     <button className='text-2xl font-bold p-2' onClick={displayanswer}>{n.btname}</button>
//                 </div>
//                 <div className="ques text-xl font-medium py-2">
//                     {probs.question}
//                 </div>
//             </div>
//             <div className="ans bg-violet-200 text-xl font-medium p-2" style={{ display: n.stylprop }}>
//                 {probs.answer}
//             </div>
//         </div>
//     )
// }
export default function Card(probs) {
    const [n, setn] = useState(false)
    return (
        <div className="innercard mt-2 p-4">
            <div className="question flex gap-4 bg-red-200 shadow-md">
                <div className="icon border-r-4 border-teal-600 hover:bg-green-300">
                    <button className='text-2xl font-bold p-2' onClick={()=>setn(!n)}>
                        {n?"➖":"➕ "}
                    </button>
                </div>
                <div className="ques text-xl font-medium py-2">
                    {probs.question}
                </div>
            </div>
            {
                n && <div className="ans bg-violet-200 text-xl font-medium p-2">
                    {probs.answer}
                </div>
            }
        </div>
    )
}
