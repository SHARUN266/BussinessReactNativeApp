import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../config/FireBaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

export default function PopularBusiness() {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    setBusinessList([])
    const q = query(collection(db, "BussinessList"), limit(10));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      setBusinessList(prev => [...prev, doc.data()]);
    });
  };

  return (
    <View  >
        <View
        style={{
          display: "flex",
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
       
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
         Popular business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          View All
        </Text>
      </View>


      <FlatList horizontal={true} showsHorizontalScrollIndicator={false}  data={businessList} renderItem={({item,index})=>(
          <PopularBusinessCard  business={item} key={index} />
      )}    />
    </View>
  );
}
