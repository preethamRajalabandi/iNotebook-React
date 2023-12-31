const jwt = require('jsonwebtoken');
const JWT_SEC = 'Preethamisagoodb$oy';


const fetchuser = (req, res, next) => {
    // Get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error: "Please authenticate using valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SEC);
        // console.log(data.user.id)
        req.user = data.user;
        next()
    } catch (error) {
        res.send(401).send({error: "Please authenticate using valid token"});
    }
    
}
module.exports = fetchuser;