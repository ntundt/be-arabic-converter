const config = [{
    be: 'дж',
    ar: 'ج'
}, {
    be: 'ࢮ',
    ar: 'дзь'
}, {
    be: 'зь',
    ar: 'ز'
}, {
    be: 'кь',
    ar: 'ك'
}, {
    be: 'сь',
    ar: 'ث'
}, {
    be: 'ть',
    ar: 'ت'
}, {
    be: 'ць',
    ar: 'س'
}, {
    be: 'б',
    ar: 'ب'
}, {
    be: 'в',
    ar: 'و'
}, {
    be: 'г',
    ar: 'ه'
}, {
    be: 'ґ',
    ar: 'غ'
}, {
    be: 'д',
    ar: 'د'
}, {
    be: 'ж',
    ar: 'ژ'
}, {
    be: 'з',
    ar: 'ض'
}, {
    be: 'й',
    ar: 'ي'
}, {
    be: 'к',
    ar: 'ق'
}, {
    be: 'л',
    ar: 'ل'
}, {
    be: 'м',
    ar: 'م'
}, {
    be: 'н',
    ar: 'ن'
}, {
    be: 'п',
    ar: 'پ'
}, {
    be: 'р',
    ar: 'ر'
}, {
    be: 'с',
    ar: 'ص'
}, {
    be: 'т',
    ar: 'ط'
}, {
    be: 'ў',
    ar: 'و'
}, {
    be: 'ф',
    ar: 'ف'
}, {
    be: 'х',
    ar: 'ح'
}, {
    be: 'ц',
    ar: 'ࢯ'
}, {
    be: 'ч',
    ar: 'چ'
}, {
    be: 'ш',
    ar: 'ش'
}, {
    be: '\'',
    ar: 'ع'
}, {
    be: ',',
    ar: '،'
}, {
    be: '.',
    ar: '.'
}, {
    be: '!',
    ar: '!'
}, {
    be: '?',
    ar: '؟'
}, {
    be: ':',
    ar: ':'
}, {
    be: ';',
    ar: '؛'
}, {
    be: ' ',
    ar: ' '
}, {
    be: 'а',
    ar: 'َ'
}, {
    be: 'е',
    ar: 'َ'
}, {
    be: 'э',
    ar: 'َ'
}, {
    be: 'і',
    ar: 'ِ'
}, {
    be: 'ы',
    ar: 'ِ'
}, {
    be: 'у',
    ar: 'ُ'
}, {
    be: 'о',
    ar: 'ُ'
}, {
    be: 'ю',
    ar: 'يُ'
}, {
    be: 'ё',
    ar: 'ُِ'
}, {
    be: 'я',
    ar: 'َِ'
}, {
    be: 'ь',
    ar: ''
}]

export function beArConvert(input) {
    let result = input.toLowerCase();
    for (let i = 0; i < config.length; i++) {
        result = result.replaceAll(config[i].be, config[i].ar);
    }
    return result;
}

export function arBeConvert(input) {
    let result = input;
    for (let i = 0; i < config.length; i++) {
        if (config[i].ar !== '') {
            result = result.replaceAll(config[i].ar, config[i].be);
        }
    }
    return result;
}