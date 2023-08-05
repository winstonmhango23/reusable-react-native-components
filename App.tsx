// import React from 'react';
// import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
// import Table from './components/Table';

// const salesData = [
//   { id: 1, productName: 'Product A', price: 49.99 },
//   { id: 2, productName: 'Product B', price: 59.99 },
//   { id: 3, productName: 'Product C', price: 59.99 },
//   { id: 4, productName: 'Product D', price: 59.99 },
//   { id: 5, productName: 'Product E', price: 59.99 },
// ];

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* <StatusBar barStyle="dark-content" backgroundColor= "#007bff"  /> */}
//       <StatusBar barStyle="dark-content" backgroundColor= "#FF0060"  />
//       <View style={styles.taskbar} />
//       <View style={styles.statusBarPlaceholder} />
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <Table data={salesData} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   statusBarPlaceholder: {
//     height: StatusBar.currentHeight,
//     backgroundColor: '#ffffff',
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     padding: 16,
//   },
//   taskbar: {
//   backgroundColor: '#FF0060', //#FF0060  #007bff
//   height: 60,
// },
// });

// export default App;


// import React from 'react';
// import { View, Button, StyleSheet, StatusBar } from 'react-native';
// import Overlay from './components/Overlay';
// import CustoomButton from './components/CustoomButton';

// const App = () => {
//   const [showForm, setShowForm] = React.useState(false);

//   const handleSubmitForm = (formData: any) => {
//     // Handle form submission and data here
//     console.log('Form Data:', formData);
//     setShowForm(false);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor= "#007bff"  />
//       {/* <View style={styles.taskbar} /> */}
//       {/* <Button title="Open Form" onPress={() => setShowForm(true)} /> */}
//       <CustoomButton title="Open Form" onPress={() => setShowForm(true)}/>
//       <Overlay
//         visible={showForm}
//         onClose={() => setShowForm(false)}
//         onSubmit={handleSubmitForm}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   taskbar: {
//       backgroundColor: '#007bff', //#FF0060  #007bff
//       height: 60,
//     },
// });

// export default App;



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

const ProductDetailsScreen = () => {
  const handleBack = () => {
    // Handle the back button press
  };

  const handleRightIconPress = () => {
    // Handle the press of the right icon
  };

  return (
    <View style={styles.container}>
      <Header
        title="Product Details"
        onBack={handleBack}
        showBackButton
        rightIcon={<Text style={styles.iconText}>Icon</Text>}
        onRightIconPress={handleRightIconPress}
      />
      {/* Add your product details content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
