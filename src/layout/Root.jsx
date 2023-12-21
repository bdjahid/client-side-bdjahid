import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header/Header";
import Footer from "../pages/Shared/Footer/Footers";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;