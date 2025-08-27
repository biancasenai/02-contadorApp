import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #5D688A",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007BFF",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    marginTop: 20,
    gap: 6,
  },
  resetButton: {
    backgroundColor: "#FF4136",
  },
});
