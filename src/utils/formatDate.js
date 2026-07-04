export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
