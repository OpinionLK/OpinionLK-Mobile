import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { icons, SIZES, COLORS } from '../../../../constants';

import styles from './popularjobcard.style'
import { FlatList } from 'react-native-gesture-handler';

const PopularJobCard = (item, selectedJob, handleCardPress) => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>

        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image source={{uri: item.employer_logo}} resizeMode="contain" style={styles.logo} />
        </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1} >{item.employer_name}</Text>

      <View stle={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <FlatList style={styles.tagsContainer} data={item.tags} renderItem={({item}) => (
          // <Text style={styles.tag}>{item}</Text>
          <Text style={styles.tag}>dummy</Text>
        )}/>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard