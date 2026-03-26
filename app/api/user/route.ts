import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { usersTable } from "@/config/schema";



export async function POST(request: NextRequest) {

    const user=await currentUser();

    //if user already exist ?
    const users = await db.select().from(usersTable)
    //@ts-ignore
    .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    //if Not the create new user record
    if (users?.length <= 0) {
        const newUser={
            name:user?.firstName ?? '',
            email:user?.primaryEmailAddress?.emailAddress ?? '',
            age:0,
        }

        const result=await db.insert(usersTable)
        .values(newUser).returning();
        return NextResponse.json(result[0])
    }
    
    //Return user info
    return NextResponse.json(users[0]);   
}