import { StatusBar, StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from './routes/navigation';

const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors, 
    primary : '#004aad'
  }
}


export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
          <StatusBar barStyle="light-content" backgroundColor="#002aad" />
          <View style={styles.container}>
            <Navigation />
          </View>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff'
  }
})

