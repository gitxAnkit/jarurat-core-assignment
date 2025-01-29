import express from 'express';
import { createDonation, deleteDonation, getDonationById, getDonations, updateDonation } from '../controllers/donationController.js';

const router = express.Router();

router.route("/donation")
    .post(createDonation)
    .get(getDonations);
router.route("/donation/:donationId")
    .get(getDonationById)
    .put(updateDonation)
    .delete(deleteDonation);

export default router;