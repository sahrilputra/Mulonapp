"use client"
import React from 'react'
import DashboardLayout from '../../ui/DashboardLayout'
import { Analytics } from '@vercel/analytics/react';
export default function dashboard({ children }) {
    return (
        <>
            <DashboardLayout>
                <div className="mt-4 p-3">
                    <Analytics />
                    {children}
                </div>
            </DashboardLayout>
        </>
    )
}
