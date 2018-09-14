import * as TimeAgo from 'javascript-time-ago';
import * as en from 'javascript-time-ago/locale/en';

import i18n from 'es2015-i18n-tag';

// Add locale-specific relative date/time formatting rules.
TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

const Ui = {
  urlName(name: string) {
    let result = name.replace(/\:/g, '');
    result = result.replace(/ - /g, '-');
    result = result.replace(/\W/g, '-');
    do {
      result = result.replace(/--/g, '-');
    } while (result.indexOf('--') >= 0);
    return result.toLowerCase();
  },
  relativeDate(date: Date | string | any) {
    // @ts-ignore
    return timeAgo.format(new Date(date));
  }
};

export const context = {
  Ui,
  i18n
};

declare global {
  namespace App { type Context = typeof context; }
}
