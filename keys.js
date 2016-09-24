// This module stores the parse keys
// It is in .gitignore in order to keep them secret
// You will need to sign up for parse and use your own keys
// Accounts are free at www.parse.com
//
// The keys can be accessed by including the keys module and 
// calling KeySvc.key1, KeySvc.key2
angular.module('keys', [])

.factory('KeySvc', function() {
    return {
        //App Key
        key1:"Kwm4rthHDqkQbvcnyaqKfvzyiHqPUWKwgvUnpeQ8",
        //JavaScript Key
        key2:"AJ9VtUKsddA6pc90tBvYqLXQ0Xm2dnaKYYsXjfCd",
        //REST API Key
        key3:"OixdPTDj648IC6mLravR93UAoBd5wBcns87PPApd"
    };
});
