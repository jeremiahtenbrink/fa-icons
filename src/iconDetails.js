import * as DevIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as FeatherIcons from "react-icons/fi";
import * as GameIcons from "react-icons/gi";
import * as GithubIcons from "react-icons/go";
import * as IonIcons from "react-icons/io";
import * as MDIcons from "react-icons/md";
import * as TypIcons from "react-icons/ti";
import * as WeatherIcons from "react-icons/wi";

import icon from './components/Icon'


const iconDetails = [
    {
        stateName: "diNames",
        key: "dev-icons",
        name: "Dev Icons",
        import: DevIcons,
        setFile: icon(DevIcons),
        packageName: "react-icons/di" 
    },

    {
        stateName: "faNames",
        key: "font-awesome",
        name: "Font Awesome",
        import: FaIcons,
        setFile: icon(FaIcons),
        packageName: "react-icons/fa" 
    },

    {
        stateName: "fiNames",
        key: "feather",
        name: "Feather Icons",
        import: FeatherIcons,
        setFile: icon(FeatherIcons),
        packageName: "react-icons/fi" 
    },
    {
        stateName: "giNames",
        key: "game-icons",
        name: "Game Icons",
        import: GameIcons,
        setFile: icon(GameIcons),
        packageName: "react-icons/gi" 
    },
    {
        stateName: "goNames",
        key: "github-icons",
        name: "Github Icons",
        import: GithubIcons,
        setFile: icon(GithubIcons),
        packageName: "react-icons/go" 
    },

    {
        stateName: "ioNames",
        key: "ion-icons",
        name: "Ion Icons",
        import: IonIcons,
        setFile: icon(IonIcons),
        packageName: "react-icons/io" 
    },

    {
        stateName: "mdIcons",
        key: "md-icons",
        name: "Material Design Icons",
        import: MDIcons,
        setFile: icon(MDIcons),
        packageName: "react-icons/md" 
    },

    {
        stateName: "tiNames",
        key: "typ-icons",
        name: "Typicons",
        import: TypIcons,
        setFile: icon(TypIcons),
        packageName: "react-icons/ti" 
    },

    {
        stateName: "wiNames",
        key: "weather-icons",
        name: "Weather Icons",
        import: WeatherIcons,
        setFile: icon(WeatherIcons),
        packageName: "react-icons/wi" 
    }

]



export {iconDetails};


