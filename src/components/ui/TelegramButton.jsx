import { Button as NextButton } from '@nextui-org/react';
import {MainButton} from "@vkruglikov/react-telegram-web-app";

const TelegramButton = ({onClick, text, disabled = false}) => {

    const telegram = process.env.REACT_APP_TELEGRAM_PWA

    return (
        <>
            { telegram && <MainButton onClick={onClick} text={text} disabled={disabled} progress={disabled}/>}
            { !telegram && <NextButton onClick={onClick} isLoading={disabled} color="primary">{text}</NextButton>}
        </>
        )

};

export default TelegramButton;