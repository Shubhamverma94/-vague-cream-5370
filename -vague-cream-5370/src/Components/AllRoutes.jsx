import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup  from "./Signup";
// import { HomeDetails } from "../HomeDetails/HomeDetails";

export const AllRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
             {/* <Route path="/details/:id" element={<HomeDetails/>}></Route> */}
        </Routes>
    )
}