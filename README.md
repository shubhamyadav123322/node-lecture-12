ठीक है 👍 आपने जो screenshot दिया है उसमें Lecture 12: **Dynamic UI using EJS** के सारे topics लिखे हैं। मैं आपके लिए एक proper **GitHub README.md** बना देता हूँ। इसे आप अपने Git repo में डाल सकते हैं।

---

# 📌 Dynamic UI using EJS | Node.js

This lecture covers how to create **Dynamic UI** in a Node.js application using **EJS (Embedded JavaScript Templates)**.

---

## 🚀 Topics Covered

1. **Need of Dynamic UI**

   * Why static HTML is not enough
   * Importance of dynamic rendering

2. **Sharing using Global Variables**

   * Passing values across views
   * Using locals and app-level variables

3. **What is EJS**

   * Introduction to EJS
   * How it helps in rendering dynamic content

4. **Installing EJS**

   ```bash
   npm install ejs
   ```

   * Setting up EJS in Node.js project
   * Configuring Express to use EJS

5. **Using EJS Templates**

   * Creating `.ejs` files
   * Rendering templates with dynamic data

6. **Working with Partials**

   * Reusing components (header, footer, navbar)
   * `<%- include('partials/header') %>`

---

## ⚡ Example Code

### 📂 Project Structure

```
my-app/
│── views/
│   ├── index.ejs
│   ├── about.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│── app.js
│── package.json
```

### `app.js`

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to Dynamic UI using EJS!' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

### `views/index.ejs`

```html
<%- include('partials/header') %>

<h1><%= title %></h1>
<p><%= message %></p>

<%- include('partials/footer') %>
```

---

## 🌍 Resources

* [EJS Official Docs](https://ejs.co)
* [Express.js Guide](https://expressjs.com)
* [CompleteCoding.in](http://www.completecoding.in)

---

✨ With **EJS**, you can easily build **Dynamic UI** by mixing HTML and JavaScript inside templates.

---
