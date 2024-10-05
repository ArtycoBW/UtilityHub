'use client'
import React from 'react'
import styles from '@styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useNameStore } from '@/store/useNameStore'

const Header = () => {
  const { name } = useNameStore()

  return (
    <div className={styles.header}>
      <Image width="142" height="24" src="/assets/logo.svg" alt="logo" />
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Главная
        </Link>
        <Link className={styles.link} href="/calculator">
          Калькулятор
        </Link>
        <Link className={styles.link} href="/password-generator">
          Генератор паролей
        </Link>
      </div>
      <div className={styles.user}>
        <span className={styles.username}>{name}</span>
        <Image height="32" width="32" src="/assets/avatar.jpg" alt="avatar" className={styles.avatar} />
      </div>
    </div>
  )
}

export default Header
