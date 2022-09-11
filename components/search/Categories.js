import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/shopping-bag.png"), 
    text: 'pick-up', 
  }, 
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/soft-drink.png"), 
    text: 'Soft Drinks', 
  }, 
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/bread.png"), 
    text: 'Bakery Items', 
  }, 
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/fast-food.png"), 
    text: 'Fast Foods', 
  }, 
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/deals.png"), 
    text: 'Deals', 
  }, 
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/coffee.png"), 
    text: 'coffee and tea',
  }, 
  {
    image: require("/Users/malavpatel/Documents/GA_Tech/CS_4261/Restaurant-Locator-App/assets/images/desserts.png"), 
    text: 'Desserts', 
  }, 

]

export default function Categories() {
  return (
      <View style = {{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10, 
        paddingLeft: 20,
        
      }}
      >
        <ScrollView 
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator = {false}>

          {items.map((item, index) => (
            <View key = {index} style = {{marginRight: 15}}>
              <Image source = {item.image} style = {{
                width: 50, 
                height: 40, 
                resizeMode: 'contain', 
              }} 
              />
              <Text style = {{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
            </View>
          ))}

        </ScrollView>
      </View>
  )
}
