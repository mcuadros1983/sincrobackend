import passport from "passport";
import jwt from "jsonwebtoken";

const loginMiddleware = (req, res, next) => {
  // El middleware de autenticación passport.authenticate maneja la lógica de inicio de sesión
  passport.authenticate(
    "login",
    { session: false },
    async (err, user, info) => {
      try {
        // Se verifica si hay un error o si el usuario no está presente
        if (err || !user) {
          console.log("entro en err || !user");
          // return res.status(404).json({ error: "User Not Found" });
          return res
            .status(401)
            .json({ error: info.message || "Authentication failed" });
        }

        // Si no hay errores, se realiza el inicio de sesión y se genera el token JWT
        req.login(user, { session: false }, async (err) => {
          console.log("entro en req.login");
          if (err) {
            console.log("entro en err req.login");
            return next(err);
          }

          // Configuración del cuerpo del token JWT
          const body = {
            id: user.id,
            usuario: user.usuario,
            // Puedes incluir más información del usuario en el token si es necesario
            // email: user.email,
            // image: user.image,
          };
          console.log("body", body);

          // Generación del token JWT
          const token = jwt.sign(
            body,
            process.env.JWT_SECRET_TOKEN
            //   {
            //   expiresIn: "1800s", // 30 minutos de duración del token
            // }
          );
          console.log("token generado", token);

          // Obtén los datos del usuario como un objeto plano (sin métodos adicionales)
          const userPlainObject = user.get({ plain: true });

          // Construir un nuevo objeto que incluya la información del usuario y el token
          const userWithToken = {
            ...userPlainObject,
            token,
          };

          // Configuración de la cookie con el token JWT
          res.cookie("jwtToken", token, {
            httpOnly: true,
            domain: "localhost",
            path: "/",
            // sameSite: "Strict"
            // Puedes incluir opciones adicionales de cookie aquí según sea necesario
          });
          res.json({ success: true, user: userWithToken });
        });
      } catch (e) {
        // Manejo de errores internos del servidor
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  )(req, res, next);
};

export default loginMiddleware;
