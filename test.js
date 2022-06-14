const cli = require('./utils/cli');
const output = require('./utils/output');
const save = require('./utils/save')
const browser = require('./utils/browser')

test('CLI function should return undefined', async () => {
	const cliPrompt = await cli('how to sort a list in python', []);
	expect(typeof cliPrompt).toEqual('undefined');
});

test('Check user input for empty string without flags', async () => {
	const cliPrompt = await cli('', []);
	expect(cliPrompt).toEqual('You did not enter a question. Please enter one');
});

test('Check user input for empty string with flags', async () => {
	const cliPrompt = await cli('', ['--asc', '--votes']);
	expect(cliPrompt).toEqual('You did not enter a question. Please enter one');
});

test('Check output of inline/block code', async () => {
	const output_result = output(" ``` check ``` `test!` ");
	console.log(output_result)
});

test('Check saving function works well', async () => {
	const save_result = await save("title","body","answer");
})

test('Check open function works well', async () => {
	const open_result = await browser("www.naver.com")
})