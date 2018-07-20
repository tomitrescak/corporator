import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Ui = {
  relativeDate(date: Date) {
    // @ts-ignore
    return dayjs().from(date);
  }
};

export const context = {
  Ui
};
