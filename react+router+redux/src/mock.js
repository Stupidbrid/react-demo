const Mock = require("mockjs")
const Random = Mock.Random;

Mock.mock("http://localhost:8090/user_list", "get", (res) => {
	let data=[];
	console.log(1245)
	let string="qwertyuiopadsfhjkszn";
	let arr=["男","女"]
	for(let i=0;i<Random.natural(5,30);i++){
		data.push({
			mock_name:Random.cname(),
			mock_xb:arr[Random.natural( 0, 1)],
			mock_city:Random.county(true),
			mock_xq:Random.cname(),
		})
	}
	console.log(data)
	return {
		msg:200,
		data:data
	}
})
