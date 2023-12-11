import { useState, useEffect } from "react";
import axios from "axios";
import {useAuth} from "../providers/AuthProvider";
import toast from "react-hot-toast";


const useApi = () => {
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const { token } = useAuth()
    let config = {
        baseURL: process.env.REACT_APP_API_URL,
        ...(token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
    };

    const apiClient = axios.create(config);
    const fetchData = async (url, method = "GET", body = null, schema = null) => {

        setLoading(true);
        setSuccess(false);
        setErrors({});

        if (schema) {
            const { error } = schema.validate(body, { abortEarly: false });
            if (error) {
                const validationErrors = {};
                error.details.forEach((err) => {
                    validationErrors[err.path[0]] = err.message;
                });
                console.log(validationErrors);
                setErrors(validationErrors);
                setLoading(false);
                return;
            }
        }


        try {
            const response = await apiClient({
                method,
                url,
                data: body
            });

            setData(response.data.data);
            setSuccessMessage(response.data.message);
            setLoading(false);
            setSuccess(true);
            response.data.message && toast.success(response.data.message)
        } catch ({response, message}) {
            const {data} = response
            console.log(message);
            setErrors(data.errors);
            setErrorMessage(data.message);
            setLoading(false);
            response.data.message && toast.error(response.data.message)
        }
    };

    return { data, errors, successMessage, errorMessage, loading, success, fetchData };
};

export default useApi;