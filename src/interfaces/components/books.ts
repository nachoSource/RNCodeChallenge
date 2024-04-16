import { PropsWithChildren } from "react";
import { StyleProp } from "react-native";

type BookComponentProps = PropsWithChildren<{
  dark?: boolean;
  item: BookItemProps;
  selectBook: Function;
}>;

type BookItemProps = PropsWithChildren<{
  key: String;
  author: String;
  authorBio?: String;
  cover?: String;
  description?: String;
  firstPublishYear: Number;
  title: String;
}>;

type FieldProps = PropsWithChildren<{
  containerStyle?: StyleProp<any>;
  dark?: boolean;
  label?: string;
  numberOfLines?: number;
  value: String | Number | Date | Boolean;
}>;

export type { BookComponentProps, BookItemProps, FieldProps };
