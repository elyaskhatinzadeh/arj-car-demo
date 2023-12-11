import {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import apiClient from "../services/api";
import {rendition} from "../services/i18n"
import toast from "react-hot-toast";
import Modal from "../components/ui/Modal"

function ConfirmModal({children, method, afterSuccessHandler= null, showMessages= true}) {

    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const onConfirm = () => {
        setIsLoading(true)
        apiClient
            .post(method, {
                _method: "delete"
            })
            .then(({data}) => {
                setIsLoading(false)
                setSuccessMessage(data.message)
                showMessages && toast.success(data.message)
                if (typeof afterSuccessHandler === 'function')  afterSuccessHandler()
            })
            .catch(({message, response}) => {
                const {data} = response
                setIsLoading(false)
                setErrorMessage(data.message)
                showMessages && toast.error(data.message)
                console.log(message)
            })
    }

    return (
        <div>
            <Modal />
        </div>
    )
}

export default ConfirmModal;