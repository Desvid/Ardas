export function formatTableDate(date: Date): string {
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strTime = `${hours}:${minutes < 10 ? '0'+minutes : minutes} ${ampm}`;
  return `${day} ${month}, ${year} ${strTime}`;
}