var repl = require("repl");
require('dotenv').config();
const DataCriteria1 = process.env.DataCriteria1;
const DataCriteria2 = process.env.DataCriteria2;
const DataCriteria3 = process.env.DataCriteria3;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(DataCriteria1, DataCriteria2, DataCriteria3, {
    // gimme postgres, please!
    dialect: 'postgres',
    port:5432
  })

  sequelize.authenticate()
  .then(() => {
      console.log('Connection to DB has been established!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Item = sequelize.define('item', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  Item.sync().then(() => {
    // Table created
    return Item.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  const Post = sequelize.define('post', {
    id: Sequelize.INTEGER,
    content: {
        type: Sequelize.STRING
    }
  });
  
  Post.sync().then(() => {
    return Post.create({
        content: 'lesss gooooo!!!'
    });
  });
  
var replServer = repl.start({});
replServer.context.Item = Item;
replServer.context.Post = Post;