import React from 'react';
import PropTypes from 'prop-types';

import styles from "./Profile.mod.css";

const Profile = (props) => {
  return (
    <div className={`card ${styles.Card}`}>
        <div className={`${styles.CardUp} row blue-grey darken-1`}></div>
        <div className={`${styles.Avatar} mx-auto white rounded-circle`}>
            <img className="rounded-circle" src="/images/picture.jpg" alt="Emrullah Rexhepi" />
        </div>
        <div className="card-body">
            <h2 className="card-title text-center text-uppercase font-weight-bold blue-grey-text">Emrullah Rexhepi</h2>
            <div className={`row ${styles.JobTittle} blue-grey`}>
                <h4 className="white-text text-center text-uppercase">Web Developer</h4>
            </div>
        </div>
    </div>
  )
}

Profile.propTypes = {
    name: PropTypes.string
}

export default Profile;

