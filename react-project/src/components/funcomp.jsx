// eslint-disable-next-line no-unused-vars
import React from "react";

const user={
    'name':"Mobile",
    ' feature':'Latest',
    'imageUrl':"https://st1.techlusive.in/wp-content/uploads/2024/04/Realme-12x-5G-Rs-11999-1.jpg?impolicy=Medium_Widthonly&w=640",
    imageSize:'20%',

};
function New1(){
    const handleClick1 = () => {
        alert('Button clicked!');
      };
      const handleClick2 = (name) => {
        alert(`Hello, ${name}!`);
      };
      
    return(
        <>
        <h1>{user.name}</h1>
        <h2>{user.feature}</h2>
        <img className='class1' src={user.imageUrl} alt={'Photo of '+ user.name} style={{width: user.imageSize,
          height: user.imageSize}}/><br></br>


        <button onClick={handleClick1}>Click Me</button> &nbsp;
        <button onClick={() => handleClick2('Arjun')}>Click here</button> 
       

        </>
    );

}
 
export default New1;