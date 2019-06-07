import React, { Component } from "react";
import { IconContext } from "react-icons";

const icon = ( type ) => {
    return class Icon extends Component{
        state = {
            icon: ""
        };
        
        componentDidMount(){
            try{
                const icon = type[ this.props.name ]( this.props );
                this.setState( { icon } );
            }catch( e ){
                console.log( e );
            }
        }
        
        render(){
            return ( 
            <IconContext.Provider
                value={ {
                    color: `${ this.props.color || "#292938" }`,
                    className: `${ this.props.className || "global-icon" }`,
                    size: `${ this.props.size || "44px" }`
                } }>
                { this.state.icon }
            </IconContext.Provider> );
        }
    };
    
};

export default icon;


