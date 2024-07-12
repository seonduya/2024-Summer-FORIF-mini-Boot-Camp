import React,{useState} from "react";

function FeatureButton(feature){

    const {id,text,url} = feature;

    const featuresytle ={
        
        width:'180px',
        
        borderRadius:'50px',
        padding:'15px',
        
        backgroundColor:'#FFF',
        
        fontSize:'20px',
        fontWeight:600,
        color:'#323232',
    };
    
    return(
        <div className='' style={featuresytle}>
            {id} {text} {url} 안녕
        </div>
    )

};

export default FeatureButton;