import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logMiddleware from '../middleware/log';
import apiMiddleware from '../middleware/api';
import userMiddleware from '../middleware/user';



const configureStore = preloadedState => {

  const store = createStore(rootReducer, applyMiddleware(logMiddleware, apiMiddleware, userMiddleware));

  // const store = createStore(
  //   rootReducer,
  //   preloadedState,
  //   compose(
  //     applyMiddleware(thunk, api, createLogger()),
  //     DevTools.instrument()
  //   )
  // )

  if (module.hot) {

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store;
}

export default configureStore
