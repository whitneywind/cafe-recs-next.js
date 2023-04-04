import connect from '../../database/connection';
import user from '../../database/schema';

connect();

export default async function handler(req,res){
    try {
        const {email,password}=req.body
        const User = await user.findOne({email,password});
        if (User) {
            console.log('user to log in ', User);
            res.redirect(303, '/');
        } else if (!User){
            return res.json({"code":'Not able to find the user'})
        }   
        // res.redirect(303, '../auth/protected');
    } catch (e) {
        res.status(e.status).json(e.response.data)
    }
        // res.status(400).json({status: 'not able to log-in'})
        // console.log('not able to log in')
        // res.status(400).json({status: 'not able to log in'})
    }