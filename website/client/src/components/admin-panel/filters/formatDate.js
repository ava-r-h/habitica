import dayjs from 'dayjs';

export default function formatDate (inputDate) {
  if (!inputDate) return '';
  const date = dayjs(inputDate).utcOffset(0).format('YYYY-MM-DD HH:mm');
  return `${date} UTC`;
}
