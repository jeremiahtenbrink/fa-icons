import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/fa";
import icon from "./Icon";

const Icon = icon( Icons );

const FaIcon = props => {
    return ( <Icon {...props}/> );
};

FaIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default FaIcon;