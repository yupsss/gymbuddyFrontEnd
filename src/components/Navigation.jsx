import Button from '@mui/material/Button';

const Navigation = () => {
    return ( 
        <>
        <div className="nav">
            <h1>you'r fitness buddy</h1>
            <div className="links">
                <Button style = {{background : "black"}} variant="contained">Login</Button>
            </div>
        </div>

        </>
     );
}
 
export default Navigation;