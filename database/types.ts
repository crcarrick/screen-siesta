import { SettingRepository } from './repositories'

export type DatabaseContext = {
  readonly initialized: boolean
  readonly settings: SettingRepository
}
