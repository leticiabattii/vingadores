import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const filmes = [
  {
    id: 1,
    titulo: "Vingadores: Ultimato",
    franquia: "Marvel Studios",
    ano: 2019,
    bilheteria: "R$ 2.798.000.000",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
  },
  {
    id: 2,
    titulo: "Pantera Negra",
    franquia: "Marvel Studios",
    ano: 2018,
    bilheteria: "R$ 1.347.000.000",
    imagem:
      "https://br.web.img2.acsta.net/pictures/17/12/07/16/09/2291532.jpg",
  },
  {
    id: 3,
    titulo: "Homem-Aranha: Sem Volta Para Casa",
    franquia: "Marvel Studios / Sony",
    ano: 2021,
    bilheteria: "R$ 1.920.000.000",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg",
  },
  {
    id: 4,
    titulo: "Vingadores: Guerra Infinita",
    franquia: "Marvel Studios",
    ano: 2018,
    bilheteria: "R$ 2.048.000.000",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Infinity_War.jpg",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Filmes da Marvel</Text>
      </View>

      {/* Lista de filmes */}
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // duas colunas lado a lado
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.poster} />
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.texto}>Franquia: {item.franquia}</Text>
            <Text style={styles.texto}>Ano: {item.ano}</Text>
            <Text style={styles.bilheteria}>Bilheteria: {item.bilheteria}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B0000",
  },
  header: {
    backgroundColor: "#8B0000",
    padding: 12,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  lista: {
    padding: 8,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 6,
    marginBottom: 6,
  },
  titulo: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  texto: {
    fontSize: 12,
    textAlign: "center",
  },
  bilheteria: {
    fontSize: 13,
    fontWeight: "bold",
    color: "red",
    marginTop: 4,
    textAlign: "center",
  },
});
