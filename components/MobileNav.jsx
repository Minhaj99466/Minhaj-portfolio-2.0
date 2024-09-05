"use client"


import { usePathname } from 'next/navigation';
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className=''>
            <div className='mt-20 mb-20 text-center text-2xl'>
                <Link href='/'>
                <h1>Minhaj<span className='text-accent'>.mm</span></h1>
                </Link>
                </div>    
                   < nav className='flex flex-col gap-8 justify-center items-center' >
                {
                    links.map((link, index) => {
                        return (<Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize text-xl hover:text-accent-hover transition-all`}>{link.name} </Link>)
                    })
                }
            </nav > 
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
