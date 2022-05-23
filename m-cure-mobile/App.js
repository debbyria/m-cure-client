import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import MainStack from './navigation/MainStack';
import AppStack from './navigation/AppStack';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store/index'
import LoginScreen from './screen/LoginScreen';
import Register from './screen/Register';
import HomeScreen from './screen/HomeScreen';
import AddTransaction from './screen/AddTransaction';
import EditTransaction from './screen/EditTransaction';
import Category from './screen/Category';
import Chat from './screen/Chat';
import ConsultantList from './screen/ConsultantList';
import Report from './screen/Report';
import Payment from './screen/Payment';
import VideoCall from './screen/VideoCall';
import ReportDetail from './screen/ReportDetail';
import ConsultationHistory from './screen/ConsultationHistory';
import Profile from './screen/Profile';
import Report from './screen/Report';
import ReportIncome from './screen/ReportIncome';
import ReportExpense from './screen/ReportExpense';
import Chat from './screen/Chat';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        {/* <SafeAreaView> */}
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              paddingVertical: 8,
            }}
          >
            {/* <GestureHandlerRootView> */}
            <Stack.Navigator>
              {/* LANDING PAGE */}
              <Stack.Screen name="Login Screen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />

              {/* HOME SCREEN */}
              <Stack.Screen name="Home Screen" component={HomeScreen} />

              {/* USER */}
              <Stack.Screen name="Profile" component={Profile} />

              {/* CRUD SCREEN */}
              <Stack.Screen name="Add Transaction" component={AddTransaction} options={{ headerShown: false }} />
              <Stack.Screen name="Edit Transaction" component={EditTransaction} options={{ headerShown: false }} />

              {/* REPORT */}
              <Stack.Screen name="Report" component={Report} />
              <Stack.Screen name="ReportDetail" component={ReportDetail} />

              {/* CONSULTANT SCREEN */}
              <Stack.Screen name="Consultant List" component={ConsultantList} />

              {/* CONSULTATION ACTION */}
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="VideoCall" component={VideoCall} />
              <Stack.Screen name="Consultation History" component={ConsultationHistory} />

              {/* DRAWER */}
              <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }} />

              {/* </GestureHandlerRootView> */}
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </TailwindProvider>
    </Provider >

  );
}
