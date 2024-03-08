import React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, StatusBar } from "react-native";

export default function ToDoList({tasks}){
    return(
        <ScrollView>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                    <View style={styles.task}>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
            <StatusBar/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
  },
  completed: {
      backgroundColor: '#e0e0e0',
  },
  taskText: {
      fontSize: 16,
  },
});