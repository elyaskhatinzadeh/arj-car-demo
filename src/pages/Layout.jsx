import { Outlet, Link } from "react-router-dom";
import {Providers} from "../Providers";
import AuthenticateLayout from "./AuthenticateLayout";

const Layout = () => {
    return (
        <Providers>
            <AuthenticateLayout>
                <Outlet />
            </AuthenticateLayout>
        </Providers>
    )
};

export default Layout;