import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from "../../helpers/CustomPropTypes";

const Icon = (props) => {
    const iconStyle = {
        fontSize : `${props.size}px`,
    }

    return (
        <i className={props.classes} style={iconStyle} aria-hidden={props.ariaHidden}></i>
    );
}

Icon.propTypes = {
    classes: CustomPropTypes.faIconClassName,
    size: PropTypes.number,
    ariaHidden: PropTypes.bool
}

Icon.defaultProps = {
    size: 16,
    ariaHidden: true
}

export default Icon;
