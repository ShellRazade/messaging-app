import React from 'react'
import { Popover } from '@headlessui/react'

const Userpop = () => {
    return (
        <div>Userpop
            <div className='md:pl-80 md:pt-20'>
                <Popover className="relative">
                    <Popover.Button>Solutions</Popover.Button>

                    <Popover.Panel className="absolute z-10 bg-slate-300 rounded-md">
                        {/* <div className="grid grid-cols-2">
                            <a href="/analytics">Analytics</a>
                            <a href="/engagement">Engagement</a>
                            <a href="/security">Security</a>
                            <a href="/integrations">Integrations</a>
                        </div> */}

                        <div className='h-auto w-full sm:w-56 p-4 sm:p-5 pb-4'>
                            <span className='w-20 h-20 p-2 rounded-full border-2 bg-white block text-center mb-4'>
                                avatar
                            </span>

                            <p className='text-lg sm:text-xl py-3 sm:py-5'>User name</p>
                            <p className='text-sm sm:text-base'>info@gmail.com</p>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    )
}

export default Userpop