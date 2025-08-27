import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    contador > 0 && setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.counterText}>{contador}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleIncrement}>
            <Text style={styles.buttonText}>Aumentar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleDecrement}>
            <Text style={styles.buttonText}>Diminuir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={handleReset}
          >
            <Text style={styles.buttonText}>Zerar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(164, 204, 217, 0.14)", // leve transparência para ver o mar
  },
  title: {
    color: "#27548A",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#27548A",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#7F55B1",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    marginTop: 20,
    gap: 6,
  },
  resetButton: {
    backgroundColor: "#732255",
  },
});
