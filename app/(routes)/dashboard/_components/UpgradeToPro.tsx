'use client'
import React from "react";
import Image from "next/image";
import {Button} from '@/components/ui/button';
import Link from "next/link";

function UpgradeToPro() {
    return (
        <div className="flex items-center flex-col p-5 border-4 rounded-2xl mt-8">
            <Image src={'/logo.png'} alt='pro_logo' width={70} height={70}/>
            <h2 className="text-3xl font-game">Upgrade to Pro</h2>
            <p className='font-game text-gray-500 text-xl text-center'>Join Pro Membership and Get All course access</p>
            <Link href={'/pricing'}>
            <Button variant={'pixel'} className='font-game mt-4 'size={'lg'} >Upgrade </Button>
            </Link>
        </div>
    )
}

export default UpgradeToPro;