import './Netflix.css'
export default function Card(probs) {
    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <img src={probs.src} alt="" className='img' />
                    <div className="info">
                        <span className='card_cate'>{probs.category}</span>
                        <h3 className='title'>{probs.title}</h3>
                        <a href={probs.link} target="_blank">
                            <button className='button'>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

///USE CONNECT.JS 



// INDEX.js CODE ==> 01
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './component/Landing';
import Card from './component/Challenge5';



ReactDOM.render(
    <>
        <Card
            src="https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720"
            category="Vampire"
            title="The Vampire Diaries"
            link="https://www.netflix.com/in/title/70143860"
        />
        <Card
            src="https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720"
            category="Vampire"
            title="The Vampire Diaries"
            link="https://www.netflix.com/in/title/70143860"
        />
        <Card
            src="https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720"
            category="Vampire"
            title="The Vampire Diaries"
            link="https://www.netflix.com/in/title/70143860"
        />
    </>,
    document.getElementById("root")
);
*/

//INDEX.JS CODE ==> 2 ==> SDATA CODE DOWN
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './component/Landing';
import Sdata from './component/Sdata';
import Card from './component/Challenge5';



ReactDOM.render(
    <>
        <Card
            src={Sdata[0].src}
            category={Sdata[0].category}
            title={Sdata[0].title}
            link={Sdata[0].link}
        />

        <Card
            src={Sdata[1].src}
            category={Sdata[1].category}
            title={Sdata[1].title}
            link={Sdata[1].link}
        />

        <Card
            src={Sdata[2].src}
            category={Sdata[2].category}
            title={Sdata[2].title}
            link={Sdata[2].link}
        />

        <Card
            src={Sdata[3].src}
            category={Sdata[3].category}
            title={Sdata[3].title}
            link={Sdata[3].link}
        />

        <Card
            src={Sdata[4].src}
            category={Sdata[4].category}
            title={Sdata[4].title}
            link={Sdata[4].link}
        />
    </>,
    document.getElementById("root")
);
*/

// INDEX.JS CODE ==> 3 ==> Sdata CODE DOWN
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './component/Landing';
import Sdata from './component/Sdata';
import Card from './component/Challenge5';

function ncard(val)
{
    return (
        <Card
        src = {val.src}
        category = {val.category}
        title = {val.title}
        link = {val.link}
        />
    )
}

ReactDOM.render(
    <>
        {Sdata.map((val)=>{
           return (
            <Card
            src = {val.src}
            category = {val.category}
            title = {val.title}
            link = {val.link}
            />
        );
        })}
    </>,
    document.getElementById("root")
);
*/


//  SDATA CODE 
/*
const sdata = [
    {
        key : "Netflix",
        src:"https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720",
        category:"Vampire",
        title:"The Vampire Diaries",
        link:"https://www.netflix.com/in/title/70143860"
    },
    {
        key : "Amazone",
        src:"https://asianwiki.com/images/f/fa/Tomorrow_Korean_Drama-p1.jpg",
        category:"Drama",
        title:"The Tomorrow",
        link:"https://www.netflix.com/in/title/81503460?source=35"
    },
    {
        key : "Netflix",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7o68XDKTVSQCT3uyZk6Q3XCjdL77C2Sn0luoKq865x4ZzFVcXT_xVhQ9Dxgzx6CITsxA&usqp=CAU",
        category:"History",
        title:"The Last Kingdom",
        link:"https://www.netflix.com/in/title/80074249?source=35"
    },
    {
        key : "Amazone",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaDq-YSvjZJj8ssFEinu3cXCVnLhR9PV7nMRl0u1Zy8Xr_tjPkXiq_NT0o2-03r_zb6E&usqp=CAU",
        category:"Space",
        title:"The Silent Sea",
        link:"https://www.netflix.com/in/title/81098012?source=35   "
    },
    {
        key : "Netflix",
        src:"https://m.media-amazon.com/images/M/MV5BNGUyOGFjYjEtYjU3YS00MzA3LTlmZjctMzQ2NDE1ZWM1YjdjXkEyXkFqcGdeQXVyNDE1OTM1NTE@._V1_.jpg",
        category:"Romance",
        title:"Yeh Kaali Kaali Ankhein",
        link:"https://www.netflix.com/in/title/81098012?source=35"
    }
]
export default sdata;
*/

//IF WANT SHOW ONLY AMAZONE VIDEO NOT NETFLIX OR VICE VERSA INDEX.JS CODE
/*
::::::::::CODE ==> 01
import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './component/Sdata';
import Card from './component/Challenge5';

const a = "Amazone";

ReactDOM.render(
    <>
        <h1 className='heading text-4xl'>Top 5 Netflix WebSeries</h1>
        {Sdata.map((val) => {
            if (val.key == a) {
                return (
                    <Card
                        src={val.src}
                        category={val.category}
                        title={val.title}
                        link={val.link}
                    />
                )
            }
        })}
    </>,
    document.getElementById("root")
);

::::::::::CODE ==> 02
import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './component/Sdata';
import Card from './component/Netflix';

function ncard(val) {
    if (val.key == "Netflix") {
        return (
            <Card
                src={val.src}
                category={val.category}
                title={val.title}
                link={val.link}
            />
        )
    }
}


ReactDOM.render(
    <>
        <h1 className='heading text-4xl'>Top 5 Netflix WebSeries</h1>
        {Sdata.map((val) => {
            return (
                ncard(val)
            );
        })}
    </>,
    document.getElementById("root")
);
*/