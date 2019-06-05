import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/io";
import icon from "./Icon";

const Icon = icon( Icons );

const IonIcon = props => {
    return ( <Icon name={ `Io${ props.name }` }/> );
};

IonIcon.propTypes = {
    name: PropTypes.string,
};

export default IonIcon;