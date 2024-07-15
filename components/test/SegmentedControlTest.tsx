import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { SegmentedControl } from '~/components/nativewindui/SegmentedControl';

const VALUES = ['One', 'Two', 'Three', 'Four'];

export default function SegmentedControlScreen() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <>
      <Stack.Screen options={{ title: 'Segmented Control' }} />
      <View className="flex-1 p-4">
        <SegmentedControl
          values={VALUES}
          selectedIndex={selectedIndex}
          onIndexChange={(index) => {
            setSelectedIndex(index);
          }}
        />
      </View>
    </>
  );
}