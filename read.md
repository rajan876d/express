package.json = npm init
express.
    opinionated frameword mean there is the set of role or define the file.
    minimalist= provide the nessary property.
    web framework= express is for only web application


##http methods

GET
PUSH


# Mongodatabase compass


use database123

db.users.insertOne({name:rajan})  //table = users  table are called collection

db.student.insertMany([{name:ram}])
db.users.insertOne({name:'rajan',age=12})

//to find the data

db.users.find()

db.users.find({age:20})

db.users.updateOne({name:"ram"},{$set:{age:23}})

delete = db.users.deleteOne({name:"Ram"})



# Mongoose

ODM (Object Data Modeling) of MongoDB for Node.js
Create schema (properties or rule of a data/entity)
Validate schema
Create models (usable from of schema ) using schema
relationships


##http method

1. GET
2.POST
3.PUT
4.DELETE
5.PATCH-partial update

## Layered Architecture
1. API Layer
    a. Router:Endpoints
    b. Controllers: Request/Response matra handel garni
    c. middlewares: Auth
2. Business Logic Layer
    a. Services
3. Data layer
    a. Models: Schemas

    ## JSON Web Token (JWT)
    - self verified Token.
    - Tamper proof if someone change the token the JWT will know automatic
    - 


    ##  middleware
            browser -> request->server
            middleware ---- middleware
            server -> respond -> browser

    ##useage
    loggin
    authentication and authorization
    request and respond object modification
    error handaling 
    data validation
    