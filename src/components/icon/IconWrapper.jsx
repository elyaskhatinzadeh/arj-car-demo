import {cn} from "@nextui-org/react";

export const IconWrapper = ({children, className}) => (
    <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7 text-gray-600 dark:text-gray-100")}>
        {children}
    </div>
);
