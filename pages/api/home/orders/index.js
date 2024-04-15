import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import { getOrders } from "@/backend/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

handler.get(getOrders);

export default handler;