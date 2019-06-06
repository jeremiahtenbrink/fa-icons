import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import FaIcon from "../components/FaIcon";
import * as FeatherIcons from "react-icons/fi";
import FeatherIcon from "../components/FeatherIcon";
import "./display.scss";
import { Form, Input } from "antd";
import iconSet from "../components/IconSet";
import DevIcon from "../components/DevIcons";
import * as DevIcons from "react-icons/di";
import * as GameIcons from "react-icons/gi";
import GameIcon from "../components/GameIcon";

class Display extends Component{
    state = {
        faNames: [], searchTerm: "", fiNames: [], diNames: [], giNames: [],
    };
    
    componentDidMount(){
        debugger;
        const faNames = Object.keys( FaIcons );
        const fiNames = Object.keys( FeatherIcons );
        const diNames = Object.keys( DevIcons );
        const giNames = Object.keys( GameIcons );
        this.setState( { faNames, fiNames, diNames, giNames } );
    }
    
    onChange = e => {
        this.setState( { searchTerm: e.target.value } );
    };
    
    render(){
        return ( <div className={ "display" }>
            
            <Form>
                <Form.Item>
                    <Input name={ "search" } placeholder={ "Search..." }
                           onChange={ this.onChange }/>
                </Form.Item>
            </Form>
            <div className={ "fa_icons" } key={ "font-awesome" }>
                <FaIconSet iconNames={ this.state.faNames }
                           name={ "Font Awesome" }
                           searchTerm={ this.state.searchTerm }/>
            </div>
            <div className={ "fa_icons" } key={ "feather" }>
                <FeatherIconSet name={ "Feather Icons" }
                                iconNames={ this.state.fiNames }
                                searchTerm={ this.state.searchTerm }/>
            </div>
            <div className={ "fa_icons" } key={ "dev icons" }>
                <DevIconsSet name={ "Dev Icons" }
                             iconNames={ this.state.diNames }
                             searchTerm={ this.state.searchTerm }/>
            </div>
            <div className={ "fa_icons" } key={ "game icons" }>
                <GameIconsSet name={ "Game Icons" }
                              iconNames={ this.state.giNames }
                              searchTerm={ this.state.searchTerm }/>
            </div>
        </div> );
    }
}

const FaIconSet = iconSet( FaIcon );
const FeatherIconSet = iconSet( FeatherIcon );
const DevIconsSet = iconSet( DevIcon );
const GameIconsSet = iconSet( GameIcon );

export default Display;