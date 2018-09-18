import React from 'react';
import * as CustomPropType from "../../helpers/CustomPropType";

const Icon = (props) => {
    return (
        <i className={props.classes} aria-hidden="true"></i>
    );
}

Icon.propTypes = {
    classes: CustomPropType.faIconClassName
} 

export default Icon;
