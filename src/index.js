import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from 'redux';
import wikiPageReducer from './wiki-page/WikiPage.reducer';
import * as ReactRedux from 'react-redux';
import WikiPage from './wiki-page/WikiPage';
import WikiPageContainer from './wiki-page/WikiPage';
import ReduxThunk from 'redux-thunk';

const reducer = Redux.combineReducers({
  wiki: wikiPageReducer
});

// let store = Redux.createStore(reducer);

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <WikiPageContainer/>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
