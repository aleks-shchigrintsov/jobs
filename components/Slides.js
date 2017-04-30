import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
  _renderLastSlide(index) {
    const { onComplete, data } = this.props;

    if (index === data.length - 1) {
      return(
        <Button
          title="Onwards!"
          buttonStyle={styles.buttonStyle}
          raised
          onPress={onComplete}
        />
      );
    }
  }

  _renderSlides() {
    return this.props.data.map((slide, index) => {
      const { text, color } = slide;

      return (
        <View key={text} style={[styles.slideStyle, {backgroundColor: color}]}>
          <Text style={styles.textStyle}>
            {text}
          </Text>

          {this._renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{flex: 1}}
      >
        {this._renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },

  textStyle: {
    fontSize: 30,
    color: '#FFF'
  },

  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};
