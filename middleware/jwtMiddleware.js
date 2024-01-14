import jwt from "jsonwebtoken";

const JWTAuth = (req, res, next) => {
  // console.log("token", req.cookies.token)
  // console.log("requserjwt", req.user)
  // console.log("Cookies:", req.cookies.jwtToken); // Agrega este log para verificar todas las cookies
  const token = req.cookies.jwtToken;
  try {
    if (!token) {
      res.clearCookie("jwtToken", {
        httpOnly: true,
        domain: "localhost",
        path: "/",
      });
      res.status(302).json({ message:"Usuario no autorizado" });
    } else {
      // console.log("token encontrado");
      const user = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
      // console.log("userJWT", user);
      req.user = user;
      next();
    }
  } catch (err) {
    res.clearCookie("jwtToken", {
      httpOnly: true,
      domain: "localhost",
      path: "/",
    });
    res.status(302).json({ redirect: "/" });
  }
};

export default JWTAuth;
