import * as React from 'react';

// @ts-ignore
import Head from 'next/head';

import { HomeLayout } from '../client/modules/home/home_view';

const Index = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.2/semantic.min.css"
      />
    </Head>
    <HomeLayout />
  </div>
);

export default Index;
