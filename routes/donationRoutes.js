import express from 'express';
import { createDonation, deleteDonation, getDonationById, getDonations, updateDonation } from '../controllers/donationController.js';
import { authorizedRoles, isAuthenticatedUser } from '../middleware/auth.js';

const router = express.Router();

router.route("/donations")
    .post(isAuthenticatedUser, createDonation)
    .get(isAuthenticatedUser, getDonations);
router.route("/donation/:donationId")
    .get(isAuthenticatedUser, getDonationById)
    .put(isAuthenticatedUser, authorizedRoles("admin"), updateDonation)
    .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteDonation);

export default router;