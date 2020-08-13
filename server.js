const Database = require('./aplication/config/database');
const CONFIG = require('./aplication/config/config');
const App = require('./aplication/app');

Database.connect();

App.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error)
    console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);
})