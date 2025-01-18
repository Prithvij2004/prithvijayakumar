"use server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Header() {
  return (
    <header className="flex flex-col sm:flew-row justify-between items-center p-6 sm:p-6 max-w-4xl mx-auto space-y-4 sm:space-y-0">
      <div className="flex-1">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/avatar_pixel.png" alt="avatar" />
          <AvatarFallback>Prithvi J</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 text-center">
        <span className="text-lg font-bold">Welcome</span>
      </div>
      <div className="flex-1 flex justify-end sm:justify-end">
        <a
          href="mailto:prithvijayakumardev@gmail.com"
          className="font-bold text-[#8d7054] underline hover:text-[#684423] whitespace-nowrap"
        >
          email me
        </a>
      </div>
    </header>
  );
}
