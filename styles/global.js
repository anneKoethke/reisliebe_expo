import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerMenuIcon: {
    position: 'absolute',
    left: 10,
    color: '#fff'
  },
  headerText: {
    fontFamily: 'spicy-rice',
    color: 'white',
    letterSpacing: 4,
    fontSize: 20
  },
  screenTitleText: {
    fontFamily: 'spicy-rice',
    fontSize: 20
  },
  screenParagraph: {
    fontFamily: 'dosis-extra-light',
    fontSize: 20,
    marginTop: 15
  }
});