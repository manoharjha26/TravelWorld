import Tour from "../models/Tour.js";
import Review from "../models/Review.js";


export const createReview  =async(req,res) =>{
const tourId =req.param.tourId
const newReview =new Review({ ...req.body})
    try {
       const savedReview  =await newReview.save()

       //after creating a new review now update the review array of the tour
       await Tour.findByIdAndUpdate(tourId,{
        $push:{reviews:savedReview._id}
       })

       res.status(200).json({success:true,message:'reviews submitted',
       data:savedReview})
    } catch (err) {
        res.status(200).json({success:true,message:'failed to submit' });
    }
};