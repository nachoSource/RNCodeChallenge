import React from "react";
import { Text, View } from "react-native";
import { FieldProps } from "../../interfaces/components/books";
import styles from "./Field.style";

const Field = ({
  containerStyle = {},
  dark = false,
  label = "",
  numberOfLines = 2,
  value,
}: FieldProps) => (
  <View
    style={[
      styles.field,
      containerStyle,
      !!value ? { display: "flex" } : { display: "none" },
    ]}
  >
    {!!label && (
      <Text style={[styles.text, dark ? styles.textDark : styles.textLight]}>
        {label}
      </Text>
    )}
    <View style={styles.textContainer}>
      <Text
        ellipsizeMode="tail"
        numberOfLines={numberOfLines}
        style={[styles.text, dark ? styles.textDark : styles.textLight]}
      >
        {value?.toString()}
      </Text>
    </View>
  </View>
);

export default Field;
