'use client'

import React from 'react'
import styles from '@styles/Input.module.scss'

interface InputProps {
  width?: string
  height?: string
  style?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder?: string
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  width,
  height,
  style,
  onChange,
  value,
  placeholder = 'Введите данные',
  disabled,
}) => {
  return (
    <input
      className={styles.input}
      style={{ width, height, ...style }}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

export default Input
