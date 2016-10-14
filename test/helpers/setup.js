require('babel-register')({
  presets: ["react", "es2015"]
});

require('babel-polyfill');

//we need an instance of the document

global.document = require('jsdom').jsdom(
  "<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" style="text/css" href="
    https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css"/>
    <!--Google fonts link if wanted, available from https://fonts.google.com -->
    <link rel="stylesheet" style="text/css" href="styles.css"/>
    <title>Weathrly: Your World, Your Weather.</title>
  </head>
  <body>
    <div id='application'></div>
  <script src="main.bundle.js"></script>
  </body>
</html>

);

//and an instance of the window
global.window = document.defaultView;
global.navigator = window.navigator;
