import React from 'react';
import PropTypes from 'prop-types';

import Tittle from '../../UI/ContentWidgetTittle/ContentWidgetTittle';

const AboutMe = (props) => {
  return (
    <div className='col-md-12'>
        <Tittle icon="icon" tittle="About Me" />
        <p className='text-justify'>{props.content}</p>
    </div>
  )
}

AboutMe.propTypes = {
    content: PropTypes.string
}

export default AboutMe;

