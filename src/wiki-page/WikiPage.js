import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.actions';

class WikiPage extends React.Component {
  render() {
    return (
      <div>
      <button onClick={() =>
      this.props.fetchPage('JavaScript')}>Fetch</button>
    );
  }
}

const WikiPageContainer = ReactRedux.connect(
  state => state.wiki,
  actions
)(WikiPage);

export default WikiPageContainer;
