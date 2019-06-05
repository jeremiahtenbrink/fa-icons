import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/fi";
import icon from "./Icon";

const Icon = icon( Icons );

const FeatherIcon = props => {
    return ( <Icon name={ `Fi${ props.name }` }/> );
};

FeatherIcon.propTypes = {
    name: PropTypes.string,
};

export default FeatherIcon;