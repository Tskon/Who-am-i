import React from 'react';
import {contentHeight} from 'lib/content';
import {Switch, Route} from 'react-router-dom';
import libPortfolio from 'lib/portfolio';

import PortfolioMenu from 'components/menu/portfolio-menu';
import Bredik from 'components/portfolio/bredik';
import Resume from 'components/portfolio/resume';
import Git from 'components/portfolio/git';
import Examples from 'components/portfolio/examples';

export default class Skills extends React.Component {
  componentDidMount() {
    contentHeight('.content');
    libPortfolio();
  }
  render() {
    return (
      <div className="content">
        <div className="portfolio-menu">
          <h2 className="portfolio-menu__title">Мой код</h2>
          <PortfolioMenu/>
        </div>
        <div className="portfolio-content">
          <Switch>
            <Route path="/portfolio/bredik" component={Bredik}/>
            <Route path="/portfolio/resume" component={Resume}/>
            <Route path="/portfolio/git" component={Git}/>
            <Route path="/portfolio/examples" component={Examples}/>
          </Switch>
        </div>
      </div>
    );
  }
}