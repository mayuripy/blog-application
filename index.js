const express = require("express")

const { graphqlHTTP } =require("express-graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require("graphql");

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
        type:new GraphaQLList(UserType),
        resolve() {
            return UsersList;
        },

       },
    },
     
});

const RootQuery = new GraphQLObjectType({

});
const schema = new GraphQLSchema({query:RootQuery})
app.use("/graphql",graphqlHTTP({schema:{},graphiql: true}));

app.listen(5000, () => console.log("server Running"));