import React from "react";
import contacts from "../contacts";
import { View,Button,} from 'react-native';
import {ContactList} from "../ContactList"
import store from "../redux/store";
import { connect } from "react-redux";

class ContactListScreen extends React.Component{

    static navigationOptions= ({navigation})=>({
            headerTintColor:"silver",
            headerTitle:"Contacts",
            headerStyle:{backgroundColor:"black"},
            headerRight:()=><Button  title="add"  onPress={()=>{navigation.navigate("AddContact")}}/>
    })

    state={
        showContacts: true,
       
      }
      toggleContacts = () => {
        this.setState(prevState=>({
          showContacts:!prevState.showContacts
        }))
      }
      addContact = (newContact) => {
        this.setState(prevState=>({
          contacts:[...prevState.contacts,newContact],
          showForm:false,
        }))
      }
      sortContacts = () => {
        this.setState(prevState=>({
          contacts:[...prevState.contacts].sort(compareNames)
        }))
    }
    toggleForm = () => {
      this.props.navigation.navigate("AddContact")
    }
    render(){
      const contacts = store.getState().contacts
        return (
            <View>
                    {this.state.showContacts &&(
                    <ContactList 
                    contacts={this.props.contacts} 
                    onSelectContact = {contact=>{
                        this.props.navigation.navigate("ContactDetails",{
                            phone:contact.phone,
                            name:contact.name
                        })
                    }}
                        />
                    )}   
             </View>
        )
    }
    
}
const mapStateToProps = state => ({
    contacts:state.contacts
})
export default connect(mapStateToProps)(ContactListScreen)