/*
 * @Author: lin@applippli.co.jp
 * @Date: 2025-03-06 14:38:01
 * @Last Modified by: lin@applippli.co.jp
 * @Last Modified time: 2025-03-06 17:21:21
 */

import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

interface IYearAndMonthBottomSheetProps {
  title: string;
  isShow: boolean;
  minYear: number;
  maxYear: number;
  onSelectedPicker: (year: number, month: number) => void;
  onClickCancel: () => void;
}

interface MonthItemProps {
  id: number;
  name: string;
}

const DATA: MonthItemProps[] = [
  {id: 1, name: '1月'},
  {id: 2, name: '2月'},
  {id: 3, name: '3月'},
  {id: 4, name: '4月'},
  {id: 5, name: '5月'},
  {id: 6, name: '6月'},
  {id: 7, name: '7月'},
  {id: 8, name: '8月'},
  {id: 9, name: '9月'},
  {id: 10, name: '10月'},
  {id: 11, name: '11月'},
  {id: 12, name: '12月'},
];

const date = new Date();
const YearAndMonthBottomSheet = (props: IYearAndMonthBottomSheetProps) => {
  const [selectedYear, setSelectedYear] = useState<number>(date.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(
    date.getMonth() + 1,
  );

  const onClickPrev = () => {
    if (selectedYear <= props.minYear) {
      return;
    }
    setSelectedYear(selectedYear - 1);
  };

  const onClickNext = () => {
    if (selectedYear >= props.maxYear) {
      return;
    }
    setSelectedYear(selectedYear + 1);
  };

  const MonthItem = (props: MonthItemProps) => (
    <TouchableOpacity
      onPress={() => setSelectedMonth(props.id)}
      style={{
        flex: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 5,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          width: 40,
          height: 40,
          backgroundColor: selectedMonth == props.id ? 'blue' : 'transparent',
        }}>
        <Text
          allowFontScaling={false}
          style={{
            color: selectedMonth == props.id ? 'white' : 'black',
            textAlign: 'center',
          }}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (props.minYear > props.maxYear) {
    console.error('min year should be less then max year');
  }

  return (
    <Modal animationType="slide" transparent={true} visible={props.isShow}>
      <View style={styles.backdrop}>
        <View style={styles.bottomSheetContainer}>
          {/* title */}
          <Text style={styles.titleTextStyle}>{props.title}</Text>

          {/* pre and next container */}
          <View style={styles.yearContainer}>
            {/* pre button */}
            <TouchableOpacity
              onPress={() => onClickPrev()}
              disabled={selectedYear <= props.minYear}>
              <Image
                source={require('../../assets/chevron-back-outline.png')}
                style={{width: 24, height: 24}}
                tintColor={selectedYear <= props.minYear ? 'gray' : 'black'}
              />
            </TouchableOpacity>

            {/* year text */}
            <Text allowFontScaling={false} style={styles.titleTextStyle}>
              {selectedYear}
            </Text>

            {/* next button */}
            <TouchableOpacity
              onPress={() => onClickNext()}
              disabled={selectedYear >= props.maxYear}>
              <Image
                source={require('../../assets/chevron-forward-outline.png')}
                style={{width: 24, height: 24}}
                tintColor={selectedYear >= props.maxYear ? 'gray' : 'black'}
              />
            </TouchableOpacity>
          </View>

          {/* month list */}
          <FlatList
            data={DATA}
            numColumns={3}
            renderItem={({item}) => <MonthItem id={item.id} name={item.name} />}
            keyExtractor={(item, index) => `${index}`}
            contentContainerStyle={{paddingVertical: 10}}
          />
        </View>

        {/* ok button */}
        <TouchableOpacity
          style={styles.okContainer}
          onPress={() => props.onSelectedPicker(selectedYear, selectedMonth)}>
          <Text style={styles.textOkButton}>OK</Text>
        </TouchableOpacity>

        {/* cancel button */}
        <View style={styles.cancelContainer}>
          <TouchableOpacity
            style={{marginVertical: 12}}
            onPress={props.onClickCancel}>
            <Text style={styles.textCancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default YearAndMonthBottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheetContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  titleTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  yearContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  okContainer: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  textOkButton: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 12,
  },
  cancelContainer: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  textCancelButton: {
    color: 'blue',
    alignSelf: 'center',
    fontSize: 18,
  },
});
