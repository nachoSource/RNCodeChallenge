import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { BookComponentProps } from "../../interfaces/components/books";
import { GET_BOOK_REQUEST } from "../../store/actions/types";
import Field from "../Field";
import styles from "./BooksList.style";

const Book = ({ dark = false, item, selectBook }: BookComponentProps) => {
  const navigation = useNavigation();
  const { key, author, firstPublishYear, title } = item;

  const handlePress = () => {
    selectBook(item);
    navigation.navigate("Book");
  };

  return (
    <TouchableOpacity key={key} onPress={handlePress}>
      <View
        style={[
          styles.element,
          dark ? styles.elementDark : styles.elementLight,
        ]}
      >
        <Field dark={dark} numberOfLines={1} label="Título:" value={title} />
        <Field dark={dark} label="Autor:" value={author} />
        <Field
          dark={dark}
          label="Primer año de publicación:"
          value={firstPublishYear}
        />
      </View>
    </TouchableOpacity>
  );
};

export default connect(
  () => ({}),
  (dispatch) => ({
    selectBook: (data: any) => dispatch({ type: GET_BOOK_REQUEST, data }),
  })
)(Book);
