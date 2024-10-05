import { symbols } from "./constants"

/**
 * Опции для генерации пароля.
 * @typedef {Object} GeneratePasswordOptions
 * @property {number} length - Длина генерируемого пароля.
 * @property {boolean} includeUppercase - Включать ли заглавные буквы.
 * @property {boolean} includeLowercase - Включать ли строчные буквы.
 * @property {boolean} includeNumbers - Включать ли цифры.
 * @property {boolean} includeSymbols - Включать ли символы.
 * @property {boolean} avoidRepeating - Избегать ли повторяющихся символов.
 */
interface GeneratePasswordOptions {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
  avoidRepeating: boolean
}

/**
 * Генерирует случайный пароль на основе заданных опций.
 *
 * @param {GeneratePasswordOptions} options - Опции для генерации пароля.
 * @returns {string} Сгенерированный пароль или сообщение об ошибке, если опции неверны.
 */
export const generatePassword = (options: GeneratePasswordOptions): string => {
  const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, avoidRepeating } = options

  let characters = ''
  let password = ''

  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
  if (includeNumbers) characters += '0123456789'
  if (includeSymbols) characters += symbols

  if (characters === '') {
    return 'Невозможно создать пароль: не выбраны символы'
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    const newChar = characters[randomIndex]

    if (avoidRepeating && password.endsWith(newChar)) {
      i--
    } else {
      password += newChar
    }
  }

  return password
}
