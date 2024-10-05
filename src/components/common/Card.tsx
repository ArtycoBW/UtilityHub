'use client'

import React from 'react'
import styles from '@styles/Card.module.scss'

interface CardProps {
  width?: string
  height?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ width, height, style, children }) => {
  return (
    <div className={styles.card} style={{ width, height, ...style }}>
      {children}
    </div>
  )
}

export default Card
