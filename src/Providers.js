import React, {useEffect} from 'react';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from "use-dark-mode";
import { Toaster } from 'react-hot-toast';
import {AuthProvider} from "./providers/AuthProvider";
import {BotProvider} from "./providers/BotProvider";
import i18n from "./i18n";
import {I18nextProvider} from "react-i18next";

export function Providers({ children }) {
    const darkMode = useDarkMode(false);

    return (
        <AuthProvider>
            <BotProvider>
                <NextUIProvider>
                    <I18nextProvider i18n={i18n}>
                        <Toaster/>
                        <main className={`${darkMode.value ? 'dark' : ''} text-foreground bg-background min-h-screen`}>
                            {children}
                        </main>
                    </I18nextProvider>
                </NextUIProvider>
            </BotProvider>
        </AuthProvider>

    );
}