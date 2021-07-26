import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background:{
    flex:1,
  },
  container:{
    
    marginTop: 60
    
  },
  title:{
    alignItems: 'center',
  },
  textTitle:{
    fontSize: 40,
    color : '#b9996a',
    fontFamily: 'Lato'
  },
  appCalendar:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    flexWrap: 'wrap'
  },
  boxDayMonth:{
    backgroundColor:'#ddd',
    height:50,
    width:50,
    borderWidth:1,
    borderColor:'#b9996a',
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  boxFilter:{
    flexDirection: 'row-reverse',
    width:'100%',
    marginBottom: 15,
    marginTop: 60
  },
  textDayMonth:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#b9996a'
  }
})