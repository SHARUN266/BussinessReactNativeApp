import { View, Text,Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function BusinessListCard({business}) {
    
  return (
    <View  style={{
      padding:10,
      margin:10,
      borderRadius:15,
      backgroundColor:'#fff',
      display:'flex',
      flexDirection:'row',
      gap:5,
      
    }}>
      <Image source={{uri:business.imageUrl}}   style={{height:120,width:120,borderRadius:15,}}/>
      <View  style={{
        flex:1
      }}>
        <Text  style={{fontFamily:'outfit-bold',fontSize:20}}>{business.name}</Text>
        <Text
        style={{
          fontFamily:'outfit',
          color:Colors.GRAY,
          fontSize:15
        }}
        >{business.address}</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Image
              source={require("../../assets/images/star.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "outfit" }}>4.5</Text>
          </View>
      </View>
    </View>
  )
}