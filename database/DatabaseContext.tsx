import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'

import { type DataSource } from 'typeorm'

import { dataSource } from './dataSource'
import { SettingRepository } from './repositories'
import { type DatabaseContext } from './types'

const Context = createContext<DatabaseContext>({} as DatabaseContext)

const settings = new SettingRepository()

export function DatabaseProvider({ children }: PropsWithChildren<object>) {
  const connection = useRef<DataSource>()

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    async function initialize() {
      if (!dataSource.isInitialized) {
        try {
          connection.current = await dataSource.initialize()

          setInitialized(true)
        } catch (err) {
          console.error(err)
        }
      }
    }

    initialize()

    return () => {
      if (connection.current) connection.current.destroy()
    }
  }, [])

  const value = useMemo<DatabaseContext>(
    () => ({
      initialized,
      settings,
    }),
    [initialized],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useDatabase() {
  return useContext(Context)
}
