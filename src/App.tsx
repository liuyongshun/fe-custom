import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '@components/Layout/index';
import Provider from '@store/provider';
import Home from '@pages/Home/index';
import NotFound from '@pages/NotFound/index';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
