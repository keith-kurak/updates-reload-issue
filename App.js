import { View, Button } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  return (
    <View>
      <Button title="Fetch update and reload" onPress={onFetchUpdateAsync} />
      <View style={{ height: 10 }} />
      <Button title="Just Reload" onPress={Updates.reloadAsync} />
    </View>
  );
}