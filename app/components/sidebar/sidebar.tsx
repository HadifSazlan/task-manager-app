"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import menu from "../../utils/menu.js";
import { useGlobalState } from "../../context/globalProvider";

function Sidebar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <nav
      className={"relative border-2 rounded-xl flex flex-col justify-between"}
      style={{
        width: theme.sidebarWidth,
        backgroundColor: theme.colorBg2,
        borderColor: theme.borderColor2,
      }}
    >
      <div className="profile relative m-4 py-4 px-6 font-medium flex items-center">
        <div
          className={`profile-overlay absolute top-0 left-0 w-full h-full z-0 rounded-lg duration-700 border-transparent hover:opacity-50 hover:bg-black`}
        ></div>
        <div>
          <Image
            className="relative z-10 inline-block rounded-full transition-transform hover:scale-110 duration-700"
            width={70}
            height={70}
            src="/avatar1.png"
            alt="profile picture"
          />
        </div>
        <h1 className="text-base flex flex-col leading-tight ml-4 z-10">
          <span>Monkey</span>
          <span>Luffy</span>
        </h1>
      </div>
      <ul className="nav-items text-gray-400">
        {menu.map((item) => {
          const link = item.link;

          return (
            <li
              key={item.id}
              className={`nav-item py-4 px-8 ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </nav>
  );
}

export default Sidebar;
