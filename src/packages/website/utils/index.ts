export const handleGetId = (url: string) => {
  const urlParts = url.split('public')

  return urlParts[urlParts.length - 1]
}