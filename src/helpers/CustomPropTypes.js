/* 
    Custom validators for PropType library
*/

import React from "react";

export const faIconClassName = (props, propName, componentName)=> {

    // check if string
    if(typeof props[propName] !== 'string') {
        return new Error(
            `Prop "${propName}" is required and should be typeof "string"!`
        );
    }

    // match fa classes
    const classes = props[propName].match(/fa (fa-[a-zA-z0-9]*).*/);
    
    // check fa classNames
    if(classes && classes.length < 1) {
        return new Error(
            `Prop "${propName}" should be font awesome icon classNames ex. "fa fa-*!`
        );
    }
}

// Validate if suplied prop is a <i> element with fa classNames
export const faIcon = (props, propName, componentName)=> {

    // prop is required
    if(!props[propName]) {
        return new Error(
            `Prop "${propName}" is required!`
        );
    }

    // check if valid element
    if(!React.isValidElement(props[propName])){
        return new Error(
            `Prop "${propName}" should be a valid React element of <i>!`
        );
    }

    const classes = props[propName].props.className.match(/fa (fa-[a-zA-z0-9]*).*/);
    
    // check fa classNames
    let faClassesExist = false;
    if(classes && classes.length > 0) {
        faClassesExist = true;
    }
    
    // if criteria not met return error
    if(props[propName].type !== "i" || !faClassesExist) {
      return new Error(
        `Invalid prop "${propName}" supplied to ${componentName}. Validation failed. It should be an awesome font icon ex. <i className="fa fa-*" aria-hidden="true"></i>`
      );
    }
};


export default null;