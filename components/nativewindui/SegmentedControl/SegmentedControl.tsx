import * as React from 'react';
import { View } from 'react-native';

import { SegmentControlProps } from './types';

import { Text } from '~/components/nativewindui/Text';
import { Button } from '~/components/nativewindui/Button';
import { cn } from '~/lib/cn';

function SegmentedControl({
  values,
  selectedIndex,
  onIndexChange,
  onValueChange,
  enabled = true,
  iosMomentary: _iosMomentary,
}: SegmentControlProps) {
  const id = React.useId();

  function onPress(index: number, value: string) {
    return () => {
      onIndexChange?.(index);
      onValueChange?.(value);
    };
  }
  return (
    <View className="flex-row border rounded-full border-foreground/50">
      {values.map((value, index) => {
        return (
          <View key={`segment:${id}-${index}-${value}`} className="flex-1">
            <Button
              disabled={!enabled}
              size="sm"
              variant={selectedIndex === index ? 'tonal' : 'plain'}
              androidRootClassName={cn(
                'rounded-none',
                index === 0 && 'rounded-l-full',
                index === values?.length - 1 && 'rounded-r-full'
              )}
              className={cn(
                'rounded-none py-2.5',
                index === 0 && 'rounded-l-full',
                index === values?.length - 1 ? 'rounded-r-full' : 'border-foreground/50 border-r'
              )}
              onPress={onPress(index, value)}>
              <Text>{value}</Text>
            </Button>
          </View>
        );
      })}
    </View>
  );
}
  
export { SegmentedControl };