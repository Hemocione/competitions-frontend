import styles from './SimpleButton.module.css'

const SimpleButton = ({ handleClick, children }) => (
  <button onClick={handleClick} className={styles.button} type='button'>
    {children}
  </button>
)

export default SimpleButton
