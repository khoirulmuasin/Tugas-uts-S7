import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Produk = () => {
  // State untuk produk yang diinput sebelumnya
  const [produkList] = useState([
    {
      id: 1,
      nama: 'Produk 1',
      deskripsi: 'Deskripsi Produk 1',
      foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRPirEDQ_KmR83FyHt8wDCMYpo1Sd7IdHS5EP_rvuvYWxU9olbMmIGGLuvnynfA9PECbNvToKN3njnSo9aM6DWDR2zJcE0a9ntwj6QRSMZSX-84XkXMXTTLgQyoqVs7BFRf6XEZ1ONnouRulEM0olE1Rt_9qa_3flctER55LU4SJCZSAJB0hsK8nqESDA/w400-h276-rw/IMG_1716279721-Foto%20Konsumen-Sosis%20Isi%20Jeroan,%20Waspadalah,%20Meskipun%20Nikmat!.jpg', // Ganti dengan URL foto produk
      harga: 100000,
    },
    {
      id: 2,
      nama: 'Produk 2',
      deskripsi: 'Deskripsi Produk 2',
      foto: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-20701055/big-babol_big-babol-permen-karet-rasa-aneka-buah--140-gr-zak-_full70.jpg', // Ganti dengan URL foto produk
      harga: 150000,
    },
    {
      id: 3,
      nama: 'Produk 3',
      deskripsi: 'Deskripsi Produk 3',
      foto: 'https://asset.kompas.com/crops/_9DiU-5y0lbHTZTZUDJ34H_UjB0=/0x0:780x390/1200x800/data/photo/2013/07/30/1325155shutterstock-14-1271780x390.jpg', // Ganti dengan URL foto produk
      harga: 200000,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.judul}>Produk Toko Kami</Text>

      {/* Menampilkan daftar produk */}
      {produkList.map((produk) => (
        <View key={produk.id} style={styles.produkCard}>
          {/* Foto Produk */}
          <Image source={{ uri: produk.foto }} style={styles.fotoProduk} />

          {/* Detail Produk */}
          <View style={styles.produkDetail}>
            <Text style={styles.namaProduk}>{produk.nama}</Text>
            <Text style={styles.hargaProduk}>Rp {produk.harga.toLocaleString()}</Text>
            <Text style={styles.deskripsiProduk}>{produk.deskripsi}</Text>
          </View>

          {/* Tombol Beli */}
          <TouchableOpacity style={styles.tombolBeli}>
            <Text style={styles.teksTombol}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  produkCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  fotoProduk: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  produkDetail: {
    padding: 15,
  },
  namaProduk: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hargaProduk: {
    fontSize: 16,
    color: '#e91e63',
    fontWeight: '500',
    marginBottom: 10,
  },
  deskripsiProduk: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 15,
  },
  tombolBeli: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    marginBottom: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  teksTombol: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Produk;
