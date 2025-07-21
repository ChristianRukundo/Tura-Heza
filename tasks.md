# PropLex - Tura Heza

This document serves as a single point of truth for the development of the PropLex - Tura Heza project. It contains a list of all the tasks, their current status, and their dependencies.

## Tasks

| ID | Title | Description | Priority | Status | Dependencies |
| --- | --- | --- | --- | --- | --- |
| 1 | Backend: Introduce Service Layer | Refactor the backend to include a service layer that will handle all business logic, making the controllers leaner and more focused on handling HTTP requests and responses. | high | pending | | 
| 2 | Frontend: Modularize Components and Routes | Organize frontend components and routes into a more modular and scalable structure. | high | pending | | 
| 3 | Feature: User Profile Management | Create a dedicated section for users to manage their personal information, change passwords, and view their booking history. | high | pending | 2 |
| 4 | Feature: Reviews and Ratings | Allow users to leave reviews and ratings on properties they have stayed at. | medium | pending | 1, 2 |
| 5 | Feature: Advanced Search and Filtering | Implement more granular search options, such as filtering by date availability and specific amenities. | medium | pending | 1, 2 |
| 6 | Feature: Payment Integration | Integrate a secure payment gateway (e.g., Stripe) to handle booking transactions. | high | pending | 1 |
| 7 | Feature: Notifications | Implement an in-app or email notification system for booking confirmations and reminders. | medium | pending | 1, 2 |
| 8 | Feature: Direct Messaging | Create a communication channel for users to connect with agents. | medium | pending | 1, 2 |
| 9 | Agent Feature: Calendar Management | Create a visual calendar for agents to manage property availability and view all bookings. | high | pending | 2 |
| 10 | Agent Feature: Dynamic Pricing | Allow agents to set different prices for weekends, holidays, or specific seasons. | medium | pending | 1 |
| 11 | Agent Feature: Enhanced Analytics | Provide agents with detailed insights, including occupancy rates and revenue reports. | medium | pending | 1 |
| 12 | Agent Feature: Promotions and Discounts | Create tools for agents to create and manage special offers or discount codes. | low | pending | 1 |
| 13 | Admin Feature: Admin Dashboard | Create a centralized dashboard for administrators to manage users, properties, and bookings. | high | pending | 2 |
| 14 | Admin Feature: User Management | Allow administrators to view, approve, suspend, or delete user and agent accounts. | high | pending | 1, 13 |
| 15 | Admin Feature: Content Management System (CMS) | Create tools for administrators to manage static content on pages like "About Us" or "FAQ." | low | pending | 1, 13 |