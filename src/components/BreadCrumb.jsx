import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'

const BreadCrumb = () => {
    return (
        <div className='main-container py-4 flex gap-2 items-end'>
            <HomeIcon className='w-5 text-cred' />
            <ChevronRightIcon className='w-4' />
            {/* <span className='leading-4'>Home page</span> */}
        </div>
    )
}

export default BreadCrumb