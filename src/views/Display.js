import React, { Component } from "react";
import { Form, Input, Popover, Button } from "antd";
import { iconDetails } from "../iconDetails";
import "./display.scss";
import IconComponent from "../components/IconComponent";
import PhotoShopColorPicker from "../components/PhotoShopColorPicker";

class Display extends Component{
    state = {
        searchTerm: "",
        iconNames: [],
        size: "100",
        color: "black",
        backgroundColor: "lightgrey"
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
        this.setState( { [ e.target.name ]: e.target.value } );
    };
    
    getIcons = () => {
        const names = this.state.iconNames.filter( name => name.toLowerCase()
            .includes( this.state.searchTerm.toLowerCase() ) );
        const icons = [];
        for( let i = 0; i < names.length && i < 50; i++ ){
            icons.push( <IconComponent name={ names[ i ] }
                                       size={ this.state.size }
                                       color={ this.state.color }
            /> );
        }
        return icons;
    };
    
    handleChangeCompleteIcon = ( color ) => {
        this.setState( { color: color.hex } );
    };
    
    handleChangeCompleteBackground = ( color ) => {
        this.setState( { backgroundColor: color.hex } );
    };
    
    getColorPicker = ( type ) => {
        if( type === "icon" ){
            return ( <PhotoShopColorPicker color={ this.state.color }
                                           onChangeComplete={ this.handleChangeCompleteIcon }/> );
        }
        return ( <PhotoShopColorPicker color={ this.state.backgroundColor }
                                       onChangeComplete={ this.handleChangeCompleteBackground }/> );
    };
    
    render(){
        return ( <div className={ "display" }
                      style={ { backgroundColor: this.state.backgroundColor } }>
            
            <Form>
                <Form.Item>
                    <Input name={ "searchTerm" } placeholder={ "Search..." }
                           onChange={ this.onChange }
                           value={ this.state.searchTerm }
                    
                    />
                </Form.Item>
                <Form.Item>
                    <Input name={ "size" } value={ this.state.size }
                           onChange={ this.onChange }/>
                </Form.Item>
                <Popover content={ this.getColorPicker( "icon" ) }
                         placement={ "rightTop" }>
                    <Button>Icon Color</Button>
                </Popover>
                <Popover content={ this.getColorPicker( "background" ) }
                         placement={ "rightTop" }>
                    <Button>Background Color</Button>
                </Popover>
                { this.state.color }
            </Form>
            { this.getIcons() }
        </div> );
    }
}

export default Display;