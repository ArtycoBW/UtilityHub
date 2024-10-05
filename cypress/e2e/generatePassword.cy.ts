/// <reference types="cypress" />

import { generatePassword } from '../../src/utils/generatePassword'

describe('Функция generatePassword', () => {
  it('должна генерировать пароль заданной длины', () => {
    const options = {
      length: 10,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
      avoidRepeating: false,
    }

    const password = generatePassword(options)
    expect(password).to.have.length(10)
  })

  it('должна включать только выбранные символы', () => {
    const options = {
      length: 10,
      includeUppercase: true,
      includeLowercase: false,
      includeNumbers: false,
      includeSymbols: false,
      avoidRepeating: false,
    }

    const password = generatePassword(options)
    expect(password).to.match(/^[A-Z]+$/) // Ожидаем, что пароль содержит только заглавные буквы
  })

  it('должна включать символы, цифры и строчные буквы', () => {
    const options = {
      length: 15,
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
      avoidRepeating: false,
    }

    const password = generatePassword(options)
    expect(password).to.match(/^[a-z0-9%^&*!@#$~]+$/) // Проверяем, что пароль содержит только указанные символы
  })

  it('должна избегать повторяющихся символов, если включена опция avoidRepeating', () => {
    const options = {
      length: 15,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
      avoidRepeating: true,
    }

    const password = generatePassword(options)
    let hasRepeating = /([a-zA-Z0-9%^&*!@#$~])\1/.test(password) // Проверяем на повторяющиеся символы
    expect(hasRepeating).to.be.false
  })

  it('должна возвращать сообщение об ошибке, если не выбраны символы', () => {
    const options = {
      length: 10,
      includeUppercase: false,
      includeLowercase: false,
      includeNumbers: false,
      includeSymbols: false,
      avoidRepeating: false,
    }

    const password = generatePassword(options)
    expect(password).to.equal('Невозможно создать пароль: не выбраны символы')
  })
})
