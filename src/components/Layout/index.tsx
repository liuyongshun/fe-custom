import React from 'react';

import Provider from '@store/provider';
import Nav from '@components/Nav';
import Loading from '@components/Loading';

import { Props } from '@/types';

import './index.scss';

const Layout = (props: Props) => (
  <Provider>
    <main className="layout">
      <div className="layout-main">{props.children}</div>
    </main>
    <Nav />
    <Loading />
  </Provider>
);

export default Layout;
