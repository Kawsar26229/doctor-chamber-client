import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="w-[1280px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>         
        </div>
    );
};

export default Main;