import PropTypes from "prop-types";

const Title = ({type, children}) => {
    switch (type) {
        case 'h1':
            return <h1>{children}</h1>;
        case 'h2':
            return <h2>{children}</h2>;
        case 'h3':
            return <h3>{children}</h3>;
    }
}

Title.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node
}

export default Title;