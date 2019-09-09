var dbHost = process.env.dbHost || "localhost";
module.exports = {
	"http": {
		"host":"localhost",
		"port":4000
	},
	"db": {
		"connectionUri":"mongodb://"+dbHost+":27017/project",
		"params": {},
		"collections": [
			"moment",
			"user",
			"feeling",
			"ask"
		]
	}
}
