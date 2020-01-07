/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Allfeeds url is defined and not empty', function(){
            allFeeds.forEach(function(definedfeed){
                expect(definedfeed.url).toBeDefined();
                expect(definedfeed.url.length).not.toBe(0);
                expect(definedfeed.url).not.toBe('');
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name in allfeeds defined and not empty', function(){
            allFeeds.forEach(function(definedfeed){
                expect(definedfeed.name).toBeDefined();
                expect(definedfeed.name).not.toBe('');
                expect(definedfeed.name).not.toBe('string');
                expect(definedfeed.name.length).not.toBe(0);
            });
         });
    });

    //Test Suite of menu
    describe('The menu', function(){
        //the test to show that the menu element is hidden by default.
        it('is hidden default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //Below test will make sure that the menu is hidden by default but when clicked it will change its visibility
        it('changes visiblitiy when clicked', function(){
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
             $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
           /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has atleast 1 entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
         let Previousfeed;
           /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         // this function will store the previous feed and will look
         // for a new feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('Different from the previous feed', function() {
            expect($('.feed').html()).not.toBe(oldFeed);
        });
    });
}());
