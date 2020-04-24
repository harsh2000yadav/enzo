var dbHost = process.env.dbHost || "localhost";
module.exports = {
	"http": {
		"host":"localhost",
		"port":4000
	},
	"db": {
		// "connectionUri":"mongodb://"+dbHost+":27017/enzo",
		"connectionUri":"mongodb+srv://Enzo:enzoharsh@cluster0-5xuew.mongodb.net/test?retryWrites=true&w=majority",
	
		"params": {},
		"collections": [
			"moment",
			"user",
			"feeling",
			"ask"
		]
	}
}
