export function formatDateForDatabase(date: string) {
  const [day, month, year] = date.split('/');
  const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(
    2,
    '0'
  )}T00:00:00`;
  return formattedDate;
}
