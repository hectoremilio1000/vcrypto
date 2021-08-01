import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    marginVertical: 10,
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  symbol: {
    color: "#6b6b6b",
  },
  right: {
    alignItems: "flex-end",
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
});

export default styles;
