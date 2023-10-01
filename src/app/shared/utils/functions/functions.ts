import { DatePipe } from "@angular/common";

export function formatDateForDatabase(date: string) {
  const [day, month, year] = date.split('/');
  const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(
    2,
    '0'
  )}T00:00:00`;
  return formattedDate;
}

export function formatToBrazilianDate(date: string): string | null {
  if (!date) {
    return '';
  }

  if (date.includes('T')) {
    return new DatePipe('pt-BR').transform(date.substring(0, 10), 'dd/MM/yyyy');
  }

  return date;
}
