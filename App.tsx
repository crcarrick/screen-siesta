import 'reflect-metadata'
import 'expo-dev-client'

import { SafeAreaView } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'

import { APIProvider } from './api'
import { DatabaseProvider } from './database'
import { Settings } from './screens'

export default function App() {
  return (
    <NativeBaseProvider>
      <DatabaseProvider>
        <APIProvider>
          <SafeAreaView>
            <Settings />
          </SafeAreaView>
          <StatusBar style="auto" />
        </APIProvider>
      </DatabaseProvider>
    </NativeBaseProvider>
  )
}
