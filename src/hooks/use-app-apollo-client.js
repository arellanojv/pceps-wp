import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const link = createHttpLink({
  uri: `http://localhost:10026/graphql`,
  credentials: 'include',
})

export const useAppApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
}
