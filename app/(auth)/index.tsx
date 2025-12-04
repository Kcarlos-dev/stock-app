import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Index() {
  const [user, setUser] = useState({username: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    if(user.username.trim().length <= 0 || user.password.trim().length <= 0) {
      alert('Preencha todos os campos');
      return ;
    }else{
      router.push('/(tabs)');
    }
  }
  useEffect(() => {
    if (showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }

  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Ionicons name="person-circle" size={100} color="#493443" />
          <Text style={styles.title}>Login</Text>
      </View>

      <TextInput style={styles.input} placeholder="user" placeholderTextColor="#493443" 
              value={user.username} 
              onChangeText={(text) => setUser({...user, username: text})} />

      <View style={styles.buttonEyeContainer}>
        <TextInput style={{width: '80%', color: '#493443'}} placeholder="password" placeholderTextColor="#493443"
             value={user.password} onChangeText={(text) => setUser({...user, password: text})} 
             secureTextEntry={!showPassword} />
       
        <TouchableOpacity  onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Ionicons name="eye" size={28} color="#493443" />
          ) : (
            <Ionicons name="eye-off" size={28} color="#493443" />
          )}
        </TouchableOpacity>

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleLogin()}>
          <Text style={[styles.buttonText, styles.button]}>Acessar</Text>
        </TouchableOpacity>
      </View>
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
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.primary.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    color: Colors.primary.text,
    borderWidth: 1,
    borderColor: Colors.primary.text,
    borderRadius: 5,
    padding: 10,
    margin: 3,
    width: '80%',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 5,
  },
  button: {
    backgroundColor: '#72bab0',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonEyeContainer: {
    display: 'flex',
    width: '80%',
    borderWidth: 1,
    borderColor: Colors.primary.text,
    borderRadius: 5,
    padding: 5,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});