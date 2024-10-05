'use client'

import React from 'react'
import styles from '@styles/Input.module.scss'

interface InputProps {
  width?: string
  height?: string
  style?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'checkbox'
  checked?: boolean
}

const Input: React.FC<InputProps> = ({
  width,
  height,
  style,
  onChange,
  value,
  placeholder = 'Введите данные',
  disabled,
  type = 'text',
  checked,
}) => {
  return (
    <input
      className={type === 'text' ? styles.inputText : styles.inputCheckbox}
      style={{ width, height, ...style }}
      onChange={onChange}
      value={type === 'checkbox' ? undefined : value}
      placeholder={type === 'text' ? placeholder : undefined}
      disabled={disabled}
      type={type}
      checked={type === 'checkbox' ? checked : undefined}
    />
  )
}

export default Input
