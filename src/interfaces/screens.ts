import { PropsWithChildren } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { BookItemProps, BookComponentProps } from "./components/books";

type BookScreenProps = PropsWithChildren<{
  book: BookItemProps;
  error: Boolean;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  pending: Boolean;
}>;

type HomeScreenProps = PropsWithChildren<{
  books: BookComponentProps[] | [];
  error: boolean;
  pending: boolean;
}>;

export type { BookScreenProps, HomeScreenProps };
