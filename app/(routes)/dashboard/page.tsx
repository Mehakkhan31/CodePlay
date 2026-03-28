import React from "react";
import  WelcomeBanner  from "./_components/WelcomeBanner";    
import EnrollCourses from "./_components/EnrollCourses";
import Explore from "./_components/Explore";
import InviteFriend from "./_components/InviteFriend";
import { User } from "lucide-react";
import UserStatus from "./_components/UserStatus";
import UpgradeToPro from "./_components/UpgradeToPro";




function Dashboard() {
    return (
        <div className="p-10 md:px-20 lg:px-36 xl:px-48">
            <div className="grid grid-cols-3 gap-7">
                <div className="col-span-2">
                    <WelcomeBanner />
                    <EnrollCourses />
                    <Explore/>
                    <InviteFriend/>
                 </div>
                <div>
                    <UserStatus/>
                    <UpgradeToPro/>
                </div>
                

            </div>
        </div>
    )
}

export default Dashboard;