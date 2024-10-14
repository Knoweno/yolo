var config = {}
const mongoBaseURL = 'mongodb+srv://knowenobiso:DWKMiPk7rPzEOkId@moringadevops.b9yyp.mongodb.net/yolomy?retryWrites=true&w=majority&appName=MoringaDevOps';

// Update to have your correct username and password
config.mongoURI = {
    production: mongoBaseURL,
    development: mongoBaseURL,
    test: mongoBaseURL,
}
module.exports = config;
