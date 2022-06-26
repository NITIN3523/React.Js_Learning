import React, { useContext } from 'react'
import { FirstName, LasttName } from './CA'
const CC = () => {
  const fname = useContext(FirstName)
  const lname = useContext(LasttName)
  return (
    <>
      {/* <FirstName.Consumer>
          {(fname)=>{
              return (
                  <LasttName.Consumer>
                      {(lname)=>{
                          return (
                            <h1>terii masumiyat {fname} {lname}</h1>
                          )
                      }}
                  </LasttName.Consumer>
              )
          }}
      </FirstName.Consumer> */}
      <h1>terii masumiyat {fname} {lname}</h1>
    </>
  )
}
export default CC;