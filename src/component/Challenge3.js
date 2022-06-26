import React from 'react'

export default function Challenge3() {
    var curdate = new Date(2022,4,17,23);
    curdate=curdate.getHours();
    var greet = '';
    var colr = '';
    if(curdate>=1 && curdate<12)    {
        greet = "Good Morning";
        colr = "red";
    }
    else if (curdate>=12 && curdate<19) {
        greet = "Good Afternoon";
        colr = "purple";        
    } else {
        greet = "Good Night";
        colr = "Blue";        
    }
  return (
    <>
    <h1 className='text-3xl font-extrabold rounded-lg'>Hello Sir,<span style={{color:colr}}>{greet}</span></h1>      
    </>
  )
}

// CSS
/*
body{
    background-color: skyblue;
}
div{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
h1{
    background-color:aquamarine;
    padding: 30px;
    width: 500px;
    text-align: center; 
}
*/