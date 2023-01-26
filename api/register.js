import connect from '../database/connection';
import user from '../database/schema';

connect();

export default async function handler(req, res) {
    try {
        const User = await user.create(req.body);
        console.log(req.body)
        res.redirect('/')
        if (!User) {
            return res.json({"code": 'User not created'})
        }
    } catch (error) {
        res.status(400).json({status: 'not able to create a new user'})
    }
}