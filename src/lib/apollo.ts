// npm i @apollo/client graphql

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8rvvm16l201z7e5l20kbe/master',
  //  Por padrão o Apollo armazena o cache dentro da aplicação
  cache: new InMemoryCache()
})