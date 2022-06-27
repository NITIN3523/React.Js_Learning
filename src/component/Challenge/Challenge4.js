function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function div(a,b)
{
    return a/b;
}
function mul(a,b)
{
    return a*b;
}
export {add,mul,div,sub};

/*
import {add,mul,div,sub} from './component/Challenge4';

ReactDOM.render(
  <>
  <ol>
    <li>Addition of two Number == {add(10,2)}</li>
    <li>Subtraction of two Number == {sub(10,2)}</li>
    <li>Division of two Number == {div(10,3).toFixed(2)}</li>
    <li>Multiplication of two Number == {mul(10,2)}</li>
  </ol>
  </>,
  document.getElementById('root')
)
*/