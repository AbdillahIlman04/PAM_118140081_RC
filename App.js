import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, SafeAreaView, View, ScrollView, StatusBar, Image, TextInput } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={{
            uri: "https://www.wallpapertip.com/wmimgs/93-931935_wallpaper-kayu.png"
          }}
          style={styles.image}>
          <Text style={styles.text}> Gudeg Jogja </Text>
          <Image
            style={styles.gudegLogo}
            source={{
              uri: 'https://cdn.shopify.com/s/files/1/0119/6632/articles/Nasi-Gudeg-Kendi_1024x1024.jpg?v=1471499431',
            }}
          />
          <View>
            <Separator />
            <Text style={styles.title}>
              <p>______________________________________________________________________________________________________________________________________________________________</p>
              <h2> A. Filosofi </h2>
              <p>   Makanan tradisional berperan penting dalam ketahanan dan kemandirian pangan. Semua
              jenis makanan tradisional dibuat dengan potensi lokal, tidak mungkin dibuat menggunakan
              bahan baku impor," kata Prof. Murdijati Gardjito, peneliti di Pusat Kajian Makanan Tradisional,
                Pusat Studi Pangan dan Gizi Universitas Gajah Mada. </p>
              <p>   Hari ini publik Jogja sepakat kalau gudeg adalah ikon kuliner mereka. Eksistensi makanan ini
              telah meniti jejak-jejak sejarah yang panjang, dimulai bersamaan dengan dibangunnya kerajaan Mataram
                Islam di Alas Mentaok yang ada di daerah Kotagede sekitar abad ke-15. Dalam arti generik, “alas” itu artinya hutan.</p>
              <p>
                Banyak pohon ditebang saat pembangunan itu, diantaranya adalah pohon nangka, kelapa, dan tangkil atau melinjo. Anugerah alam
                inilah yang menginspirasi dan mendorong para pekerja untuk membuat makanan dari bahan-bahan tersebut.
                Jumlah mereka banyak, lelah dan lapar, maka nangka muda (disebut “gori”) yang dimasak jumlahnya juga sangat banyak.
             </p>
              <p>   Dari konteks historis ini, jelas gudeg tidak lahir dari rahim bourgeoisie, melainkan dari rahim proletariat, begitulah dalam
              kaca mata Marxisme. Gudeg kemudian menjadi salah satu ekspresi “manunggaling kawula gusti” yang memang sudah berurat akar dalam
                 batin orang Jawa— begitu kata seorang Yesuit ahli budaya Jawa, almarhum Prof. Zoetmulder, SJ.</p>
              {"\n"}
              <h2> B. Resep Membuat Gudeg </h2>
              <p> Bahan :
        {"\n"} - 1 kg nangka muda
        {"\n"} - 5 lembar daun jati/daun jambu
        {"\n"} - 2 lembar daun salam
        {"\n"} - 2 cm lengkuas, geprek
        {"\n"} - 1 L santan encer
        {"\n"} - 500 ml Air
        {"\n"} - 1 sdt garam
        {"\n"} - 5 butir telur rebus
        {"\n"} - 1/4 ekor ayam kampung
        {"\n"}{"\n"}
         Bumbu halus :
         {"\n"} - 15 siung bawang putih
         {"\n"} - 6 siung bawang putih
         {"\n"} - 8 butir kemiri, sangrai
         {"\n"} - 3 sdm ketumbar
         {"\n"} - 135 gram gula merah
         {"\n"} - 1/2 sdm garam
         {"\n"}{"\n"}
         Cara membuat:
         {"\n"} - Haluskan bawang merah, bawang putih, kemiri, ketumbar, gula merah, dan garam dengan sedikit air.
         {"\n"} - Masukkan nangka muda, ayam , sereh, lengkuas, daun salam, bumbu halus, gula merah, garam , air dan santan . Tutup dengan daun jati. Masak selama 1 jam.
         {"\n"} - Masukkan daging, aduk rata, lalu masukkan santan. Masak dengan api kecil sambil sesekali diaduk.
         {"\n"} - Setelah 30 menit, masukkan telur rebus dan santan. Masak selama 3 jam.
         {"\n"}Sajikan gudeg nangka bersama kuah santan areh. </p>
              <p>______________________________________________________________________________________________________________________________________________________________</p>
            </Text>
          </View>
          <Separator />
          <Text style={styles.tab}>
            <h2> Masukkan Komentar Anda</h2></Text>
          <StatusBar
            backgroundColor="red"
            barStyle="light-content" />
          <TextInput
            placeholder="Tambahkan Komentar"
            placeholderTextColor={'grey'}
            style={styles.textInput} />
          <Button
            title="Kirim Komentar"
            color="#532d2c"
            onPress={() => Alert.alert("Button Sederhana")} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    margin: 40,
  },

  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: "white",
    marginHorizontal: 50,

  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#f194ff',
    borderBottomWidth: 'StyleSheet.hairlineWidth',
  },
  title: {
    textAlign: 'justify',
    marginVertical: 18,
    paddingLeft: 75,
    paddingRight: 70,
    backgroundColor: 'white',
    borderTopColor: 10,
  },
  tab: {
    paddingLeft: 75,
    color: "white"
  },
  textInput: {
    height: 40,
    borderColor: "dark green",
    borderBottomWidth: 3,
    marginBottom: 36,
    marginTop: 30,
    paddingLeft: 75,
  },
  gudegLogo: {
    width: 800,
    height: 475,
    marginVertical: 40,
    marginHorizontal: 75,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  }
});
export default App;