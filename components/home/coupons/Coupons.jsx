import React from 'react'
import { icons, SIZES, COLORS } from '../../../constants';
import  CouponCard  from '../../common/cards/coupons/CouponCard';
import { useState } from 'react'
import {
  View, Text, TouchableOpactiy, Image, FlatList, ActivityIndicator, ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

import useFetch from '../../../hook/useFetch';

import styles from './coupons.style'

const Coupons = () => {
  const router = useRouter();

  const {isLoading, error, data} = useFetch(
    {
      page: '1',
      sort: 'update_time_desc',
    })

    console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Coupons</Text>
      </View>

      <ScrollView style={styles.cardsContainer} showVerticalScrollIndicator="false">
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ): error ? (
          <Text>error</Text>
        ): (
          <FlatList
          data={[1,2,3,4,5,6,7,8,9,10]}
          renderItem={({ item }) => (
            <CouponCard
              item = {item}
            />
          )}
          keyExtreactor={item => item?.id}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default Coupons