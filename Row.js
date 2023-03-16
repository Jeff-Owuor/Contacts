import  React  from 'react'
import {Text,TouchableOpacity,StyleSheet}  from "react-native"

export const  Row = props => (
             <TouchableOpacity style={styles.contactContainer}  onPress={()=>props.onSelectContact(props)}>
                <Text>{props.name}</Text>
                <Text>{props.phone}</Text>
             </TouchableOpacity>
)

const styles = StyleSheet.create({
    contactContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
      }
})