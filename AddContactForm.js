import React from "react"
import  {TextInput,KeyboardAvoidingView,View,Button,StyleSheet}  from 'react-native'
import Constants from 'expo-constants'

export default class AddContactForm  extends React.Component{
    state = {
        name:"",
        phone:"",
        isFormValid:false
    }
    handleNameChange = (name) => {
        this.setState({name})
    }
    handlePhoneChange = (phone) => {
        if(+phone>=0 && phone.length <=10){
            this.setState({phone})
        }     
    }


    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                <TextInput  
                value={this.state.name} 
                onChangeText={this.handleNameChange}  
                style={styles.textStyling}
                />
                <TextInput  
                value={this.state.phone}
                onChangeText={this.handlePhoneChange}
                style={styles.textStyling} 
                keyboardType="numeric"
                />
                
                <Button   title="Add Contact"  onPress={this.handleSubmit} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
       formContainer: {
        paddingTop:Constants.statusBarHeight,
        paddingLeft:20,
        paddingRight:20,
        flex:1,
        justifyContent:"center"
       },
       textStyling:{
           borderWidth:2,
           borderColor:"black",
           padding:5,
           margin:4
       }
})