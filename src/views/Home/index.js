import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    { id: 1, label: 'Depósito Bancário', value: '4.395,90', date: '03/02/2024', type: 1},
    { id: 2, label: 'Conta de luz', value: '300,90', date: '09/02/2024', type: 0},
    { id: 3, label: 'Salário', value: '7.350,00', date: '05/03/2024', type: 1},
    { id: 4, label: 'Supermercado', value: '2.350,00', date: '05/04/2024', type: 0}
];

export default function Home ({ route }) {
    const [ showValues, setShowValues] = useState(false);
    const [showBalanc, setShowBalance] = useState(false);

    return(
        <View style={StyleSheet.container}>
            <Header name={route.params.name} showValues={showValues} setShowValues={setShowValues} set Show Balance={setShowBalance}/>
            {showBalance && <Balance saldo="9.295,90" gastos="5.405,13"/>}
            <Actions />
            <Text style={styles.container}>Últimas movimentações</Text>
            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movementes data={item} showValues={showValues} />}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});