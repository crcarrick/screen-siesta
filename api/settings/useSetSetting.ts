import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from 'react-query'

import { useDatabase } from '../../database'
import { type SettingKey, type SettingValue } from '../../types'

import { Keys } from './keys'

export function useSetSetting<K extends SettingKey>(
  key: K,
  options: UseMutationOptions<void, void, SettingValue<K>> = {},
) {
  const queryClient = useQueryClient()

  const { settings } = useDatabase()

  return useMutation((value) => settings.setSetting(key, value), {
    ...options,
    onSuccess: (...args) => {
      if (options.onSuccess) options.onSuccess(...args)

      queryClient.invalidateQueries(Keys.SETTING(key))
    },
  })
}
