import { type ComponentProps, useCallback } from 'react'

import { Radio } from 'native-base'

import { useSetting, useSetSetting } from '../../api'
import { isValidSettingValue, ModeSetting } from '../../types'

import * as Styled from './Settings.style'

type RadioChangeHandler = ComponentProps<typeof Radio.Group>['onChange']

const MODE_VALUES: ModeSetting[] = ['Automatic', 'Manual']

export default function Settings() {
  const { data: mode, isLoading } = useSetting('mode')
  const { mutate: setMode } = useSetSetting('mode')

  const handleModeChange = useCallback<RadioChangeHandler>(
    (value) => {
      if (isValidSettingValue('mode', value)) setMode(value)
    },
    [setMode],
  )

  return isLoading ? null : (
    <Styled.Container>
      <Radio.Group name="mode" onChange={handleModeChange} value={mode}>
        {MODE_VALUES.map((mode) => (
          <Radio key={mode} value={mode}>
            {mode}
          </Radio>
        ))}
      </Radio.Group>
    </Styled.Container>
  )
}
