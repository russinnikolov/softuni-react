'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
	dbm = options.dbmigrate;
	type = dbm.dataType;
	seed = seedLink;
};

exports.up = function(db, callback) {
	db.createTable('user', {
		id: {
			type: 'bigint',
			unsigned: true,
			notNull: true,
			primaryKey: true,
			autoIncrement: true,
			length: 20
		},
		userName: {
			type: 'string',
			notNull: true,
			length: 128
		},
		email: {
			type: 'string',
			notNull: true,
			length: 256
		},
		password: {
			type: 'string',
			notNull: true,
			length: 256
		},
		fName: {
			type: 'string',
			notNull: false,
			length: 128
		},
		lName: {
			type: 'string',
			notNull: false,
			length: 128
		},
		street: {
			type: 'string',
			notNull: false,
			length: 128
		},
		city: {
			type: 'string',
			notNull: false,
			length: 128
		},
		country: {
			type: 'string',
			notNull: false,
			length: 128
		},
		type: {
			type: 'string',
			notNull: true,
			length: 36
		},
		family_id: {
			type: 'bigint',
			unsigned: true,
			notNull: false,
			default: null,
			length: 20
		},
		createdOn: {
			type: 'timestamp',
			notNull: true,
			defaultValue: new String('CURRENT_TIMESTAMP')
		}
	}, function(err) {
		if(err) return callback(err);
		return callback();
	});

	db.createTable('family', {
		id: {
			type: 'bigint',
			unsigned: true,
			notNull: true,
			primaryKey: true,
			autoIncrement: true,
			length: 20
		},
		name: {
			type: 'string',
			notNull: true,
			length: 128
		},
		email: {
			type: 'string',
			notNull: true,
			length: 256
		},
		createdOn: {
			type: 'timestamp',
			notNull: true,
			defaultValue: new String('CURRENT_TIMESTAMP')
		}
	}, createForeignKeys);

	function createForeignKeys(err) {
		if(err) { callback(err); return;}
		db.addForeignKey('user', 'family', 'fk_user_family', {
				'family_id': 'id'
			}, {
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			}, function(err) {
				if(err) return callback(err);
				return callback();
			}
		);
	}
};

exports.down = function(db, callback) {
	db.dropTable('user',  function(err) {
		if(err) return callback(err);
		return callback();
	});
	db.dropTable('family',  function(err) {
		if(err) return callback(err);
		return callback();
	});
};

exports._meta = {
	"version": 1
};
