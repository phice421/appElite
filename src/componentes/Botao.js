import React from "react";
import {StyleSheet, TouchableOpacity, Alert } from "react-native";
import Texto from "./Texto";

export default function Botao({ onPress, textoBotao }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "yellow",
    paddingVertical: 16,
    borderRadius: 6,
  },
  botaoTexto: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
