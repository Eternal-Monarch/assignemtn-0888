import { faUserXmark as userDelete } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SideCart = ({ cartData, handleSelect, handleClearAll }) => {
  let totalCost = 0;



//the for loop
  for (const data of cartData) {
    totalCost += data.price;

  }

  
//the for loop

  return (
    
    <div className="p-4 md:sticky md:top-0">


      <div style={{ border: '1px solid blue', borderRadius: '12px', display: 'inline-block', margin: '0 auto', textAlign: 'center', right: '100px',padding: '100px'}}>
        
  
        {cartData.length > 0 ? <p className="text-2xl font-bold text-center mb-08">Spent time on read: {totalCost}min</p> : ''}
</div>


      <h1 className="text-2xl font-bold text-center mb-8">Bookmarked Blogs: {cartData.length}</h1>
     
      {cartData.map((data, index) => (
        <div key={index} className="flex align-middle gap-2 mb-2">
          <p>{index + 1}.</p>
          <img className="w-[32px] h-[32px] rounded-full" src={data.picture} alt="" />
          <p>{data.name} ({data.job}):</p>
          <p>${data.price}</p>
          <p><FontAwesomeIcon onClick={() => handleSelect(data.id)} icon={userDelete} /></p>
        </div>
      ))}
      <div className="mt-12">
        {cartData.length > 0 ? <button onClick={() => handleClearAll()} type="button" className="w-full btn btn-xs rounded-md">Clear All</button> : ''}
      </div>
    </div>
  );
};

export default SideCart;
