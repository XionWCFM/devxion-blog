import dayjs from 'dayjs';
export const dateFormat = (date: string, format: string = 'YYYY년 MM월 DD일') =>
  dayjs(date).format(format);
