import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonalInfo.mod.css';


const PersonalInfo = (props) => {
    const info = props.info.map((item, key)=>{
        return (
            <div className={`row ${styles.Info}`} key={`${item.name}_${item.value}_${key}`}>
                <span className={`col-5 ${styles.Key} text-right text-capitalize font-weight-bold`}>{item.key}: </span>
                <span className={`col-7 ${styles.Value} text-left text-capitalize font-italic`}>{item.value}</span>
            </div>
        );
    });
  return (
    <div className={`${styles.PersonalInfo} text-center display-block`}>
        <h3 className={`${styles.Tittle} text-center`}>Personal Info</h3>
        {info}
    </div>
  )
}

PersonalInfo.propTypes = {
    info : PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string,
    }))
}

export default PersonalInfo

