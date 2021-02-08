import express, { Request, Response } from 'express';
import { query } from 'express-validator';
import { validateRequest } from '../middlewares';
import { sortBy } from '../utils';
import {
    fetchLangStars,
    fetchLangStats,
    fetchTopRepos,
    fetchUser,
} from '../utils/ghUtils';

const router = express.Router();

router.get('/user', async (req: Request, res: Response) => {
    const user = await fetchUser();
    res.send({ user });
});

router.get(
    '/top-repos',
    [
        query('sortKey')
            .optional()
            .notEmpty()
            .custom((sortBy: string) => ['stargazers_count', 'size'].includes(sortBy)),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { sortKey } = req.query;
        let topRepos;

        if (sortKey !== undefined) {
            topRepos = await fetchTopRepos(sortKey as sortBy);
        } else {
            topRepos = await fetchTopRepos('stargazers_count');
        }
        res.send({ topRepos });
    }
);

router.get('/lang-stats', async (req: Request, res: Response) => {
    const langStats = await fetchLangStats();
    res.send({ langStats });
});

router.get('/lang-stars', async (req: Request, res: Response) => {
    const langStars = await fetchLangStars();
    res.send({ langStars });
});

export { router as portFolioRouter };
