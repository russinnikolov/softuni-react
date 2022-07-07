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
			type: 'int',
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
		password: {
			type: 'string',
			notNull: true,
			length: 256
		},
		createdOn: {
			type: 'datetime',
			notNull: true,
			defaultValue: new String('CURRENT_TIMESTAMP')
		}
	}, function(err) {
		if(err) return callback(err);
		return callback();
	});

};

exports.down = function(db, callback) {
	db.dropTable('user', callback);
};

exports._meta = {
	"version": 1
};
