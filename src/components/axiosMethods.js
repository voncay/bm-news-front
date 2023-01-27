
// // // Axios Methods

import axios from 'axios';

// // Option 1 as components

export const getArticles = () => {
    return axios.get('/articles');
}

export const getArticleById = (id) => {
    return axios.get(`/articles/${id}`);
}

export const createArticle = (data) => {
    return axios.post('/articles', data);
}

export const updateArticle = (id, data) => {
    return axios.put(`/articles/${id}`, data);
}

export const deleteArticle = (id) => {
    return axios.delete(`/articles/${id}`);
}

// // Option 2 as basic axios methods

// Create a new article:

axios.post('/articles', {
    author_name: 'John Doe',
    title: 'My first article',
    text: 'This is the content of my first article',
    userId: '5f6d8f6d5f6f5d6f5d6f'
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
});

// Get all articles:

axios.get('/articles')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

// Get a single article by ID:

axios.get('/articles/:id')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

//     Update an article by ID:

axios.put('/articles/:id', {
    title: 'My updated article',
    text: 'This is the updated content of my article'
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
});

//     Delete an article by ID:

axios.delete('/articles/:id')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

//      Update article with comments

axios.get('/articles/:id')
  .then(response => {
    let article = response.data;
    // Add the comment id to the comments array
    article.commentIds.push('5f6d8f6d5f6f5d6f5d6f');
    // Update the article object on the server
    axios.put('/articles/:id', article)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  }
);
