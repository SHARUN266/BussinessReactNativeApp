import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/FireBaseConfig";
import BusinessListCard from "../../components/BusinessList/businessListCard";
import { Colors } from "../../constants/Colors";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getBusinessList();
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
 
  }, []);
 
  const getBusinessList = async () => {
    
    const q = query(
      collection(db, "BussinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     
     setBusinessList(prev => [...prev, doc.data()]);
    });
  };
 // console.log(businessList)
  return (
    <View>
      {
        businessList?.length>0?
        <FlatList
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessListCard business={item} key={index} />
  )}
      />:
      <Text style={{fontSize:20,fontFamily:'outfit-bold',color:Colors.GRAY,textAlign:'center',marginTop:'40%'}}>
        No Business Found!
      </Text>

      }
     
    </View>
  );
}
