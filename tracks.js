import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "./Themes/colors";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Tracks({title, artist, albumImage, albumName, duration, song_url, preview_url}) {
  const navigation = useNavigation();

  return(
    <Pressable style={styles.track} onPress={() => navigation.navigate("Song Details", {'song_url': song_url}) }>
      <Pressable style={styles.previewBox} onPress={(e) => {
          e.stopPropagation();
          navigation.navigate("Song Preview", {'preview_url': preview_url})
      }}>
          <AntDesign name="play" size={20} style={styles.playButton} />
      </Pressable>
      <View style={styles.container2}>
        <Image style={styles.albumImage} source={ {uri: albumImage} }/>
      </View>
      <View style={styles.container3}>
        <Text style={styles.trackTitle} numberOfLines={1}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.albumName} numberOfLines={1}>{albumName}</Text>
      </View>
      <View style={styles.container5}>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  track: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    paddingBottom: '2%',
    paddingHorizontal: '2%'
  },
  container1: {
    display: 'flex',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingEnd: '1%'
  },

  trackNum: {
    color: Colors.gray,
    fontSize: 15,
  },

  container2: {
    flex: 0.9,
    justifyContent: 'center'

  },
  albumImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  container3: {
    flex: 1.8,
    padding: '2%',
    justifyContent: 'center'
  },
  trackTitle: {
    color: 'white'
  },
  artist: {
    color: Colors.gray
  },
  container4: {
    flex: 1.3,
    paddingStart: '2%',
    justifyContent: 'center'
  },
  albumName: {
    color: 'white'

  },
  container5: {
    flex: 0.5,
    paddingEnd: '2%'
  },
  duration: {
    color: 'white'

  },
  previewBox: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 40
  },
  playButton: {
    color: Colors.spotify
  }
});