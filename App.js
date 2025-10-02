import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator, Dimensions } from "react-native";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const screenWidth = Dimensions.get("window").width;

  // Buscar filmes da API
  useEffect(() => {
    fetch("https://www.fabiooliveira.cloud/api_aula/filmes/", {
      headers: {
        "Authorization": "a8ea3f9c1e47b2d89f0d41b7f3c2d0c6"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setFilmes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar filmes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ color: "#fff", marginTop: 10 }}>Carregando filmes...</Text>
      </View>
    );
  }

  // Função para dividir os filmes em linhas de 2
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const linhas = chunkArray(filmes, 2);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Filmes da API</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {linhas.map((linha, index) => (
          <View key={index} style={styles.linha}>
            {linha.map((item) => (
              <View key={item.id} style={[styles.card, { width: (screenWidth / 2) - 20 }]}>
                <Image source={{ uri: item.linkPoster }} style={styles.poster} />
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.texto}>Franquia: {item.franquia}</Text>
                <Text style={styles.texto}>Ano: {item.anoLancamento}</Text>
                <Text style={styles.bilheteria}>Bilheteria: {item.valorArrecadacao.toLocaleString('pt-br')}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a11e1e",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#a11e1e",
    padding: 12,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  scroll: {
    padding: 8,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  poster: {
    width: "100%",
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