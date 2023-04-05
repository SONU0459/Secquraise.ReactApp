import React from 'react';

function Details() {
  return (
    <div className='detail-div'> 

    <div className='detail-des'>

         <div>
            <h2>EV000TZ</h2>
            <h3>Person Dectected</h3>
         </div>
         <div className='table-det'>

            <div className='check-d'>
                <div><span>Name</span></div>
                <div className='mr'><span  >:Neha</span></div>

            </div>
            
            <div className='check-d'>
                <div><span>Location</span></div>
                <div className='mr'><span >:Delhi</span></div>

            </div>
            
            <div className='check-d'>
                <div><span>Date</span></div>
                <div className='mr'><span  >:08/10/2002</span></div>

            </div>

            
            <div className='check-d'>
                <div><span>Time</span></div>
                <div className='mr'><span  >:13:13:15</span></div>

            </div>
            
          
            
            
         </div>
         <div>
            <p>Description:</p>  
            <p>Neha detected at delhi on 08 april 2023</p>
         </div>

    </div>
    
    <div  className='detail-img'>
        <div><h1>Female</h1></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlHxKzP_-Od84W18FoAZEVrSTS_JYzozPwI0tSvRw&s" alt="" /></div>
     </div>

      
    </div>
  );
}

export default Details;
