import PropTypes from 'prop-types'
import PropsType from 'prop-types'
function Header({ text, bgColor, textColor }) {
    const HeaderStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
         <header style={HeaderStyles}>
            <div className="container">
                <h2>{text}</h2>

            </div>

        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header