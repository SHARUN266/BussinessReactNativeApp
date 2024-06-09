import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({ category ,onPressCategory}) {
  
    

  return (
    <TouchableOpacity  onPress={()=>onPressCategory(category)}>
      <View style={{ padding: 15, borderRadius: 99, marginRight: 10 ,backgroundColor:Colors.ICON_BG}}>
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "outfit-medium",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
