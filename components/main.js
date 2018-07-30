import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './style';

function defineIndex(index){
  if(index == 2)
    return 0;

  return ++index;
}

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      colors: [styles.color1, styles.color2, styles.color3],
      index1: 0,
      index2: 1,
      index3: 2,
    };

    setInterval(() => {
      this.setState(() => {
        return {
          index1: defineIndex(this.state.index1),
          index2: defineIndex(this.state.index2),
          index3: defineIndex(this.state.index3),
        };
      });
    }, 100);

  }

  render() {

    let color1 = this.state.colors[this.state.index1];
    let color2 = this.state.colors[this.state.index2];
    let color3 = this.state.colors[this.state.index3];

    return (
      <View style={styles.mainContainer}>

        <View style={[styles.container1, color1]} />
        <View style={[styles.container2, color2]}>
          <View style={styles.containerImage}>
            <Image source={require('./img/anonymous.png')} style={styles.image}/>
          </View>
          <View style={styles.containerImage}>
            <Image source={require('./img/anonymous.png')} style={styles.image}/>
          </View>
          <View style={styles.containerImage}>
            <Image source={require('./img/anonymous.png')} style={styles.image}/>
          </View>
        </View>
        <View style={[styles.container3, color3]} />

      </View>
    );
  }
}
