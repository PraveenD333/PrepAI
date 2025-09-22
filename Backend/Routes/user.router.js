import express  from 'express'
import { getprofile, login, registerUser } from '../Controllers/user.cont.js'
import { protect } from '../Middleware/auth.midd.js';
import { upload } from '../Middleware/upload.midd.js';

const router=express.Router()

router.post("/register",upload.single('profileImage'),registerUser);
router.post("/login",login);
router.get("/profile",protect,getprofile);

export default router;
