/*
	chaddd chat
*/

var canvas = document.querySelector('#game-canvas');
var ctx = canvas.getContext('2d');

var players = [];
var speed = 1;
var me = {x:0,y:0};
players.push(me);

var db = firebase.database();
var playerRef = db.ref('players');
