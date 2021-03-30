import React from "react";

import All from "./Screen/All";
import Add from "./Screen/Add"; 
import Update from "./Screen/Update";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const AuthStack = createStackNavigator();


  export default()=>
      <NavigationContainer>
        <AuthStack.Navigator>
              <AuthStack.Screen name ="Products" component={All}/>
              <AuthStack.Screen name ="Add" component={Add} />
              <AuthStack.Screen name ="Update" component={Update}/>
              

        </AuthStack.Navigator>
       

      </NavigationContainer>


  //   );
  // }
 