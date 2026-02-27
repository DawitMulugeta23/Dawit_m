import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSection } from '../features/navSlice';

const Navbar = () => {
  const active = useSelector((state) => state.nav.activeSection);
  const dispatch = useDispatch();
  const menu = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-8 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-blue-700">Portfolio</h1>
      <div className="space-x-6">
        {menu.map((item) => (
          <a 
            key={item} 
            href={`#${item}`}
            onClick={() => dispatch(setActiveSection(item))}
            className={`capitalize ${active === item ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;