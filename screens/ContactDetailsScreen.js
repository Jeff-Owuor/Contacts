import React from "react";
import { View,Text ,Button} from "react-native";

export default class ContactDetailsScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle:navigation.getParam('name')
    })
    render(){
        return (
            <View>
                <Text>{this.props.navigation.getParam('phone')}</Text>
                <Button title="Go to Random Contact"  onPress={this.goToRandom}/>
            </View>
        )
    }

    goToRandom= () =>{
           contacts = this.props.screenProps.contacts
           phone = this.props.navigation.getParam('phone')
           let randomContact;
           while(!randomContact){
            const randomIndex = Math.floor(Math.random()*contacts.length)
            if(contacts[randomIndex].phone !== phone){
                randomContact = contacts[randomIndex]
            }
           }
           this.props.navigation.push("ContactDetails",{
            name:randomContact.name,
            phone:randomContact.phone
           })
    }
}