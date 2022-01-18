export const addStorageItem = <T>(key: string | number, value: T): void => {
  localStorage.setItem(
    key.toString(),
    typeof value === 'string' ? value : JSON.stringify(value)
  )
}

export const getStorageItem = <T>(key: string): T | null | string => {
  const data = localStorage.getItem(key)
  if (!data) return null

  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

export const removeStorageItem = (key: string): void => {
  localStorage.removeItem(key)
}
