import {createStore} from "redux"
import reducer from './reducers'
import { addContact } from "./actions";

const store = createStore(reducer)
// store.dispatch(updateUser({firstName:"Jeff"}))
// store.dispatch(updateUser({middleName:"Ayieko"}))
// store.dispatch(updateUser({lastName:"Owuor"}))

store.dispatch(addContact({name:"Busta Rhymes",phone:"0115422903"}))
store.dispatch(addContact({name:"My Shayo",phone:"0115422903"}))
store.dispatch(addContact({name:"Igbo",phone:"0115422903"}))

export default  store;

