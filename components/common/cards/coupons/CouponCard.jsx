import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { icons, SIZES, COLORS, images } from '../../../../constants';

import styles from './couponcard.style'
import { Directions, FlatList } from 'react-native-gesture-handler';

const CouponCard = (item, selectedCoupon, handleCardPress) => {
  return (
    <View style={styles.container(selectedCoupon, item)}>
      {/* Coupon part of the card */}
      <TouchableOpacity style={styles.couponContainer}>
        <View style={styles.logoContainer(selectedCoupon, item)}>
          <Image source={images.c_bogof} resizeMode="contain" style={styles.logoImage}/>
        </View>
        <View style={styles.infoContainer}> 
          <Text style={styles.Title}>{item.title}</Text>
          <Text style={styles.Subtitle} numberOfLines={1}>{item.description}</Text>
          <Text style={styles.Description}>{item.end_time}</Text>
        </View>
      </TouchableOpacity>

      {/* button part of the coupon card */}

      <TouchableOpacity style={styles.getBtn}>
        <Text style={styles.buttonText}>GET</Text>
      </TouchableOpacity>

    </View>
  )
}

export default CouponCard