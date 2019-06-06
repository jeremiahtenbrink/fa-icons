import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/md";
import icon from "./Icon";

const Icon = icon( Icons );

const MaterialDesignIcon = props => {
    return ( <Icon name={ `Md${ props.name }` }/> );
};

MaterialDesignIcon.propTypes = {
    name: PropTypes.string,
};

export default MaterialDesignIcon;