import {StyleSheet} from 'react-native'
import communStyles from '../../communStyles'

export default StyleSheet.create({
  conteiner:{
    flex:1,
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
    fontSize: 25,
    fontWeight: 'bold',
    color:communStyles.secondaryColor
  },
})