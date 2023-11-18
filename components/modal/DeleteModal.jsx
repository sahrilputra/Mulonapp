import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, Button } from '@nextui-org/react'
export const DeleteModal = ({ isOpen, onOpenChange, user }) => {
    const onClose = () => {
        onOpenChange(false);
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <Modal
                    isOpen={isOpen}
                    placement="center"
                    onOpenChange={onOpenChange}
                >
                    <ModalContent>
                        <>
                            <ModalHeader className="flex flex-col gap-1">Delete {user.name}</ModalHeader>
                            <ModalBody>
                                <p>
                                    Are You Sure Delete This User {user.name} ?
                                </p>
                                <p>
                                    this User will never be longer to signin and be used again,
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="danger" onPress={onClose}>
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}
