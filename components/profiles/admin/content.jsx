'use client'

import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Tab, Tabs } from '@nextui-org/react'
import AdminHistory from './history'
import AdminSettings from './settings'
const AdminContent = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex flex-col w-full">
                        <Tabs variant='underlined'>
                            <Tab title="History">
                                <AdminHistory className="w-full" />
                            </Tab>
                            <Tab title="Settings">
                                <AdminSettings className="w-full" />
                            </Tab>
                        </Tabs>
                    </div>
                </CardHeader>
            </Card>
        </>
    )
}

export default AdminContent;