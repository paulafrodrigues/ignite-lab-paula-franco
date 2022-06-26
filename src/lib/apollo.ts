import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sf8lhh21sy01yy5b27anlj/master',
  cache: new InMemoryCache()
})