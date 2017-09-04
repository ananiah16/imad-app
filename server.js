var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone = {
    title: 'Article one | Surya',
    heading: 'Article one',
    date: 'sep 5, 2017',
    Content: `<p>
            This is the content for my first article. This is the content for my first article.
             This is the content for my first article. This is the content for my first article.
        </p>
       <p>
            This is the content for my first article. This is the content for my first article.
             This is the content for my first article. This is the content for my first article.
        </p>
        <p>
            This is the content for my first article. This is the content for my first article.
             This is the content for my first article. This is the content for my first article.
        </p>`,
};

function createTemplate (data) {
    
var title = data.title;
var heading = data.heading;
var date=data.date
var content =data.content;
var htmltemplate =  ` <style>.container{
    margin: 0 auto;
    color: #2fb3a7;
    font-family: sans-serif;
    padding-top: 50px;
    padding-left: 30;
    padding-right: 30;
    </style>
  </head>  
    <body>
    <div class="container">
    <div>
        <a href='/'>Home</a>
    </div>
    <hr/>
    <h3>
       ${heading}
    </h3>
    <div>
       ${date}
    </div>
    <div>
      ${content}
    </div>
    </div>
    </body>
    
    
</html>`
;
return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
 res.send(createTemplate(articleone));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
