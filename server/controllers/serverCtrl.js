exports.helloworld = function(req, res, next){
  res.status(200).json({
    message: "Hello world!",
    anotherMessage: "Woah, another!"
  })
}

exports.getgreetings = function(req, res, next){
  res.status(200).json({
    message: "Good Evening!",
    trytochange: "Hasen't changed"
  })
}
