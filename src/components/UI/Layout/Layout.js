import React from 'react';
import Navbar from 'components/UI/Navbar/Navbar';
import Footer from 'components/UI/Footer/Footer';

const layout=(props)=>{
    return(
    <React.Fragment>
     <Navbar/>
     {props.children}
     <Footer/>        
    </React.Fragment>)
};
export default layout;