import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC9CDF'
  },

  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  input: {
    height: 70,
    textAlign: 'center',
    width: '30%',
    fontSize: 20,
    marginTop: 24,
    backgroundColor: '#FFF',
    color: '#243870'
  },

  btn: {
    padding: 10,
    backgroundColor: "#EA428B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  btnTxt: {
    fontSize: 20,
    color: '#f7bad5',
    fontWeight: 'bold'
  },

  btnView: {
    marginTop: 20
  }
});

export default styles;