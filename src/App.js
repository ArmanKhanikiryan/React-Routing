import {Route, Router, Routes} from "react-router-dom";
import AllUsers from "./card/allusers";
import EachUser from "./card/eachUser";


function App() {


    return (
        <>
            <Routes>
                <Route path='/allUsers' element={<AllUsers/>}/>
                <Route path='/allUsers/:id' element={<EachUser/>}/>
            </Routes>
        </>
    );
}

export default App;