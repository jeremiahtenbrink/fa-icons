import React, { Component } from "react";
import PropTypes from "prop-types";
import FaIcon from "./FaIcon";
import { Modal } from "antd";

const iconSet = Icon => {
    return class IconSet extends Component{
        state = {
            open: false, modalOpen: false, iconName: ""
        };
        
        toggleOpen = () => {
            debugger;
            this.setState( state => ( { open: !state.open } ) );
        };
        
        iconClick = ( iconName ) => {
            this.setState( { iconName, modalOpen: true, } );
        };
        
        closeModal = () => {
            this.setState( { modalOpen: false, iconName: "" } );
        };
        
        render(){
            let packageName = "";
            if( this.props.name === "Font Awesome" ){
                packageName = "'react-icons/fa'";
            }
            return ( <div>
                <div className={ "inline" }>
                    { this.state.open && <FaIcon name={ "FaAngleDown" }
                                                 onClick={ this.toggleOpen }/> }
                    { !this.state.open && <FaIcon name={ "FaAngleRight" }
                                                  onClick={ this.toggleOpen }/> }
                    <h1>{ this.props.name }</h1>
                </div>
                
                <div className={ "fa_icons" }>
                    
                    
                    { this.state.open &&
                    this.props.iconNames.filter( name => name.toLowerCase()
                        .includes( this.props.searchTerm.toLowerCase() ) )
                        .map( iconName => (
                            <div className={ "icon" } key={ iconName }>
                                <h5>{ iconName }</h5>
                                <Icon name={ iconName }
                                      onClick={ () => this.iconClick( iconName ) }/>
                            </div> ) ) }
                </div>
                
                <Modal
                    title={ `Name: ${ this.state.iconName }` }
                    visible={ this.state.modalOpen }
                    onOk={ this.closeModal }
                    onCancel={ this.closeModal }
                >
                    <code>
                        import { `{${ this.state.iconName }}` } from { packageName };
                        <br/>
                        <br/>
                        
                        return( { `<${ this.state.iconName } value=\"{{  color: \"#292938\",
                    className: \"global-icon\" },
                    size: \"44px\" }}" />` } )
                    </code>
                </Modal>
            </div> );
            
        }
    };
};

export default iconSet;