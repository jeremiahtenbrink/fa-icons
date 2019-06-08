import React, { Component } from "react";
import { Form, Input } from "antd";
import iconSet from "../components/IconSet";
import icon from '../components/Icon'
import {iconDetails} from '../iconDetails';
import "./display.scss";

class Display extends Component{
    state = {
        searchTerm: "", 
    };

    componentDidMount(){
        let iconNames = {}
        iconDetails.forEach(iconObj => {
            iconNames[iconObj.stateName] = Object.keys(iconObj.import);
            // generate empty array per statename
            this.setState({
                [iconObj.stateName]: []
            })
        })
        this.setState({...iconNames});
    }
    
    onChange = e => {
        this.setState( { searchTerm: e.target.value } );
    };
    
    render(){
        return ( 
            <div className={ "display" }>  
                <Form>
                    <Form.Item>
                        <Input name={ "search" } placeholder={ "Search..." }
                             onChange={ this.onChange }/>
                    </Form.Item>
                </Form>
            {iconDetails.map(iconObj => {
                const ComponentFromIconSet = iconSet(icon(iconObj.import))
                return(
                    <div className = "icon-section" key = {iconObj.stateName}>
                        <ComponentFromIconSet
                            iconNames = {this.state[iconObj.stateName]}
                            name = {iconObj.name}
                            searchTerm = {this.state.searchTerm}
                        />
                    </div>
                ) 
            })}
            </div>
        );
    }
}


export default Display;