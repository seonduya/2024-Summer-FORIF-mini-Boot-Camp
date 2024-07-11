import React from "react";
import FeatureButton from "../components/feature";


function FeatureList({features =[0]}){


    // const [feature, features] = useState([
    //     {
    //         id: 1,
    //         text: 'todo 리스트',
    //         url:'',
    //     },  
    //     {
    //         id: 2,
    //         text: '메롱',
    //         url:'',
    //     },  

    // ]);


    return (
        <div>
            {features.map((feature)=>(
            <FeatureButton
                feature={feature.text}
                
                />
                ))}
        </div>
    )
}
    

export default FeatureList;