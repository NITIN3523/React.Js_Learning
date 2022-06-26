import Sdata from './Sdata';
import Card from './Netflix';
export default function Connect() {
    return <>
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
    </>
}