import React from 'react';
import PropTypes from 'prop-types';

import styles from "./Profile.mod.css";

const Profile = (props) => {
  return (
    <div className={`card ${styles.Card}`}>
        <div className={`${styles.CardUp} row blue-grey darken-4`}></div>
        <div className={`${styles.Avatar} mx-auto white rounded-circle`}>
            <img className="rounded-circle" src={props.profile.image} alt={props.name} />
        </div>
        <div className="card-body">
            <h2 className="card-title text-center text-uppercase font-weight-bold">{props.profile.name}</h2>
            <div className={`row ${styles.JobTittle} blue-grey darken-4 text-center`}>
                <h5 className={`${styles.title} white-text title text-uppercase`}>{props.profile.job}</h5>
            </div>
        </div>
    </div>
  )
}

Profile.propTypes = {
    profile: PropTypes.shape({
        image: PropTypes.string,
        name : PropTypes.string,
        job : PropTypes.string,
    })
}

export default Profile;

