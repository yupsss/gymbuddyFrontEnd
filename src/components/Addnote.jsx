import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Addnote = (props) => {

    const [Name,setName] = useState("");
    const [Weight, setWeight] = useState("");
    const [Reps, setReps] = useState("");

    function handleOnchange(event)
    {
        if(event.target.name === "excercise")
        setName(event.target.value);

        else if(event.target.name === "weight")
        setWeight(event.target.value);

        else
        setReps(event.target.value);

    }

    const handleOnclick = (event) =>
    {
        event.preventDefault();

        const newNote = {"title" : Name , "reps" : Reps , "load" : Weight};
        setName("");
        setReps("");
        setWeight("");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newNote)
        };

        const  funct = async() =>{
        const response = await fetch('http://localhost:4000/api/workouts', requestOptions);
        console.log(response);
        props.func();
        }
        funct();
    }

    return (  


        <div className="inputForm">
                
                <h1> Enter Data</h1>
                <TextField id="outlined-basic"  margin='normal' label="Exercise Name" variant="outlined"  type="text" onChange={handleOnchange} name = "excercise"  placeholder="bench press" value={Name}/>
                {/* <input type="text" onChange={handleOnchange} name="excercise" placeholder="Excercise name" value={Name}/> */}

                <TextField id="outlined-basic" margin='normal' label="Weight" variant="outlined" type="number" onChange={handleOnchange} name="weight"  placeholder="Weight" value={Weight}/>

                <TextField id="outlined-basic" margin='normal' label="No of Reps" variant="outlined" type="number" onChange={handleOnchange} name="reps"  placeholder="No of reps" value={Reps}/>
                
                <div style={{marginTop : "20px"}} className="btn"><Button style = {{background : "black", width : "100%" }} onClick={handleOnclick} variant="contained">add excersise</Button></div>
    
        </div>
    );
}
 
export default Addnote;