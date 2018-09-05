import { Prisma } from 'data/prisma';
import { Loader } from 'data/utils/loader';

/* =========================================================
    RESOLVER
   ======================================================== */

export class Localisation extends Loader<Prisma.Localisation, Prisma.LocalisationWhereInput> {
  constructor(db: () => Prisma.Prisma, language: Prisma.LanguageCode) {
    super(db, null, 'localisations', id => ({ language, code: id }));
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

/* =========================================================
    DEFAULT Localisations
   ======================================================== */

let initialised = false;

export async function loadDefaultLocalisations(context: ServerContext) {
  if (initialised) {
    return;
  }
  initialised = true;

  if (!(await context.i18n.exists())) {
    // tslint:disable-next-line:no-console
    console.log('Loading default localisations ...');

    await context.db.mutation.createLocalisation({
      data: { code: 'ProcessStarted', language: 'EN', text: 'Process "{0}" started' }
    });
    await context.db.mutation.createLocalisation({
      data: { code: 'ProcessFinished', language: 'EN', text: 'Process "{0}" finished' }
    });
    await context.db.mutation.createLocalisation({
      data: { code: 'ProcessAborted', language: 'EN', text: 'Process "{0}" aborted' }
    });
    await context.db.mutation.createLocalisation({
      data: { code: 'ActionStarted', language: 'EN', text: 'Action "{0}" started in "{2}"' }
    });
    await context.db.mutation.createLocalisation({
      data: { code: 'ActionFinished', language: 'EN', text: '{0} completed action "{1}" in "{2}"' }
    });
    await context.db.mutation.createLocalisation({
      data: {
        code: 'ActionAborted',
        language: 'EN',
        text: '{0} aborted action "{1}" in "{2}" because "{3}"'
      }
    });
    await context.db.mutation.createLocalisation({
      data: { code: 'ActionRequired', language: 'EN', text: 'Please "{0}" in "{1}" because "{2}"' }
    });
  }
}
