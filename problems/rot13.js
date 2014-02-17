// Cipher that rotates alphabet by 13 indexes.
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var rot13 = function(str) {
	str = str.toLowerCase();
	var result = '';
	for (var i = 0; i < str.length; i++) {
		var io = alphabet.indexOf(str[i]);
		// Covert string to rot13 form.
		if (io >= 13) {
			result += alphabet[13 - (26 - io)];
		}
		else if (io !== -1) {
			result += alphabet[io + 13];
		}
		// Append any punctuation or spacing to string,
		// Should be ok as long as input is not malicious.
		else {
			result += str[i];
		}
	}
	return result;
};
