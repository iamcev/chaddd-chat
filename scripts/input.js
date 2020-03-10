var input = {
	keys:{},
	keydown: function (e) {
		input.keys[e.key.toLowerCase()] = true;
	},
	keyup: function (e) {
		input.keys[e.key.toLowerCase()] = false;
	}
};

window.addEventListener('keydown', input.keydown);
window.addEventListener('keyup', input.keyup);
