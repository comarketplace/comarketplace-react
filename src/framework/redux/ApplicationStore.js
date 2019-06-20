/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
const isProductionMode = process.env.NODE_ENV
		&& process.env.NODE_ENV.trim() === 'production';

console.log("isProductionMode=" + isProductionMode)

if (isProductionMode) {
	module.exports = require('./ApplicationStore.prod');
	
} else {
	module.exports = require('./ApplicationStore.dev');
}