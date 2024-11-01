import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "@/components/shared";

import { Button } from "@/components/ui";
import { LoaderPinwheel, User } from "lucide-react";
interface HeaderProps {
  className?: string;
}
export const Header: React.FC<HeaderProps> = ({ className }) => {
  const menuList = ["Персонажи", "Гендзюцу", "Оружие", "Призыв"];

  return (
    <header
      className={cn(
        className,
        "sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-lg dark:bg-red-500"
      )}
    >
      <Container className="flex justify-between items-center py-8">
        <div className="logo relative font-black flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity duration-300 active:opacity-90 group">
          <LoaderPinwheel
            className="group-hover:rotate-[180deg] transition-transform duration-300 mt-0.5 text-red-500"
            size={28}
          />

          <span className="text-2xl">NarutoFan</span>
        </div>

        <div className="right-side flex items-center">
          <ul className="menu flex gap-4 items-center mr-10">
            {menuList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:opacity-90 transition-opacity opacity-50 duration-300 active:opacity-95"
                >
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
          <Button
            variant="outline"
            className="mt-0.5 flex items-center leading-4"
          >
            <User />
            <span>Войти</span>
          </Button>
        </div>
      </Container>
    </header>
  );
};
