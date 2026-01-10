import { useState  } from "react";
interface props{
    items:string[];
    heading:string;
    currentcities :(item:string)=>void;
};
function ListGroup({items,heading,currentcities}:props){
    const [selectedIndex,SetselectedIndex] = useState(-1);
    return(
        <>
            <h3>List Groups</h3>
            { items.length === 0 && <p>No Item Found</p> }
            <ul className="list-group">
                { items.map((item, index)=> (<li key={item} className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={()=> { SetselectedIndex(index),currentcities(item)}}>{item}</li>)) }
            </ul>
        </>
    );
}

export default ListGroup