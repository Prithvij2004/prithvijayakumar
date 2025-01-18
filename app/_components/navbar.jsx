"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center pt-10 lg:mx-72">
      <div className="flex-1">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/avatar_pixel.png" alt="avatar" />
          <AvatarFallback>Prithvi J</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center flex-1">
        <span className="text-lg font-bold">Welcome</span>
      </div>
      <div className="flex-1 flex justify-end">
        <a
          href="mailto:prithvijayakumardev@gmail.com"
          className="font-bold underline text-[#8d7054] hover:text-[#684423]"
        >
          email me
        </a>
      </div>
    </div>
  );
}
