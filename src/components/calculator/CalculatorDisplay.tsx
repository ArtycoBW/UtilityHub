import React from 'react'
import styles from '@styles/Calculator.module.scss'

interface CalculatorDisplayProps {
  displayValue: string
  expression: string
  result: string | null
  errorMessage: string
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ displayValue, expression, result, errorMessage }) => {
  return (
    <div className={styles.display}>
      {errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <>
          {result && <div className={styles.result}>{result}</div>}
          <div className={styles.expression}>{expression || displayValue}</div>
        </>
      )}
    </div>
  )
}

export default CalculatorDisplay
