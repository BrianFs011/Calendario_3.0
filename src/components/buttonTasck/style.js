import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  conteiner: {
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  boxReadActivity: {
    height: 40,
    width: "19%",
    alignItems: 'center',
    justifyContent:'center',
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'#b9996a', 
    backgroundColor: '#ddd',
    borderBottomWidth: 3,
    borderRightWidth: 3,
    paddingBottom: 1,
    marginBottom:2
  },
  textReadActivity:{
    fontSize: 25,
    color:'#b9996a',
    fontFamily: 'Lato',
  },
  textInput:{ 
    marginHorizontal: 10, 
    borderWidth:1, 
    borderColor:'#b9996a', 
    borderRadius: 5, 
    color:'#b9996a',
    fontSize: 18,
   //backgroundColor:'#cfcfcf'
  },
  width:{
    width: "60%"
  },
  window:{
    backgroundColor:'#ddd',
    borderWidth:1, 
    borderColor:'#b9996a', 
    borderRadius: 5
  }
})