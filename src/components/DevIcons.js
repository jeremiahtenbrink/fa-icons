import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-icons/di";
import icon from "./Icon";

const Icon = icon( Icons );

const GameIcon = props => {
    return ( <Icon { ...props }/> );
};

GameIcon.propTypes = {
    name: PropTypes.string,
};

export default GameIcon;