import { WebView } from 'react-native-webview';
import Colors from '../Themes/colors';

export default function DetailsScreen({ route }) {
    return(
       <WebView  source={{ uri: route.params.song_url }} 
       style={{backgroundColor: Colors.background }}/>
    )
  }
