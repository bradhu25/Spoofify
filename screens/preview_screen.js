import { WebView } from 'react-native-webview';
import Colors from '../Themes/colors';

export default function PreviewScreen({ route })  {
   const {preview_url} = route.params;
   return(
      <WebView source={{ uri: preview_url }} style={{ backgroundColor: Colors.background }}/>
   )
}