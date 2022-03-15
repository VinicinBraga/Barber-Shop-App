const mongoose = require("mongoose");
const URI =
  "mongodb+srv://barberUser:dEUPbKavxVp27jDB@clusterdev.8kl2c.mongodb.net/barber-shop-data?retryWrites=true&w=majority";

//mongoose.set("useNewUrlParser", true);
//mongoose.set("useFindAndModify", false);
//mongoose.set("useCreateIndex", true);
//mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(URI)
  .then(() => console.log("DB is Up"))
  .catch(() => console.log(err));
