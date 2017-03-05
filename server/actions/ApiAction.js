
const api1 = (req, res) => {
  console.log(' api1 body');
  res.json({"api":"1 new"})
  res.end()
}

const api2 = (req, res) => {
  res.json({"api":"2 new"})
}



const ApiAction = {
  api1,
  api2,


}

exports = {ApiAction}
