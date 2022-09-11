import {View, SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalStyles from './GlobalStyles';
import SearchBar from './components/search/SearchBar';
import Categories from './components/search/Categories';
import RestaurantItems, {localRestaurants} from './components/search/RestaurantItems';

const YELP_API_KEY = "uPz0TBHmjk53HRzUWfnHo-XhCFTgDnB59YZCt9Zyh2MhT8MR7_3zjR_Fvoz-Zuk26I82Kp8K5Nz4WmeGUEnm7x3eCuQaedWtN8NU-DlmoPeIruGL1Wh3OqulKRsaY3Yx"

export default function Home() {

  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const[city, setCity] = useState('Atlanta'); 

  const getRestaurantsFromYelp = () => {
    
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    };

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses))
  }; 

  useEffect(() => {
    getRestaurantsFromYelp(); 
  }, [city])

  
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style = {{backgroundColor: 'white', padding: 15}}>
            
            <SearchBar cityHandler={setCity}/>
        </View>
        
        <ScrollView showsVerticalScrollIndicator = {false}> 
          <Categories />
          <RestaurantItems restaurantData = {restaurantData}/>
        </ScrollView>
    </SafeAreaView>
  )
};
