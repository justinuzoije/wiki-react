import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.actions';

class WikiPage extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

const WikiPageContainer = ReactRedux.connect(
  null,
  actions
)(WikiPage);

export default WikiPageContainer;
