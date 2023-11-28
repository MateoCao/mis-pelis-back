import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: 'No token, autorización denegada' });

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });

    req.user = {
      id: user.payload ? user.payload : user.id,
      iat: user.iat,
      exp: user.exp
    };
    next();
  });
};
