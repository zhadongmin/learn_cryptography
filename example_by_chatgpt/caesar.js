function caesarEncrypt(text, shift) {
    /*
    凯撒加密算法：将明文按照指定的位数进行右移（正数）或左移（负数）来加密。
    
    参数：
        - text：明文字符串
        - shift：位移值，正数表示右移，负数表示左移
        
    返回：
        - 加密后的密文字符串
    */
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        // 判断字符是否为字母
        if (char.match(/[a-z]/i)) {
            var asciiCode = char.charCodeAt(0);
            var shiftedAsciiCode;
            // 判断字符是大写字母还是小写字母
            if (char.match(/[A-Z]/)) {
                // 对大写字母进行位移操作
                shiftedAsciiCode = (asciiCode - 65 + shift + 26) % 26 + 65;
            } else {
                // 对小写字母进行位移操作
                shiftedAsciiCode = (asciiCode - 97 + shift + 26) % 26 + 97;
            }
            // 将位移后的ASCII码转换为字符，并添加到密文中
            encryptedText += String.fromCharCode(shiftedAsciiCode);
        } else {
            // 非字母字符保持不变
            encryptedText += char;
        }
    }
    return encryptedText;
}
function caesarDecrypt(cipherText, shift) {
    /*
    凯撒解密算法：将密文按照指定的位数进行左移（正数）或右移（负数）来解密。
    
    参数：
        - cipherText：密文字符串
        - shift：位移值，正数表示左移，负数表示右移
        
    返回：
        - 解密后的明文字符串
    */
    var decryptedText = "";
    for (var i = 0; i < cipherText.length; i++) {
        var char = cipherText.charAt(i);
        // 判断字符是否为字母
        if (char.match(/[a-z]/i)) {
            var asciiCode = char.charCodeAt(0);
            var shiftedAsciiCode;
            // 判断字符是大写字母还是小写字母
            if (char.match(/[A-Z]/)) {
                // 对大写字母进行位移操作
                shiftedAsciiCode = (asciiCode - 65 - shift + 26) % 26 + 65;
            } else {
                // 对小写字母进行位移操作
                shiftedAsciiCode = (asciiCode - 97 - shift + 26) % 26 + 97;
            }
            // 将位移后的ASCII码转换为字符，并添加到明文中
            decryptedText += String.fromCharCode(shiftedAsciiCode);
        } else {
            // 非字母字符保持不变
            decryptedText += char;
        }
    }
    return decryptedText;
}


// 示例用法
var plainText = "Hello, World!";
var shift = 5;
var encryptedText = caesarEncrypt(plainText, shift);
console.log("明文：", plainText);
console.log("密文：", encryptedText);
var decryptedText = caesarDecrypt(encryptedText, shift);
console.log("解密文：", decryptedText);