import Image from "next/image";
import { Button } from "@/components/ui/button"
// components live under the app folder, so use relative imports from this file
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
     

      {/* Hero section */}
      <Hero />
 
    </div>
  
  );
}
