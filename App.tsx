import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const App = () => {
  const [result, setResult] = useState('0');
  const [first, setFirst] = useState(0);
  const [operation, setOperation] = useState(0);
  const setNumber = number => {
    if (result == 0) {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };
  const Clear = () => {
    setResult('0');
  };
  const sum = () => {
    setFirst(parseFloat(result));
    setResult(' ');
    setOperation('sum');
  };
  const emission = () => {
    setFirst(parseFloat(result));
    setResult(' ');
    setOperation('emission');
  };

  const multiplication = () => {
    setFirst(parseFloat(result));
    setResult(' ');
    setOperation('multiplication');
  };
  const division = () => {
    setFirst(parseFloat(result));
    setResult(' ');
    setOperation('division');
  };
  const equal = () => {
    switch (operation) {
      case 'sum':
        setResult(first + parseFloat(result));
        break;
      case 'emission':
        setResult(first - parseFloat(result));
        break;
      case 'multiplication':
        setResult(first * parseFloat(result));
        break;
      case 'division':
        setResult(first / parseFloat(result));
        break;
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttoon}>
        <TouchableOpacity style={styles.button} onPress={sum}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={emission}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={multiplication}>
          <Text style={styles.text}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={division}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={equal}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.numbers}>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('9')}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('8')}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('7')}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('6')}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('5')}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('4')}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('3')}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('2')}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('1')}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={Clear}>
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setNumber('0')}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'orange',
    width: 120,
    height: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  numbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  result: {
    fontSize: 40,
  },
  button: {
    backgroundColor: 'purple',
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoon: {
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
    marginBottom: 5,
  },
});
export default App;
