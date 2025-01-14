const switchResult = require('./switch');
const markdownLinkExtractor = require('markdown-link-extractor');

/**
 *
 * @param thread - stackoverflow thread for answers
 * @return - array of answers of the threads
 */
const threadAns = thread => {
	const temp = [];
	
	if (typeof thread === 'undefined') {
		return temp;
	}
	// console.log(thread); //------> 객체 구조 확인하기 좋음!
	thread.map(ans => { //+) map : callbackfn을 실행한 결과를 가지고 새로운 배열을 만듦
		let body = '';
		// console.log("mark_down: "+ans.body_markdown)
		for(const index of ans.body_markdown){
			body += `${index}\n`
		}
		temp.push(body);
		//temp.push(ans.body_markdown);
	});
	return temp;
// 답변 thread 인수로 받아 temp 배열에 ans.body_markdown값을 넣어준 뒤 temp(배열) 리턴
};

const threadAns_links = thread => {
	const temp = [];
	
	if (typeof thread === 'undefined') {
		return temp;
	}
	thread.map(ans => {
		const links = markdownLinkExtractor(format(ans.body_markdown));
		temp.push(links);
	});
	return temp;
};

/**
 *
 * @param question - thread question
 * @return body - formated body
 */
const format = question => {
	let body = '';
	//console.log(question);
	question.map(index => {
		body += `${index}\n`;
	});
	return body;
	// 질문 인수로 받아 body 문자열에 index값 넣어 body(문자열) 리턴
};

/**
 *
 * @param results - stackoverflow threads
 * @param order - order of results
 * @param sort - sort of results
 */
module.exports = (results, order, sort) => {
	let basicInfoOfQuestions = [];

	results.map(result => {
		const infoObj = { //+) infoObj : 객체(오브젝트)
			title: typeof result.title === 'undefined' ? '' : result.title,
			body: format(result.body_markdown),// 질문내용 문자열로 리턴
			answers: threadAns(result.answers),// 답변 배열로 리턴
			url: result.link,
			links: threadAns_links(result.answers),
		};
		// console.log(result.link);
		basicInfoOfQuestions.push(infoObj);
	});
	// console.log(basicInfoOfQuestions);
	switchResult(basicInfoOfQuestions, order, sort);
};
