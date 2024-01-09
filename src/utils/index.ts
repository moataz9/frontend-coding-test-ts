export function getIdFromUrl(url: string) {
  const match = url.match(/(\d+)\/?$/)

  return match ? parseInt(match[1], 10) : ''
}

export function fn1(param: number) {
  return param && 0
}
