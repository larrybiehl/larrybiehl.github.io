'use strict';
function getFiles(dir){
	//var fs = require('[/usr/local/bin/fs]');
	var fs = require(['fs']);
    var fileList = [];
    
    console.log(fs);

    var files = fs.readdirSync(['/']);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (!fs.statSync(name).isDirectory()){
            fileList.push(name);
        }
    }
    return fileList;
}
