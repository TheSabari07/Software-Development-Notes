import React  from "react";

function Result( {secret,term} ){ 
    let result;

    if (term){
    if( term > secret){
        result ="high";
    } else if ( term < secret){
        result = "lower";
    } else if (term == secret){
        result = "correct";
    }else {
        result = "enter valid";
    }
}
    return <h3> You guessed {result} </h3>
}

export default Result;