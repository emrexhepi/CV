import React from 'react'
import PropTypes from 'prop-types'

// import modular stles
import styles from "./Contacts.mod.css";

// import components
import Contact from "./Contact/Contact";

const Contacts = (props) => {

    const contacts = props.contacts.map((item, index) => {
        return <Contact key={`${item.icon}-${index}`} icon={item.icon} contact={item.contact} />
    });

    return (
        <div className={`${styles.Contacts} text-center display-block`}>
            <h3 className='text-center'>Contacts</h3>
            {contacts}
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.oneOf(['mobile', 'home', 'email', 'fax', 'skype', 'address', 'website']),
            contact: PropTypes.string
        })
    )
}

export default Contacts

