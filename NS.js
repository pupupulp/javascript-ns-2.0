/**
 * This is an opensource project that aims to provide useful wrappers for
 * faster development when using Netsuite API v2.0.
 *
 * Feel free to add more wrappers under namespaces provided or make another one
 * if the functionality requires.
 */

/**
 * [Namespace for package/library]
 * @type {Object}
 */
var NS = {
    /**
     * [Sub-namespace for date scripts]
     * @type {Object}
     */
    date: {
        /**
         * [description]
         * @param  {Object} [date={}] [description]
         * @param  {Number} [days=0]  [description]
         * @return {[type]}           [description]
         */
        addDays: function(date = {}, days = 0) {
            return date.setDate(date.getDate() + days);
        },
        /**
         * [description]
         * @param  {Object} [date={}]  [description]
         * @param  {Number} [months=0] [description]
         * @return {[type]}            [description]
         */
        addMonths: function(date = {}, months = 0) {
            return date.setDate(date.getDate() + months);
        }
    }
};
