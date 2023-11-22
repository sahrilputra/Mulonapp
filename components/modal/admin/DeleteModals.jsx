import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, Button, Spinner, Chip } from '@nextui-org/react'
export const AdminDeleteModals = ({ isOpen, onOpenChange, user }) => {

    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const onClose = () => {
        onOpenChange(false);
    };
    console.log("User Id : ", user._id);

    const handleDeleteClick = async (userId) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/admin/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setResponse('Berhasil Menghapus Pengguna');
            } else {
                setResponse(`Gagal Menghapus User: ${response.statusText}`);
            }
        } catch (error) {
            setResponse(`Error saat menghapus user : ${error.message}`);
        } finally {
            setLoading(false);
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
                            <ModalHeader className="flex flex-col gap-1">Delete {user.firstName}</ModalHeader>
                            <ModalBody>
                                {loading && <Spinner color="success" />}
                                {!loading && !response && (
                                    <>
                                        <p>Are You Sure Delete This User {user.username} ?</p>
                                        <p>this User will never be able to sign in and be used again.</p>
                                    </>
                                )}
                                {response && <p color={response.includes('successfully') ? 'success' : 'error'}>{response}</p>}
                            </ModalBody>
                            <ModalFooter>
                                {!loading && !response && (
                                    <>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="danger" onPress={() => handleDeleteClick(user._id)}>
                                            Delete
                                        </Button>
                                    </>
                                )}
                            </ModalFooter>
                        </>
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}
