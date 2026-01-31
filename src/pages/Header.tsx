// In Header.tsx
import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import BugdgetIcon from "../assets/icons/budgeting.svg";
import Calendar from "../assets/icons/calendar.svg";
import SearchActivity from "../assets/icons/search.svg";
import PayoutCenter from "../assets/icons/payout.svg";
import MarketPlace from "../assets/icons/shop.svg";
import CalendarModal from "../components/Calendar";
import BudgetCard from "../components/BudgetCard"; // Import BudgetCard

const Header: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showBudget, setShowBudget] = useState(false); // Add budget state

  const handleIconClicked = (label: string) => {
    console.log("Icon clicked:", label);
    if (label === "Calendar") {
      setShowCalendar(true);
    } else if (label === "Budgeting") {
      setShowBudget(true); // Show budget modal
    }
  };

  const handleProfileClicked = () => {
    console.log("Profile clicked");
  };

  const icons = [
    { Icon: BugdgetIcon, label: "Budgeting" },
    { Icon: Calendar, label: "Calendar" },
    { Icon: SearchActivity, label: "Search Activity" },
    { Icon: PayoutCenter, label: "Payout Center" },
    { Icon: MarketPlace, label: "Marketplace" },
  ];

  const profileName = "Dylan Frank";
  const profileEmail = "dylanfran96@gmail.com";

  return (
    <>
      <header className="flex items-center justify-between bg-[#105B48] gap-4 px-18 py-4 w-full transition-all duration-300">
        <div>
          <img src={logo} alt="" />
        </div>

        <section className="flex items-center gap-4 md:gap-6">
          {/* Icons with hover tooltips */}
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setActiveTooltip(label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <button
                onClick={() => handleIconClicked(label)}
                className=""
                aria-label={label}
              >
                <img src={Icon} alt={label} className="" />
              </button>

              {/* Icon Tooltip */}
              {activeTooltip === label && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                  <div className="bg-[#18181B] text-white text-[10px] font-normal leading-[150%] tracking-[3%] px-3 py-2 rounded-lg whitespace-nowrap">
                    {label}
                    {/* Tooltip arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Profile with hover tooltip */}
          <div
            className="relative"
            onMouseEnter={() => setShowProfileTooltip(true)}
            onMouseLeave={() => setShowProfileTooltip(false)}
          >
            <button
              onClick={handleProfileClicked}
              className="bg-white w-10 h-10 rounded-full text-[#105B48] text-[20px] md:text-[23px] font-semibold flex items-center justify-center hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-[#105B48] transition-all duration-200"
              aria-label="User Profile"
            >
              D
            </button>

            {/* Profile Tooltip */}
            {showProfileTooltip && (
              <div className="absolute top-full right-0 mt-2 z-50">
                <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 min-w-[220px]">
                  {/* Profile info */}
                  <div className="flex flex-col gap-3 mb-3">
                    <p className="font-semibold text-sm md:text-base">
                      {profileName}
                    </p>
                    <p className="text-xs text-gray-300 truncate max-w-[160px]">
                      {profileEmail}
                    </p>
                  </div>
                </div>

                {/* Tooltip arrow */}
                <div className="absolute -top-1 right-4 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-gray-900"></div>
              </div>
            )}
          </div>
        </section>
      </header>

      {/* Calendar Modal */}
      {showCalendar && <CalendarModal onClose={() => setShowCalendar(false)} />}

      {/* Budget Modal */}
      {showBudget && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative">
            <button
              onClick={() => setShowBudget(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close budget"
            >
              ✕
            </button>
            <BudgetCard />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
