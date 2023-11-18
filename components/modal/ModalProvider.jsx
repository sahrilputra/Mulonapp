import React, { createContext, useContext, useState } from "react";


const ModalProvider = ({ children }) => {
    const [isEditOpen, setEditOpen] = useState(false);
    const [isModal2Open, setModal2Open] = useState(false);

    const toggleEditModal = () => {
        setEditOpen(!isEditOpen);
    };

    const toggleModal2 = () => {
        setModal2Open(!isModal2Open);
    };
    return (
        <>
            <div>
                {children({
                    isEditOpen,
                    toggleEditModal,
                    isModal2Open,
                    toggleModal2,
                })}
            </div>
        </>
    )
}  
