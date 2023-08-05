import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import Card from './components/Card';

const products = [
  {
    id: '1',
    name: 'Product A',
    price: 49.99,
    image: require('./assets/products/fashion-8012239_1280.jpg'), // Use static image path
  },
  {
    id: '2',
    name: 'Product B',
    price: 59.99,
    image: require('./assets/products/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg'), // Use static image path
  },
  {
    id: '3',
    name: 'Product C',
    price: 59.99,
    image: require('./assets/products/sarah-dorweiler-gUPiTDBdRe4-unsplash.jpg'), // Use static image path
  },
  
];

const HomeScreen = () => {
  const handleCardPress = (productId: string) => {
    // ... (unchanged)
  };


// return (
//   <View style={styles.container}>
//     <StatusBar backgroundColor="#007bff" barStyle="light-content" />
//     <View style={styles.taskbar} />
//     <FlatList
//       data={products}
//       renderItem={({ item }) => <Card product={item} onPress={() => handleCardPress(item.id)} />}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.listContainer}
//     />
//   </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#f0f0f0',
// },
// listContainer: {
//   flex: 1,
//   // justifyContent: 'center', // Center items vertically
//   alignItems: 'center', // Center items horizontally
//   paddingTop: 16,
// },
// taskbar: {
//   backgroundColor: '#007bff',
//   height: 60,
// },
// });

// export default HomeScreen;

return (
  <View style={styles.container}>
    <StatusBar backgroundColor="#007bff" barStyle="light-content" />
    <View style={styles.taskbar} />
    <FlatList
      data={products}
      renderItem={({ item }) => <Card product={item} onPress={() => handleCardPress(item.id)} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  // alignItems: 'center',
  backgroundColor: '#f0f0f0',
},
listContainer: {
  paddingTop: 16,
  alignItems: 'center',
},
taskbar: {
  backgroundColor: '#007bff',
  height: 60,
},
});

export default HomeScreen;