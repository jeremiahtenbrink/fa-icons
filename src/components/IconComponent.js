import React from "react";
import PropTypes from "prop-types";
import icon from "./Icon";
import { iconDetails } from "../iconDetails";

const IconComponent = props => {
    debugger;
    
    const Icon = icon( iconDetails[ props.name.substring( 0, 2 ) ].import );
    
    return ( <Icon { ...props }/> );
};

IconComponent.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default IconComponent;