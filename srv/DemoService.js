const cds = require('@sap/cds')
module.exports = function (){
   this.on ('hello', async req => {
      const {name} = req.data
      cds.log("demo").info('test', { bla: name })
      return `Hello ${name}`;
    })
 }