import useCustom from '@/useCustom';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function UseRefScreen() {
  const inputRef = useRef<TextInput>(null);
  const [name, setName] = useState('');

  const value = useCustom()

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useRef Example</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Enter your name..."
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      {name !== '' && (
        <Text style={styles.greeting}>Hello, {name}!</Text>
      )}

      <Pressable style={styles.button} onPress={handleFocus}>
        <Text style={styles.buttonText}>Focus on input</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#0a7ea4',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 20,
    color: '#0a7ea4',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
