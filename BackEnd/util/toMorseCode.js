const toMorseCode = (text) => {
    const map = {'a':'dl','b':'lddd','c':'ldld','d':'ldd','e':'d','f':'ddld',
        'g':'lld','h':'dddd','i':'dd','j':'dlll','k':'ldl','l':'dldd',
        'm':'ll','n':'ld','o':'lll','p':'dlld','q':'lldl','r':'dld','s':'ddd',
    't':'l','u':'ddl','v':'dddl','w':'dll','x':'lddl','y':'ldll','z':'lldd'};

    let morseCode = '';
    for (let ch of text) {
        morseCode += map[ch];
        morseCode += ' ';
    }

    return morseCode.trim();
}

export default toMorseCode;