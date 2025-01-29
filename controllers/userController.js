import User from "../models/userModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

// POST /signup
// Register new user
export const registerUser = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: user
    })
});

// POST /login
// Login user
export const loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter both email and password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password!", 404));
    }
    const isPasswordMatched = user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password!", 404));
    }
    sendToken(user, 200, res);
})
// GET /profile
// Get user profile details
export const getUserProfile = catchAsync(async (req, res, next) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        return next(new ErrorHandler("User not found!", 404));
    }
    res.status(200).json({
        success: true,
        user
    })
})
// GET /logout
// Logout User
export const logoutUser = catchAsync(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged out successfully!!"
    });

})
// GET /users --Admin
// Get all users
export const getUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users: users
    })
});
// Get /users/:userId -- Admin
// Get a usr by id
export const getUserById = catchAsync(async (req, res, next) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        user
    });
});


// DELETE /users/:userId -- Admin
// Delete a usr by id
export const deleteUser = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "User deleted successfully!"
    });
});

// PUT /users/:userId --Admin
// Update user roles
export const updateUserByAdmin = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!user) {
        return next(new ErrorHandler("User not found!", 404));
    }
    res.status(200).json({
        success: true,
        message: "User updated successfully.",
        updatedUser: user
    });
})