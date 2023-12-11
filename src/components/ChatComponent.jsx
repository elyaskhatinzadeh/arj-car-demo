import React, {useRef} from 'react';
import {Card, CardBody, CardHeader, CardFooter, Avatar, Tooltip, Button, cn, Input} from "@nextui-org/react";
import {ChatIcon} from "./icon/ChatIcon";
import {PaperAriPlaneIcon} from "./icon/PaperAriPlaneIcon";

const ChatComponent = ({user, messages, setMessages, input, setInput, onSubmit}) => {

    const [open, setOpen] = React.useState(false)
    const [selectedUsers, setSelectedUsers] = React.useState([])
    const inputLength = input.trim().length
    const divRef = useRef(null);

    const scrollToBottom = () => {
        if (divRef.current) {
            divRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const submitHandler = (e) => {
        onSubmit(e)
        scrollToBottom()
    }
    return (
        <div className="relative px-6">
            <div className="flex flex-row items-center">
                <div className="flex items-center space-x-4">
                    <Avatar src={user.profile} />
                    <div>
                        <p className="text-sm font-medium leading-none">{user.first_name + ' ' + user.last_name}</p>
                        <p className="text-sm text-muted-foreground">{user.username}</p>
                    </div>
                </div>
            </div>
            <div className="mb-20">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                message.role === "user"
                                    ? "ml-auto bg-primary text-primary-foreground"
                                    : "bg-muted"
                            )}
                        >
                            {message.content}
                        </div>
                    ))}

                    <span ref={divRef} />
                </div>
            </div>
            <div className="inset-x-0 bottom-0 fixed px-6 py-4 bg-white dark:bg-gray-700">
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className="flex w-full items-center space-x-2">
                    <Input
                        id="message"
                        placeholder="Type your message..."
                        className="flex-1"
                        autoComplete="off"
                        size="sm"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <Button type="submit" isIconOnly  disabled={inputLength === 0}>
                        <PaperAriPlaneIcon className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ChatComponent;
