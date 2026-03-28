import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function InviteFriend() {
  return (
   <div className='flex flex-col items-center  p-4 border rounded-xl bg-zinc-900 mt-8'>
    <Image src={'/mail.png'} alt='mail' width={80} height={80}/>
    <h2 className='text-3xl font-game'>Invite Friend</h2>
    <p className='font-game'>Having Fun? Share the love with friend ! Enter an email and we will sned them a personal invite </p>
    <div className='flex gap-2 item-cennter mt-5'>
        <Input type='email' placeholder='Enter Invite Email' className='min-w-sm'/>
        <Button variant={'pixel'} className='font-game'>Send Invite</Button>
    </div>
   </div>
        
  )
}

export default InviteFriend;