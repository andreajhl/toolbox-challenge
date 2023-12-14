import { Router } from "express";
import { getFiles, getFileList } from "../controllers/index.js";

const router = Router();

router.get('/data', getFiles);
router.get('/list', getFileList);

export default router;
