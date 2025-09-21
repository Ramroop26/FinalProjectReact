import Loading from "../images/loading.gif";
import { useState } from "react";
const PaymentDone=()=>{
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(()=>{
          setIsLoading(false);
    }, 2000);

    return(
        <>
        
         {isLoading ? (<>
             <center>
            <img src={Loading} />
         </center>
          </>) : (<> 
            <h1> Payment Done </h1>
            <h3 align="center"> Your Order Succesfully placed!!!</h3>
         </>)}
        
         
        </>
    )
}

export default PaymentDone;