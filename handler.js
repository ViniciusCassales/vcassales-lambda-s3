'use strict';

const manageFile = require('./manageFile')

module.exports.appendText = async event => {
    const text = event.queryStringParameters.text;

    manageFile.appendText(text).then(result =>{
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                result
            })
        };

        callback(null, response);
    });
};
