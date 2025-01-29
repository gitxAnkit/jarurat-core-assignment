import express from "express";
import { deleteUser, getUserById, getUserProfile, getUsers, loginUser, logoutUser, registerUser, updateUserByAdmin } from "../controllers/userController.js";
import { authorizedRoles, isAuthenticatedUser } from "../middleware/auth.js";


const router = express.Router();

// User routes
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isAuthenticatedUser, getUserProfile);
router.route("/logout").post(isAuthenticatedUser, logoutUser);

// Admin routes
router.route("/users").get(isAuthenticatedUser, authorizedRoles("admin"), getUsers);
router.route("/user/:userId")
    .get(isAuthenticatedUser, authorizedRoles("admin"), getUserById)
    .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser)
    .put(isAuthenticatedUser, authorizedRoles("admin"), updateUserByAdmin);
export default router;