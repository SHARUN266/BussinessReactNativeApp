import { View, Text, FlatList, ActivityIndicator } from "react-native";
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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getBusinessList();
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
  }, []);

  const getBusinessList = async () => {
    setBusinessList([]);
    setIsLoading(true);
    const q = query(
      collection(db, "BussinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, doc.data()]);
    });
    setIsLoading(false);
  };
  // console.log(businessList)
  return (
    <View>
      {businessList?.length > 0 && isLoading == false ? (
        <FlatList
          onRefresh={getBusinessList}
          refreshing={isLoading}
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : isLoading ? (
        <ActivityIndicator
          style={{ marginTop: "60%" }}
          size={"large"}
          color={Colors.PRIMARY}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
            textAlign: "center",
            marginTop: "40%",
          }}
        >
          No Business Found!
        </Text>
      )}
    </View>
  );
}
