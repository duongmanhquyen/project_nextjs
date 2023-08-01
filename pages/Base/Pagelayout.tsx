import React from 'react';
import Sidebar from "./sidebar";
import Nav from "../components/nav/index";
import Breadcrumb from "../components/breadcrumb/index";
import Footer from "../components/footer/index";

interface BaseLayoutProps {
  children: React.ReactNode;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    <div className="
            layout 
            bg-[url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12PJGx.img')] 
            bg-[radial-gradient(circle_at_bottom_right,#3c9add,#191452)]
            flex 
            max-w-1920 
            mx-auto">
      <><Sidebar /></>
      <main className="layout__main-content max-w-full flex-1 h-[auto] mx-[15px]">
          <div className='my-[25px]'><Nav /></div>
          <div className='mb-[30px] pb-[20px] border-b-[1px] border-[#ebebeb]'><Breadcrumb /></div>
          <div className='my-[25px]'>{children}</div>
          <div className='my-[25px]'><Footer /></div>
      </main>
    </div>
  </>
);

export default BaseLayout;