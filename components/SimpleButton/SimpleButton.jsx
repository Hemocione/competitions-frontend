import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './SimpleButton.module.css'

const SimpleButton = ({ handleClick, children }) => (
  <button onClick={handleClick} className={styles.button} type='button'>
    {children}
  </button>
)

SimpleButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default SimpleButton
