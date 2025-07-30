import type EN_JSON from '~/assets/locales/en.json';

type MessageSchema = typeof EN_JSON;

declare module 'vue-i18n' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends MessageSchema {}
}
