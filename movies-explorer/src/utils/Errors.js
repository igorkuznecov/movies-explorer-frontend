export function readError(err) {
  if (err.includes('400')) {
    return 'Введены некорректные данные'
  }
  if (err.includes('409')) {
    return 'Пользователь с такой почтой уже зарегистрирован'
  }
  if (err.includes('401')) {
    return 'Неверное имя пользователя или пароль'
  }
  else {
    return 'Что-то пошло не так...'
  }
}
