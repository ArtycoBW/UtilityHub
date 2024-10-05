'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@/components/common'
import Card from '@/components/common/Card'
import { useNameStore } from '@/store/useStore'
import styles from '@styles/InputSection.module.scss'

const InputSection = () => {
  const [inputName, setInputName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { name, setName } = useNameStore()
  const router = useRouter()
  const isDisabled = name.length > 0

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value)
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const handleSaveName = (path: string) => {
    if (inputName.length > 3) {
      setName(inputName)
      router.push(path)
    } else {
      setErrorMessage('Имя должно быть длиннее 3 символов')
    }
  }

  const disabledStyle = {
    opacity: isDisabled ? 0.5 : 1,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }

  return (
    <Card width="610px" height="255px">
      <div className={styles.inputSection}>
        <span className={styles.title}>Начать</span>
        <span className={styles.subtitle}>Ваше имя</span>
        <Input
          placeholder={errorMessage ? errorMessage : 'Как вас зовут?'}
          value={inputName}
          onChange={handleChange}
          disabled={isDisabled}
          style={disabledStyle}
        />
      </div>
      <div className={styles.actionsSection}>
        <Button disabled={isDisabled} onClick={() => handleSaveName('/calculator')} style={disabledStyle}>
          Открыть калькулятор
        </Button>
        <Button disabled={isDisabled} onClick={() => handleSaveName('/password-generator')} style={disabledStyle}>
          Открыть генератор
        </Button>
      </div>
    </Card>
  )
}

export default InputSection
