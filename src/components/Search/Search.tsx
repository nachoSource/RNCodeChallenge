import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { SearchProps } from "../../interfaces/components/commons";
import { SEARCH_BOOKS_REQUEST } from "../../store/actions/types";
import Text from "../Text";
import styles from "./Search.style";
import { colors } from "../../styles/global.styles";

const Search = ({ pending, searchBooks }: SearchProps) => {
  const [term, setTerm] = useState("");

  const search = () => {
    console.log("Text Input: ", term);
    if (term.length >= 3) {
      searchBooks(term);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={pending}
        onPress={search}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      <TextInput
        onChangeText={setTerm}
        style={styles.textInput}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default connect(
  (state: any) => ({ pending: state.books.pending }),
  (dispatch) => {
    return {
      searchBooks: (term: string) =>
        dispatch({ type: SEARCH_BOOKS_REQUEST, data: term }),
    };
  }
)(Search);
