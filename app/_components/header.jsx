"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex-l">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/avatar_pixel.png" alt="avatar"/>
          <AvatarFallback>Prithvi J</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-l text-center">
        <span className="text-lg">Welcome</span>
      </div>
      <div className="flex-1 flex justify-end">
        <Button 
          variant="outline" 
          className="bg-[#C4B3A3] hover:bg-[#B3A292] text-black border-0"
        >
          Hire Me
        </Button>
      </div>
    </header>
  )
}
