import React, { useState,Component } from 'react';

import '../../../assets/styles/gallery.css';

export default class GallerySecondary extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            title : props.location.search.slice(6),
            data : []

        };
        console.log(this.state.data);
    }
    
    SecondaryComponent = this.state.data.map((card)=>{
        return (
            
            <div className="gallery-panel" style={{ backgroundImage: card.img }}>
                <h3>{card.year}</h3>
            </div>
        )
    })
    render() {
        return (
            <div className= "gallery-color-scheme">
                <h1>{this.state.title}</h1>
            <div className="container-int">
                
                <div className="container">
                    {/* {this.state.data.length && this.SecondaryComponent} */}
                </div>
            </div>
            </div>
        )
    }
}