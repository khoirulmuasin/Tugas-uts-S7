import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const InputDataProduk = () => {
  // State untuk menyimpan nilai input
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [foto, setFoto] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [harga, setHarga] = useState('');

  // Fungsi untuk menangani pengiriman data
  const handleSubmit = () => {
    // Lakukan aksi pengiriman data di sini, misalnya ke API atau database
    console.log({
      nama,
      deskripsi,
      foto,
      jumlah,
      harga,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Input Data Produk</Text>
      
      {/* Input Nama Produk */}
      <TextInput
        style={styles.input}
        placeholder="Nama Produk"
        value={nama}
        onChangeText={setNama}
      />

      {/* Input Deskripsi Produk */}
      <TextInput
        style={styles.input}
        placeholder="Deskripsi Produk"
        value={deskripsi}
        onChangeText={setDeskripsi}
      />

      {/* Input Foto Produk */}
      <TextInput
        style={styles.input}
        placeholder="URL Foto Produk"
        value={foto}
        onChangeText={setFoto}
      />
      
      {/* Input Jumlah Produk */}
      <TextInput
        style={styles.input}
        placeholder="Jumlah Produk"
        value={jumlah}
        onChangeText={setJumlah}
        keyboardType="numeric"
      />
      
      {/* Input Harga Produk */}
      <TextInput
        style={styles.input}
        placeholder="Harga Produk"
        value={harga}
        onChangeText={setHarga}
        keyboardType="numeric"
      />
      
      {/* Tombol Kirim Data */}
      <TouchableOpacity style={styles.tombolSubmit} onPress={handleSubmit}>
        <Text style={styles.teksSubmit}>Kirim Data</Text>
      </TouchableOpacity>
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
    fontSize: 24,
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
  tombolSubmit: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  teksSubmit: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default InputDataProduk;
