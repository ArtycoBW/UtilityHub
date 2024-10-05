interface GeneratePasswordOptions {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
  avoidRepeating: boolean
}

const symbols = '%^&*!@#$~'

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
