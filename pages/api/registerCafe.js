import connect from '../../database/connection';
import cafe from '../../database/cafeSchema';

connect();

export default async function handler(req, res) {
    try {
        const Cafe = await cafe.create(req.body);
        console.log(req.body)
        res.redirect(303, '/')
        if (!Cafe) {
            return res.json({"code": 'Cafe not created'})
        }
    } catch (error) {
        res.status(400).json({status: 'not able to create a new cafe'})
    }
}