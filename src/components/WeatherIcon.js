import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/wi";
import icon from "./Icon";

const Icon = icon( Icons );

const GithubIcon = props => {
    return ( <Icon name={ `Wi${ props.name }` }/> );
};

GithubIcon.propTypes = {
    name: PropTypes.string,
};

export default GithubIcon;