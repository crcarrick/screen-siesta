import * as SQLite from 'expo-sqlite'
import { DataSource } from 'typeorm'

import { SettingModel } from './entities'

export const dataSource = new DataSource({
  type: 'expo',
  driver: SQLite,
  database: 'screen-siesta',
  entities: [SettingModel],
  synchronize: true,
})
