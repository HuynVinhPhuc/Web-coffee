import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import {
  deleteUser,
  getUser,
  updateUser,
} from "@/backend/controllers/authControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("Quản lý","Nhân viên")).get(getUser);
handler.use(isAuthenticatedUser, authorizeRoles("Quản lý","Nhân viên")).put(updateUser);
handler.use(isAuthenticatedUser, authorizeRoles("Quản lý","Nhân viên")).delete(deleteUser);

export default handler;