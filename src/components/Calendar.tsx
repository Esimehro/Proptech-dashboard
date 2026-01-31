import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CalendarProps {
  onClose: () => void;
}

export default function Calendar({ onClose }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 16));
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  const getDaysInMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(new Date(year, month - 1));
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isPrevMonth: true,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true, isPrevMonth: false });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isPrevMonth: false,
        isNextMonth: true,
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const isSelectedDate = (dayObj: any) => {
    return dayObj.isCurrentMonth && dayObj.day === 16;
  };

  const days = generateCalendarDays();

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black z-[9998]
          transition-opacity duration-300 ease-in-out
          ${isClosing ? "opacity-0" : "opacity-50"}
        `}
        onClick={handleClose}
      />

      {/* Calendar Modal */}
      <div
        className="fixed inset-0 flex items-start justify-end p-4 z-[9999]"
        onClick={handleClose}
      >
        <div
          className={`
            w-full max-w-sm bg-[#1a1a1a] text-white rounded-lg shadow-2xl overflow-hidden mt-4
            transition-all duration-300 ease-in-out
            ${isClosing ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}
            sm:mt-16 sm:mr-4
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-gray-800 rounded-md transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-lg font-medium">Calendar</span>
            </div>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-gray-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-800 rounded-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-base font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-800 rounded-md transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-0 px-4 pb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-[10px] text-gray-500 font-medium py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-0 px-4 pb-6">
            {days.map((dayObj, index) => {
              const isSelected = isSelectedDate(dayObj);
              const showDecLabel =
                !dayObj.isCurrentMonth &&
                !dayObj.isPrevMonth &&
                dayObj.day === 1;

              return (
                <div
                  key={index}
                  className="aspect-square flex items-center justify-center relative p-1"
                >
                  <div
                    className={`
                      w-10 h-10 flex items-center justify-center rounded-full text-sm
                      transition-all cursor-pointer
                      ${
                        isSelected
                          ? "bg-blue-600 text-white font-medium"
                          : dayObj.isCurrentMonth
                            ? "text-white hover:bg-gray-800"
                            : "text-gray-600"
                      }
                    `}
                  >
                    {dayObj.day}
                  </div>
                  {showDecLabel && (
                    <div className="absolute bottom-0 text-[9px] text-gray-500 font-medium">
                      DEC 1
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
