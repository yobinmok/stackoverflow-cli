
# 💥 stackoverflow-cli Developer Guide

This document describes the contents for <b>developers</b>.

## ↓ Setting environment for work
### Install node, npm

Install **Node.js** suitable for your operating system to participate in the project.

At this time, **npm**, a package management tool, is automatically installed.

When the installation is complete, print the versions of Node.js and npm with the following command to check whether they are installed properly.

```sh
# check version
node -v

# check version
npm -v
```

### Load repository to local 
After copying the url from the repository, git clone it in the working path.

```sh
$ git clone https://github.com/yobinmok/stackoverflow-cli.git
```

### Branch creation and conversion

Create a branch to be used for resolving issues, switch to the created branch, and work.

After operations such as git add and git commit, push the project to the GitHub repository.

```sh
# create branch
$ git checkout –b “branch name”

# swtich branch
$ git checkout “branch name”

# push branch
$ git push –u origin “branch name”
```

### Package management
Install all packages specified in package.json at once using the following command.

```sh
$ npm install
```
## ⚡️ Execute project

Execute REPL, a virtual environment provided by Node.js, through the following command.

```sh
$ node
```
Execute the JavaScript file by entering the file name after the node command.

```sh
$ node index.js
```
Press Ctrl + C twice to end REPL.

## 👨🏻‍💻 Develop project

### Directory structure

```sh
stackoverflow-cli/
├─ images/									# image folder
├─ node_modules/							# node module
├─ index.js									# program start file
├─ package.json								# package file
├─ test.js									# testing file
├─ .gitignore								# .gitignore
└─ utils/							
	├─ init.js								# question input module
	├─ cli.js								# communication and encoding/decoding
	├─ results.js							# classify and stroe data
	├─ end.js								# program end text output
	├─ swtich.js							# data output 
	├─ output.js							# improved data output
	└─ save-search-results/					# save question and answers
```

### Install package

To use a new package in your project, specify the package name to be installed after the npm install command.

```sh
# --save : The package name and version installed in dependencies are recorded
$ npm install --save <package>

# --save-dev: In devDependencies, the dependent package and version for development used only during development are specified.
$ npm install --save-dev <package>
```

## 🔑Testing

In test.js, a total of 6 cases are tested.

​	• A case in which the cli module returns an undefined value.

​	• A case where the user inserts an empty string as input with or without flags

​	• A case to check that the output module is running correctly

​	• A case to check whether the save module used to save selected questions and answers is properly 	   		executed

​	• A case to check the execution of browser module with browser open function

In the three cases below, you cannot use the expect statement like the existing test case because it needs to receive the user's input, but you can check whether it is executed properly by executing it through the test statement.

Run the test with the following command.

```sh
$ npm test
```

