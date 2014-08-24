/** @license
 * ReactiveSetting <https://github.com/ruzz/reactive-settings.git>
 * Released under the MIT license
 * Author: i.m. ruzz
 * Version: 0.0.1
 */

(function (global) {
    var root = this;

    /**
     * reactive setting  class
     * @name _ReactiveSetting
     * @author i.m.ruzz
     * @constructor
     */
    function _ReactiveSetting(config) {
        var self = this;
        this.index = {};
        this._config = config || { initialize: [] };
        this._reactiveStore = config.store || {};

        this._config.base = this._reactiveStore.get(config.index);

        if (_.isObject(this._config.base) ) {
            _.extend(this.index, this._config.base);
        } else {
            this.index[this._config.index] = this._config.base;
        }

    }

    _ReactiveSetting.prototype = {
        /**
         * _ReactiveSetting Version Number
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
         * saves the currently loaded reactive variable
         * @public
         */
        save: function() {
            this._reactiveStore.set(this._config.index, this.index);
        }



    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Reactive Settings namespace
     * @namespace
     * @name ReactiveSetting
     */
    var ReactiveSetting = _ReactiveSetting;

    if (typeof define === 'function' && define.amd) { //AMD
        define(function () {
            return ReactiveSetting;
        });
    } else if (typeof module !== 'undefined' && module.exports) { //node
        module.exports = ReactiveSetting;
    } else {
        global['ReactiveSetting'] = ReactiveSetting;
    }
}(this));
