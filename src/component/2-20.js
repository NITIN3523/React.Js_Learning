// TEMPLATE LITERALS
/*
const fname = "Nitin";
const lname = "saini";
ReactDOM.render([
  <>
    <h1><b>{`my name is ${fname} ${lname} .... tm`}</b></h1>,
    <p><i>PulitSaini {3548+8755} .. </i></p>,
    <h3>Nidhi saini</h3>
  </>
],
  document.getElementById("root"));
*/


//JSX ATTRIBUTES IMAGE
/*
const img1 = "https://picsum.photos/200/200";
const img2 = "https://picsum.photos/200/200";
const img3 = "https://picsum.photos/200/200";
const link = "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14";
ReactDOM.render(
  <>
    <h1 contentEditable="true" className="heading">My name is Nitin PulitSaini</h1>
    <img src={img1} alt="random image" />
    <img src={img2} alt="random image" />
    <a href={link} target="-random">
      <img src={img3} alt="random image" />
    </a>
  </>,
  document.getElementById('root')

  .heading{
    text-shadow : 0px 3px 8px orange
    0px = horizontal shadow
    3px = vertical shadow
    8px = blurness
    text-transform = capitalize;
  }
  for font family from google font 
  1. copy link and pste that link in index.html file
  2. copu style code and paste to css file to style (font-family: 'Square Peg', cursive)
);
*/


// CSS Styling
/*
const img1 = "https://picsum.photos/200/200";
const img2 = "https://picsum.photos/200/200";
const img3 = "https://picsum.photos/200/200";
const link = "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14";
const heading = {
  color:'blue',
  textTransform:'capitalize',
  textAlign:'center'
};
ReactDOM.render(
  <>
    <h1 contentEditable="true" className="heading" style={heading}>My name is Nitin PulitSaini</h1>
    <p style={{color:'blue',textTransform:'capitalize',textAlign:'center'}}>Pulkit saini</p>
    <img src={img1} alt="random image" />
    <img src={img2} alt="random image" />
    <a href={link} target="-random">
      <img src={img3} alt="random image" />
    </a>
  </>,
  document.getElementById('root')
);
*/


// IMPORT AND EXPORT 
/*
const name = "Nitin Saini";
const uid = "20BCS1440";
function family(){
  let name = "Suman Saini";
  return name;
}
function learnig(){
  let re = "react.js";
  return re;
}
export default name;
export {uid,family,learnig};
//INDEX.JS CODE
import Chal,{uid,family,learnig} from './component/2-20';

ReactDOM.render(
  <>
  <ol>
    <li>{Chal}</li>
    <li>{family()}</li>
    <li>{learni()}</li>
    <li>{uid}</li>
  </ol>
  </> ,
  document.getElementById('root')
);
import * as ni from './component/2-20';

ReactDOM.render(
  <>
  <ol>
    <li>{ni.default}</li>
    <li>{ni.family()}</li>
    <li>{ni.learnig()}</li>
    <li>{ni.uid}</li>
  </ol>
  </> ,
  document.getElementById('root')
);
*/
