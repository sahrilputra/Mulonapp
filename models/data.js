import React from "react";

const columns = [
    { name: "NAME", uid: "name" },
    { name: "TEAM", uid: "team" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
];

const users = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        name: "Rian",
        role: "COO",
        team: "Operational",
        status: "active",
        age: "80",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "rian@example.com",
    },
    {
        id: 3,
        name: "Chika",
        role: "HRD",
        team: "Financial",
        status: "active",
        age: "50",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "chika@example.com",
    },
    {
        id: 4,
        name: "Stepanus",
        role: "CTO",
        team: "Operational",
        status: "active",
        age: "12",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "stepanus@example.com",
    },
    {
        id: 5,
        name: "Vivin",
        role: "Marketing Manager",
        team: "Marketing",
        status: "active",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "vivin@example.com",
    },
];

export { columns, users };