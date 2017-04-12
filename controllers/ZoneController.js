var Zone = require("../models/Zone")

module.exports = {
  /**查找 */
  find: function(params, callback) {
    Zone.find(params, function(err,zones){
      if(err) {
        callback(err, null)
        return
      }

      callback(null, zones)
    })
  },

  /**通过ID查找 */
  findById: function(id, callback) {
    Zone.findById(id, function(err, zone){
      if(err){
        callback(err, null)
        return
      }

      callback(null, zone)
    })
  },

  /**创建 */
  create: function(params, callback) {
    var zips = params["zipCodes"]
    var zip = zips.split(",")
    var newZips = []
    zip.forEach(function(zipCode){
      newZips.push(zipCode.trim())
    })
    params["zipCodes"] = newZips

    Zone.create(params, function(err, zone){
      if(err) {
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  /**修改 */
  update: function(id, params, callback) {
    Zone.findByIdAndUpdate(id, params, {new: true}, function(err, zone){
      if(err) {
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  /**删除 */
  delete: function(id, callback) {
    Zone.findByIdAndRemove(id, function(err){
      if(err) {
        callback(err, null)
        return
      }
      callback(null, null)
    })
  },


}