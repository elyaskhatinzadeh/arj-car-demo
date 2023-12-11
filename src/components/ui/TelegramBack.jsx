import { Button as NextButton } from '@nextui-org/react';
import {BackButton, MainButton} from "@vkruglikov/react-telegram-web-app";

const TelegramButton = ({onClick, text}) => {

    const telegram = process.env.REACT_APP_TELEGRAM_PWA

    return (
        <>
            { telegram && <BackButton onClick={onClick} />}
        </>
        )

};

export default TelegramButton;