const numContacts =100

const  firstNames = ["Liam","Maxwell","Juan","Dean","Matteo","Malachi","Ivan","Elliott","Jesus","Emiliano",
                                   "Messiah","Gavin","Maddox","Camden","Hayden","Leon","Antonio","Justin","Tucker",'Emmanuel',
                                    'Barrett','Felix','Alex','Miguel','Abel','Alan','Beckett','Amari','Karter','Timothy','Abraham',
                                    'Jesse','Zayden','Blake','Alejandro',"Dawson",'Tristan','Victor','Avery','Joel','Grant','Eric','Patrick','Peter',
                                    "Richard",'Edward',"Andres","Emilio","Colt","Knox","Beckham","Adonis","Aaran", "Aaren", "Aarez", "Aarman",
                                     "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", 
                                     "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", 
                                     "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem",
                                      "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar",
                                       "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie",
                                        "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Garrett", "Garry", "Gary", 
                                        "Gavin", "Gavin-Lee", "Gene", "Geoff", "Geoffrey"
]

const lastNames = [
        "Judah", "Jude", "Jules", "Julian", "Julien", "Jun", "Junior", "Jura", "Justan", "Justin", 
        "Justinas", "Kaan", "Kabeer", "Kabir", "Kacey", "Kacper", "Kade", "Kaden", "Kadin", 
        "Kadyn", "Kaeden", "Kael", "Kaelan", "Kaelin",
        "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay", "Lysander", 
        "Maanav", "Maaz", "Mac", "Macallum", "Macaulay", "Macauley", "Macaully", "Machlan", "Maciej",
         "Mack", "Mackenzie", "Mackenzy", "Mackie", "Macsen", "Macy", "Madaki", "Maddison", "Maddox", "Madison",
         "Ryder", "Ryese", "Ryhs", "Rylan", "Rylay", "Rylee", "Ryleigh", "Ryley", "Rylie", "Ryo", "Ryszard", 
         "Saad", "Sabeen", "Sachkirat", "Saffi", "Saghun", "Sahaib", "Sahbian", "Sahil", "Saif", "Saifaddine", 
         "Saim", "Sajid", "Sajjad", "Salahudin", "Salman"
]

//generating a number between  min and max
const  rand = (maximum,minimum=0) => Math.floor(Math.random()*(maximum-minimum+1)) + minimum


const generateName =() =>   `${firstNames[rand(firstNames.length-1)]}  ${lastNames[rand(lastNames.length-1)]}`


const generatePhoneNumber = () => `07${rand(999,111)}${rand(999,111)}${rand(99,11)}`

const createContact = () => ({
    name:generateName(),
    phone:generatePhoneNumber()
})

export const compareNames = (contact1,contact2) => contact1.name > contact2.name

const addKeys = (val,key) =>( {key,...val})

export default Array.from({length:numContacts},createContact).map(addKeys)