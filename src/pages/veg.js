import React from 'react';
  
//import puran from '../images/puranpoli.jpg';
import veg from '../images/vegmushroom.jpg'
const VEG = () => {
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
      <h1 style={{marginTop:'-111px',marginLeft:'-48px',color:'royalblue'}}>Kadai Mushroom</h1>
   
        <div style={{width:'75px',height:'250px',marginLeft:'-95px',marginTop:'221px'}}>
            <img src={veg} alt="" />
        </div>
        <div style={{marginTop:'563px',fontWeight:'bold'}}>
        Kadai Mushroom is a flavorful Indian dish where Mushroom & Bell Pepper are cooked in a spicy onion tomato curry.
        <hr></hr>
        <a href='https://youtu.be/W6Bxjzqf1n8'>Click here to watch reciepe</a>
        </div>

    
     


    </div>
    
    

  );
};
  
export default VEG;