import { Outlet } from 'react-router-dom';

import './App.scss';
import { Footer } from './components/Footer/Footer';
import { TopBar } from './components/TopBar/TopBar';



export const App = () => {


  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};
