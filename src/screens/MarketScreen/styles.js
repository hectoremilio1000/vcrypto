import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    height: 150,
    resizeMode: "contain",
  },

  balanceContainer: {
    width: "100%",
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
