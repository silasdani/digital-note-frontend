export const isImage = (file) => {
  if (!file || typeof file != 'string') return false;

  return file.startsWith('data:image/')
}

export const isPdf = (file) => {
  if (!file || typeof file != 'string') return false;

  return file.startsWith('data:application/pdf')
} 