import { faCircleCheck as selectRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck as selectSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const SinglePlayer = ({ singleData, handleSelect }) => {
  const { id, picture, img,tag2, name, tag, about, age, job, price } = singleData;
  return (
    <div className="card card-compact bg-base-100 border rounded-md h-[1000px]">

      <div className="flex justify-center align-middle p-0">
        <img className="h-51" src={picture} alt="" />
        <img
          className="h-[30px] w-[30px] rounded-full"
          src={img}
          alt=""
          style={{
            position: 'absolute',
            width: '40px',
            height: '30px',
            left: '15px',
            top: '662px',
            background: 'url(handsome-confident-smiling-man-with-hands-crossed-chest)',
          }}
        />
      </div>
      <div className="card-body">
        <h2
          className="card-title"
          style={{
            position: 'absolute',
            width: '93px',
            height: '38px',
            left: '60px',
            top: '655px',
            fontFamily: 'Exo 2',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '25px',
            color: 'white',
          }}
        >
          {name}
        </h2>
        <p
          className="card-title-2"
          style={{
            position: 'absolute',
            width: '250px',
            height: '38px',
            left: '60px',
            top: '695px',
            fontFamily: 'Exo 2',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13px',
            color: 'white',
          }}
        >
          Age: {age}
        </p>

        <p
          className="card-title-2"
          style={{
            position: 'absolute',
            width: '1000px',
            height: '100px',
            left: '50px',
            top: '740px',
            lineHeight: '35px',
            fontFamily: 'Exo 2',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            color: 'white',
          }}>{about}
          
          <p 
           className="card-title-5"
           style={{
             position: 'absolute',
             width: '1000px',
             height: '100px',
             left: '10px',
             top: '70px',
             lineHeight: '35px',
             fontFamily: 'Exo 2',
             fontStyle: 'normal',
             fontWeight: '700',
             fontSize: '15px',
             color: 'white',
           }}
          >#:{tag}</p>
          
          <p className="card-title-5"
           style={{
             position: 'absolute',
             width: '1000px',
             height: '100px',
             left: '200px',
             top: '70px',
             lineHeight: '35px',
             fontFamily: 'Exo 2',
             fontStyle: 'normal',
             fontWeight: '700',
             fontSize: '15px',
             color: 'white',
           }}> #:{tag2}</p>
        </p>

      </div>
      
      <div className="flex justify-around mb-4">
        {/* <p>Job: {job}</p> */}
        {/* <p>Price: ${price}</p> */}
        
        
      </div>
      <div className="card-actions">
        <button
          onClick={() => handleSelect(id)}
          type="button"
          className="w-full btn btn-xs rounded-md"
        >
  <span className="mr-2" style={{textDecoration: 'underline', fontSize: '20px', color: 'blue', fontFamily: 'Exo 2', fontStyle: 'normal', position: 'relative', left: '-425px', top: '-80px'}}>Mark As Read</span>





          {/* {singleData.selected ? (
            <FontAwesomeIcon icon={selectSolid} />
          ) : (
            <FontAwesomeIcon icon={selectRegular} />
          )} */}
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
