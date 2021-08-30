import {StyleSheet} from 'react-native'
import communStyles from '../../communStyles'

export default StyleSheet.create({
  conteiner:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center', 
    backgroundColor: "rgba(0,0,0,0.7)", 
  },
  conteinerTitle:{
    backgroundColor: communStyles.primaryColor,
    borderColor:communStyles.secondaryColor, 
    borderWidth:1, 
    borderRadius: 5, 
    paddingHorizontal: 10,
    alignItems:'center'
  },
  textTitle:{
    fontSize: 40,
    color : communStyles.secondaryColor,
    fontFamily: 'Lato'
  },
  boxDayMonth:{
    backgroundColor: communStyles.primaryColor,
    height:50,
    width:50,
    borderWidth:1,
    borderColor: communStyles.secondaryColor,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  conteinerButtons:
  {flexDirection:'row',
  marginTop:20, 
  marginBottom: 10, 
  justifyContent: 'center', 
  marginHorizontal: "1%"
  },
  textDayMonth:{
    fontSize: 25,
    fontWeight: 'bold',
    color:'#b9996a'
  },
})