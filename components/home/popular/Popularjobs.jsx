import React from 'react'
import { icons, SIZES, COLORS } from '../../../constants';
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard';
import { useState } from 'react'
import {
  View, Text, TouchableOpactiy, Image, FlatList, ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';

import useFetch from '../../../hook/useFetch';

import styles from './popularjobs.style'

const Popularjobs = () => {
  const router = useRouter();

  const {isLoading, error, data} = useFetch(
    'search', {
      query: 'React Developer',
      num_pages: 1
    })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Coupons</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ): error ? (
          <Text>error</Text>
        ): (
          <FlatList
          data={[1,2,3,4,5]}
          renderItem={({ item }) => (
            <PopularJobCard
              // item = {item}
            />
          )}
          keyExtreactor={item => item?.job_id}
          contentContainerStyle={{ columnGap:SIZES.medium}}
          />
        )}
        </View>
    </View>
  )
}

export default Popularjobs