import React from 'react';
import CompareHeader from '../compare/_components/CompareHeader';

function SummaryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='mx-4 md:mx-10 lg:mx-32 cmxl:mx-72 mt-7'>
            <CompareHeader />
            <div className='flex flex-col-reverse md:gap-28 md:flex-row'>
                <div className='flex flex-col flex-[0.5] pb-10'>
                    {children}
                </div>
                {/* <LeftProgressTracker /> */}
               
            </div>
        </div>
    )
}

export default SummaryLayout