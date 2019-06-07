import React from "react";
import PropTypes from "prop-types";
import icon from "./Icon";
import * as DevIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as FeatherIcons from "react-icons/fi";
import * as GameIcons from "react-icons/gi";
import * as GithubIcons from "react-icons/go";
import * as IonIcons from "react-icons/io";
import * as MDIcons from "react-icons/md";
import * as TypIcons from "react-icons/ti";
import * as WeatherIcons from "react-icons/wi";

const iconDetails = {
    diNames: {
        key: "dev-icons",
        name: "Dev Icons",
        import: DevIcons,
        set: DevIcon 
    },
    faNames: {
        key: "font-awesome",
        name: "Font Awesome",
        import: FaIcons,
        set: FaIconsSet 
    },
    fiNames: {
        key: "feather",
        name: "Feather Icons",
        import: FeatherIcons,
        set: FeatherIconsSet 
    },
    giNames: {
        key: "game-icons",
        name: "Game Icons",
        import: GameIcons,
        set: GameIconsSet 
    },
    goNames: {
        key: "github-icons",
        name: "Github Icons",
        import: GithubIcons,
        set: GithubIconsSet 
    },
    ioNames: {
        key: "ion-icons",
        name: "Ion Icons",
        import: IonIcons,
        set: IonIconsSet 
    },
    mdIcons: {
        key: "md-icons",
        name: "Material Design Icons",
        import: MDIcons,
        set: MDIconsSet 
    },
    tiNames: {
        key: "typ-icons",
        name: "Typicons",
        import: TypIcons,
        set: TypIconsSet 
    },
    wiNames: {
        key: "weather-icons",
        name: "Weather Icons",
        import: WeatherIcons,
        set: WeatherIconsSet 
    }

}
const Icon = icon( Icons );

const GithubIcon = props => {
    return ( <Icon name={ `Go${ props.name }` }/> );
};

GithubIcon.propTypes = {
    name: PropTypes.string,
};

export default GithubIcon;