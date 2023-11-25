"use client"
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Skeleton } from "@nextui-org/react";
import { EditIcon, DeleteIcon, EyeIcon } from '../icons/Icons';

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const columns = [
    { name: "NAME", uid: "name", label: "Name" },
    { name: "USERNAME", uid: "username", label: "username" },
    { name: "EMAIL", uid: "email", label: "Email" },
    { name: "PHONE", uid: "phone", label: "Phone" },
    { name: "ADDRESS", uid: "address", label: "Address" },
    { name: "CREATE", uid: "createdAt", label: "Create At" },
    { name: "HISTORY", uid: "history", label: "history" },
    { name: "Action", uid: "actions", label: "Actions" },
]

export const CustomerTable = () => {


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('/api/user/list');
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


    const renderCell = useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        if (loading) {
            // Display a skeleton loading indicator while data is being fetched
            return <Skeleton width="80%" height="1rem" />;
        }
        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "none", src: user.avatar }}
                        description={user.name}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "userName":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm  text-default-400">{user.username}</p>
                    </div>
                );
            case "phoneNumber":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm  text-default-400">{user.phoneNumber}</p>
                    </div>
                );
            case "email":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm text-default-400">{user.email}</p>
                    </div>
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
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, [loading]);

    return (
        <Table aria-label="Example table with custom cells">
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
    );
}
