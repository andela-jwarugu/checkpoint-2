(function() {
	'use strict';

	String.prototype.hasVowels = function() {
		return /[aeiou]/gi.test(this);
	};

	String.prototype.toUpper = function() {
		return this.replace(/[a-z]/g, (character) => {
			return String.fromCharCode(character.charCodeAt() - 32);
		});
	};

	String.prototype.toLower = function() {
		return this.replace(/[A-Z]/g, (character) => {
			return String.fromCharCode(character.charCodeAt() + 32);
		});
	};

	String.prototype.ucFirst = function() {
		return this.replace(/^[a-z]/, this[0].toUpper());
	};

	String.prototype.isQuestion = function() {
		return /[?]$/.test(this);
	};

	String.prototype.words = function() {
		return this.split(/\W+/);
	};

	String.prototype.wordCount = function() {
		return this.words().length;
	};

	String.prototype.toCurrency = function() {
		var currencyObj = parseFloat(this).toFixed(2);
		var expression = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');
		return (currencyObj.replace(expression, '$1,'));
	};

	String.prototype.fromCurrency = function() {
		return Number(this.replace(/,/g, ''));
	};
}) ();
