import React, { useEffect } from 'react'

function Services() {

    useEffect(()=>{

        //this part is called when the component is Mounted
        console.log("Service component is Mounted");
        

        //this part is called when the component is about to be Unmounted
        return () => {
            console.log("Service component is Unmounted");
            
        }
    })

  return (
    <div>Services</div>
  )
}

export default Services