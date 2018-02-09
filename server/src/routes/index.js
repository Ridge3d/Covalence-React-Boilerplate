import { Router } from 'express';
import peopleRouter from './people';
import authorsRouter from './authors';

let router = Router();

router.use('/people', peopleRouter);
router.use('/authors', authorsRouter);

export default router;