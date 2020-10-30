const connection = require("./connection");

const orm = {
    selectAll: function(fromTable, callBack){
        connection.query("select * from ??", fromTable, function(err,result){
            // TODO remove log
            console.log("we are in orm receiving data from DB and sending it to burger model");
            if (err) { throw err }
            callBack(err, result);
        })
    },
    insertOne: function(colsToInsert,values, callBack){
        connection.query("insert into burgers (??) values (?)", [colsToInsert,values], function(err,result){
            if (err) { throw err} 
            callBack(err, result)
        })
    },
    updateOne: function(setCol,setValue,whereCol, whereVal,callBack){
        connection.query("update burgers set ?? = ? where ?? = ?",[setCol,setValue,whereCol,whereVal],function(err,result){
            if(err) { throw err }
            callBack(err,result);
        })
    }
}

module.exports = orm;