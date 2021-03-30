import React, { useEffect,useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Image, Alert,ActivityIndicator,FlatList

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';





export default function All(props) {

    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

        const deleteHandler =(id)=>{
            const url='https://app-api-geny.herokuapp.com/products/delete'
            let data = {
        
                
                uuid:id
            
            
            
            }
            
            
            fetch(url, {
            method: "DELETE",
            headers: {
              
              "Content-Type": "application/json"
              },
            body: JSON.stringify(data)
            
          }).then((response)=>console.log(response))
        }

        


  useEffect(() => {
    fetch('https://app-api-geny.herokuapp.com/products/all/3')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  
       
    return (
        <View style={{ flex: 1, backgroundColor: '#708DD1',  }}>

            <View
                style={{
                   
                    alignItems: 'center',
                    margin: 15,
                    justifyContent: 'center'
                }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>props.navigation.navigate('Add')}
                >
                    <Text style={styles.buttonLable}>Add Product</Text>
                    
                </TouchableOpacity>
            
            </View>
            
            <View style={{ flex: 1, padding: 24, backgroundColor: '#646EEA',borderRadius:20, margin:30}}>
      {isLoading ? <ActivityIndicator/> : (
        
        <FlatList
        //   key={uuid}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress ={() =>deleteHandler(item.uuid)}
           
            
            >
                
            <View style={{ padding: 10, backgroundColor: 'white',borderRadius:20, margin:5,}} >
            
            <Text style={styles.buttonLable2}>{item.name}, {item.quantity}</Text>
            
            <TouchableOpacity
                    style={styles.button1}
                    onPress={() =>props.navigation.navigate('Update',{uuid:item.uuid})}
                >
                   
                    <Text style={styles.buttonLable1}>Update The Product</Text>

                </TouchableOpacity>
                
           
           
            </View>
            
            
            </TouchableOpacity>
          )}
        />
        
      )}
    </View>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        height: 45,
        width: "85%",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#20E3BC',
        justifyContent: "center",
        borderColor:'#1EB698'
    },
    buttonLable: {
        fontSize: 24,
        color: "black",
        alignSelf: "center"
    },
    button1: {
        borderWidth: 1,
        flexDirection:'row',
        height: 30,
      
        width: "55%",
        
        borderRadius: 10,
        
        backgroundColor: '#20E3BC',
        justifyContent: "center",
        borderColor:'#1EB698'
    },
    buttonLable1: {
        fontSize: 15,
        color: "black",
        alignSelf: "center"
    },
    buttonLable2: {
        fontSize: 20,
        color: "black",
        margin:5
        
    }
});



