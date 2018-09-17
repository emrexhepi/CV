import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from "./ContentWidgetTittle.mod.css";

const ContentWidgetTittle = (props) => {
  return (
    <div className={`row ${styles.Row}`}>
        <div className={`${styles.Holder} ${styles.BorderLeft} col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2`}>
            <div className={`${styles.IconHolder} text-center align-middle`} >
                <span>{props.icon}</span>
            </div>
        </div>
        <div className={`${styles.Holder} ${styles.Right} col-9 col-sm-9 col-md-10 col-lg-10  col-xl-10 mdb-color darken-4`}>
            <div className={`${styles.TittleHolder} text-left align-middle`}>
                <h4 className={styles.Tittle}>{props.tittle}</h4>
            </div>
        </div>
    </div>
  )
}

ContentWidgetTittle.propTypes = {
    icon: PropTypes.string,
    tittle: PropTypes.string
}

export default ContentWidgetTittle

