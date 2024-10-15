import PropTypes from "prop-types";

const Contacts = ({name, phone, email}) => {
    return (
        <address className="contacts">
            <p className="contacts__name">{name}</p>
            <a className="contacts__phone" href={phone}>Номер для связи: {phone}</a>
            <a href={email}>Почта для связи: {email}</a>
        </address>
    )
}

Contacts.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

export default Contacts;