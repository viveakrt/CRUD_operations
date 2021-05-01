const { createLogger, transports, format, config} = require("winston");

const logger = createLogger({
	transports: [
		new transports.File({
            
            filename: "log/info.log",
            levels: config.syslog.levels,
            format : format.combine(format.timestamp(),format.json())
		}),
/*         new transports.Console({
			level: "info",
            format : format.combine(format.timestamp(),format.json(),format.prettyPrint())
		}),
        new transports.Console({
            level : "error",
            format : format.combine(format.timestamp(),format.json(),format.prettyPrint())
        }) */
	],

});

module.exports = logger;
