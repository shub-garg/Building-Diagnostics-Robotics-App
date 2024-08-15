import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: () => {
          // Perform any necessary logout logic here
          router.replace('../Screens/AuthScreen'); // Redirect to login screen after logout
        },
      },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.profileTitle}>Profile</ThemedText>

      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Image
          source={require('@/assets/images/profile-pic.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.userInfoText}>
          <ThemedText type="defaultSemiBold">Name: {'User Name'}</ThemedText>
          <ThemedText>Email: {'user@example.com'}</ThemedText>
        </View>
      </View>

      {/* Actions Section */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/profile')}>
          <ThemedText>Edit Profile</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
          <ThemedText>Logout</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Additional Features */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureButton} onPress={() => router.push('/profile')}>
          <ThemedText>View Reports</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton} onPress={() => router.push('/profile')}>
          <ThemedText>Settings</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileTitle: {
    position: 'absolute',
    top: 80,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 70,
    alignItems: 'center',
    marginTop: 5, // Add some margin to avoid overlap with title
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  userInfoText: {
    alignItems: 'flex-start',
  },
  actionsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  featuresContainer: {
    alignItems: 'center',
  },
  featureButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
});
