import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import {Text,Button,View}  from "react-native"

function randomNumber(){
    return Math.floor(Math.random()*9)
}

class ScreenComponentOne extends React.Component{
    static  navigationOptions = {
        headerTitle:"Landing  screen",
        headerTintColor:"yellow",
        headerStyle:{
            backgroundColor:"black"
        }
    }
    render(){
        return (
            <View style={{flex:1,alignItems:"center",justifyContent:"center",borderWidth:24,borderColor:"yellow"}}>
                <Button  title="switch to screen two" onPress={()=>{
                    this.props.navigation.navigate("RouteNameTwo")
                }}/>
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component{
    static navigationOptions = ({navigation}) => {
        return{
            headerTitle:"Home screen",
            headerRight:()=><Button  title="Press me" onPress={()=>navigation.navigate('RouteNameThree',{number:22})}/>
        }
    }
    render(){
        return (
            <View style={{flex:1,alignItems:"center",justifyContent:"center",borderWidth:24,borderColor:"teal"}}>
                <Button  title="switch to screen three"  onPress={()=>{
                    this.props.navigation.navigate("RouteNameThree",{number:randomNumber()})
                }}/>
            </View>
        )
    }
}

class ScreenComponentThree extends React.Component{
    static  navigationOptions = ({navigation})=>{
        return {
            headerTitle:`Number: ${navigation.getParam("number")}`
        }
    }
    render(){
        return (
            <View style={{flex:1,alignItems:"center",justifyContent:"center",borderWidth:24,borderColor:"black"}}>
                <Text style={{fontSize:25}}>{this.props.navigation.getParam('number')}</Text>
                <Button  title="Screen Three" onPress={()=>{
                    this.props.navigation.goBack()
                }}/>
                <Button title="Generate New Number"  onPress={()=>{
                    this.props.navigation.setParams({number:randomNumber()})
                }}/>
            </View>
        )
    }
}


const AppNavitgator = createStackNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo":ScreenComponentTwo,
    "RouteNameThree":ScreenComponentThree,
})

export default createAppContainer(AppNavitgator)