'use client'
import React from 'react'
import styles from '@styles/Button.module.scss'

interface ButtonProps {
  width?: string
  height?: string
  style?: React.CSSProperties
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ width = '273px', height = '48px', style, onClick, children, disabled }) => {
  return (
    <button className={styles.button} style={{ width, height, ...style }} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
