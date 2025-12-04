import { Colors } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';


export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.background,
  },
  title: {
    fontSize: 24,
    color: Colors.primary.text,
    fontWeight: 'bold',
  },
});
