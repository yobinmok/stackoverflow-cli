const cli = require('./utils/cli');
const output = require('./utils/output');
const save = require('./utils/save')
// 언니가 keypress 관련 모듈 주면 그거로 test 합시다용

// test("테스트에 대한 설명", (테스트 함수) => {

// })
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
	const output_result = output(" ``` checking ``` `check!` ");
	console.log(output_result)
});

test('Check saving function works well', async () => {
	const save_result = await save("title1","body","answer");
	expect(save_result).toEqual('success')
})