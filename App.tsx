/*
 * @Author: lin@applippli.co.jp
 * @Date: 2025-03-06 14:41:34
 * @Last Modified by: lin@applippli.co.jp
 * @Last Modified time: 2025-03-06 16:09:54
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {YearAndMonthBottomSheet} from './src/components';

const date = new Date();
function App(): React.JSX.Element {
  const [isShow, setShow] = useState<boolean>(false);
  const [selectedPickerData, setSelectedPickerData] = useState<{
    year: number;
    month: number;
  }>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });
  return (
    <View style={styles.container}>
      <View style={styles.selectedContainer}>
        <Pressable style={styles.rowContainer} onPress={() => setShow(!isShow)}>
          <Text
            style={
              styles.selectexTextStyle
            }>{`${selectedPickerData.year}年${selectedPickerData.month}月`}</Text>
          <Image
            source={require('./src/assets/chevron-down-outline.png')}
            style={{width: 24, height: 24}}
          />
        </Pressable>

        <YearAndMonthBottomSheet
          title="Year and Month Picker"
          isShow={isShow}
          limitedYear={2}
          onClickCancel={() => setShow(!isShow)}
          onSelectedPicker={(year: number, month: number) => {
            setSelectedPickerData({year, month});
            setShow(!isShow);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  selectedContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    width: 150,
  },
  selectexTextStyle: {
    color: 'black',
    // fontWeight: 'bold',
    flex: 1,
  },
});

export default App;
