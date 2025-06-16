import { ProgressProvider } from '@/context';
import React from 'react';
import CompareHeader from './_components/CompareHeader';
import PathnameWatcher from './_components/PathNameWatcher';
import RightProgressTracker from './_components/RightProgressTracker';
import Header from '../../_components/Header';
import Footer from '../../_components/Footer';
import LeftProgressTracker from './_components/LeftProgressTracker';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <div className="site-container">
            {/* <Header /> */}


            <ProgressProvider>
                <div className='mx-4! md:mx-10! lg:mx-32! cmxl:mx-72! mt-7!'>
                    <CompareHeader />
                    <div className='flex! flex-col-reverse! md:gap-28! md:flex-row!'>
                        <div className='flex! flex-col! flex-[0.7]! pb-10!'>
                            {children}
                        </div>
                        
                        <RightProgressTracker />
                    </div>
                </div>
                <PathnameWatcher />
            </ProgressProvider>

          



            {/* <Footer /> */}

        </div>
    )


    // return (
    //     <ProgressProvider>
    //         <div className='mx-4 md:mx-10 lg:mx-32 cmxl:mx-72 mt-7'>
    //             <CompareHeader />
    //             <div className='flex flex-col-reverse md:gap-28 md:flex-row'>
    //                 <div className='flex flex-col flex-[0.7] pb-10'>
    //                     {children}
    //                 </div>
    //                 {/* <LeftProgressTracker /> */}
    //                 <RightProgressTracker />
    //             </div>
    //         </div>
    //         <PathnameWatcher />
    //     </ProgressProvider>
    // )
}

export default layout