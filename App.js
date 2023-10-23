import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput, TouchableHighlight, Button} from 'react-native';

  const App = () => {
  const [F, setF] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [numero, setNumero] = useState(0);
  

  fatorial = (numero) => {
    var n = numero.numero;
    var fat = 1;

    for (let i = 1; i <= numero.numero; i++) {
      fat *= i;
    }
    setF(fat);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Cálculo do Fatorial</Text>
            <Image
              source={require('./assets/alert.png')} />
            <TextInput
       style={styles.inputTypeDesign}
        placeholder="Informe n"
        onChangeText={numero => setNumero(numero)}
        keyboardType="numeric"
      />
            <TouchableHighlight
              style={styles.botao}>
              <Button
                title="CALCULAR"
                onPress={() => fatorial({numero})} />
            </TouchableHighlight>
            <Text
              style={styles.entrada}>
              {F}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!{modalVisible})}
            >
              <Text>
                Sair
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;