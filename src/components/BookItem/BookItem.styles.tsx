import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: "55%",
  },
  header: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingBottom: 5,
    width: "100%",
  },
  img: { width: "100%", height: 200 },
  longField: { flexDirection: "column", marginTop: 10 },
});

export default styles;
