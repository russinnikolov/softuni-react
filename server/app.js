const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const users = require("./routes/index");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const app = express();
const PORT = 3030;

const corsOptions ={
	origin:'*',
	credentials:true,
	optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json(), users);
app.use(express.json(), auth);


app.all("*", (req, res, next) => {
	next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

module.exports = app;
