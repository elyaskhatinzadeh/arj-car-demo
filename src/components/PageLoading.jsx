import {Spinner} from "@nextui-org/react";
import {rendition} from "../services/i18n";

export default function PageLoading() {
    return (
        <div className="w-full h-screen text-center">
            <Spinner label={rendition("loading")} color="primary" className="mt-20" />
        </div>
    )
}