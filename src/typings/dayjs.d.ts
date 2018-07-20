declare module 'dayjs/plugin/relativeTime';

declare namespace dayjs {
  export interface Dayjs {
    from(): string;
  }
}
