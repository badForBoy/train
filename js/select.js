;(function(){
	/*所在地区的三级联动*/
	var citys = [
	{"city":"请选择","value":"0"},{"city":"直辖市","value":"1"},{"city":"安徽","value":"2"},{"city":"福建","value":"3"},{"city":"甘肃","value":"4"},{"city":"广东","value":"5"},
	{"city":"广西","value":"6"},{"city":"贵州","value":"7"},{"city":"海南","value":"8"},{"city":"河北","value":"9"},{"city":"河南","value":"10"},
	{"city":"黑龙江","value":"11"},{"city":"湖北","value":"12"},{"city":"湖南","value":"13"},{"city":"吉林","value":"14"},{"city":"江苏","value":"15"},
	{"city":"江西","value":"16"},{"city":"辽宁","value":"17"},{"city":"内蒙古","value":"18"},{"city":"宁夏","value":"19"},{"city":"青海","value":"20"},
	{"city":"山东","value":"21"},{"city":"山西","value":"22"},{"city":"陕西","value":"23"},{"city":"四川","value":"24"},{"city":"西藏","value":"25"},
	{"city":"新疆","value":"26"},{"city":"云南","value":"27"},{"city":"浙江","value":"28"},{"city":"港澳台","value":"29"},
	];
	var cityObj = eval(citys);

	for (var i = 0; i < cityObj.length; i++) {
		var val = cityObj[i].value;
		var elCity = cityObj[i].city;
		$("#selId").append("<option value=" + val + ">" + elCity + "</option>")
	};

	/*职业下拉框*/
	var jobs = [
	{"job":"请选择","value":"0"},{"job":"学生","value":"1"},{"job":"Python工程师","value":"2"},{"job":"交互设计师","value":"3"},{"job":"产品经理","value":"4"},{"job":"待添加","value":"5"},
	];
	var jobObj = eval(jobs);

	for (var j = 0; j < jobObj.length; j++) {
		var val = jobObj[j].value;
		var elJob = jobObj[j].job;
		$("#job").append("<option value=" + val + ">" + elJob + "</option>");
	}

	/*栏目下拉*/

	var columns = [
	{"column":"请选择","value":"0"},{"column":"婴幼儿教育","value":"1"},{"column":"中小学辅导","value":"2"},{"column":"学历教育","value":"3"},{"column":"英语培训","value":"4"},
	{"column":"出国考试","value":"5"},{"column":"留学","value":"6"},{"column":"小语种","value":"7"},{"column":"冬夏令营","value":"8"},{"column":"资格考试","value":"9"},
	{"column":"职业技能","value":"10"},{"column":"IT培训","value":"11"},{"column":"管理培训","value":"12"},{"column":"文体艺术","value":"13"},{"column":"兴趣/素养","value":"14"},
	];
	var columnObj = eval(columns);

	for (var n = 0; n < columnObj.length; n++) {
		var val = columnObj[n].value;
		var elcolum = columnObj[n].column;
		$("#idcat").append("<option value=" + val + ">" + elcolum + "</option>");
	}

}());