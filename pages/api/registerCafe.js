import connect from '../database/connection'
import cafe from '../database/cafeSchema'

connect();

export default async function handler(res, req) {
    try {
        const Cafe = await cafe.create(req.body);
        console.log(req.body);
        res.redirect('/')
        if (!Cafe) {
            return res.json('cafe not created')
        }
    } catch (error) {
        res.status(400).json({status: 'not able to create a new cafe'})
    }
}