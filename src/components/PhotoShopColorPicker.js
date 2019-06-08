import React from "react";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

const PhotoShopColorPicker = ( props ) => {
    return ( <div>
        <ChromePicker
            
            color={ props.color }
            onChangeComplete={ props.onChangeComplete }
        />
    </div> );
};

PhotoShopColorPicker.propTypes = {
    color: PropTypes.string, onChangeComplete: PropTypes.func,
};

export default PhotoShopColorPicker;