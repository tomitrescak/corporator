import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

import { Yoga } from 'data/yoga';

dayjs.extend(relativeTime);

const Ui = {
  relativeDate(date: Date | string | Yoga.DateTime) {
    // @ts-ignore
    return dayjs().from(date);
  }
};

export const context = {
  Ui
};
