import { Home, Search, Puzzle, CalendarCheck, ClipboardEdit, User, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const navTabs = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      notification: false
    },
    {
      name: "Search",
      href: "/search",
      icon: Search,
      notification: false
    },
    {
      name: "My Organizations",
      href: "/myorgs",
      icon: Puzzle,
      notification: false
    },
    {
      name: "Events",
      href: "/events",
      icon: CalendarCheck,
      notification: true
    },
    {
      name: "Forms",
      href: "/forms",
      icon: ClipboardEdit,
      notification: true
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
      notification: true
    }
  ];

  return (
    <div className="bg-white shadow-lg h-screen w-20 md:w-64 flex flex-col border-r border-gray-200">
      {/* Header Section */}
      <div className="flex items-center justify-center py-6 border-b border-gray-200">
        <div className="bg-black rounded-full w-10 h-10 mr-3"></div>
        <h1 className="hidden md:block text-2xl font-bold text-gray-800">OrgPortal</h1>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-grow py-6">
        <ul className="space-y-2 px-4">
          {navTabs.map((tab, index) => (
            <li key={index}>
              <Link 
                href={tab.href} 
                className="flex gap-2 items-center p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 group relative"
              >
                <tab.icon 
                  size={24} 
                  className="text-gray-600 mr-3 mx-auto md:mx-0"
                />
                <span className="hidden md:inline text-gray-700  font-medium">
                  {tab.name}
                </span>
                {tab.notification && (
                  <div className="ml-auto bg-red-500 text-white rounded-full w-2 h-2 animate-pulse absolute right-5"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer Section */}
      <footer className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
          <LogOut size={20} className="mx-auto md:mr-2 md:ml-0" />
          <span className="hidden md:inline">Sign Out</span>
        </button>
        <p className="hidden md:block text-center text-xs text-gray-500 mt-4">
          Built with ❤️ by ACM
        </p>
      </footer>
    </div>
  );
}