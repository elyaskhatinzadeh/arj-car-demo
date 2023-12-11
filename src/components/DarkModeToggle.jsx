import { Button} from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import {SunIcon, MoonIcon} from "@heroicons/react/24/outline"

function DarkModeToggle() {

    const darkMode = useDarkMode();

    const toggle = () => {
        darkMode.value ? darkMode.disable() : darkMode.enable()
    }

    return (
        <>
            <Button isIconOnly variant="light" size="sm" onPress={toggle} >
                {darkMode.value ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" /> }
            </Button>
        </>
    )
}


export default DarkModeToggle;