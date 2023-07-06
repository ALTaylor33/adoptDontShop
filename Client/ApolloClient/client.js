import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { HttpLink } from "apollo-link-http";

const restLink = new RestLink({
  endpoints: {
    openBookApi: "https://open.exhangerate-api.com/v6/",//change to actual api site url
  }
})

const httpLink = new HttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, httpLink]),
});




//from https://www.pluralsight.com/guides/how-to-set-up-graphql-in-a-react-app