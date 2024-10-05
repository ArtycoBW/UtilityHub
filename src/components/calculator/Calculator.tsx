'use client'

import React from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorButtons from './CalculatorButtons'
import { useCalculator } from '@utils/hooks/useCalculator'
import { Card } from '../common'

const Calculator: React.FC = () => {
  const { displayValue, expression, result, errorMessage, handleButtonClick } = useCalculator()

  return (
    <Card height="638px" width="428px" style={{ padding: '16px 24px', backgroundColor: 'var(--gray-950)' }}>
      <CalculatorDisplay
        displayValue={displayValue}
        expression={expression}
        result={result}
        errorMessage={errorMessage}
      />
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </Card>
  )
}

export default Calculator
