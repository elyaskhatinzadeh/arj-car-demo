import { Outlet, Link } from "react-router-dom";
import {Providers} from "../Providers";
import AuthenticateLayout from "./AuthenticateLayout";

const Layout = () => {
    return (
        <Providers>
            <>
                <Outlet />
            </>
        </Providers>
    )
};

export default Layout;