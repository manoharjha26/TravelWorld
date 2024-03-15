import express from 'express'
import { createTour,deleteTour,getAllTour,getSingleTour,updateTour,getTourBySearch, getFeaturedTour,getTourCount} from './../controller/tourController.js';
// import { verifyAdmin } from './../utils/verifyToken.js';
const router =express.Router()

//create new tour
router.post('/', createTour);


router.put("/:id", updateTour);


router.delete("/:id",deleteTour);


router.get("/:id", getSingleTour);


router.get("/", getAllTour);

router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;