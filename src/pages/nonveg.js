
import React from 'react';
 
//import puran from '../images/puranpoli.jpg'; 

import fishnonveg from '../images/fishnonveg.jpg';

const Nonveg = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: '',
        alignItems: 'Center',
        height: '100px',
        width: '300px',
        padding:'50px',
     
        border: '1px solid blue',
        marginLeft:'405px',
        marginTop:'39px',
        backgroundColor:'black'
        
      }}>
      <h1 style={{marginTop:'-111px',marginLeft:'-48px',color:'royalblue'}}>Malabar FishBiryani</h1>
   
        <div style={{width:'75px',height:'250px',marginLeft:'-95px',marginTop:'221px'}}>
            <img src={fishnonveg} alt="" />
        </div>
        <div style={{marginTop:'540px',fontWeight:'bold'}}>
        Puran poli is a popular Maharashtrian recipe made during Ganesh Chaturthi or Diwali or
         any other festive occasion. During Ganesh Chaturthi 
        festival, Modak, puran poli and Nariyal ladoo are usually prepared in Maharashtra.
        <hr></hr>
        <a href='https://youtu.be/zcBZ9VHq7KE'>Click here to watch reciepe</a>
        </div>

    



    </div>
  );
};
  
export default Nonveg;