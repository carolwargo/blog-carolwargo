import React from "react";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/Dashboard/DashSidebar';
import DashProfile from '../components/Dashboard/DashProfile';
//import DashPosts from '../components/DashPosts';
import DashUsers from '../components/Dashboard/DashUsers';
//import DashComments from '../components/DashComments';
import DashboardComp from '../components/Dashboard/DashboardComp';


function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab');
      if (tabFromUrl) {
        setTab(tabFromUrl);
      }
    }, [location.search]);
    return (
        <div>
          <div className='d-flex flex-col flex-md-row'
          style={{minHeight:'100vh'}}> {/*<div className='min-h-screen flex flex-col md:flex-row'>*/}
      <div className='col-md-3' style={{width:'14em'}}>  {/*<div className='md:w-56'>*/}
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}
    {/* /] {tab === 'posts' && <DashPosts />}*/}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
       {/* {tab === 'comments' && <DashComments />}*/}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
        </div>
    );
    }   


export default Dashboard;
