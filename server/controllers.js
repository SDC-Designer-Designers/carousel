const execute = require('../helpers/get.js')
const dexter = require('../helpers/post.js')
const putter = require('../helpers/put.js')

const controllers = {
    get:(req,res) => {
      execute(req.params,(err,result) => {
        if(err) res.status(404).send(err)
        else res.status(200).send(result)
      })
    },
    post: (req,res) => {
      dexter(req,(err,result) => {
        if(err) res.status(404).send(err)
        else res.status(200).send(result)
        })
    },
    put: (req,res) => {
      putter(req,(err,result) => {
          if(err) res.status(404).send(err)
          else res.status(200).send(result)
      })
    }
}

module.exports = controllers