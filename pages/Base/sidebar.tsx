import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineSnippets } from 'react-icons/ai';

interface SidebarItem {
  name: string;
  href: string;
  icon: any;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Home', href: '/main/homepage', icon: AiOutlineHome },
  { name: 'Option 1', href: '/main/draft', icon: AiOutlineFundProjectionScreen },
  { name: 'Option 2', href: '/main/draft', icon: AiOutlineSnippets },
];

const Sidebar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={`w-[${nav ? '90' : '240'}px] ml-[15px] my-[10px] md:block hidden duration-300`}>
      <nav className='bg-[#fff] h-[calc(100vh-10px)] rounded-2xl overflow-hidden'>
        <ul className={`duration-300 mx-[10px] my-[15px] flex flex-1 ${nav ? 'justify-center px-1' : 'px-2'} text-gray-800`}>
          <li className="flex items-center justify-center rounded-full bg-[#f5f5f5] w-[40px] h-[40px]">
            <div onClick={toggleNav} className="cursor-pointer">
              <AiOutlineMenu size={24} />
            </div>
          </li>
          <li className={`leading-[40px] text-center flex-1 ${nav ? 'hidden' : 'inline-block '}`}>
            <div className='text-[20px] font-bold'>LOGO</div>
          </li>
        </ul>
        <ul className={`duration-300 mx-[10px] h-[40vh] flex-1 ${nav ? 'flex flex-col p-1' : 'flex flex-col p-2'} text-gray-800`}>
          {sidebarItems.map(({ name, href, icon: Icon }, index) => (
            <li key={index} className={`${nav ? 'block text-center text-[12px] my-[2px]' : 'flex my-[2px] min-w-[180px]'} `}>
              <Link
                className={`sidebar__link flex-1 ${router.pathname === href ? 'sidebar__link--active bg-[#f5f5f5] rounded' : ''}`}
                href={href}
              >
                <div className={`text-[16px] px-[12px] py-[8px] rounded block leading-normal hover:text-white hover:bg-black duration-300 ${nav ? 'block text-center text-[12px]' : 'flex'}`}>
                  <Icon className={`${nav ? 'm-auto w-[24px] h-[24px] flex-1' : 'mr-[10px] w-[26px] h-[26px]'} `} />
                  <span className={`${nav ? 'text-[11px]' : 'text-[14px] leading-[30px]'}`}>{name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;