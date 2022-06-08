export const imageTypes = ['png', 'jpg', 'jpeg', 'tiff', 'gif'];

export const isImage = (file) => {
  if (!file || typeof file != 'string') return false;

  return imageTypes.some((m) => file.endsWith(m)) || file.startsWith('data:image/')
}

export const isPdf = (file) => {
  if (!file || typeof file != 'string') return false;

  return file.endsWith('pdf') || file.startsWith('data:application/pdf')
}