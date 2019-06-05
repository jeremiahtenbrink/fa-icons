import React, { Component } from "react";

const icon = type => {
    return class FaIcon extends Component{
        state = {
            icon: ""
        };
        
        componentDidMount(){
            debugger;
            const icon = type[ this.props.name ]();
            this.setState( { icon } );
        }
        
        render(){
            debugger;
            return ( <div>
                { this.state.icon }
            </div> );
        }
    };
};

export default icon;


