"use client"
import React from 'react'

export default function DashboardLayout({ children }) {
    return (
        <>

            <div className="sidebar">
                sidebar
            </div>

            <div className="navbar">
                navbar
            </div>
            <div className="main">
                YO NIGGA!
                <main>{children}</main>
            </div>


        </>
    )
}
