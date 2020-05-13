import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  openTextStyle: {
    fontSize: 40,
    textAlign: "center",
    color: "grey",
    fontWeight: "300",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E83030",
  },
  footer: {
    position: "absolute",
    bottom: 5,
    backgroundColor: "blue",
    flexDirection: "row",
  },
  openCtn: {
    flex: 2,
    marginBottom: 10,
    height: 50,
    padding: 1,
  },
  searchquitCtn: {
    flex: 1,
    marginBottom: 10,
    height: 50,
    padding: 1,
  },
  titleText: {
    marginTop: 40,
    backgroundColor: "red",
  },
  btnContainerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "blue",
  },
  btnStyle: {
    flex: 1,
    width: null,
    height: null,
  },
});
