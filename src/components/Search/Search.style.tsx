import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  button: {
    borderStyle: "solid",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  buttonText: { color: colors.secondary, fontSize: 17 },
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  selectedOption: { backgroundColor: colors.primary },
  textInput: {
    backgroundColor: colors.primary,
    padding: 2,
    fontSize: 17,
    width: "70%",
  },
});

export default styles;
