var dbHost = process.env.dbHost || "localhost";
module.exports = {
	"http": {
		"host":"localhost",
		"port":4000
	},
	"db": {
		// "connectionUri":"mongodb://"+dbHost+":27017/enzo",
		"connectionUri":"mongodb+srv://harsh:12345@cluster0.nixff.mongodb.net/enzoharsh?retryWrites=true&w=majority",
	
		"params": {},
		"collections": [
			"moment",
			"user",
			"feeling",
			"ask"
		]
	}
}
