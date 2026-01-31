import React, { useState } from "react";
import dashboardIcon from "../assets/icons/dashboard.svg";
import listingIcon from "../assets/icons/listings.svg";
import usersIcon from "../assets/icons/users.svg";
import requestIcon from "../assets/icons/request.svg";
import applicationIcon from "../assets/icons/application.svg";
import taskIcon from "../assets/icons/task.svg";
import type { NavItem } from "../types/types";

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const navItems: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: dashboardIcon },
    { id: "listings", label: "Listings", icon: listingIcon },
    { id: "users", label: "Users", icon: usersIcon },
    { id: "request", label: "Request", icon: requestIcon },
    {
      id: "applications",
      label: "Applications",
      icon: applicationIcon,
    },
    { id: "tasks", label: "Tasks", icon: taskIcon },
  ];

  return (
    <nav className="w-full bg-white border-b border-[#F4F4F5]">
      <div className="px-18 py-4 w-full">
        <div className="flex items-center justify-between">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors
                ${
                  activeTab === item.id
                    ? "text-[#176D58] font-semibold text-[14px] bg-[#176D5826] py-1.75 px-5.25 rounded-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <img src={item.icon} alt={`${item.label} icon`} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
