
exports.upload = (req, res) => {
    console.log(req.file)
    const data = {
        image: req.file.path,
      }
    console.log(data)
    res.status(200).json({ data })
}