import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => onToggle(item.id)}
        activeOpacity={0.7}
      >
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {item.completed ? '✅ ' : '⬜ '} {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
        activeOpacity={0.7}
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
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: '#334155',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#94a3b8',
  },
  deleteButton: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deleteText: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '600',
  },
});