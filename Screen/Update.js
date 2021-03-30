import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,

} from 'react-native';


export default function Update({route}) {
   
   const [ updateQuantity, setUpdateQuantity] = useState("");
    
    const updateOrder = () => {
        url = "https://app-api-geny.herokuapp.com/products/update";
        
        let data = {
        
            quantity: updateQuantity,
            uuid:route.params.uuid
        
        
        
        }
        
        
        fetch(url, {
        method: "PATCH",
        headers: {
          
          "Content-Type": "application/json"
          },
        body: JSON.stringify(data)
        
      }).then((response)=>console.log(response))
   
  

        };


    return (

        <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#708DD1', justifyContent: "center" }}>


            <View style={{
                backgroundColor: '#646EEA', marginLeft: 20,
                marginRight: 20, marginTop: 60, borderRadius: 15,
                
            }}>
                
                <TextInput
                    style={{ fontSize: 20, margin: 10,backgroundColor:'white',borderRadius:10  }}
                    placeholder="Quantity Required"
                    keyboardType="number-pad"
                    underlineColorAndroid="black"
                    onChangeText={ (value)=> {setUpdateQuantity(value)}}
                    

                />
                
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    style={styles.button}
                   
                    onPress={updateOrder}
                >
                    <Text style={styles.buttonLable}>Update The Product</Text>

                </TouchableOpacity>
                
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        height: 45,
        width: "65%",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 60,
        backgroundColor: '#20E3BC',
        justifyContent: "center",
        borderColor:'#1EB698'
    },
    buttonLable: {
        fontSize: 24,
        color: "black"
    }
});

