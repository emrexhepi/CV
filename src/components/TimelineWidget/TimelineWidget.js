import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../helpers/CustomPropTypes';

import Tittle from "../../UI/WidgetTittle/WidgetTittle";

const TimelineWidget = (props) => {
  return (
    <div className="col-md-12">
        <Tittle icon={props.icon} tittle={props.tittle} />
    </div>
  )
}

TimelineWidget.propTypes = {
    tittle : PropTypes.string,
    icon: CustomPropTypes.faIconClassName,
}

export default TimelineWidget

