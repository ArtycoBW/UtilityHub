import React from 'react'
import { Button } from '@/components/common'
import styles from '@styles/Calculator.module.scss'
import { buttons } from '@utils/constants'

interface CalculatorButtonsProps {
  onButtonClick: (value: string) => void
}

const buttonStyle = {
  borderRadius: '19px',
  color: 'var(--main-color)',
  display: 'flex',
  fontFamily: 'Inter',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '32px',
  fontWeight: 700,
  lineHeight: '48px',
}

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({ onButtonClick }) => {
  return (
    <div className={styles.buttons}>
      {buttons.map((btn, index) => (
        <Button
          key={index}
          onClick={() => onButtonClick(btn.value)}
					width={btn.value === '0' ? '260px' : '80px'}
					height='80px'
          style={{
            ...buttonStyle,
            ...btn.style,
            gridColumn: btn.value === '0' ? 'span 3' : undefined,
          }}>
          {btn.label}
        </Button>
      ))}
    </div>
  )
}

export default CalculatorButtons
