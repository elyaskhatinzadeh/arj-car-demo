import {useEffect} from "react";
import apiClient from "../services/api";
import {useAuth} from "../providers/AuthProvider";

function AuthenticateLayout({children}) {

    const {authenticated, user, login, logout} = useAuth()

    useEffect(() => {
        if (!authenticated){
            apiClient
                .post("/login", {
                    query: "query_id=AAFUFHUJAAAAAFQUdQlhOwbA&user=%7B%22id%22%3A158667860%2C%22first_name%22%3A%22Elyas%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22elyasKTZ%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1700560081&hash=a469dc3ca6d2bba27c4b578ce91853d8dd4a222bb235dfc230219990cee02932"
                })
                .then(({data}) => {
                    console.log(data.data)
                    login(data.data.user, data.data.token)
                })
                .catch(({message}) => console.log(message))
        }
    }, []);


    return (
        <>
            {children}
        </>
    );
}

export default AuthenticateLayout;
