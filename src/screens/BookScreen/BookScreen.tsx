import React, { ReactElement } from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { BackButton, Text } from "../../components";
import BookItem from "../../components/BookItem";
import { BookScreenProps } from "../../interfaces/screens";
import { styles as globalStyles } from "../../styles/global.styles";
import BaseLayout from "../BaseLayout";
import styles from "./BookScreen.styles";

const BookScreen = ({
  book,
  error,
  navigation,
  pending,
}: BookScreenProps): ReactElement => (
  <BaseLayout>
    <BackButton navigation={navigation} />
    <View style={styles.container}>
      {pending && <ActivityIndicator />}
      {!!book && <BookItem {...book} />}
      {error && (
        <Text style={globalStyles.error}>
          Hubo un error al buscar la información del libro.
        </Text>
      )}
    </View>
  </BaseLayout>
);

export default connect((state: any) => {
  return {
    book: state.books.currentBook || null,
    error: state.books.error || null,
    pending: state.books.pending || false,
  };
})(BookScreen);
