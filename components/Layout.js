import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import {
  HomeIcon,
  MatchIcon,
  MessagesIcon,
  ProfileIcon,
  DatabaseIcon,
  TestIcon,
  ResourcesIcon,
  SearchIcon,
} from "./Icons";

const navigation = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Match", href: "/match", icon: <MatchIcon /> },
  { name: "Messages", href: "/messages", icon: <MessagesIcon /> },
  { name: "Profile", href: "/profile", icon: <ProfileIcon /> },
  {
    name: "Personality Database",
    href: "/personality-database",
    icon: <DatabaseIcon />,
  },
  { name: "Personality Tests", href: "/tests", icon: <TestIcon /> },
  { name: "Resources", href: "/resources", icon: <ResourcesIcon /> },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* ---- Mobile menu button ---- */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-gray-900 text-white shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* ---- Sidebar ---- */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-gray-900 text-white z-40 p-4
          transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <h1 className="text-2xl font-bold mb-6">BOO</h1>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 ${
                    router.pathname === item.href ? "bg-gray-800" : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-gray-400 text-sm mt-6">
          © 2025 Boo Enterprises, Inc.
        </div>
      </aside>

      {/* ---- Header ---- */}
      <header
        className="
    fixed top-0 left-0 right-0 z-50
    h-16 bg-gray-900
    flex items-center 
    px-4 md:px-6
    shadow-[0_0_25px_rgba(0,0,0,0.8)]
  "
      >
        {/* LEFT SECTION */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Menu */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white text-2xl md:hidden"
          >
            ☰
          </button>

          {/* Logo */}
          <span className="font-extrabold text-white text-xl">BOO</span>
        </div>

        {/* SEARCH BAR */}
        <div className="relative flex justify-center flex-1">
          <div className="relative w-full md:w-[420px]">
            {/* Glass Background */}
            <div
              className="
        absolute inset-0 rounded-full
        bg-black/70 border border-white/10
        shadow-[0_0_25px_rgba(255,255,255,0.06)]
        backdrop-blur-xl
        z-0
      "
            ></div>

            {/* Icon */}
            <SearchIcon className="text-white/60 absolute left-4 top-1/2 -translate-y-1/2 z-30" />

            {/* Input */}
            <input
              className="
        w-full h-10
        rounded-full bg-transparent
        pl-12 pr-4
        text-sm text-white placeholder-white/40
        focus:outline-none
        z-20 relative
      "
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Notification */}
        <button className="text-xl ml-[5px] mr-[5px] md:mr-[15px]">🔔</button>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          {/* Coins */}
          <div
            className="
        flex items-center space-x-1 
        bg-yellow-300/20 text-yellow-300 
        px-3 py-1 rounded-full
        border border-yellow-300/40
      "
          >
            <span className="text-lg">🪙</span>
            <span className="font-semibold">250</span>
          </div>

          {/* User */}
          <button className="flex items-center space-x-2">
            <img
              src="/avatar1.png"
              className="w-8 h-8 rounded-full border border-white/30"
            />
            <span className="hidden md:inline text-white">Baginda Isfa</span>
            <span className="hidden md:inline">▼</span>
          </button>
        </div>
      </header>

      {/* ---- MAIN CONTENT ---- */}
      <main
        className="
          pt-20
  md:ml-64 
  px-4 md:px-8
        "
      >
        {children}
      </main>
    </div>
  );
}
