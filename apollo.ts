// import { ApolloClient, HttpLink, InMemoryCache,gql } from '@apollo/client/core'
// import { createApolloProvider } from '@vue/apollo-option'
// import {provideApolloClient} from '@vue/apollo-composable'
// import {defineNuxtPlugin} from "#app";
// import {DefaultApolloClient} from '@vue/apollo-composable'

// const httpLink = new HttpLink({
//     uri: 'http://localhost:4000/graphql',
// })

// // Create the apollo client
// const apolloClient = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//     connectToDevTools: true,
// })
// provideApolloClient(apolloClient);
//
// // Create a provider
// const apolloProvider = createApolloProvider({
//     defaultClient: apolloClient,
// })

// export default defineNuxtPlugin(() => {
//     return {
//         provide: {
//             apolloProvider,
//             DefaultApolloClient
//         }
//     }
// })


//
// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.provide(apolloProvider, DefaultApolloClient)
// })
