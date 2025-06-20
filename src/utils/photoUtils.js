export const parsePhotoIndex = (photoIndex) => {
  const parsed = parseInt(photoIndex, 10)
  return isNaN(parsed) || parsed < 0 ? 0 : parsed
}
