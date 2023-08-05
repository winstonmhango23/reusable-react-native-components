// import React from 'react';
// import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
// import Card from './components/Card';

// const products = [
//   {
//     id: '1',
//     name: 'Product A',
//     price: 49.99,
//     image: require('./assets/products/fashion-8012239_1280.jpg'), // Use static image path
//   },
//   {
//     id: '2',
//     name: 'Product B',
//     price: 59.99,
//     image: require('./assets/products/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg'), // Use static image path
//   },
//   {
//     id: '3',
//     name: 'Product C',
//     price: 59.99,
//     image: require('./assets/products/sarah-dorweiler-gUPiTDBdRe4-unsplash.jpg'), // Use static image path
//   },
  
// ];

// const App = () => {
//   const handleCardPress = (productId: string) => {
//     // ... (unchanged)
//   };


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
//   // alignItems: 'center',
//   backgroundColor: '#f0f0f0',
// },
// listContainer: {
//   paddingTop: 16,
//   alignItems: 'center',
// },
// taskbar: {
//   backgroundColor: '#007bff',
//   height: 60,
// },
// });

// export default App;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Table from './components/Table';

// const salesData = [
//   { id: 1, productName: 'Product A', price: 49.99 },
//   { id: 2, productName: 'Product B', price: 59.99 },
//   // Add more sales data as needed
// ];

// const SalesScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Table data={salesData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#ffffff',
//   },
// });

// export default SalesScreen;


import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Table from './components/Table';

const salesData = [
  { id: 1, productName: 'Product A', price: 49.99 },
  { id: 2, productName: 'Product B', price: 59.99 },
  // Add more sales data as needed
];

const SalesScreen = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#ffffff" "#007bff"  /> */}
      <StatusBar barStyle="dark-content" backgroundColor= "#007bff"  />
      <View style={styles.taskbar} />
      <View style={styles.statusBarPlaceholder} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Table data={salesData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBarPlaceholder: {
    height: StatusBar.currentHeight,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  taskbar: {
  backgroundColor: '#007bff',
  height: 60,
},
});

export default SalesScreen;
