import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {useEffect, useState} from "react";
import useApi from "./useApi";
import {rendition} from "./i18n";
import {useNavigate} from "react-router-dom";

const useConfirm = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const {loading,success, fetchData} = useApi()
    const [url, setUrl] = useState("")
    const [method, setMethod] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if(success){
            onClose()
            navigate(-1)
        }
    }, [success]);



    const confirmMethod = ({url, back= true, method='delete'}) => {
        setUrl(url)
        setMethod(method)
        onOpen()
    }

    const onConfirm = () => {
        fetchData(url, "POST", {
            _method: method
        })
    }

    const ConfirmModal = ({title=null, body=null}) => {
          return (
              <Modal
                  backdrop="blur"
                  placement="center"
                  size="xs"
                  isOpen={isOpen}
                  onClose={onClose}
              >
                  <ModalContent>
                      {(onClose) => (
                          <>
                              <ModalHeader className="flex flex-col gap-1">{title ?? rendition("confirmationDeleteTitle")}</ModalHeader>
                              <ModalBody>
                                  <p>{body ?? rendition("confirmationDeleteBody")}</p>
                              </ModalBody>
                              <ModalFooter>
                                  <Button color="danger" variant="light" onPress={onClose}>
                                      {rendition("cancel")}
                                  </Button>
                                  <Button isLoading={loading} color="primary" onPress={onConfirm}>
                                      {rendition("yesDelete")}
                                  </Button>
                              </ModalFooter>
                          </>
                      )}
                  </ModalContent>
              </Modal>
          )
    }



    return { ConfirmModal, confirmMethod, isOpen };
};

export default useConfirm;