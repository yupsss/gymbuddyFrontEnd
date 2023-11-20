import { useEffect, useState } from "react";
import Addnote from "./Addnote";
import Note from "./Note";
import Grid from '@mui/material/Grid';



const Content = () => {

    const [Data, setData] = useState([]);
    const [flag, setFlag] = useState();

useEffect(() => {

      const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/api/workouts`);
        const newData = await response.json();
        console.log(newData);
        setData(newData);
    };
  
    fetchData();
  },[flag]);

    function rerender()
    {
        if(flag) setFlag(false);
        else
        setFlag(true);
    }
    return ( 
        <div className="content">
          
            <div className="addContent"><Addnote func={rerender}/></div>  
            <div className="displayContent">
                <Grid container spacing={2}>
                {Data.map(obj => <Note key={obj._id} note={obj} func={rerender}/>)} 
                </Grid> 
            </div>
        </div>
     );
}
 
export default Content;