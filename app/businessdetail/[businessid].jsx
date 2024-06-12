import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../config/FireBaseConfig';

export default function BusinessDetail() {
    const {businessid}=useLocalSearchParams();
    const [businessDetail,setBusinessDetail]=useState()
    useEffect(()=>{
        GetBusinessDetailById()
    },[])
    const GetBusinessDetailById=async()=>{
       const docRef=doc(db,'BussinessList',businessid)
       const docSnap=await getDoc(docRef);
       if(docSnap.exists()){
        setBusinessDetail(docSnap.data())
       }else{
        console.log("No such")
       }
     
    }
  return (
    <View>
      <Text>{businessid}</Text>
    </View>
  )
}