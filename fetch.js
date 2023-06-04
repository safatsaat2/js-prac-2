const url = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData() {
      fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
}

// middleware jwt


const jwtVerify = (req, res, next) => {
      const authorization = req.headers.authorization;

      if (!authorization) {
            return res.status(401).send({ error: true, message: "unauthorize access" })
      }

      const token = authorization.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                  return res.status(401).send({ error: true, message: 'unauthorized access' })
            }
            req.decoded = decoded;
            next();
      })
}