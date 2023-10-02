const express = require("express")

const { graphqlHTTP } =require("express-graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const app = express();

const UsersList = [
   {id: "1",name: "mayuri",email:"mayuri@test.com"},
   {id: "1",name: "minal",email:"minal@test.com"},
   {id: "1",name: "adhi",email:"adhi@test.com"},
]

const UserType = new GraphQLObjectType({
     name:"userType",
     fields: () => ({
        id: {type: GraphQLID},
        name: {type:GraphQLString },
        email: {type: GraphQLString},
     }),

})

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
       users: {
        type: GraphaQLList(UserType),
        resolve() {
            return UsersList;
        },

       },
    },
})

app.use("/graphql",graphqlHTTP({schema:{},graphiql: true}));

app.listen(5000, () => console.log("server Running"));