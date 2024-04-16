import { Animated, ScrollView, View } from "react-native";
import React, { ReactElement, useEffect, useRef } from "react";
import { DefaultBook } from "../../../assets";
import { BookItemProps } from "../../interfaces/components/books";
import Field from "../Field";
import styles from "./BookItem.styles";

const BookItem = ({
  author,
  authorBio,
  cover,
  description,
  firstPublishYear,
  title,
}: BookItemProps): ReactElement => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      delay: 300,
      toValue: 100,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <View style={styles.header}>
        {!!cover && (
          <Animated.Image
            source={{ uri: cover }}
            style={{ ...styles.img, opacity: fadeAnim }}
          />
        )}
        {!cover && <DefaultBook />}
        <View>
          <Field dark numberOfLines={3} value={title} />
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Field dark label="Author:" value={author} />
          <Field
            dark
            label="Descripción:"
            value={description}
            containerStyle={styles.longField}
          />
          <Field
            dark
            label="Publicado por primera vez en:"
            value={firstPublishYear}
          />
          <Field
            dark
            label="Más sobre el autor:"
            numberOfLines={100}
            value={authorBio}
            containerStyle={styles.longField}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default BookItem;
