import { useState } from "react";

function TabButton({children,onSelected}){

    // let message = "Please Click On Button";
   

    return(
        <div>
            <button onClick={onSelected}>{children}</button>
        </div>

        );
    
}
export default TabButton;