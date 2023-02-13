import { useQuery, type UseQueryOptions } from 'react-query'

import { useDatabase } from '../../database'
import { type SettingKey, type SettingValue } from '../../types'

import { Keys } from './keys'

export function useSetting<K extends SettingKey>(
  key: K,
  options: UseQueryOptions<SettingValue<K>> = {},
) {
  const { initialized, settings } = useDatabase()

  return useQuery(Keys.SETTING(key), () => settings.getSetting(key), {
    ...options,
    enabled: initialized,
  })
}
