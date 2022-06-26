import React, { createContext } from 'react'
import CB from './CB'

const FirstName = createContext();
const LasttName = createContext();
const CA = () => {
    return (
        <>
            <FirstName.Provider value={"Nitin Saini"}>
                <LasttName.Provider value={"NiPulNid"}>
                <CB />
                </LasttName.Provider>
            </FirstName.Provider>
        </>
    )
}
export default CA;
export { FirstName, LasttName}