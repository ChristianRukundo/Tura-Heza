import { Router } from "express";
import authRoutes from "./auth.routes";
import propertyRoutes from "./property.routes";
import bookingRoutes from "./booking.routes";
import favoriteRoutes from "./favorite.routes";
import agentRoutes from "./agent.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/properties", propertyRoutes);
router.use("/bookings", bookingRoutes);
router.use("/favorites", favoriteRoutes);
router.use("/agent", agentRoutes);

export default router;
