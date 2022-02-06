import { StyleSheet, Text, SafeAreaView, FlatList, Pressable, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import Images from "./Themes/images";
import Tracks from "./tracks";
import millisToMinutesAndSeconds from "./utils/millisToMinuteSeconds";

// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function App() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      // TODO: Select which option you want: Top Tracks or Album Tracks
      // Comment out the one you are not using
      myTopTracks(setTracks, token);
      // albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);

  function SpotifyAuthButton() {
    return (
      <Pressable onPress={() => {
        promptAsync();
      }}>
        < View style={styles.authButton}>
          <Image style={{ resizeMode: 'contain', width: '10%',}} source={Images.spotify}/>
          <Text style={{ color: 'white', fontWeight: 'bold'}}>  CONNECT WITH SPOTIFY</Text>
        </View>
      </Pressable>
    );
  }


  function TopTracks() {
    return (
      <View style={styles.container}>
        <View style={styles.topTracksHeader}>
          <Image style={{ resizeMode: 'contain', width: '12%', height: '50%'}} source={Images.spotify}/>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24}}>My Top Tracks</Text>
        </View>
        <View style={styles.topTracksBody}>
          <FlatList
            data={tracks}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    )
  }

  const renderItem = ({item, index}) => {
    return (
      <Tracks 
      id = {index + 1} 
      title = {item.name} 
      artist = {item.artists[0].name}
      albumImage = {item.album.images[1].url}
      albumName = {item.album.name}
      duration = {millisToMinutesAndSeconds(item.duration_ms)}
      />
    )
  }

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <TopTracks data={tracks}/>; // Our Flatlist of songs
  } else {
    contentDisplayed = <SpotifyAuthButton/>; // Our "Connect with Spotify" button
  } 

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    flex: 0.2,
    backgroundColor: Colors.spotify,
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: "row",
    padding: 2,
  },
  topTracksHeader: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    paddingBottom: '2%'
  },
  topTracksBody: {
    flex: 12,
    width: '100%',
  },
});
