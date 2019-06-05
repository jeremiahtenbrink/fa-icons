import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/fa";
import icon from "./Icon";

const Icon = icon( Icons );

const FaIcon = props => {
    return ( <Icon name={ `Fa${ props.name }` }/> );
};

FaIcon.propTypes = {
    name: PropTypes.string,
};

export default FaIcon;