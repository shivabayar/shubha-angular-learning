/**
 * Created by shivrajs on 4/10/16.
 */

var customServices = angular.module('customServices', ['ngResource']);

customServices.service('customServices', function($resource){
    this.square = function(url) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', url, isArray:true}
        });
    }
});

