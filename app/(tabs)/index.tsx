import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/BDR_intro.gif')}
          style={[styles.reactLogo, { width: '100%', height: '100%' }]}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.folderContainer}>
        <TouchableOpacity style={styles.folderBox} onPress={() => router.push('../Screens/AddProjectScreen')}>
          <ThemedText type="defaultSemiBold">Add New Project</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.folderBox}>
          <ThemedText type="defaultSemiBold">Current Project</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  folderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust spacing between the boxes
    marginTop: 16,
    marginHorizontal: 'auto',
    paddingHorizontal: 0,
  },
  folderBox: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    height: 120,
    marginHorizontal: 8, // Adjust spacing between boxes
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Adds shadow for iOS
    shadowOpacity: 0.2, // Adds shadow for iOS
    shadowRadius: 4, // Adds shadow for iOS
  },
});
