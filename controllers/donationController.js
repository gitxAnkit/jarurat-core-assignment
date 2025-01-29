import { Donation } from "../models/donationModel.js";
import { catchAsync } from "../utils/cathcAsync.js";
import { ErrorHandler } from "../utils/errorHandler.js";

// POST /donation
// Create new donation
export const createDonation = catchAsync(async (req, res, next) => {
    const { donarName, email, amount, paymentMethod } = req.body;

    if (!donarName || !email || !amount || !paymentMethod) {
        return next(new ErrorHandler("All fields are required", 400));
    }
    const donation = await Donation.create({
        donarName,
        email,
        amount,
        paymentMethod,
    });
    res.status(201).json({
        success: true,
        message: "Donation created successfully.",
        donation,
    });
});
// GET /donation
// Get all donations
export const getDonations = catchAsync(async (req, res, next) => {
    const donations = await Donation.find();

    res.status(200).json({
        success: true,
        donations,
    });
});
// GET /donation/:donationId
// Get donation
export const getDonationById = catchAsync(async (req, res, next) => {
    const { donationId } = req.params;

    const donation = await Donation.findById(donationId);
    if (!donation) {
        return next(new ErrorHandler("Donation not found", 404));
    }
    res.status(200).json({
        success: true,
        donation,
    });
});

// PUT /donation/:donationId
// Update donation
export const updateDonation = catchAsync(async (req, res, next) => {

    const { donationId } = req.params;
    if (Object.keys(req.body).length === 0) {
        return next(new ErrorHandler("At least one field is required to update", 400));
    }

    const updatedDonation = await Donation.findByIdAndUpdate(donationId, req.body, {
        new: true,
        runValidators: true,
    });

    if (!updatedDonation) {
        return next(new ErrorHandler("Donation not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Donation updated successfully.",
        donation: updatedDonation,
    });
});

// DELETE /donation/:donationId
// Delete a donation
export const deleteDonation = catchAsync(async (req, res, next) => {

    const { donationId } = req.params;
    const donation = await Donation.findByIdAndDelete(donationId);
    if (!donation) {
        return next(new ErrorHandler("Donation not found", 404));
    }
    res.status(204).json({
        success: true,
        message: "Donation deleted successfully.",
    });
});


