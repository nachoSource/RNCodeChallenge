import React, { ReactElement, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  FlatList,
  View,
} from "react-native";
import { BooksListProps } from "../../interfaces/components/commons";
import { colors, styles as globalStyles } from "../../styles/global.styles";
import Text from "../Text";
import Book from "./Book";
import styles from "./BooksList.style";

const BooksList = ({
  data = [],
  error,
  pending,
}: BooksListProps): ReactElement => {
  const listMaxHeight = (Dimensions.get("screen").height * 80) / 100;
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      delay: 1700, // TODO remove this if possible
      duration: 1700,
      easing: Easing.in(Easing.quad),
      toValue: listMaxHeight,
      useNativeDriver: false,
    }).start();
  }, [heightAnim]);

  return (
    <View style={styles.list}>
      {pending && <ActivityIndicator size="large" color={colors.black} />}
      {!!data?.length && !error && !pending && (
        <Animated.View
          style={{
            height: heightAnim,
          }}
        >
          <View>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Book
                  dark={!!(index % 2)}
                  // TODO review this interface
                  item={item}
                />
              )}
            />
          </View>
        </Animated.View>
      )}
      {error && (
        <Text style={globalStyles.error}>
          Hubo un error al buscar la información de los libros.
        </Text>
      )}
      {!data?.length && !error && !pending && (
        <Text style={styles.warning}>Aún no se encontraron libros.</Text>
      )}
    </View>
  );
};

export default BooksList;
