import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import IndexPage from "./../components/Index";
import { Redirect } from 'expo-router';

export default function Index() {
  return (
    <View>
      {/* <IndexPage /> */}
      <Redirect href="/tabs/home" />
    </View>
  )
}