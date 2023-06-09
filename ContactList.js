import  React  from 'react'
import { SectionList,Text } from 'react-native'
import  {Row}  from './Row'

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

export  const  ContactList = (props) => {
    const renderItem = ({item})=>  <Row  {...item} onSelectContact = {props.onSelectContact}/>
    const  contactsByLetter = props.contacts.reduce((obj,contact)=>{
    const  firstLetter = contact.name[0].toUpperCase()
    return {
        ...obj,
        [firstLetter] : [...(obj[firstLetter] || []),contact]
    }
},{})
const  sections = Object.keys(contactsByLetter).sort().map(letter=>({
    title:letter,
    data:contactsByLetter[letter]
}))
    return ( 
            <SectionList  
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                sections={ sections}           
                />)
}

// ContactList.propTypes = {
//     renderItem:PropTypes .func,
//     renderSectionHeader:PropTypes .func,
//     contacts:PropTypes .array
// }