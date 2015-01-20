var assert = require("assert");

describe('Fermat', function(){
    describe('some states', function(){
        var fermat;

        beforeEach(function () {
            fermat = require('../lib/fermat')({
                'Inbox': '/inbox',
                'Tag': '/tag/:tag',
                'Calendar': '/calendar/:month/:day'
            });
        });

        it('should generate url without route components', function(){
            assert.equal('/inbox', fermat('Inbox'));
        })

        it('should generate a url with a route component', function () {
            assert.equal('/tag/important', fermat('Tag', {tag:'important'}));
        })

        it('should generate a url with multiple route components', function () {
            assert.equal('/calendar/march/14', fermat('Calendar', {
                month: 'march',
                day: '14'
            }));
        })
    })
})
