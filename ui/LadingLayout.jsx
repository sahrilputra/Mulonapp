"use client"
import React from 'react'
import TestNavbars from '../components/navbars/Navbar';
import FootersIndex from '../components/footers/Footer';
export default function LandingLayout({ children }) {
    return (
        <>
            <TestNavbars />
            {children}
            <FootersIndex />
        </>
    )
}
