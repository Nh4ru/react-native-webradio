import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { Audio } from 'expo-av';
import { useState } from 'react';


// http://direct.mouv.fr/live/mouv-midfi.mp3

// const AUDIO_STREAM = 'https://radio.dekpo.com/stream.mp3';

const AUDIO_STREAM = 'http://direct.mouv.fr/live/mouv-midfi.mp3';

const soundCloudLink = () => {
  Linking.openURL('https://soundcloud.com/basspearl26');
}

const homeLink = () => {
  Linking.openURL('https://google.com');
}

export default function App() {


  const [sound, setSound] = useState(null);

  async function playSound() {

    if (sound === null) { 
    const { sound } = await Audio.Sound.createAsync(
      { uri: AUDIO_STREAM }
    )
    setSound(sound);
    sound.playAsync();

  }else{
    setSound(null);
    sound.stopAsync()
  }
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={homeLink}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
        <Text>My Web Radio</Text>
        <TouchableOpacity>
          <Ionicons name="person-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity>
          <Text>Content</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Entypo name="sound-mix" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={soundCloudLink}>
          <Entypo name="soundcloud" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={playSound} >
          <Entypo name="controller-play" size={70} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="youtube" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="typing" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  header: {
    backgroundColor: 'aquamarine',
    height: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  content: {
    backgroundColor: 'white',
    flex: 5,
    padding: 20,
  },
  footer: {
    backgroundColor: 'aquamarine',
    height: 100,
    borderTopColor: 'black',
    borderTopWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
