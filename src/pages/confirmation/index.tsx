import ConfirmationLogo from '@/components/ConfirmationLogo';
import Inner from '@/components/Layout/Inner';
import PoweredBySection from '@/components/PoweredBySection';
import UpcomingEvents from '@/components/UpcomingEvents';
import React from 'react'

const ConfirmationPage = () => {
    return (
        <Inner>
        <div
            className="h-full w-full"
            style={{
                backgroundBlendMode: "darken",
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                background: "linear-gradient(172.31deg, #1B1722 3.96%, #362C4A 65.48%)"

            }}
        >
            <ConfirmationLogo />
            <UpcomingEvents />
            <PoweredBySection/>
        </div>
        </Inner>
    )
}

export default ConfirmationPage;