import React, { Component } from 'react';

import styles from "./Sidebar.mod.css";

// import components
import Profile from "../../components/Profile/Profile";
import Contacts from "../../components/Contacts/Contacts";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

class Sidebar extends Component {
    state = {
        profile: {
            image: "https://raw.githubusercontent.com/emrexhepi/CV/gh-pages/images/picture.jpg",
            name: "Emrullah Rexhepi",
            job: "Frontend Developer"
        },
        // icon types: ['mobile', 'home', 'email', 'fax', 'skype', 'address', 'website']
        contacts: [
            {
                icon: "home",
                contact: "+383 49 901 556"
            },
            {
                icon: "email",
                contact: "em.rexhepi@gmail.com"
            },
            {
                icon: "skype",
                contact: "em.rexhepi"
            },
            {
                icon: "website",
                contact: "emrexhepi.github.io"
            },

        ],
        PersonalInfo: [
            {
                key: "Birthday",
                value: "06/20/1991",
            },
            {
                key: "Born",
                value: "Presevo, Serbia",
            },
            {
                key: "Relationship",
                value: "Married",
            },
            {
                key: "Nationality",
                value: "Albanian",
            },
            {
                key: "Languages",
                value: "Albanian, English, German",
            },
        ]
    }
    render() {
        return (
            <div className={`col-md-12 col-sm-12 col-lg-3 ${styles.Sidebar}`}>
                <Profile profile={this.state.profile}/>
                <PersonalInfo info={this.state.PersonalInfo} />
                <Contacts contacts={this.state.contacts}/>
                <div className={`${styles.Footer} row blue-grey darken-4 text-center`}>
                    <div className={`${styles.FooterContainter} col-12 align-middle`}>
                        <a className='white-text' target="_blank" rel="noopener noreferrer" href="https://github.com/emrexhepi/CV">Open Source Project</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;