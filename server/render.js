module.exports = function(title, body) {
  return(`
    <!DOCTYPE html><html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <!--[if lt IE 9]>
        <script>
        (function(){
          var ef = function(){};
          window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
        }());
        </script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
        <![endif]-->
        <link rel="manifest" href="/manifest.json">
        <link rel="shortcut icon" href="/favicon.ico">
        <title>${title}</title>
        <link href="/static/css/main.4ccc5897.css" rel="stylesheet">
      </head>
      <body>
        ${body}
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgQfn9x-8LOFj-FzWOvI_GN-cJDU4-DBg&libraries=places"></script>
        <script type="text/javascript" src="/static/js/main.8bca19cb.js"></script>
      </body>
    </html>
  `)
}