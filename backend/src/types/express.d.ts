import type { User } from "@prisma/client"

declare global {
  namespace Express {
    // Extend the Request interface
    interface Request {
      user?: User
    }
  }
}
