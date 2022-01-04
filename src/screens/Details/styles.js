import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#f92e6a",
    borderRadius: 25,
    bottom: 30,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    width: "100%"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomColor: "#f92e6a",
    borderBottomWidth: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    padding: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});