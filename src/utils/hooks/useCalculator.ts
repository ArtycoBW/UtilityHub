import { useState, useEffect, useCallback } from 'react'

/**
 * Пользовательский хук для реализации логики калькулятора.
 *
 * @returns {Object} Объект с текущим состоянием калькулятора и методами для взаимодействия.
 * @property {string} displayValue - Текущее значение, отображаемое на дисплее калькулятора.
 * @property {string} expression - Текущее выражение, вводимое пользователем.
 * @property {string | null} result - Результат последнего вычисления (если есть).
 * @property {string} errorMessage - Сообщение об ошибке (если есть).
 * @property {function(string): void} handleButtonClick - Обработчик нажатий кнопок на интерфейсе калькулятора.
 */

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [operator, setOperator] = useState<string | null>(null)
  const [firstOperand, setFirstOperand] = useState<number | null>(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleButtonClick = (value: string) => {
    if (errorMessage) setErrorMessage('')

    if (/\d/.test(value)) {
      inputDigit(value)
    } else if (value === '.') {
      inputDecimal()
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value)
    } else if (value === '=') {
      calculateResult()
    } else if (value === 'C') {
      resetCalculator()
    }
  }

  const inputDigit = useCallback(
    (digit: string) => {
      if (waitingForSecondOperand) {
        setDisplayValue(digit)
        setWaitingForSecondOperand(false)
      } else {
        if (displayValue.length >= 15) {
          setErrorMessage('Слишком длинное число')
          return
        }
        setDisplayValue(displayValue === '0' ? digit : displayValue + digit)
      }
      setExpression((prev) => prev + digit)
    },
    [displayValue, waitingForSecondOperand],
  )

  const inputDecimal = useCallback(() => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.')
      setWaitingForSecondOperand(false)
    } else {
      if (!displayValue.includes('.')) {
        setDisplayValue(displayValue + '.')
      }
    }
    if (!expression.endsWith('.')) {
      setExpression((prev) => prev + '.')
    }
  }, [displayValue, waitingForSecondOperand, expression])

  const handleOperator = useCallback(
    (nextOperator: string) => {
      if (displayValue === '' && nextOperator !== '-') {
        setErrorMessage('Нельзя вводить операцию перед числом')
        return
      }

      const inputValue = parseFloat(displayValue)

      if (operator && waitingForSecondOperand) {
        setOperator(nextOperator)
        setExpression(expression.slice(0, -1) + nextOperator)
        return
      }

      if (firstOperand == null) {
        setFirstOperand(inputValue)
      } else if (operator) {
        const result = performCalculation(operator, firstOperand, inputValue)
        if (result === null) {
          setErrorMessage('Ошибка: деление на ноль')
          resetCalculator()
          return
        } else {
          setDisplayValue(String(result))
          setFirstOperand(result)
          setResult(String(result))
        }
      }

      setWaitingForSecondOperand(true)
      setOperator(nextOperator)
      setExpression((prev) => prev + nextOperator)
    },
    [displayValue, operator, waitingForSecondOperand, firstOperand, expression],
  )

  const performCalculation = (operator: string, firstOperand: number, secondOperand: number): number | null => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        if (secondOperand === 0) return null
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  const calculateResult = useCallback(() => {
    if (operator == null || waitingForSecondOperand) {
      return
    }

    const inputValue = parseFloat(displayValue)
    const calcResult = performCalculation(operator, firstOperand!, inputValue)

    if (calcResult === null) {
      setErrorMessage('Ошибка: деление на ноль')
      resetCalculator()
      return
    } else {
      setDisplayValue(String(calcResult))
      setResult(String(calcResult))
      setFirstOperand(calcResult)
      setOperator(null)
      setWaitingForSecondOperand(false)
      setExpression('')
    }
  }, [operator, waitingForSecondOperand, displayValue, firstOperand])

  const resetCalculator = useCallback(() => {
    setDisplayValue('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
    setErrorMessage('')
    setExpression('')
    setResult(null)
  }, [])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event
      if (errorMessage) setErrorMessage('')

      if (/\d/.test(key)) {
        inputDigit(key)
      } else if (key === '.') {
        inputDecimal()
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key)
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault()
        calculateResult()
      } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        resetCalculator()
      }
    },
    [errorMessage, inputDigit, inputDecimal, handleOperator, calculateResult, resetCalculator],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return {
    displayValue,
    expression,
    result,
    errorMessage,
    handleButtonClick,
  }
}
