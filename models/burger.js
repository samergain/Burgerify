const orm = require("../config/orm");

let burger = {
    allBurgers: function(callBack) {
        orm.selectAll("burgers",function(err,result){
            console.log("error in burger.js is:", err, " and the result is:", result);
            if (err) { throw err }
            callBack(result);
        });
    }
}

module.exports = burger;