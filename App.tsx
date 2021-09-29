/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {range} from 'lodash';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import WheelPicker from 'react-native-wheely';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const days = range(0, 30).map(n => n.toString());
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const years = range(1992, 2021).map(n => n.toString());

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedIndex, setSelectedIndex] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={styles.wheels}>
          <WheelPicker
            containerStyle={styles.wheelContainer}
            selectedIndicatorStyle={styles.selectedItem}
            itemStyle={styles.dayItem}
            itemTextStyle={styles.dayText}
            selectedIndex={selectedIndex}
            options={days}
            onChange={setSelectedIndex}
            scrollEventThrottle={16}
            visibleRest={2}
            opacityFunction={x => Math.pow(0.5, x)}
            rotationFunction={x => 1 - Math.pow(0.5, x)}
          />
          <WheelPicker
            containerStyle={styles.wheelContainer}
            selectedIndicatorStyle={styles.selectedItem}
            itemStyle={styles.monthItem}
            itemTextStyle={styles.monthText}
            selectedIndex={selectedIndex}
            options={months}
            onChange={setSelectedIndex}
            scrollEventThrottle={16}
            visibleRest={2}
            opacityFunction={x => Math.pow(0.5, x)}
            rotationFunction={x => 1 - Math.pow(0.3, x)}
          />
          <WheelPicker
            containerStyle={styles.wheelContainer}
            selectedIndicatorStyle={styles.selectedItem}
            itemStyle={styles.yearItem}
            itemTextStyle={styles.yearText}
            selectedIndex={selectedIndex}
            options={years}
            onChange={setSelectedIndex}
            scrollEventThrottle={16}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  wheels: {
    flexDirection: 'row',
  },
  wheelContainer: {flex: 1},
  selectedItem: {
    backgroundColor: 'transparent',
    borderTopWidth: 0.5,
    borderTopColor: '#CCCCCC',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
  },
  dayItem: {},
  dayText: {textAlign: 'right', fontFamily: 'Gilroy-Regular', fontSize: 23},
  monthItem: {alignItems: 'flex-start', paddingHorizontal: undefined},
  monthText: {textAlign: 'right', fontFamily: 'Gilroy-Regular', fontSize: 23},
  yearItem: {alignItems: 'flex-start', paddingHorizontal: undefined},
  yearText: {textAlign: 'left', fontFamily: 'Gilroy-Regular', fontSize: 23},
});

export default App;
