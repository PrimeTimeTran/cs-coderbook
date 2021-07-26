function pagination(req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const start = (page - 1) * limit;
  const end = page * limit;
  req.start = start;
  req.end = end;
  req.limit = 3;
  req.id = req.params.id;
  next();
}

module.exports = {
  pagination
}