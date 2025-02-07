import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import UserDashBoard from './UserDashBoard';
import AdminDashboard from './AdminDashboard';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import { Navigate, useNavigate } from 'react-router-dom';

const DashBoradLayout = () => {
    const navigate=useNavigate()
    const user = useSelector((state: RootState) => state.auth.user) as { userRole: string } | null;
    if(!user){
        navigate('/login')
    }
    // const role = user?.userRole;
    const role='admin'

    return (
        <div>
          {user?
             <div>
                <Nav />
             <div className='mt-1'>
                 {role === 'user' && <UserDashBoard />}
                 {role === 'admin' && <AdminDashboard />}
             </div>
             
             <Footer /> 
             </div>:
             <Navigate to={'/login'}></Navigate>
          }
        </div>
    );
};

export default DashBoradLayout;
