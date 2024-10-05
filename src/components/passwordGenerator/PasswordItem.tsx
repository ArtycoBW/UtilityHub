import React from 'react'
import styles from '@styles/PasswordGenerator.module.scss'

interface PasswordItemProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const PasswordItem: React.FC<PasswordItemProps> = ({ children, style }) => {
  return (
    <div className={styles.passwordItem} style={{ ...style }}>
      {children}
    </div>
  )
}

export default PasswordItem
