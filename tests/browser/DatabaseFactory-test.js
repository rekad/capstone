describe('DatabaseFactory', function() {

	beforeEach(module('borderLess'));

	var localDbName = 'thekraken-test';

	var $httpBackend;
	// beforeEach('Get tools', inject(function(_$httpBackend_) {
		
	// }));
	var DatabaseFactory;
	beforeEach('Get factory', inject(function($injector) {
		DatabaseFactory = $injector.get('DatabaseFactory');
		$httpBackend = $injector.get('$httpBackend');
	}));

	it('should be an object', function() {
		expect(DatabaseFactory).to.be.an('object');
	});

	describe('getLocalDb', function() {
		it('should return the local pouch db instance', function() {
			expect(DatabaseFactory.getLocalDb()).to.be.an('object');
			expect(DatabaseFactory.getLocalDb()._db_name).to.equal('thekraken-test');
		});
	});

	describe('getRemoteDb', function() {
		it('should return the remote pouch db instance', function() {
			expect(DatabaseFactory.getRemoteDb()).to.be.an('object');
			expect(DatabaseFactory.getRemoteDb()._db_name).to.equal("https://rekad.cloudant.com/thekraken-test");
		});
	});

	describe('getUsersDb', function() {
		it('should return the local users pouch db instance', function() {
			expect(DatabaseFactory.getUsersDb()).to.be.an('object');
			expect(DatabaseFactory.getUsersDb()._db_name).to.equal("users");
		});
	});

	xdescribe('clearLocalDb', function() {
		it('should clear the local pouch db', function() {


		});
	});

	xdescribe('replicateUp', function() {
		it('replicate the local pouchdb instance to the remote db', function() {


		});
	});

	xdescribe('replicateDown', function() {
		it('replicate the local pouchdb instance from the remote db', function() {


		});
	});


});