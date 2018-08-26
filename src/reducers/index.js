import { combineReducers } from 'redux';
import ContactsReducer from './reducer_list'
import InputContactReducer from './reducer_input_field'
import BabyNameReducer from './reducer_baby_name'
const rootReducer = combineReducers({
    contacts: ContactsReducer,
    inputContact: InputContactReducer,
    babyName: BabyNameReducer
});
export default rootReducer;