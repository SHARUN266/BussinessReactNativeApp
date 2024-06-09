import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CategoryItem({category}) {
   console.log(category.name)

  return (
    <View>
        <Text>{category.name}</Text>
      <Image source={{uri:category.icon}} style={{width:40,height:40}}  />
    </View>
  )
}