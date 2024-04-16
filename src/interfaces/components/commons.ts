import { PropsWithChildren, ReactNode } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { StyleSheet } from "react-native";
import { BookComponentProps } from "./books";

type BackButtonProps = PropsWithChildren<{
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}>;

type BooksListProps = PropsWithChildren<{
  data: BookComponentProps[] | [];
  error: boolean;
  pending: boolean;
}>;

type SearchProps = PropsWithChildren<{
  pending: boolean;
  searchBooks: Function;
}>;

type LinkProps = PropsWithChildren<{
  url: string;
  label: string;
  style?: StyleSheet.NamedStyles<any>;
}>;

type TextProps = PropsWithChildren<{
  children: string | string[];
  style?: StyleSheet.NamedStyles<any>;
}>;

type TouchableProps = PropsWithChildren<{
  children?: ReactNode;
  label?: string;
  style?: StyleSheet.NamedStyles<any>;
  onTouch?: Function;
}>;

export type {
  BackButtonProps,
  BooksListProps,
  SearchProps,
  LinkProps,
  TextProps,
  TouchableProps,
};
