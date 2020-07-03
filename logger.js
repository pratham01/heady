const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    format: format.combine(
        format.json()
    ),
    transports: [new transports.Console()]
});


exports.logger = logger;