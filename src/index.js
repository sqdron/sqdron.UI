import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './app/app'
import {RoutingModule, StoreModule} from './app'

injectTapEventPlugin()

// // ========================================================
// // Browser History Setup
// // ========================================================
// /*
//  * 1. Create History
//  * 2. Setup Middleware
//  * 3. Setup Enchancers
//  * 4. Setup Reducers
//  * 5. Create Store
//  * 5. Debug Mode
//  * 6. Dev Mode
//  * 7. Hot Reload
//  * 8. Render
//  * */
//
var app = new App()
app.use(RoutingModule(__BASENAME__))
app.use(StoreModule(window.___INITIAL_STATE__))
app.run()
