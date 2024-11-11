import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // State untuk email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Fungsi untuk menangani tombol masuk
  const handleMasuk = () => {
    // Arahkan ke halaman input
    navigation.navigate('input');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Masuk</Text>
      
      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan email Anda"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Masukkan kata sandi Anda"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {/* Tombol Masuk */}
      <TouchableOpacity style={styles.tombolMasuk} onPress={handleMasuk}>
        <Text style={styles.teksMasuk}>Masuk</Text>
      </TouchableOpacity>

      {/* Ajakan Daftar */}
      <View style={styles.containerRegister}>
        <Text style={styles.teksAjakan}>Belum punya akun?</Text>
        <TouchableOpacity style={styles.tombolRegister}>
          <Text style={styles.teksRegister}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  tombolMasuk: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  teksMasuk: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  containerRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  teksAjakan: {
    fontSize: 16,
    color: '#666',
    marginRight: 5,
  },
  tombolRegister: {
    paddingVertical: 10,
  },
  teksRegister: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Login;
