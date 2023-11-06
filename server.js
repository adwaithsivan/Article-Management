const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/articleModel')
const app = express()

//routes
app.get('/', (req,res) => {
    res.send('Hello')
})

// Create New Article
app.post('/articles', async (req, res) => {
    try {
      const article = new Article(req.body);
      const savedArticle = await article.save();
      res.status(201).json(savedArticle);
    } catch (error) {
      res.status(400).json({ error: 'Could not create the article.' });
    }
  });


// Create New Category
app.post('/categories', async (req, res) => {
    try {
      const category = new Category({ name: req.body.name });
      const savedCategory = await category.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(400).json({ error: 'Could not create the category.' });
    }
  });
  
  // List All Articles
  app.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
  });
  
  // List Categories
  app.get('/categories', async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
  });
  
  // List Articles by Category
  app.get('/articles/category/:categoryID', async (req, res) => {
    const { categoryID } = req.params;
    const articles = await Article.find({ categories: categoryID });
    res.json(articles);
  });
  
  // Edit an Article
  app.put('/articles/:articleID', async (req, res) => {
    try {
      const { articleID } = req.params;
      const updatedArticle = await Article.findByIdAndUpdate(articleID, req.body, { new: true });
      res.json(updatedArticle);
    } catch (error) {
      res.status(400).json({ error: 'Could not update the article.' });
    }
  });


  // Remove an Article
app.delete('/articles/:articleID', async (req, res) => {
    try {
      const { articleID } = req.params;
      await Article.findByIdAndRemove(articleID);
      res.json({ message: 'Article deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Could not delete the article.' });
    }
  });
  


app.listen(3000, () => {
    console.log('App listening to port 3000')
})
mongoose.connect("mongodb+srv://adwaithsivan007:adwaith1234@articleapi.j71qzxb.mongodb.net/Article-API?retryWrites=true&w=majority")
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})