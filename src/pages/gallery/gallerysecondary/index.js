import React, { useState,Component } from 'react';
import { Link } from 'gatsby';
import '../../../assets/styles/gallery.css';
const secondaryGalleryCard = [{
    year:'2017',
    img : `url('https://source.unsplash.com/random/')`
},
{
    year:'2018',
    img : `url('https://source.unsplash.com/random/)`
},
{
    year:'2019',
    img : `url('https://source.unsplash.com/random/')`
},
{
    year:'2020',
    img : `url('https://source.unsplash.com/random/')`
},
{
    year:'2021',
    img : `url('https://source.unsplash.com/random/')`
}]



export default class GallerySecondary extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            title : props.location.search.slice(6),
            data : []

        };
    }
    
    SecondaryComponent = secondaryGalleryCard.map((card)=>{

        return (
            
            <div className="gallery-panel" style={{ backgroundImage: card.img }}>
                <h3><Link to = {`/gallery/imagecontainer/?name=${card.year}`}> {card.year}</Link></h3>
            </div>
        )
    })
    render() {
        return (
            <div className= "gallery-color-scheme">
                <h1>{this.state.title}</h1>
            <div className="container-int">
                
                <div className="container">
                    {this.SecondaryComponent}
                </div>
            </div>
            </div>
        )
    }
}