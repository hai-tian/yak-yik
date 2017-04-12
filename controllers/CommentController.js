var Comment = require("../models/Comment")

module.exports = {
  /**查找 */
  find: function(params, callback) {
    Comment.find(params, function(err,comments){
      if(err) {
        callback(err, null)
        return
      }

      callback(null, comments)
    })
  },

  /**通过ID查找 */
  findById: function(id, callback) {
    Comment.findById(id, function(err, comment){
      if(err){
        callback(err, null)
        return
      }

      callback(null, comment)
    })
  },

  /**创建 */
  create: function(params, callback) {
    Comment.create(params, function(err, comment){
      if(err) {
        callback(err, null)
        return
      }
      callback(null, comment)
    })
  },

  /**修改 */
  update: function(id, params, callback) {
    Comment.findByIdAndUpdate(id, params, {new: true}, function(err, comment){
      if(err) {
        callback(err, null)
        return
      }
      callback(null, comment)
    })
  },

  /**删除 */
  delete: function(id, callback) {
    Comment.findByIdAndRemove(id, function(err){
      if(err) {
        callback(err, null)
        return
      }
      callback(null, null)
    })
  },


}