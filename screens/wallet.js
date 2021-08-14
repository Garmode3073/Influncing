import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native'
import {useState} from 'react'

const bodystyle = StyleSheet.create({
  button: {
    height: 100,
    width: 150,
    borderRadius: 15,
    backgroundColor: 'white',

    marginLeft: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Arial',
    padding: 10,
  },
  main: {
    backgroundColor: 'white',
    height: 400,
    paddingLeft: 40,
    paddingRight: 40,
  },
})

const Body = () => {
  const [amount, setAmount] = useState([
    {name: '$100', id: '100'},
    {name: '$200', id: '200'},
    {name: '$300', id: '300'},
    {name: '$400', id: '400'},
    {name: '$500', id: '500'},
    {name: '$600', id: '600'},
  ])

  return (
    <View style={bodystyle.main}>
      <Text style={{paddingBottom: 10, paddingTop: 10}}>
        Select the amount to buy
      </Text>
      <View>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={amount}
          renderItem={({item}) => (
            <TouchableOpacity
              style={bodystyle.button}
              onPress={() => Alert.alert(`Selected ${item.id}`)}>
              <Text style={bodystyle.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Body
