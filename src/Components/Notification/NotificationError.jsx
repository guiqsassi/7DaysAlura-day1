import "./NotificationError.css"
import {useState } from 'react';



 function NotificationError(props) {
    let notification

    if(props.state == "on"){
        notification = "0px"
    }
    else{
        notification = "300px"
    }
    return (
        <div className="notificationErrorContainer" style={{transform: `translateX(${notification})`}}>
            <h2>Infelizmente houve algum erro com seu envio :( </h2>
        </div>
    )
  
}
export default NotificationError