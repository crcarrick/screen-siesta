import { type Repository } from 'typeorm'

import {
  isValidSettingValue,
  type SettingKey,
  type SettingValue,
} from '../../../types'
import { dataSource } from '../../dataSource'
import { SettingModel } from '../../entities'

export class SettingRepository {
  repository: Repository<SettingModel>

  constructor() {
    this.repository = dataSource.getRepository(SettingModel)
  }

  async getSetting<K extends SettingKey>(key: K) {
    const setting = await this.repository.findOneBy({ key })

    if (setting && isValidSettingValue(key, setting.value)) return setting.value
  }

  async setSetting<K extends SettingKey>(key: K, value: SettingValue<K>) {
    await this.repository.upsert({ key, value }, ['key'])
  }
}
