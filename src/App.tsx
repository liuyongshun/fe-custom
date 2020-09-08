import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '@components/Layout/index';
import Provider from '@store/provider';
import Home from '@pages/Home/index';
import Recommand from '@pages/Recommand/index';
import Car from '@pages/Car/index';
import Profile from '@pages/Profile/index';
import NotFound from '@pages/NotFound/index';

function App(): any {
  return (
    <Provider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/recommand" component={Recommand} />
            <Route path="/car" component={Car} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
