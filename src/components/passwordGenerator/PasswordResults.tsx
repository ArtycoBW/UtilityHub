import React, { useState } from 'react'
import { usePasswordStore } from '@/store/usePasswordsStore'
import styles from '@styles/PasswordGenerator.module.scss'
import PasswordItem from './PasswordItem'
import { Button, Modal, Card } from '@components/common'
import Image from 'next/image'

const PasswordResults: React.FC = () => {
  const { passwords } = usePasswordStore()

	const [isModalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

	const copyText = (password: string) => {
		navigator.clipboard.writeText(password)
		setModalOpen(true)
	}
	
  return (
    <Card width="610px" height="320px" style={{ padding: '20px' }}>
      <div className={styles.results}>
        <span className={styles.titleResults}>Результаты</span>
        <div className={styles.passwordList}>
          {passwords.map((password, index) => (
            <PasswordItem key={index} style={{ width: '545px' }}>
              <span className={styles.password}>
                {password}
              </span>
              <Button
                onClick={() => copyText(password)}
                style={{ all: 'unset', cursor: 'pointer' }}>
                <Image src="/assets/copy.svg" width="20" height="20" alt="copy" />
              </Button>
            </PasswordItem>
          ))}
        </div>
      </div>

			{isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} style={{ padding: '20px' }}>
          Скопировалось в буфер обмена
        </Modal>
      )}
    </Card>
  )
}

export default PasswordResults
