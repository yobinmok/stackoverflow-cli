const inquirer = require('inquirer');
 var open = require('open');
 //var chalk = require('chalk');
//  var Progress = require('progress'),
// 	 bar = new Progress('running [:bar] :percent :etas', {
// 		 complete: '=',
// 		 incomplete: ' ',
// 		 width: 10,
// 		 total: 1
// 	 });


module.exports = async (url) => {
    console.clear();

    selectBrowser().then(
        value => {
      if(value == 'chrome')
      {
        open(url, {app: {name:open.apps.chrome}});
      }
      if(value == 'edge')
      {
        open(url, {app: {name:open.apps.edge}});
      }
      if(value == 'firefox')
      {
        open(url, {app: {name:open.apps.firefox}});
      }
    })
    .catch(console.error);
  };
  
  

  const selectBrowser = async () => {
    var browser;
  
    let result = await inquirer.prompt({
      type: "list",
      name: "choice",
      message: "Select a Browser",
      choices: [
        { name: 'chrome' },
        { name: 'edge' },
        { name: 'firefox' },
      ]
    });
    browser = result.choice;
    return browser;
  };