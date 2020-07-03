const db = require('./db'),
    logger = requi('./logger').logger;

exports.addCategory = function (req, res) {
    var reqJSON = req.body;

}

exports.addProduct = function (req, res) {
    var reqJSON = req.body;
    db.insert(reqJSON, 'product', function (code, res) {
        if (code == 200) {
            logger.log('error', 'Exception occured ' + res);
        }
        else {
            return res;
        }
    })
}

exports.addCategory = function (req, res) {
    var reqJSON = req.body;
    db.insert(reqJSON, 'catgory', function (code, res) {
        if (code == 200) {
            logger.log('error', 'Exception occured ' + res);
        }
        else {
           return res;
        }
    });
}

exports.addSubCategory = function (req, res) {
    var reqJSON = req.body;
    db.insert(reqJSON, 'catgory', function (code, res) {
        if (code == 200) {
            logger.log('error', 'Exception occured ' + res);
        }
        else {
           return res;
        }
    });
}


exports.categoryWiseProduct = function (req, res) {
    db.getProductCategorywise('', 'product', function (code, res) {
        if (code == 200) {
            logger.log('error', 'Exception occured ' + res);
        } else {
            return res;
        }
    })
}

exports.getProduct = function (req, res) {
    var data = req.url.indexOf('?');
    db.getProduct(data, 'product', function (code, res) {
        if (code == 200) {
            logger.log('error', 'Exception occured ' + res);
        } else {
            return res;
        }
    });
}