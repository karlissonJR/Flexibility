import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
  },

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  color1: {
    backgroundColor: '#8B4513',
  },

  color2: {
    backgroundColor: '#000080',
  },

  color3: {
    backgroundColor: '#8B008B',
  },

  image: {
    width: 70,
    height: 70,
  },

  containerImage: {
    flex: 2,
  },

});

export default styles;
