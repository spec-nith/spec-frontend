import * as React from 'react';
import BackDrop from '../Backdrop/Backdrop'; 
class Modal extends React.Component{
    // shouldComponentUpdate=(nextProps,nextState)=>{
    //          return nextProps.show!==this.props.show || nextProps.children!==this.props.children;
    // }
    render(){
    return(
    <React.Fragment>
    <BackDrop show={this.props.show} clicked={this.props.clicked}/>
    <div className={'w-screen h-screen absolute flex justify-center items-center left-0 -top-10 '+(this.props.show ? 'block':'hidden') }>
    <div className="fixed z-[500] bg-gray-300 md:w-5/12 transition-all duration-300 ease-out px-4 sm:px-8 md:p-0" style={{transform:this.props.show ? 'translateY(0)': 'translateY(-100vh)',
    opacity:this.props.show ? '1' : '0'}}>
    {this.props.children}
    </div> 
    </div>
    </React.Fragment>
    )}
}
export default Modal;