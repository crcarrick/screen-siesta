const settingKeySet = new Set(['mode'] as const)

export type SettingKey = typeof settingKeySet extends Set<infer T> ? T : never

export function isSettingKey(val: string): val is SettingKey {
  return Set.prototype.has.call(settingKeySet, val)
}

const modeSettingSet = new Set(['Automatic', 'Manual'] as const)

export type ModeSetting = typeof modeSettingSet extends Set<infer T> ? T : never

function isModeSetting(val: string): val is ModeSetting {
  return Set.prototype.has.call(modeSettingSet, val)
}

export type SettingValue<K extends SettingKey> = K extends 'mode'
  ? ModeSetting
  : never

export function isValidSettingValue<K extends SettingKey>(
  key: K,
  value: string,
): value is SettingValue<K> {
  if (key === 'mode' && isModeSetting(value)) return true
}
