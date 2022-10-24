export const getNumber = () => {
  let number = Math.floor(Math.random() * 1000000) + 100000
  if (number > 1000000) number -= 100000
  return number
}

export const getDay = async (date: Date) => {
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)
  return year + "-" + month + "-" + day
}
