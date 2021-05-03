import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
} from 'react-router-dom';
import PagesPromotionSearch from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/Form/Form';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/edit/:id" component={PagesPromotionForm} />
      <Route path="/create" component={PagesPromotionForm} />
      <Route path="/" component={PagesPromotionSearch} />
    </Switch>
  </Router>
);

export default Root;
