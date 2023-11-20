// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    
   const {title , reps, load} = props.note;

   function handleDelete(event)
   {
    event.preventDefault();

    const asfunct = async() =>{
        await fetch(`http://localhost:4000/api/workouts/${props.note._id}`,{method:'DELETE'});
        props.func();
    }
    asfunct();
   }

    return ( 
        <div className="note">
            <h1>{title}</h1>
            <h2>{load}</h2>
            <h2>{reps}</h2>
            <div><DeleteIcon onClick={handleDelete} /></div>
            {/* <div><Button size="small" variant="contained">UPDATE</Button> <Button size="small"  onClick={handleDelete} variant="contained">DELETE</Button></div> */}
        </div>
     );
}
 
export default Note;