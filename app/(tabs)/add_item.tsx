import { Colors } from '@/constants/theme';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddItemScreen() {
  const [foto, setFotoUri] = useState<string | null>(null);
  const [items, setItems] = useState({
                                      name: '',
                                      quantity: '',
                                      price: '',
                                      category: '',
                                      description: '',
                                    });

  const abrirCamera = async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();

    if (!perm.granted) {
      alert("Preciso da permissão pra câmera, parça.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setFotoUri(result.assets[0].uri);
    }
  };

  const abrirGaleria = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!perm.granted) {
      alert("Preciso da permissão pra galeria, parça.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setFotoUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Item</Text>
      <View style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <TextInput style={[styles.input, { flex: 2 }]} placeholder="Nome do Item" placeholderTextColor={Colors.primary.text} value={items.name} onChangeText={(text) => setItems({ ...items, name: text })} />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Quantidade" placeholderTextColor={Colors.primary.text} value={items.quantity} onChangeText={(text) => setItems({ ...items, quantity: text })} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Preço" placeholderTextColor={Colors.primary.text} value={items.price} onChangeText={(text) => setItems({ ...items, price: text })} />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Categoria" placeholderTextColor={Colors.primary.text} value={items.category} onChangeText={(text) => setItems({ ...items, category: text })} />
        </View>
        <TextInput multiline={true} style={styles.multilineInput} placeholder="Descrição" placeholderTextColor={Colors.primary.text} value={items.description} onChangeText={(text) => setItems({ ...items, description: text })} />
        {foto && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: foto }} style={styles.image} />
          </View>
        )}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.buttonFoto, { flex: 1, marginRight: 1 }]} onPress={abrirCamera}>
            <Text style={styles.buttonFotoText}>Tirar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonFoto, { flex: 1, marginLeft: 2 }]} onPress={abrirGaleria}>
            <Text style={styles.buttonFotoText}>Escolher da Galeria</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonFotoText}>Adicionar Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.background,
  },
  title: {
    fontSize: 24,
    color: Colors.primary.text,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.primary.text,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: Colors.primary.text,
  },
  scrollView: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  multilineInput: {
    height: 100,
    borderWidth: 1,
    borderColor: Colors.primary.text,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: Colors.primary.text,
  },
  button:{
    backgroundColor: Colors.primary.text,
    padding: 12,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  buttonFoto: {
    backgroundColor: Colors.primary.text,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonFotoText: {
    color: Colors.primary.background,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
