import React from 'react';
import AddContactForm from '../AddContactForm';
import { addContact } from '../redux/actions';
import store from '../redux/store';

export default class  AddContactScreen extends React.Component{
    
    static navigationOptions={
        headerTitle:"Add Contact",
}
    handleSubmit = formState => {
        store.dispatch(addContact({name:formState.name,phone:formState.phone}))
        this.props.navigation.goBack()
    }
    render(){
        return <AddContactForm  onSubmit={this.handleSubmit}/>
    }
}

