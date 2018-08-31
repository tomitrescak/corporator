import { Yoga } from 'data/yoga';

import * as TimeAgo from 'javascript-time-ago';
import * as en from 'javascript-time-ago/locale/en';

// Add locale-specific relative date/time formatting rules.
TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

const Ui = {
  relativeDate(date: Date | string | Yoga.DateTime) {
    // @ts-ignore
    return timeAgo.format(new Date(date));
  }
};

export const context = {
  Ui
};

declare global {
  namespace App { type Context = typeof context; }
}
