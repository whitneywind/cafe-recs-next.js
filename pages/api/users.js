import main from "../database/connection";
import User from "../database/schema";

export default function getUsers(req, res) {
    main().catch(error => console.error('error with main in users', error));

    const { method } = req;

    switch(method) {
        case 'GET':
            res.status(200).json({ method: 'GET', endpoint: 'Users' });
            break;
        case 'POST':
            res.status(200).json({ method: 'POST', endpoint: 'Users' });
            break;
        default: 
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} not allowed`)
            break;
    }

    // const create = new User({ name: 'user13', email: 'email13' });
    // create.save().then(() => {
    //     res.status(200).json(create)
    // })


}