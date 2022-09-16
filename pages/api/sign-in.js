import connect from '../database/connection';
import user from '../database/schema';

connect();

export default async function handler(req,res){

    const {email,password}=req.body
    const User = await user.findOne({email,password})
    if(!User){
        return res.json({status:'Not able to find the user'})
    }
    else{
        console.log('user found')
        res.redirect('/')
    }
}