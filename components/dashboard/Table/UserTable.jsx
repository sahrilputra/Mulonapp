"use client"
import React, { useState, useEffect, useCallback } from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Button,
    Skeleton, 
} from "@nextui-org/react";
import { EditIcon, DeleteIcon, EyeIcon } from '../icons/Icons';
// import { DeleteModal } from '../../modal/DeleteModal';
import { AdminDeleteModals } from '../../modal/admin/DeleteModals';

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const columns = [
    { name: "NAME", uid: "name", label: "Name" },
    { name: "EMAIL", uid: "email", label: "Email" },
    { name: "TEAM", uid: "team", label: "Team" },
    { name: "CREATE", uid: "createdAt", label: "Create At" },
    { name: "Action", uid: "actions", label: "Actions" },
]

export const UserTable = () => {

    const [selectedUser, setSelectedUser] = useState(null); // Track the selected user for deletion
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('/api/admin/list');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            setLoading(true);
            fetchData();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [fetchData]);


    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const renderCell = React.useCallback((item, columnKey) => {
        const cellValue = users[columnKey];

        if (loading) {
            // Display a skeleton loading indicator while data is being fetched
            return <Skeleton width="80%" height="1rem" />;
        }

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: item.avatar }}
                        description={item.username}
                        name={item.firstName}
                    >
                    </User>
                );
            case "team":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{item.team}</p>
                    </div>
                );
            case "email":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm lowercase">{item.email}</p>
                    </div>
                );
            case "createdAt":
                return (
                    <Chip className="capitalize" color={statusColorMap[item.createdAt]} size="sm" variant="flat">
                        {item.createdAt}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => handleDeleteClick(item)}>
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div >
                );
            default:
                return item[columnKey];
        }
    }, [users, handleDeleteClick]);

    return (
        <>
            <Table aria-label="User Admin Column">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {selectedUser && (
                <AdminDeleteModals
                    isOpen={isDeleteModalOpen}
                    onOpenChange={closeDeleteModal}
                    user={selectedUser}
                />
            )}
        </>
    );
}

