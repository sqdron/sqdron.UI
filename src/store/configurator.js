import { combineReducers } from 'redux'
import { applyMiddleware, compose, createStore } from 'redux'

export default function configurator() {

  var configuration = {}
  var reducers = []
  var enhancers = [];


  function enhance(...enhancer){
    this.enhancers = [...this.enhancers, ...enhancer]
  }

  function reload(){

  }

  function create(initialState = {}) {
    return createStore(
      combineReducers({...reducers}),
      initialState,
      compose(
        // applyMiddleware(...middleware),
        ...enhancers
      )
    )
  }

  return {
    enhance,
    reload,
    create
  }
}
