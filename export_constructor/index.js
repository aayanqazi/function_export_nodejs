var Logger = require('./logger');
var logger = new Logger();
var logger2= new Logger({loggingLevel:4});

logger.log(1,"loggingLevel 1");
logger.log(2,"loggingLevel 2");
logger.log(3,"loggingLevel 3");
logger.log(4,"loggingLevel 4");

logger2.log(1,"loggingLevel 1");
logger2.log(2,"loggingLevel 2");
logger2.log(3,"loggingLevel 3");
logger2.log(4,"loggingLevel 4");