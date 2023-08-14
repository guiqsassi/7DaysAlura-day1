import "./NotificationOkay.css"
import {useState } from 'react';



 function NotificationOkay(props) {
    let notification

    if(props.state == "on"){
        notification = "0px"
    }
    else{
        notification = "300px"
    }
    return (
        <div className="notificationContainer" style={{transform: `translateX(${notification})`}}>
            <h2>Email inscrito com sucesso 😀 </h2>
        </div>
    )
  
}
export default NotificationOkay