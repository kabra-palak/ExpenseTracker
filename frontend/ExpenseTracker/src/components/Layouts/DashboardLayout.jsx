import React from 'react'
import { useContext } from 'react'
import { UserContext} from "../../context/userContext";
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext)
  return (
    <div className='flex flex-col h-screen'>
        <Navbar activeMenu={activeMenu}/>

            {user && (
                <div className="flex flex-1 overflow-hidden">
                    <div className="max-[1080px]:hidden">
                        <SideMenu activeMenu={activeMenu} />
                    </div>
                    <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
                </div>
            )}
    </div>
  );
};

export default DashboardLayout