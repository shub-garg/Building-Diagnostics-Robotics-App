import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function AddProjectScreen() {
  const router = useRouter();
  const [buildingName, setBuildingName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerContact, setOwnerContact] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');

  const handleSubmit = () => {
    if (buildingName && ownerName && ownerContact && inspectionDate) {
      Alert.alert('Project Added', 'Your new project has been successfully added.');
      router.back(); // Navigate back to the previous screen
    } else {
      Alert.alert('Missing Information', 'Please fill out all fields.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80} // Adjust this value as needed
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Add New Project
          </ThemedText>

          <View style={styles.inputGroup}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Building Name
            </ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Enter building name"
              value={buildingName}
              onChangeText={setBuildingName}
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Owner Name
            </ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Enter owner's name"
              value={ownerName}
              onChangeText={setOwnerName}
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Owner Contact
            </ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Enter owner's contact"
              value={ownerContact}
              onChangeText={setOwnerContact}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText type="defaultSemiBold" style={styles.label}>
              Inspection Date
            </ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Enter inspection date"
              value={inspectionDate}
              onChangeText={setInspectionDate}
            />
          </View>

          <Button title="Submit" onPress={handleSubmit} />
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
});
