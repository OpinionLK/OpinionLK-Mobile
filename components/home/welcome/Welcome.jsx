import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'

import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style'

const filterTypes = ["All", "Buy1get1free", "Discounts", "Free items", "Special packs"]

const Welcome = () => {
  const router = useRouter();
  const [activeFilterType, setActiveFilterType] = useState("All")

  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.userName}>Coupons</Text>
        <Text style = {styles.welcomeText}>Redeem Coupons with your Opinion points</Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="What are you looking for?" />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} 
          resizeMode="contain"
          style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style = {styles.tabsContainer}>
        <FlatList
        data={filterTypes}
        renderItem = {({ item }) => (
          <TouchableOpacity
          style = {styles.tab(activeFilterType, item)}
          onPress = {() => { setActiveFilterType(item);
          router.push('/search/${item}')}}>
            <Text style={styles.tabText(activeFilterType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle = {{columnGap: SIZES.small}}
        horizontal/>
      </View>
    </View>
  )
}

export default Welcome