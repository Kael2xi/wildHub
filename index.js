const bodyParser = require("body-parser");
const express = require("express");
const db = require("./config/db");
// const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 6600;


app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});



// const authRouter = require("./routes/authRoute");
// const productRouter = require("./routes/productRoute");

// const categoryRouter = require("./routes/prodcategoryRoute");

// const brandRouter = require("./routes/brandRoute");

// const enqRouter = require("./routes/enqRoute");

// const uploadRouter = require("./routes/uploadRoute");
// const cookieParser = require("cookie-parser");
// const morgan = require("morgan");
// const cors = require("cors");

// dbConnect();
// app.use(morgan("dev"));
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use("/api/user", authRouter);
// app.use("/api/product", productRouter);

// app.use("/api/category", categoryRouter);

// app.use("/api/brand", brandRouter);


// app.use("/api/enquiry", enqRouter);
// app.use("/api/upload", uploadRouter);

// app.use(notFound);
// app.use(errorHandler);
// app.listen(PORT, () => {
//   console.log(`Server is running  at PORT ${PORT}`);
// });


