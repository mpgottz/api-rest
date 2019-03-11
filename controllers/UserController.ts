import User from '../models/User';

export function getAllUsers(req, res, next) {
	User.find((err, posts) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({posts});
    });
} 

export function getUserById(req, res, next) {
  const id = req.params.id;  

  User.findById(id, (err, post) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({post});
  });
}

export function createUser(req, res, next) {
    const name = req.body.name;
    const rut = req.body.rut;
    const username = req.body.username;
    const password = req.body.password;


    console.log(req.body);
    if(!name) {
        res.status(422).json({err: 'Name is required.'});
        return;
    } 
    if(!rut) {
        res.status(422).json({err: 'Rut is required.'});
        return;
    }
    if(!username) {
        res.status(422).json({err: 'Name is required.'});
        return;
    } 
    if(!password) {
        res.status(422).json({err: 'Rut is required.'});
        return;
    }

    const user = new User({
        name,
        rut,
        username,
        password

    });

    user.save((err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}