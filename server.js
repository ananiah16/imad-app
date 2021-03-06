var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
'article-one' :{
    title: 'Article one | Surya',
    heading: 'Article one',
    date: 'sep 4, 2017',
    content:  ` 
    <body>
<link href="/ui/style.css" rel="stylesheet" />
    <div class="container">
    </div>
    <div>
        <p>
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
        </p>
    </div>
    </div>`,
},
'article-two' :{ title: 'Article two | Surya',
    heading: 'Article two',
    date: 'sep 5, 2017',
    content:  `  
    <body>
    <div class="container">
    </div>
    <div>
        <p>
            This is the content for my second article. 
        </p>
    </div>
    </div>`,},
'article-three' : {title: 'Article three | Surya',
    heading: 'Article three',
    date: 'sep 6, 2017',
    content:  `  
    <body>
    <div class="container">
    </div>
    <div>
        <p>
            This is the content for my third article. 
        </p>
    </div>
    </div>`,}
};

function createTemplate (data) {
    
var title = data.title;
var heading = data.heading;
var date=data.date
var content =data.content;
var htmltemplate =  `
  </head> 
  <link href="/ui/style.css" rel="stylesheet" />
  <style>.container{
    max-width: 800px;
    margin: 0 auto;
    color: #2fb3a7;
    font-family: sans-serif;
    padding-top: 50px;
    padding-left: 30;
    padding-right: 30;
} 
</style>
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
app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
 res.send(createTemplate(articles[articlename]));
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
