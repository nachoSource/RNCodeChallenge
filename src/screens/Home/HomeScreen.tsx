import React, { ReactElement } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { BooksList } from "../../components";
import { HomeScreenProps } from "../../interfaces/screens";
import BaseLayout from "../BaseLayout";
import Search from "../../components/Search";

const HomeScreen = ({
  error,
  books,
  pending,
}: HomeScreenProps): ReactElement => (
  <BaseLayout>
    <View>
      <Search />
      <BooksList data={books} error={error} pending={pending} />
    </View>
  </BaseLayout>
);

export default connect(
  (state: any) => ({
    books: state.books.data,
    error: state.books.error,
    pending: state.books.pending,
  }),
  (dispatch) => ({})
)(HomeScreen);
