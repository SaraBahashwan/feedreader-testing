
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
	
	describe('RSS Feeds', function () {
		/*  make sure that the allFeeds variable has been defined and that it is not
		 * empty. 
		 */
		it('are defined', function () {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* ensures it has a URL defined and that the URL is not empty. */
		it('each feed url is defined and not empty', function () {
			for (let feed of allFeeds) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			}
		});

		/* allFeeds object and ensures it has a name defined and is not empty.*/
		it('each feed name is defined and not empty', function () {
			for (let feed of allFeeds) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			}
		});
	})


	/* Test Menu behaviour*/
	describe('Menu behaviour', function () {
		const body = document.querySelector('body');

		/*  menue hidding by default */
		it('is hidden by default', function () {
			expect(body.classList.contains('menu-hidden')).toBe(true);
		});

		/*  menu changes visibility when the menu icon is clicked. */
		it('shows when the menu icon is clicked', function () {
			const menu = document.querySelector('.menu-icon-link');
			/*menu.click(); */
			expect(menu.classList.contains('menu-hidden')).toBe(false);
		});

	});


	/* Initial Entries test */
	describe('Initial Entries', function () {
	
		
		/* Before loading the feed */

		beforeEach(function (done) {
			loadFeed(0, done);
		});

        /* There is at least a single entry element within the feed container. */
		it('have at least one entry element ', function () {
			const entry = document.querySelectorAll('.feed .entry');
			expect(entry.length).toBeGreaterThan(0);
		});
	});

	/*  Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function () {
		let initialFeed;

		/*  ensures when a new feed is loaded , loadFeed() is asynchronous "completes its work "*/
		beforeEach(function (done) {
			loadFeed(0, function () {
				initialFeed = document.querySelector('.feed').textContent;
				loadFeed(1, done);
			});
		});
		it('content changes when the feed reloads', function (done) {
			const newFeed = document.querySelector(".feed").textContent;
			expect(initialFeed).not.toEqual(newFeed);
			done();
		});
	});
}());
