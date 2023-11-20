import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, Button } from '@nextui-org/react'
export const DeleteModal = ({ isOpen, onOpenChange, user }) => {

    const [users, setUsers] = useState([]);

    const onClose = () => {
        onOpenChange(false);
    };
    console.log("User Id : ", user._id);

    const handleDeleteClick = async (user) => {
        try {
            const response = await fetch(`/api/admin/register`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error('Error deleting user:', error);
        } finally {
            // Close the delete modal, whether the deletion is successful or not
            onClose();
        }
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
                                <Button color="danger" onPress={() => handleDeleteClick(user._id)}>
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
