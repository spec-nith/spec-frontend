import React from 'react';


function spec(props){
    return(<div className="p-20 bg-orange-200">
    <div className="bg-white rounded-lg shadow-2xl md:flex">
        <img src={props.imgsrc}/>
        <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">{props.name}</h2>
            <p className="text-orange-700 h-48">
                {props.title}
                <h3>{props.batch}</h3>
                <a href={props.link}>Links</a>
            </p>
        </div>
    </div>
</div>)
}
export default spec;