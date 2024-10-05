'use client'
import React from 'react'
import PasswordForm from './PasswordForm'
import PasswordResults from './PasswordResults'
import styles from '@styles/PasswordGenerator.module.scss'

const PasswordGeneratorApp: React.FC = () => {
  return (
    <div className={styles.passwordGeneratorSection}>
      <div className={styles.passwordGeneratorContainer}>
        <h1 className={styles.title}>Генератор паролей</h1>
        <div className={styles.passwordGenerator}>
          <PasswordForm />
          <PasswordResults />
        </div>
      </div>
    </div>
  )
}

export default PasswordGeneratorApp
