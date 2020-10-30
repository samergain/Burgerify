const orm = require("../config/orm");

let burger = {
    allBurgers: function(callBack) {
        orm.selectAll("burgers",function(err,result){
            console.log("we are in burger model received data from orm and sending it to controller");
            if (err) { throw err }
            callBack(result);
        });
    },
    addBurger: function(colName, burger_name, callBack) {
        orm.insertOne(colName,burger_name, function(err, result){
            if (err) { throw err }
            callBack(result);
        })
    },

    devourBurger: function(colName, value, whereCol, whereVal, callBack) {
        orm.updateOne(colName,value, whereCol, whereVal, function(err, result){
            if (err) { throw err }
            callBack(result);
        })
    }
}

module.exports = burger;