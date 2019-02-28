import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

function Char(props) {
    return(
        <div role="img" 
            aria-label="click item"
            className={"click-item  " + (props.condition === false ? "shake" : "")}
            onClick={() => props.handleClick(props.icon.iconName)}
        >
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
}

export default Char;