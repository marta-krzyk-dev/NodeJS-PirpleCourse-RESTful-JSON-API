/* 
Create and export configuration variables
*/

//Container for all the environments
var environments = {};

// Staging (default) environment
environments.staging = {
	'httpPort' : 3000,
	'httpsPort' : 3001,
	'envName' : 'staging'
};

// Production environment
environments.production = {
	'httpPort' : 5000,
	'httpsPort' : 5001,
	'envName' : 'production'
};

// Determine if production environment was passed as a command line arg, otherwise set to staging
// In Windows, the arguments are kept in process.argv array
if (process.argv.length > 2)
	var environmentToExport = (process.argv.indexOf(environments.production.envName.toLowerCase()) > -1) ? environments.production : environments.staging;
else 
	var environmentToExport = environments.staging;

//Export the module
module.exports = environmentToExport;