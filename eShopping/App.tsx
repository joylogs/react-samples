/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { PersistGate } from 'redux-persist/integration/react'
import ApplicationNavigator from './src/Navigators/Application';
import { persistor, store } from '.';
import { QueryClient, QueryClientProvider } from 'react-query';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: 'always', retry: false },
    mutations: {}
  }
})

const App = () => (
  <>
    <Provider store={store}>
      <PaperProvider>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={queryClient}>
            <View style={styles.container}>
              {/* {<StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />} */}
              <ApplicationNavigator />
            </View>
          </QueryClientProvider>
        </PersistGate>
      </PaperProvider>
    </Provider>
  </>
)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FF',
  },
})
