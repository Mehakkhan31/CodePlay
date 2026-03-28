"use client";
import { Divide } from 'lucide-react';
import React,  {useState} from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';



function EnrollCourses() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    return (
        <div className='mt-8'>
            <h2 className='text-3xl font-game'>Your Enrolled Courses</h2>
            {enrolledCourses?.length==0?
        <div className='flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900 '>
            <Image src={'/books.png'} alt='book' width={90} height={90}/>
            <h2 className='font-game text-lg'>You Don't Have Any Enrolled Courses</h2>
            <Button variant={'pixel'} size={'lg'}>Browser All Courses</Button>
        </div>  
        :<div>
           List 
        </div>  
        }

        </div>
    );
}

export default EnrollCourses;