import * as TimeAgo from 'javascript-time-ago';
import * as en from 'javascript-time-ago/locale/en';
import * as React from 'react';

import i18n from 'es2015-i18n-tag';

import { appStore } from 'client/stores/app_store';

import './conditional_components';
import './helpers';

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
  i18n,
  store: appStore
};

declare global {
  namespace App { type Context = typeof context; }
}

// register the i18n global tag

(global as any).I18 = ({ children, text }: { children: string; text?: string }) => {
  return <>{i18n([text || children] as any)}</>;
};
