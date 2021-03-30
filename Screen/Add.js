// import React, {Component} from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   useColorScheme,
//   View,
// } from 'react-native';

// class Add extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//   firstName: '',
//   lastName: '',
//   }
//   }
  
//   postOrder = () => {
//   url = "https://app-api-geny.herokuapp.com/products/add";
  
//   let data = {
  
//   name: this.state.firstName,
//   quantity: this.state.lastName,
//   group:'3'
  
//   }
  
//   console.log('Data:' + JSON.stringify(data)) 
//   fetch(url, {
//   method: "POST",
//   headers: {
    
//     "Content-Type": "application/json"
//     },
//   body: JSON.stringify(data)
  
// }).then((response)=>console.log(response))
//   };
  
//   render() {
  
  
//   return (
//   <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#708DD1', justifyContent: "center" }}>
//   <Text>Checkout Page</Text>
//   <TouchableOpacity
//   style={{height: 40,
//     margin: 12,
//     backgroundColor:'red',}}
//     onPress={() =>this.props.navigation.navigate('Products')}
    
//   >
//   <Text style={{color: "#fff"}}> Move </Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//   style={{height: 40,
//     margin: 12,
//     backgroundColor:'red',}}
    
//   onPress={this.postOrder}>
//   <Text style={{color: "#fff"}}> Pors Order </Text>
//   </TouchableOpacity>
  
//   <TextInput style={{height: 40,
//     margin: 12,
//     borderWidth: 1,}}
//   placeholder="name"
//   value={this.state.firstName}
//   onChangeText={firstName => this.setState({firstName})}
//   returnKeyType="next"
//   underlineColorAndroid='rgba(0,0,0,0)'
//   selectionColor={'black'}
//   numberOfLines={1}/>
  
//   <TextInput style={{height: 40,
//     margin: 12,
//     borderWidth: 1,}}
//   placeholder="quantity"
//   value={this.state.lastName}
//   onChangeText={lastName => this.setState({lastName})}
//   returnKeyType="next"
//   underlineColorAndroid='rgba(0,0,0,0)'
//   selectionColor={'black'}
//   numberOfLines={1}/>

//   </View>
//   );
//   }
//   }
  
//   export default Add;



import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

class Add extends Component {
  constructor(props) {
  super(props);
  this.state = {
  firstName: '',
  lastName: '',
  }
  }
  
  postOrder = () => {
  url = "https://app-api-geny.herokuapp.com/products/add";
  
  let data = {
  
  name: this.state.firstName,
  quantity: this.state.lastName,
  group:'3'
  
  }
  
  console.log('Data:' + JSON.stringify(data)) 
  fetch(url, {
  method: "POST",
  headers: {
    
    "Content-Type": "application/json"
    },
  body: JSON.stringify(data)
  
}).then((response)=>console.log(response))
  };
  
  render() {
  
  
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#708DD1', justifyContent: "center" }}>


    <View style={{
        backgroundColor: '#646EEA', marginLeft: 20,
        marginRight: 20, marginTop: 60, borderRadius: 15,
        
    }}>
        <TextInput
            style={{ fontSize: 20, margin: 10,backgroundColor:'white',borderRadius:10,}}
            placeholder="Name of the Product"
            underlineColorAndroid="black"
            returnKeyType="next"
            value={this.state.firstName}
onChangeText={firstName => this.setState({firstName})}

        />
        <TextInput
            style={{ fontSize: 20, margin: 10,backgroundColor:'white',borderRadius:10  }}
            placeholder="Quantity Required"
            keyboardType="number-pad"
            underlineColorAndroid="black"
            returnKeyType="next"
            value={this.state.lastName}
onChangeText={lastName => this.setState({lastName})}
        

        />
        
    </View>
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    }}>
        <TouchableOpacity
            style={styles.button}
            onPress={() =>this.props.navigation.navigate('Products')}
        >
            <Text style={styles.buttonLable}>Back</Text>

        </TouchableOpacity>
         <TouchableOpacity
            style={styles.button}
            onPress={this.postOrder}>
        
            <Text style={styles.buttonLable}>Add Product</Text>

        </TouchableOpacity>
    </View>
</View>
  );
  }
  }
  const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        height: 45,
        width: "65%",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#20E3BC',
        justifyContent: "center",
        borderColor:'#1EB698'
    },
    buttonLable: {
        fontSize: 24,
        color: "black"
    }
});
  
  export default Add;