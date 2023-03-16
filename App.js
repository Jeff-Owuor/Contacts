// import  Example from './example/ScreenA'
// export default Example

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { StyleSheet,View} from 'react-native';
import Constants from 'expo-constants';
import contacts,{compareNames}  from './contacts'
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen"
import { fetchUsers } from "./Api";
import { Provider } from "react-redux";
import store from "./redux/store";

const  AppNavigator = createStackNavigator({
         AddContact:AddContactScreen,
         ContactList: ContactListScreen,
        ContactDetails:ContactDetailsScreen
},
{
    initialRouteName: "ContactList"
})

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  state={
    showContacts: true,
    contacts:[],
  }



  addContact = (newContact) => {
    this.setState(prevState=>({
      contacts:[...prevState.contacts,newContact],
    }))
  }
  render(){
  return (
    <Provider store={store}>
    <AppContainer
        screenProps={{
            contacts:this.state.contacts,
            addContact:this.addContact
        }}
    />
    </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    padding:Constants.statusBarHeight,
  },
  
});

