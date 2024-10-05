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
}

const Input: React.FC<InputProps> = ({ width, height, style, onChange, value, placeholder='Введите данные' }) => {
  return (
    <input
      className={styles.input}
      style={{ width, height, ...style }}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input
