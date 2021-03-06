/** @license
 * ReactiveSettings <https://github.com/ruzz/reactive-settings.git>
 * Released under the MIT license
 * Author: i.m. ruzz
 * Version: 0.0.1
 */

(function (global) {
    var root = this;

    /**
     * reactive settings manager class
     * @name _ReactiveSettings
     * @author i.m.ruzz
     * @constructor
     */
    function _ReactiveSettings(config) {
        var self = this;
        this._config = config || { initialize: [] };
        this._reactiveStore = config._reactiveStore || {};

    }

    _ReactiveSettings.prototype = {
        /**
         * _ReactiveSettings Version Number
         * @type String
         * @const
         */
        VERSION: '0.0.1',

        /**
         * invokes passed error handler or exits quietly
         * @private
         * @param {string} errorString a string to be handled
         * @throws uses passed error handler or exits quietly
         */
        _handleError: function (errorString) {
            if (!this._config.hasOwnProperty("errorHandler"))
                return;
            this._config.errorHandler(errorString);
        },

        /**
         * gets the desired reactive variable
         * @param {string}  name of the registered reactive variable
         * @return {?} returns the value stored or null
         */
        get: function (name) {
            return new ReactiveSetting({
                index: name, store: this._reactiveStore});
        }
    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Reactive Settings namespace
     * @namespace
     * @name ReactiveSettings
     */
    var ReactiveSettings = _ReactiveSettings;

    if (typeof define === 'function' && define.amd) { //AMD
        define(function () {
            return ReactiveSettings;
        });
    } else if (typeof module !== 'undefined' && module.exports) { //node
        module.exports = ReactiveSettings;
    } else {
        global['ReactiveSettings'] = ReactiveSettings;
    }
}(this));
