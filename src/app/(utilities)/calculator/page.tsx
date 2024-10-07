import CalculatorApp from '@components/calculator/Calculator'
import React from 'react'

import styles from '@styles/Calculator.module.scss'

const Calculator = () => {
  return (
    <div className={styles.calculatorSection}>
      <div className={styles.calculatorContainer}>
        <div className={styles.calculatorInfo}>
          <span className={styles.title}>Калькулятор</span>
          <span className={styles.description}>
            Очень Простой калькулятор обычный - только стандартные функции калькулятора: сложение, вычитание, умножение
            и деление. Простой калькулятор работает на смартфонах и ПК даже без интернета, не требует установки, быстро
            загружается и работает онлайн.
          </span>
        </div>
        <CalculatorApp />
      </div>
    </div>
  )
}
export default Calculator
