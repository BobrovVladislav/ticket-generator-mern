//cors - это механизм безопасности, который позволяет ресурсу с одного домена
// обращаться на другой
// Разрешаем доступ к API других доменов


function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next()
}

module.exports = cors