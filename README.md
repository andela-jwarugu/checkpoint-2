[![Codacy Badge](https://api.codacy.com/project/badge/Grade/20ac0c5209b94cf98d8e821ce54b844d)](https://www.codacy.com/app/joy-warugu/checkpoint-2?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andela-jwarugu/checkpoint-2&amp;utm_campaign=Badge_Grade)

# String Class

## Description
This is an extension of the String Class in JavaScript. The new methods support more string manipulation features.

## Additional Methods
* hasVowels (typeof **Boolean**): Returns true if the string contains vowels. This method must implement Regular Expression.

    ```JavaScript
    expect(typeof 'hey'.hasVowels()).toBe('boolean');
    expect('I love you'.hasVowels()).toBe(true);
    expect('crypt'.hasVowels()).toBe(false);
    ```

* toUpper (typeof **String**): Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of the toUpperCase internal methods.

    ```JavaScript
    expect(typeof 'maybe'.toUpper()).toBe('string');
    expect('I miss you'.toUpper()).toBe('I MISS YOU');
    expect('YEAY'.toUpper()).toBe('YEAY');
    expect('nOP'.toUpper()).toBe('NOP');
    ```

* toLower (typeof **String**): Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of the toLowerCase internal methods.

    ```JavaScript 
    expect(typeof 'MAYBE'.toLower()).toBe('string');
    expect('I MIss YOU'.toLower()).toBe('i miss you');
    expect('LOL'.toLower()).toBe('lol');
    ```

* ucFirst (typeof **String**): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.

    ```JavaScript
    expect(typeof 'wink'.ucFirst()).toBe('string');
    expect('hallo'.ucFirst()).toBe('Hallo');
    expect('hallo there lady'.ucFirst()).toBe('Hallo there lady');
    ```

* isQuestion (typeof **Boolean**): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.

    ```JavaScript
    expect(typeof 'Whats up?'.isQuestion()).toBe('boolean');
    expect('Is the world yours, on a blimp?'.isQuestion()).toBe(true);
    expect('What\'s your name'.isQuestion()).toBe(false);
    expect('H?allo'.isQuestion()).toBe(false);
    ```

* words (typeof **Object**, instanceof **Array**): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.

    ```JavaScript 
    expect(typeof 'A proper list of words'.words()).toBe('object');
    expect(Array.isArray('dont know what'.words())).toBeTruthy();
    expect('list of something'.words()).toEqual(['list', 'of', 'something']);
    ```

* wordCount (typeof **Number**): Returns the number of words in the string. It must make use of the words method above.

    ```JavaScript 
    expect(typeof 'A proper list of words'.wordCount()).toBe('number');
    expect('list of something'.wordCount()).toEqual(3);
    ```

* toCurrency (typeof **String**): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

    ```JavaScript 
    expect(typeof '1000'.toCurrency()).toBe('string');
    expect('1000'.toCurrency()).toBe('1,000.00');
    expect('1000.50'.toCurrency()).toBe('1,000.50');
    ```

* fromCurrency (typeof **Number**): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

    ```JavaScript 
    expect(typeof '1,000'.fromCurrency()).toBe('number');
    expect('1,000'.fromCurrency()).toEqual(1000);
    expect('1,000,000'.fromCurrency()).toEqual(1000000);
    ```

## Motivation
Checkpoint 2. Clone repo and run it yourself. 
