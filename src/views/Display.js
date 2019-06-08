import React, { Component } from "react";
import { Form, Input } from "antd";
import { iconDetails } from "../iconDetails";
import "./display.scss";
import IconComponent from "../components/IconComponent";

class Display extends Component{
    state = {
        searchTerm: "", iconNames: []
    };
    
    componentDidMount(){
        let iconNames = [];
        debugger;
        
        if( localStorage.getItem( "React-Icon-Names" ) ){
            return this.setState( {
                iconNames: JSON.parse( localStorage.getItem( "React-Icon-Names" ) )
            } );
        }
        Object.values( iconDetails ).forEach( iconDetail => {
            Object.keys( iconDetail.import ).forEach( iconName => {
                iconNames.push( iconName );
            } );
        } );
        localStorage.setItem( "React-Icon-Names", JSON.stringify( iconNames ) );
        this.setState( { iconNames } );
    }
    
    onChange = e => {
        this.setState( { searchTerm: e.target.value } );
    };
    
    getIcons = () => {
        const names = this.state.iconNames.filter( name => name.toLowerCase()
            .includes( this.state.searchTerm.toLowerCase() ) );
        const icons = [];
        for( let i = 0; i < names.length && i < 50; i++ ){
            icons.push( <IconComponent name={ names[ i ] }/> );
        }
        return icons;
    };
    
    render(){
        return ( <div className={ "display" }>
            
            <Form>
                <Form.Item>
                    <Input name={ "search" } placeholder={ "Search..." }
                           onChange={ this.onChange }/>
                </Form.Item>
            </Form>
            { this.getIcons() }
        </div> );
    }
}

export default Display;