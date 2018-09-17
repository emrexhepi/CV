import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from "./Contact.mod.css";

const Contact = (props) => {
    let icon = null;
    switch(props.icon) {
        case 'mobile':
            icon = <i className="fa fa-mobile" aria-hidden="true"></i>;
            break;
        case 'home':
                icon = <i className="fa fa-phone" aria-hidden="true"></i>;
                break;
        case 'email':
            icon = <i className="fa fa-envelope-o" aria-hidden="true"></i>;
            break;
        case 'fax':
            icon = <i className="fa fa-fax" aria-hidden="true"></i>;
            break;
        case 'skype':
            icon = <i className="fa fa-skype" aria-hidden="true"></i>;
            break;
        case 'address':
            icon = <i className="fa fa-address-card-o" aria-hidden="true"></i>;
            break;
        case 'website':
            icon = <i className="fa fa-globe" aria-hidden="true"></i>;
            break;
        default:
            icon = null;
            break;
    }
    return (
        <div className={`${styles.ContactItem} row`}>
            <div className={`col-3 ${styles.Icon} mdb-color darken-4 text-right`}>
                <span>{icon}</span>
            </div>
            <div className={`col-9 ${styles.Contact} col-8 text-left`}>
                <span>{props.contact}</span>
            </div>
        </div>
    )
}

Contact.propTypes = {
    icon: PropTypes.oneOf(['mobile', 'home', 'email', 'fax', 'skype', 'address', 'website']),
    contact: PropTypes.string
}

export default Contact;

