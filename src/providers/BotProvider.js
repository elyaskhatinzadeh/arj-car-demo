// Example using React Context
import { createContext, useContext, useState } from 'react';

const BotContext = createContext();

export const BotProvider = ({ children }) => {
    const [botId, setBotId] = useState(null);

    return (
        <BotContext.Provider value={{ botId, setBotId }}>
            {children}
        </BotContext.Provider>
    );
};

export const useBot = () => useContext(BotContext);
