import { type PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export function APIProvider({ children }: PropsWithChildren<object>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
