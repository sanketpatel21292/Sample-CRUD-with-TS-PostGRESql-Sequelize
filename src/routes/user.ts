import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { Model } from 'sequelize';;

const router = express.Router()

router.post('/users', async (req: Request, res: Response) => {
    try {
        const user: Model = await User.create({
            Name: req.body.Name,
            Email: req.body.Email,
            CreatedOn: new Date()
        });
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const user: Model = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).send('User not found!')
        }

        res.send(user);
    } catch (e) {
        res.status(400).send();
    }
});

router.get('/users', async (req: Request, res: Response) => {
    const where = req.query;

    try {
        const user: Model = await User.findAll({ where });

        if (!user) {
            return res.status(404).send('User not found!')
        }

        res.send(user);
    } catch (e) {
        res.status(400).send();
    }
});

router.patch('/users/:id', async (req: Request, res: Response) => {
    try {
        const user: number[] = await User.update({
            Name: req.body.Name,
            Email: req.body.Email,
            CreatedOn: req.body.CreatedOn
        }, {
            where: {
                id: req.params.id
            }
        })

        if (user[0] === 0) {
            res.status(404).send('User not found!');
        }

        res.send('User details updated!');
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const user: number = await User.destroy({
            where: { id: req.params.id }
        })

        if (user === 0) {
            res.status(404).send('User not found!');
        }

        res.send('User deleted!');
    } catch (e) {
        res.status(400).send(e);
    }
});

export = router;