import React from "react";

function FeatureButton(){
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
            To-do list 기능
        </div>
    )

};

export default FeatureButton;