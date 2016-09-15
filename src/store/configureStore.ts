import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/devTools';
import thunk from 'redux-thunk';


// webpack-hot-loader sets some extra attributes on node's `module` if that
// module has been hot-loaded in the browser.
interface HotNodeModule extends NodeModule {
    hot: { accept: Function };
}

declare let module: HotNodeModule;

// const finalCreateStore = compose(
//     applyMiddleware(thunk),
//     DevTools.instrument()
// )(createStore);

export default function configureStore(initialState) {

    // const store = finalCreateStore(rootReducer);
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk)
            // ,
            // DevTools.instrument()
        )
    );
    module.hot.accept();
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    console.log("Configuring store" + initialState);
    return store;
    // return createStore(
    //     rootReducer,
    //     initialState,
    //     compose(
    //         DevTools.instrument()
    //     )
    // )
}

// import { createStore, applyMiddleware } from 'redux'
//
// // webpack-hot-loader sets some extra attributes on node's `module` if that
// // module has been hot-loaded in the browser.
// interface HotNodeModule extends NodeModule {
//     hot: { accept: Function };
// };
// declare let module: HotNodeModule;
//
// import rootReducer from '../reducers'
// export default function configureStore(initialState) {
//     const store = createStore(rootReducer, initialState)
//     module.hot.accept();
//     if (module.hot) {
//         module.hot.accept('../reducers', () => {
//             const nextRootReducer = require('../reducers')
//             store.replaceReducer(nextRootReducer)
//         })
//     }
//     return store
// }