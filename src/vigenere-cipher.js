const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this._process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, -1);
  }

  _process(text, key, direction) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const preparedKey = String(key).toUpperCase().replace(/[^A-Z]/g, '');

    if (!preparedKey.length) {
      throw new Error('Incorrect arguments!');
    }

    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const upperChar = char.toUpperCase();

      if (upperChar >= 'A' && upperChar <= 'Z') {
        const textIndex = ALPHABET.indexOf(upperChar);
        const keyChar = preparedKey[keyIndex % preparedKey.length];
        const keyShift = ALPHABET.indexOf(keyChar);
        const newIndex = (textIndex + direction * keyShift + 26) % 26;
        result += ALPHABET[newIndex];
        keyIndex += 1;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
