const logger = require('./logger').logger;
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/heady";
var database = { heady: null };

exports.connect = function (response) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw response(err);
        } else {
            database.heady = db.db('heady');
            return;
        }
    });
}

exports.insert = function (data, collectionName, res) {
    var collection = database.heady.collection(collectionName);
    collection.insert(data, function (err, response) {
        if (err) {
            logger.log('error', 'Error occured while inserting data in ' + collectionName + ' collection.');
            return res(200, err);
        } else {
            //Data added
            logger.info('Item inserted into '+ collectionName + '.', { response });
            return res(400, response._id );
        }
    });
};


exports.getProductCategorywise =  function(data, collectionName, res){
    var collection = database.heady.collection(collectionName);
    collection.aggregate([{$match:{_id:{$in:"category"}}},{$group:{_id:"$name"}}]).toArray(function(err, result){
        if(err){
            logger.log('error', 'Error occured while accessing DB.');
            return res(200, err);
        }else{
            return res(400, result);
        }
    });
}

exports.getProduct= function(data, collectionName, res){
    var collection = database.heady.collection(collectionName);
    collection.find(data).toArray(function(error, result){
        if(err){
            logger.log('error', 'Error occured while accessing DB.');
            return res(200, err);
        }else{
            return res(400, result);
        }
    });
}