// ARRAY OF JSX
/*
ReactDOM.render([
  <h1><b>Nitin saini</b></h1>,
  <p><i>PulitSaini</i></p>,
  <h3>Nidhi saini</h3>
],
  document.getElementById("root"));

ReactDOM.render(<div>
  <h1><b>Nitin saini came</b></h1>
  <p><i>PulitSaini</i></p>
  <h3>Nidhi saini</h3>
</div>,
  document.getElementById("root"));
*/


// REACT FRAGMENT  ==> <>---</>
/*
ReactDOM.render(
  <React.Fragment>
    <h1><b>Nitin saini came fra</b></h1>
    <p><i>PulitSaini</i></p>
    <h3>Nidhi saini</h3>
  </React.Fragment>,
  document.getElementById("root"));
*/


// USING VARIABLE
/*
const name = "Nitin Saini";
ReactDOM.render([
  <>
    <h1><b>My name is {name} ... </b></h1>,
    <p><i>PulitSaini {3548+8755} .. </i></p>,
    <h3>Nidhi saini</h3>
  </>
],
  document.getElementById("root"));
*/


// ALTERNATE
/*
var react = require("react");
var reactdom = require("react-dom");
reactdom.render(<h1>Nitin saini</h1>,document.getElementById("root"));

JSX ==> javascript extenstion (<h1>Nitin saini</h1>)
*/

/*
var ni = document.createElement("h1");
ni.innerHTML = "Nitin dasasas";
document.getElementById("root").appendChild(ni);
*/
