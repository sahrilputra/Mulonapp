import React from 'react'
import { User } from '@nextui-org/react'


const mulonImage = "/mulon.png";
export const MulonProfiles = () => {
    return (
        <User
            className=' font-medium m-0 text-default-900 -mb-4 whitespace-nowrap'
            name="Mulon"
            description="Smart Waste Management"
            avatarProps={{
                src: { mulonImage }
            }}
        />
    )
}
