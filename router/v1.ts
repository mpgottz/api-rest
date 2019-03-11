import * as express from 'express';

import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost    
} from '../controllers/PostController';

import {
    getAllUsers,
    createUser
} from '../controllers/UserController'

export default (app) => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();
    
    /**
     * POST ROUTES
     */
    
    apiRoutes.use('/posts', postRoutes);

    postRoutes.get('/', getAllPosts);

    postRoutes.get('/:id', getPostById);

    postRoutes.post('/', createPost);

    postRoutes.put('/:id', updatePost); 

    postRoutes.delete('/:id', deletePost);

    postRoutes.get('/users', getAllUsers)

    app.use('/api', apiRoutes);

};

