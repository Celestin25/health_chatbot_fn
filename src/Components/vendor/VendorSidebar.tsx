import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import HomeButton from "../Homepage/homebutton";

const VendorSidebar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const navbarLink = [
    {
      label: "Dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.34"
            d="M10 15V12.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.39076 2.34988L2.61575 6.97488C1.96575 7.49155 1.54908 8.58318 1.69075 9.39984L2.79908 16.0332C2.99908 17.2165 4.13241 18.1748 5.33241 18.1748H14.6658C15.8574 18.1748 16.9991 17.2082 17.1991 16.0332L18.3074 9.39984C18.4408 8.58318 18.0241 7.49155 17.3824 6.97488L11.6074 2.35822C10.7158 1.64155 9.27409 1.64155 8.39076 2.34988Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/vendor",
    },
    {
      label: "My Products",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2.91699 15V5.83332C2.91699 2.49999 3.75033 1.66666 7.08366 1.66666H12.917C16.2503 1.66666 17.0837 2.49999 17.0837 5.83332V14.1667C17.0837 14.2833 17.0837 14.4 17.0753 14.5167"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M6.66699 5.83334H13.3337"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M6.66699 8.75H10.8337"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/vendor/my-products",
    },
    // {
    //     label: "Chat",
    //     icon: <IoChatbubblesOutline color='white' size={22} />

    //     ,
    //     url: "/chat"
    // },
    // {
    //     label: "Analytics",
    //     icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M7.63411 9.05832C7.55078 9.04999 7.45078 9.04999 7.35911 9.05832C5.37578 8.99166 3.80078 7.36666 3.80078 5.36666C3.80078 3.32499 5.45078 1.66666 7.50078 1.66666C9.54241 1.66666 11.2007 3.32499 11.2007 5.36666C11.1924 7.36666 9.61741 8.99166 7.63411 9.05832Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    //     <path opacity="0.4" d="M13.6747 3.33334C15.2914 3.33334 16.5914 4.64168 16.5914 6.25001C16.5914 7.82501 15.3414 9.10834 13.7831 9.16668C13.7164 9.15834 13.6414 9.15834 13.5664 9.16668" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    //     <path d="M3.46758 12.1333C1.45091 13.4833 1.45091 15.6833 3.46758 17.025C5.75924 18.5583 9.51758 18.5583 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1333C9.52591 10.6083 5.76758 10.6083 3.46758 12.1333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    //     <path opacity="0.4" d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3583 16.9165 12.3833C16.4582 12.0333 15.8999 11.8 15.3082 11.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    //     </svg>

    //     ,
    //     url: "/vendor/analytics"
    // },
  ];
  return (
    <div className="flex flex-col gap-[20px] py-[20px] w-full px-[30px] h-screen bg-primary">
      <a href='/'>
                < HomeButton />

            </a>

      <div className="flex flex-col gap-[20px]">
        {navbarLink.map((item, index) => {
          return (
            <a
              href={item.url}
              key={index}
              className={` ${
                pathName === item.url ? "bg-secondary" : ""
              } rounded-[12px] p-2 flex flex-row gap-[10px] items-center`}
            >
              <div>{item.icon}</div>
              <span className=" text-white font-[600]">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default VendorSidebar;
