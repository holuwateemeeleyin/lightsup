const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config({ path: path.resolve(__dirname, './.env') })
const app = express()
app.use(express.json())




// Setting Up Database

mongoose.Promise = global.Promise

mongoose.connect(
    process.env.MONGODB_STRING
)

    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err))



const nftProject = require('./Routes/NFTProject')
const ethProject = require('./Routes/Eth')
app.use(cookieParser())
app.use('/api', nftProject)
app.use('/api', ethProject)


// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//     app.get("/*", function (req, res) {
//         res.sendFile(path.join(__dirname, "./client/build/index.html"));
//     });
// }

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
//   app.use(nftProject);
//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))