import {createStore} from 'redux';
import rootReducer from './rootReducer'
// import reducer from './reducer/reducer'
const appStore = createStore(rootReducer);

export default appStore;
