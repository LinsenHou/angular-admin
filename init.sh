`cd ${PWD}`
echo 'npm install'
`/usr/local/bin/npm install`
echo 'run grunt task..'
grunt # run grunt task
echo 'node web server start'
`nohup node http.js &`
