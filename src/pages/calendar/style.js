import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  conteiner:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent: 'center'
  },
  button:{
    backgroundColor: communStyles.primaryColor,
    height:55,
    width:55,
    borderWidth:1,
    borderColor:communStyles.secondaryColor,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  textButton:{
    fontSize: 22,
    fontWeight: 'bold',
    color:communStyles.secondaryColor
  },
  title:{
    fontSize: 60,
    color : '#b9996a',
    fontFamily: 'Lato'
  },
  conteinerTitle:{
    alignItems:'center',
    marginVertical: 50,
  },
  conteinerFilter:{
    marginBottom: 20,
    marginLeft: 3,
    flexDirection:'row-reverse'
  }
})