import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

// Middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;         // ? key=234 , or id=123 , fetch only id from the request  

  //if (!id) return next(new ErrorHandler("ensure login first", 401));

  const user = await User.findById(id);
  //if (!user) return next(new ErrorHandler("Unauthorized", 401));
  //if (user.role !== "admin")
    //return next(new ErrorHandler("Permission forbidden", 403));

  next();                //passes on to the next middleware present in the stack
});