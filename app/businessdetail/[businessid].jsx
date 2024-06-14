import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../config/FireBaseConfig';
import {Colors} from "../../constants/Colors"
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';

export default function BusinessDetail() {
    const {businessid}=useLocalSearchParams();
    const [businessDetail,setBusinessDetail]=useState();
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        GetBusinessDetailById()
    },[])
    const GetBusinessDetailById=async()=>{
    
      setLoading(true)
       const docRef=doc(db,'BussinessList',businessid)
       const docSnap=await getDoc(docRef);
       if(docSnap.exists()){
       
        setBusinessDetail(docSnap.data())
       }else{
        console.log("No such")
       }

       setLoading(false)
     
    }

   
  return (
    <View>
      
      {
        loading? <ActivityIndicator  style={{marginTop:"70%"}} size={'large'} color={Colors.GRAY} /> :  (<View>
          {/* Intro */}
          <Intro businessDetail={businessDetail} />
          {/* Action Buttons */}
          <ActionButton  businessDetail={businessDetail} />
          {/* About Section */}
          <About  businessDetail={businessDetail} />
        </View>)
      }
    
    </View>
  )
}