import React from 'react'
import Axios from 'axios';

export default function Drink({drinkId}) {
    var details=[]
    function Drink(drinkId) {
        var details=[]
    
        let descurl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+drinkId;
        async function getDescrip(){
            let descrip= await Axios.get(descurl);
            details= descrip.data.drinks['0'];
            console.log(details['strCategory']);
            console.log(details["strDrink"])
            console.log(details["strDrinkThumb"]+"/preview")
    
        }
        getDescrip();
    
        return (
    
           <div className="col-sm-6 col-md-auto mb-3 text-center ">
               <h1>hello</h1>
                <h1 className="fw-bold">{details["strDrink"]}</h1>
                <img src={details["strDrinkThumb"]} className="fluid img-thumbnail mt-3" alt="cocktails"/>
    
    
          </div>
        
        )
    }
}