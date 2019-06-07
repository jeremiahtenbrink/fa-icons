import React, { Component } from "react";
import { Form, Input } from "antd";
import "./display.scss";
import iconSet from "../components/IconSet";
import {iconDetails} from '../iconDetails';

class Display extends Component{
    state = {
        searchTerm: "", 
        diNames: [], 
        faNames: [], 
        fiNames: [], 
        giNames: [],
        goNames: [],
        ioNames: [],
        mdNames: [],
        tiNames: [],
        wiNames: [],
    };
    
    componentDidMount(){
        let iconNames = {}
        iconDetails.forEach(iconObj => {
            iconNames[iconObj.stateName] = Object.keys(iconObj.import)
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
                const ComponentFromIconSet = iconSet(iconObj.setFile)
                return(
                    <div className = "icon-section" key = {iconObj.key}>
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