'use client'
import React from 'react'
import styles from '@styles/Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, style }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} style={style}>
        <div className={styles.modalContent}>{children}</div>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default Modal
