import React from 'react'
import DashboardLayout from '../../ui/DashboardLayout'

export default function dashboard({ children }) {
    return (
        <>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </>
    )
}
