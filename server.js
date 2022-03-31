const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.dirname + '/dist/resume-angular'));
app.get('/*', function(req,res)
{res.sendFile(path.join(path.dirname+'/dist/resume-angular/index.html'));});
app.listen(process.env.PORT || 8080);
