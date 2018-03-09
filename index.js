const Express = require('express')
// const Cors = require('cors');
require('dotenv').config();
const DataCriteria1 = process.env.DataCriteria1;
const DataCriteria2 = process.env.DataCriteria2;
const DataCriteria3 = process.env.DataCriteria3;
const Sequelize = require('sequelize');
const sequelize = new Sequelize( DataCriteria1, DataCriteria2, DataCriteria3, {
    dialect: 'postgres',
    port:5432
  })

const Comment = sequelize.define('comment', {uuid:{
    type: Sequelize.UUID,
    primaryKey:true}, 
    content:  Sequelize.STRING
});
const Post = sequelize.define('post', {
    uuid:{
        type: Sequelize.UUID,
        primaryKey:true}, 
        });
        content:  Sequelize.STRING
        // Post.sync({force: true}).then(() => {
        //     // Table created
        //     // return Post.create({
        //     //   uuid: 1,  
        //     //   content: 'awesome content in hur'
        //     // });
        // });

Comment.belongsTo(Post);


const router = Express.Router();
const app = Express()

router.use(function(req,res,next){
    console.log('something made it here!');
    next();
  })

  router.route('/posts')
    .get(function(req,res){
        console.log('made it here!')
        Post.findAll().then(posts =>{
            var posts = posts;
            res.send(posts);
        });
    })
    app.use(router)

  app.get('/', (req, res) => res.send('Hello World!'))

  
  
  app.listen(3000, () => console.log('listening on port 3000!'))
  
  sequelize.authenticate()
    .then(() => {
        console.log('Connection to DB has been established!');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });