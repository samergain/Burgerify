const connection = require("./connection");

const orm = {
    selectAll: function(fromTable, callBack){
        connection.query("select * from ??", fromTable, function(err,result){
            // TODO remove log
            console.log("error in orm.js selectAll is:", err, " and the result is:", result);
            if (err) { throw err }
            callBack(err, result);
        })
    },
    insertOne: function(intoTable,colsToInsert,values){
        connection.query("insert into ?? (??) values (?)", [intoTable,colsToInsert,values], function(err){
            if (err) { throw err} 
        })
    },
    updateOne: function(tableToUpdate,setCol,setValue,whereCol,isValue){
        connection.query("update ?? set ?? = ? where ?? = ?",[tableToUpdate,setCol,setValue,whereCol,isValue],function(err){
            if(err) { throw err }
        })
    }
}

module.exports = orm;