import React from 'react';
import PropTypes from 'prop-types';

import Tittle from "../../UI/WidgetTittle/WidgetTittle";

// import custom PropTypes
import * as CustomPropTypes from "../../helpers/CustomPropTypes";

const TextWidget = (props) => {
  return (
    <div className='col-md-12'>
        <Tittle icon={props.icon} tittle={props.tittle} />
        <p className='text-justify'>{props.content}</p>
    </div>
  )
}

TextWidget.propTypes = {
    tittle: PropTypes.string.isRequired,
    icon: CustomPropTypes.faIconClassName,
    content: PropTypes.string.isRequired
}

export default TextWidget;

