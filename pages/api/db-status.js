// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { pool } from '../../config/db';

export default async function handler(req, res) {

    try {
        const result = await pool.query('SELECT NOW() AS now;');
        const now = result[0][0].now;
        res.status(200).json({ status: 'Ok', now });

    } catch (error) {
        console.log(error);

    }
}
