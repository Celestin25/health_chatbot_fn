import React, { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import Logout from '../../services/Logout'
import HomeButton from '../Homepage/homebutton'

const Sidebar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("001");
  const Navlinks = [
    {
      id: "001",
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
            d="M8.39076 2.34992L2.61575 6.97491C1.96575 7.49158 1.54908 8.58321 1.69075 9.39987L2.79908 16.0332C2.99908 17.2165 4.13241 18.1749 5.33241 18.1749H14.6658C15.8574 18.1749 16.9991 17.2082 17.1991 16.0332L18.3074 9.39987C18.4408 8.58321 18.0241 7.49158 17.3824 6.97491L11.6074 2.35825C10.7158 1.64158 9.27409 1.64158 8.39076 2.34992Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin",
    },
    {
      id: "002",
      label: "Users",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63411 9.05829C7.55078 9.04996 7.45078 9.04996 7.35911 9.05829C5.37578 8.99163 3.80078 7.36663 3.80078 5.36663C3.80078 3.32496 5.45078 1.66663 7.50078 1.66663C9.54241 1.66663 11.2007 3.32496 11.2007 5.36663C11.1924 7.36663 9.61741 8.99163 7.63411 9.05829Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M13.6747 3.33337C15.2914 3.33337 16.5914 4.64171 16.5914 6.25004C16.5914 7.82504 15.3414 9.10837 13.7831 9.16671C13.7164 9.15837 13.6414 9.15837 13.5664 9.16671"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.46758 12.1334C1.45091 13.4834 1.45091 15.6834 3.46758 17.025C5.75924 18.5584 9.51758 18.5584 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1334C9.52591 10.6084 5.76758 10.6084 3.46758 12.1334Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3584 16.9165 12.3834C16.4582 12.0334 15.8999 11.8 15.3082 11.6667"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin/users",
    },
    {
      id: "003",
      label: "Pharmicies",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63411 9.05829C7.55078 9.04996 7.45078 9.04996 7.35911 9.05829C5.37578 8.99163 3.80078 7.36663 3.80078 5.36663C3.80078 3.32496 5.45078 1.66663 7.50078 1.66663C9.54241 1.66663 11.2007 3.32496 11.2007 5.36663C11.1924 7.36663 9.61741 8.99163 7.63411 9.05829Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M13.6747 3.33337C15.2914 3.33337 16.5914 4.64171 16.5914 6.25004C16.5914 7.82504 15.3414 9.10837 13.7831 9.16671C13.7164 9.15837 13.6414 9.15837 13.5664 9.16671"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.46758 12.1334C1.45091 13.4834 1.45091 15.6834 3.46758 17.025C5.75924 18.5584 9.51758 18.5584 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1334C9.52591 10.6084 5.76758 10.6084 3.46758 12.1334Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3584 16.9165 12.3834C16.4582 12.0334 15.8999 11.8 15.3082 11.6667"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin/sellers",
    },
    {
      id: "004",
      label: "Requests",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63411 9.05829C7.55078 9.04996 7.45078 9.04996 7.35911 9.05829C5.37578 8.99163 3.80078 7.36663 3.80078 5.36663C3.80078 3.32496 5.45078 1.66663 7.50078 1.66663C9.54241 1.66663 11.2007 3.32496 11.2007 5.36663C11.1924 7.36663 9.61741 8.99163 7.63411 9.05829Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M13.6747 3.33337C15.2914 3.33337 16.5914 4.64171 16.5914 6.25004C16.5914 7.82504 15.3414 9.10837 13.7831 9.16671C13.7164 9.15837 13.6414 9.15837 13.5664 9.16671"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.46758 12.1334C1.45091 13.4834 1.45091 15.6834 3.46758 17.025C5.75924 18.5584 9.51758 18.5584 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1334C9.52591 10.6084 5.76758 10.6084 3.46758 12.1334Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3584 16.9165 12.3834C16.4582 12.0334 15.8999 11.8 15.3082 11.6667"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      location: "/admin/requests",
    },
    // {
    //   id: "005",
    //   label: "Analytics",
    //   icon: (
    //     <svg
    //       width="20"
    //       height="20"
    //       viewBox="0 0 20 20"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         opacity="0.4"
    //         d="M2.91699 15V5.83332C2.91699 2.49999 3.75033 1.66666 7.08366 1.66666H12.917C16.2503 1.66666 17.0837 2.49999 17.0837 5.83332V14.1667C17.0837 14.2833 17.0837 14.4 17.0753 14.5167"
    //         stroke="white"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       />
    //       <path
    //         d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z"
    //         stroke="white"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       />
    //       <path
    //         opacity="0.4"
    //         d="M6.66699 5.83334H13.3337"
    //         stroke="white"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       />
    //       <path
    //         opacity="0.4"
    //         d="M6.66699 8.75H10.8337"
    //         stroke="white"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       />
    //     </svg>
    //   ),

    //   location: "/admin/analytics",
    // },
    {
      id: "005",
      label: "Settings",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50033 18.3333H12.5003C16.667 18.3333 18.3337 16.6667 18.3337 12.5V7.5C18.3337 3.33334 16.667 1.66667 12.5003 1.66667H7.50033C3.33366 1.66667 1.66699 3.33334 1.66699 7.5V12.5C1.66699 16.6667 3.33366 18.3333 7.50033 18.3333Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g opacity="0.4">
            <path
              d="M12.9756 15.4163V12.1663"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9756 6.20833V4.58333"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9743 10.5418C14.171 10.5418 15.141 9.57175 15.141 8.37517C15.141 7.17855 14.171 6.2085 12.9743 6.2085C11.7777 6.2085 10.8076 7.17855 10.8076 8.37517C10.8076 9.57175 11.7777 10.5418 12.9743 10.5418Z"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.02441 15.4165V13.7915"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.02441 7.83333V4.58333"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.02507 13.7913C8.22168 13.7913 9.19175 12.8213 9.19175 11.6247C9.19175 10.4281 8.22168 9.458 7.02507 9.458C5.82845 9.458 4.8584 10.4281 4.8584 11.6247C4.8584 12.8213 5.82845 13.7913 7.02507 13.7913Z"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),

      location: "/admin/settings",
    },
  ];

    const handleNavigate = (data: any) => {
        setActive(data.id);
        navigate(data.location);
    };
    const handelLogout = Logout()



  return (
    <div className="hidden lg:flex fixed flex-col gap-[40px] bg-primary p-4 lg:w-[22%] h-full xl:w-[18%]">
       <a href='/'>
                < HomeButton />

            </a>
      <div className="flex flex-col lg:gap[50px] gap-[20px]">
        {Navlinks.map((item, index) => {
          return (
            <div
              onClick={() => handleNavigate(item)}
              key={index}
              className={` cursor-pointer flex flex-row gap-[10px] items-center p-2 rounded-[12px] ${
                pathName === item.location ? "bg-secondary" : ""
              }`}
            >
              {item.icon}
              <span className="text-white text-[16px] font-[500] font-outfit">
                {item.label}
              </span>
            </div>
          );
        })}
        <div
          onClick={handelLogout}
          className="cursor-pointer flex flex-row gap-[10px] items-center p-2 rounded-[12px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33301 9.99996C3.33301 10.221 3.42081 10.4329 3.57709 10.5892C3.73337 10.7455 3.94533 10.8333 4.16634 10.8333H10.4913L8.57467 12.7416C8.49657 12.8191 8.43457 12.9113 8.39227 13.0128C8.34996 13.1144 8.32818 13.2233 8.32818 13.3333C8.32818 13.4433 8.34996 13.5522 8.39227 13.6538C8.43457 13.7553 8.49657 13.8475 8.57467 13.925C8.65214 14.0031 8.74431 14.0651 8.84586 14.1074C8.94741 14.1497 9.05633 14.1715 9.16634 14.1715C9.27635 14.1715 9.38527 14.1497 9.48682 14.1074C9.58837 14.0651 9.68054 14.0031 9.75801 13.925L13.0913 10.5916C13.1672 10.5124 13.2267 10.4189 13.2663 10.3166C13.3497 10.1137 13.3497 9.88618 13.2663 9.68329C13.2267 9.581 13.1672 9.48755 13.0913 9.40829L9.75801 6.07496C9.68031 5.99726 9.58807 5.93563 9.48655 5.89358C9.38503 5.85153 9.27622 5.82988 9.16634 5.82988C9.05646 5.82988 8.94765 5.85153 8.84613 5.89358C8.74461 5.93563 8.65237 5.99726 8.57467 6.07496C8.49698 6.15266 8.43534 6.2449 8.39329 6.34642C8.35124 6.44794 8.3296 6.55674 8.3296 6.66663C8.3296 6.77651 8.35124 6.88532 8.39329 6.98683C8.43534 7.08835 8.49698 7.18059 8.57467 7.25829L10.4913 9.16663H4.16634C3.94533 9.16663 3.73337 9.25442 3.57709 9.4107C3.42081 9.56698 3.33301 9.77895 3.33301 9.99996ZM14.1663 1.66663H5.83301C5.16997 1.66663 4.53408 1.93002 4.06524 2.39886C3.5964 2.8677 3.33301 3.50358 3.33301 4.16663V6.66663C3.33301 6.88764 3.42081 7.0996 3.57709 7.25588C3.73337 7.41216 3.94533 7.49996 4.16634 7.49996C4.38735 7.49996 4.59932 7.41216 4.7556 7.25588C4.91188 7.0996 4.99967 6.88764 4.99967 6.66663V4.16663C4.99967 3.94561 5.08747 3.73365 5.24375 3.57737C5.40003 3.42109 5.61199 3.33329 5.83301 3.33329H14.1663C14.3874 3.33329 14.5993 3.42109 14.7556 3.57737C14.9119 3.73365 14.9997 3.94561 14.9997 4.16663V15.8333C14.9997 16.0543 14.9119 16.2663 14.7556 16.4225C14.5993 16.5788 14.3874 16.6666 14.1663 16.6666H5.83301C5.61199 16.6666 5.40003 16.5788 5.24375 16.4225C5.08747 16.2663 4.99967 16.0543 4.99967 15.8333V13.3333C4.99967 13.1123 4.91188 12.9003 4.7556 12.744C4.59932 12.5878 4.38735 12.5 4.16634 12.5C3.94533 12.5 3.73337 12.5878 3.57709 12.744C3.42081 12.9003 3.33301 13.1123 3.33301 13.3333V15.8333C3.33301 16.4963 3.5964 17.1322 4.06524 17.6011C4.53408 18.0699 5.16997 18.3333 5.83301 18.3333H14.1663C14.8294 18.3333 15.4653 18.0699 15.9341 17.6011C16.4029 17.1322 16.6663 16.4963 16.6663 15.8333V4.16663C16.6663 3.50358 16.4029 2.8677 15.9341 2.39886C15.4653 1.93002 14.8294 1.66663 14.1663 1.66663Z"
              fill="white"
            />
          </svg>

                    <span className='text-white text-[16px] font-[500] font-outfit'>Sign Out</span>

                </div>
            </div>
        </div>
    )
}

export default Sidebar