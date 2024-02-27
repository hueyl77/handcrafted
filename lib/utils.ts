export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function isImgUrl(url: string) {
  return await fetch(url, {method: 'HEAD'}).then(res => {
    const contentType = res?.headers?.get('Content-Type')
    if (!contentType) {
      return false
    }

    const isImg = (contentType === 'binary/octet-stream' || contentType.startsWith('image'))
    
    return isImg
  })
}