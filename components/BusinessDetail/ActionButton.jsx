import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Share,
 
} from "react-native";
import React from "react";

export default function ActionButton({ businessDetail }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
      url: "tel:" + businessDetail?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/pin.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" +
        businessDetail?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/web.png"),
      url: businessDetail?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
      url: businessDetail?.url,
    },
  ];

  const OnPressHandle = (item) => {
 
    if(item.name=='Share'){
     Share.share({
        message:businessDetail?.name+"\n Address:"+businessDetail?.address+"\n Find more details on Business Directory App by Sharun !"
      })
        return ;
    }
    Linking.openURL(item?.url);
  };
  return (
    <View style={{ backgroundColor: "#fff", padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={4}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => OnPressHandle(item)}>
            <Image style={{ height: 50, width: 50 }} source={item?.icon} />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
