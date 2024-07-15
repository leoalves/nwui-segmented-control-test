import RNSegmentedControl from '@react-native-segmented-control/segmented-control';

import { SegmentControlProps } from './types';

function SegmentedControl({
  values,
  selectedIndex,
  onIndexChange,
  onValueChange: onValueChangeProp,
  enabled = true,
  iosMomentary: _iosMomentary,
}: SegmentControlProps) {
  function onChange(event: { nativeEvent: { selectedSegmentIndex: number } }) {
    onIndexChange?.(event.nativeEvent.selectedSegmentIndex);
  }

  function onValueChange(value: string) {
    onValueChangeProp?.(value);
  }
  return (
    <RNSegmentedControl
      enabled={enabled}
      values={values}
      selectedIndex={selectedIndex}
      onChange={onChange}
      onValueChange={onValueChange}
    />
  );
}
  
export { SegmentedControl };