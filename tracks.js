import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "./Themes/colors";
import Colors from "./Themes/colors";

export default function Tracks({ id, title, artist, albumImage, albumName, duration,}) {
  return(
    <View style={styles.track}>
      <View style={styles.container1}>
        <Text style={styles.trackNum}>{id}</Text>
      </View>
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
    </View>
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
    color: colors.gray,
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

  }
});