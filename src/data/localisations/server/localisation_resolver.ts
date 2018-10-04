import { Prisma } from 'data/prisma';
import { Loader } from 'data/utils/loader';

/* =========================================================
    RESOLVER
   ======================================================== */

export class Localisation extends Loader<Prisma.Localisation, Prisma.LocalisationWhereInput> {
  constructor(db: () => Prisma.Prisma, language: Prisma.LanguageCode) {
    super(db, null, 'localisations', undefined, id => ({ language, code: id }));
  }

  async translate(code: string) {
    const translation = await this.findAll(code);
    if (translation.length === 0) {
      throw new Error(`Translation code ${code} does not exist!`);
    }
    return translation[0];
  }

  async format(code: string, params: string[]): Promise<string>;
  async format(code: string, ...params: string[]): Promise<string>;
  async format(code: string, params: any): Promise<string> {
    let translation = (await this.translate(code)).text;
    if (params && params.length) {
      for (let i = 0; i < params.length; i++) {
        translation = translation.replace('{' + i + '}', params[i]);
      }
    }
    return translation;
  }
}
