(function(){
	'use strict';

	String.prototype.hasVowels = function(){
		return /[aeiou]/gi.test(this);
	};

	String.prototype.toUpper = function(){
		var capitalized = '';
		for (var i=0; i<this.length; i++){
			if (this.charCodeAt(i)>=97 && this.charCodeAt(i)<=122){
				var asciiCode = this.charCodeAt(i) - 32;
				capitalized += String.fromCharCode(asciiCode);
			}
			else {
				capitalized += this[i];
			}

		}
		return capitalized;
	};

	String.prototype.toLower = function(){
		var lowercased = '';
		for (var i=0; i<this.length; i++){
			if (this.charCodeAt(i)>=65 && this.charCodeAt(i)<=90){
				var asciiCode = this.charCodeAt(i) + 32;
				lowercased += String.fromCharCode(asciiCode);
			}
			else {
				lowercased += this[i];
			}

		}
		return lowercased;
	};

	String.prototype.ucFirst = function(){
		return this.replace(/^[a-z]/, this[0].toUpper());
	};

	String.prototype.isQuestion = function(){
		return /[?]$/.test(this);
	};

	String.prototype.words = function(){
		return this.split(/\W+/);
	};
	//
	String.prototype.wordCount = function(){
		var stringArray = this.words();
		return stringArray.length;
	};

	String.prototype.toCurrency = function(){
		var currencyObj = parseFloat(this).toFixed(2);
		var re = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
		return (currencyObj.replace(re, '$1,')).toString();
	};

	String.prototype.fromCurrency = function(){
		return Number(this.replace(/,/g, ''));
	};
})();
