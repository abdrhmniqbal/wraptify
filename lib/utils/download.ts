import html2canvas from 'html2canvas-pro'

export const handleImageDownload = async ({ id }: { id: string }) => {
  const element = document.getElementById(id)
  const canvas = await html2canvas(element!, {
    useCORS: true,
    scale: 3.75,
    windowWidth: 1920,
    windowHeight: 1080,
  })
  const data = canvas.toDataURL('image/png')
  const link = document.createElement('a')

  link.href = data
  const now = new Date()
  const timestamp = now.getTime() / 1000
  const filename = `wraptify_${Math.floor(timestamp)}`
  link.download = filename

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
