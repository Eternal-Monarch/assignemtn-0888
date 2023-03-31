import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-white text-black">
      <div className="w-[90%] mx-auto">
        <div className="flex-1">
          <h3 className="normal-case text-xl font-bold" style={{position: 'absolute', width: '306px', height: '64px', left: '80px', top: '-005px', fontFamily: "'Exo 2'", fontStyle: 'normal', fontWeight: 1600, fontSize: '40px', lineHeight: '160%', color: '#111111'}}>
            Knowledge cafe
          </h3>
        </div>
        <div className="flex-none">
          <ul className="flex justify-between gap-4">
            <li><button type="button">Point Table</button></li>
            <li><button type="button">Statistics</button></li>
            <li><button type="button">Schedule</button></li>
            <li><button type="button">Log In </button></li>
            <img src="https://cdn-icons-png.flaticon.com/512/905/905809.png?w=826&t=st=1680221214~exp=1680221814~hmac=d7a9a737a4c0b99b15c9044a109b61aeb85d543a41adeb66819b8509c7d504f9" alt="User" style={{  width: '30px', height: '30px', borderRadius: '50%', marginTop: '2px' }} />
            <img src="/images/pie-chart.png" alt="" />
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
