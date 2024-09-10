
import { SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {

  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="rgba(7,26,93,255)"  />
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "rgba(7,26,93,255)"
  }
})
