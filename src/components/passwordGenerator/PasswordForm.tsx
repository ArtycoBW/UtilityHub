import React, { useState } from 'react'
import { generatePassword } from '@utils/generatePassword'
import { Button, Input, Modal, Card } from '@components/common'
import styles from '@styles/PasswordGenerator.module.scss'
import { usePasswordStore } from '@/store/usePasswordsStore'

const PasswordForm: React.FC = () => {
  const { addPassword } = usePasswordStore()
  const [length, setLength] = useState<number>(8)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)
  const [avoidRepeating, setAvoidRepeating] = useState<boolean>(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  const handleGeneratePassword = () => {
    if (length < 3) {
      setModalOpen(true)
			return
    }

    const newPassword = generatePassword({
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
      avoidRepeating,
    })
    addPassword(newPassword)
  }

  return (
    <Card width="610px" height="450px">
      <div className={styles.inputSection}>
        <span className={styles.title}>Длина пароля</span>
        <Input value={length} onChange={(e) => setLength(+e.target.value)} placeholder="Введите число" />

        <label className={styles.label}>
          <Input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
          Использовать прописные буквы
        </label>
        <label className={styles.label}>
          <Input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
          Использовать строчные буквы
        </label>
        <label className={styles.label}>
          <Input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          Использовать цифры
        </label>
        <label className={styles.label}>
          <Input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          Использовать символы
        </label>
        <label className={styles.label}>
          <Input type="checkbox" checked={avoidRepeating} onChange={(e) => setAvoidRepeating(e.target.checked)} />
          Избегать повторения символов
        </label>
      </div>

      <div className={styles.buttonSection}>
        <Button width="100%" onClick={handleGeneratePassword}>
          Сгенерировать пароль
        </Button>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} style={{ padding: '20px' }}>
          Пароль меньше 3-х символов
        </Modal>
      )}
    </Card>
  )
}

export default PasswordForm
