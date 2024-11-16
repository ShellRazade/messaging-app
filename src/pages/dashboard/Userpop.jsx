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

                        <div className='h-80 w-56 p-5 pb-4 '>
                            <span className='w-28 h-28 p-5 rounded-full border-2 bg-white pt-3'>avatar</span>

                            <p className='text-xl py-5'>Name</p>
                            <p className=''>info@gmail.com</p>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    )
}

export default Userpop