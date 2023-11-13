"use client"
import React from 'react'
import DashboardLayout from '../../ui/DashboardLayout'

export default function dashboard({ children }) {
    return (
        <>
            <DashboardLayout>
                <div className="mt-4 p-3">
                {children}
                </div>
            </DashboardLayout>
        </>
    )
}
