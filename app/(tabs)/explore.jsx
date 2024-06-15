import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import Category from "../../components/Home/Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/FireBaseConfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";
export default function Explore() {

  const [businessList,setBusinessList]=useState([])
 
  const GetBusinessByCategory = async (category) => {
    setBusinessList([])
    const q = query(
      collection(db, "BussinessList"),
      where("category", "==", category)
    );
    const querySnapShot = await getDocs(q);
   
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    });
  };

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Explore More
      </Text>
      {/* SearchBar */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 10,
          borderColor: Colors.PRIMARY,
          borderWidth: 1,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: "outfit", fontSize: 16 }}
        />
      </View>
      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />
      {/* Business List */}
      <ExploreBusinessList  businessList={businessList}/>
    </View>
  );
}
