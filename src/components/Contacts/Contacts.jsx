import PropTypes from "prop-types";

import styles from "./Contacts.module.css";

const Contacts = ({name, phone, email}) => {
    return (
        <address className="contacts">
            <p className={styles.contactsName}>{name}</p>
            <a className={styles.contactsPhone} href={`tel: ${phone}`}>{phone}</a>
            <a className={styles.contactsPhone} href={`mailto:${email}`}>{email}</a>
        </address>
    )
}

Contacts.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

export default Contacts;