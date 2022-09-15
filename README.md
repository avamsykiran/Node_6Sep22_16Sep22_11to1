NodeJS
------------------------------------------------------------------------------------

    is a javascript runtime alternate for a browser.

    it has become a possibility that a stand alone backend can be developed using 
    javascript.

    Javascript (ECMAScript 6) on NodeJS

        Objectives:
            Understanding javascript(ES6) on NodeJS
            Project Build Tools npm
            Modularization
            rest api using expressjs
            MongoDB Integration

    Lab Setup
        NodeJS  14 >
        MongoDB latest

    Javascript ES6 concepts

    Node JS and NPM

    Javascript Modules

        RJS Modules
            requirejs modules
            requirejs is a javascript library used to conceder each javascript file as a module
            the module that wants to offer resources msut attach them to a object called 'export'
            the module that wants to consume, can bring in the export object using 'require' method

        ESM
            ECMA Script Modules

            'export' is a keyword used to export resource from a javascript module (.mjs)
            'import' is a keyword used to import resource into a javascript file.

    
    express             is a rest-api cosntruction library
    body-parser         is a library used to parse JSON into javascript object and vice-versa.
    cors                to enable cross origins

    npm install express --save
    npm install body-parser --save
    npm install cors --save

    npm install express body-parser cors --save

    npm install    will re-execute the package download from packgae.json

    an action method of a controller accepts req and resp objects:

        req
                params
                body

        resp
                status
                send

    expres() is method that returns an http server object.

    let server = express();

        server.listen(POPT,() => {
            //...........is executed on successful start of the server.
        })

        server.use(interceptor)
        server.get(urlEndPoint,reqHandlerMethod)
        server.post(urlEndPoint,reqHandlerMethod)
        server.put(urlEndPoint,reqHandlerMethod)
        server.delete(urlEndPoint,reqHandlerMethod)
            ...etc