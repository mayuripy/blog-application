const express = require("express")

const { graphqlHTTP } =require("express-graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const app = express();

const UserList = [

]

const UserType = new GraphQLObjectType({
     name:"userType",
     fields: () => ({
        id: {type: GraphQLID},
        name: {type:GraphQLString },
        email: {type: GraphQLString},
     }),

})

const RoorQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
       users: {
        type: GraphaQLList(UserType),
        resolve(parent,args) {
            return[],
        },

       },
    },
})

app.use("/graphql",graphqlHTTP({schema:{},graphiql: true}));

app.listen(5000, () => console.log("server Running"));