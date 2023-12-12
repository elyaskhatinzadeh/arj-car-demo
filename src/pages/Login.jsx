import React, {useState} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import Input from "../components/ui/Input";
import {EnvelopeIcon, KeyIcon} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import {useAuth} from "../providers/AuthProvider";

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {login} = useAuth()

    const onSubmit = () => {
        if (username !== "admin" && password !== "admin"){
            toast.error("نام کاربری یا کلمه عبور صحیح نمی باشد")
        }

        else {
            toast.success("ورود به حساب کاربری با موفقیت انجام شد")
            login({user: "ادمین"}, 1235900)
        }
    }
    
    return (
        <div className="pt-24 max-w-md mx-auto">
            <Card className="flex gap-4 py-4">
                <CardHeader>
                    <h1 className="text-center text-2xl">ورود به پنل دمو</h1>
                </CardHeader>
                <CardBody className="flex gap-3">
                    <Input
                        autoFocus
                        endContent={
                            <EnvelopeIcon className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="نام کاربری"
                        variant="bordered"
                        value={username}
                        onValueChange={(value) => setUsername(value)}
                    />
                    <Input
                        endContent={
                            <KeyIcon className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="کلمه عبور"
                        type="password"
                        variant="bordered"
                        value={password}
                        onValueChange={(value) => setPassword(value)}
                    />
                </CardBody>
                <CardFooter>
                    <Button fullWidth color="primary" onPress={onSubmit}>
                        ورود
                    </Button>
                </CardFooter>
            </Card>
        </div>

    );
};

export default Login;
