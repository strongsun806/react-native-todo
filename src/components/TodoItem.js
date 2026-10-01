import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
        style={styles.textContainer} 
        onPress={() => onToggle(item.id)}
      >
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {item.completed ? '✅ ' : '⬜ '} {item.text}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deleteText: {
    color: '#ff5252',
    fontWeight: 'bold',
  },
});