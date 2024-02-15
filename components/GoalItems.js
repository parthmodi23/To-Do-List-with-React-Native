import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal } from "react-native";

const Goalltems = (props) => {
    console.log("comming from add goals " + props); // Log props to check if onDelete is present

    return (

        <View style={{}}>

            <Text style={styles.taskcss} >{props.title}</Text>
            <View style={styles.editdelete}>
                <View style={styles.innerbutton}>
                    <Button title="Done" color='#7CFC00' onPress={() => { props.onDone(props.id) }} />
                </View>
                <View style={styles.innerbutton}>
                    <Button title='Edit' color='#7DF9FF'/>
                </View>
                <View style={styles.innerbutton}>
                    <Button title='Delete' color='red' onPress={() => { props.onDelete(props.id) }} />
                </View>
            </View>

        </View>);
};


const styles = StyleSheet.create({
    taskcss: {
        backgroundColor: '#d3eafd',
        borderRadius:5,
        height:50,
        margin: 10,
        fontSize:19,
        fontFamily: 'sans-serif-ligh',
        padding:7,
        textAlign:'center',
        justifyContent:'center'
    },
    editdelete: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        margin: 10, 
        
    },
    innerbutton: {
        backgroundcolor:'red',
       
        borderRadius:10,
        width: '25%'
    }
})
export default Goalltems;
