import { useNavigate } from "react-router-dom";
import {BackButton} from "@vkruglikov/react-telegram-web-app";
import PageLoading from "./PageLoading";

function PageLayout({children, title= null, back= true, loading = false, ...restProps}) {

    const telegram = process.env.REACT_APP_TELEGRAM_PWA
    const navigate = useNavigate();

    if (loading)
        return <PageLoading />

    return (
        <div {...restProps}>
            { telegram && back && <BackButton onClick={() => navigate(-1)} />}
            {children}
        </div>
    )
}

export default PageLayout;