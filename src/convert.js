const config = [{
    be: 'а',
    ar: 'َ',
    arBeginning: 'اَ',
    vowel: true
}, {
    be: 'е',
    ar: 'َ',
    arBeginning: 'اَ',
    vowel: true
}, {
    be: 'э',
    ar: 'َ',
    arBeginning: 'اَ',
    vowel: true
}, {
    be: 'і',
    ar: 'ِ',
    arBeginning: 'اِ',
    vowel: true
}, {
    be: 'ы',
    ar: 'ِ',
    arBeginning: 'اِ',
    vowel: true
}, {
    be: 'у',
    ar: 'ُ',
    arBeginning: 'اُ',
    vowel: true
}, {
    be: 'о',
    ar: 'ُ',
    arBeginning: 'اُ',
    vowel: true
}, {
    be: 'ю',
    ar: 'يُ',
    vowel: true
}, {
    be: 'ё',
    ar: 'ُِ',
    vowel: true
}, {
    be: 'я',
    ar: 'َِ',
    vowel: true
}, {
    be: 'дж',
    ar: 'ج',
    vowel: false
}, {
    be: 'ла',
    ar: 'لا',
    vowel: false
}, {
    be: 'ля',
    ar: 'لا',
    vowel: false
}, {
    be: 'ࢮ',
    ar: 'дзь',
    vowel: false
}, {
    be: 'зь',
    ar: 'ز',
    vowel: false
}, {
    be: 'кь',
    ar: 'ك',
    vowel: false
}, {
    be: 'сь',
    ar: 'ث',
    vowel: false
}, {
    be: 'ть',
    ar: 'ت',
    vowel: false
}, {
    be: 'ць',
    ar: 'س',
    vowel: false
}, {
    be: 'б',
    ar: 'ب',
    vowel: false
}, {
    be: 'в',
    ar: 'و',
    vowel: false
}, {
    be: 'г',
    ar: 'ه',
    vowel: false
}, {
    be: 'ґ',
    ar: 'غ',
    vowel: false
}, {
    be: 'д',
    ar: 'د',
    vowel: false
}, {
    be: 'ж',
    ar: 'ژ',
    vowel: false
}, {
    be: 'з',
    ar: 'ض',
    vowel: false
}, {
    be: 'й',
    ar: 'ي',
    vowel: false
}, {
    be: 'к',
    ar: 'ق',
    vowel: false
}, {
    be: 'л',
    ar: 'ل',
    vowel: false
}, {
    be: 'м',
    ar: 'م',
    vowel: false
}, {
    be: 'н',
    ar: 'ن',
    vowel: false
}, {
    be: 'п',
    ar: 'پ',
    vowel: false
}, {
    be: 'р',
    ar: 'ر',
    vowel: false
}, {
    be: 'с',
    ar: 'ص',
    vowel: false
}, {
    be: 'т',
    ar: 'ط',
    vowel: false
}, {
    be: 'ў',
    ar: 'و',
    vowel: false
}, {
    be: 'ф',
    ar: 'ف',
    vowel: false
}, {
    be: 'х',
    ar: 'ح',
    vowel: false
}, {
    be: 'ц',
    ar: 'ࢯ',
    vowel: false
}, {
    be: 'ч',
    ar: 'چ',
    vowel: false
}, {
    be: 'ш',
    ar: 'ش',
    vowel: false
}, {
    be: '\'',
    ar: 'ع',
    vowel: false
}, {
    be: ',',
    ar: '،',
    vowel: false
}, {
    be: '.',
    ar: '.',
    vowel: false
}, {
    be: '!',
    ar: '!',
    vowel: false
}, {
    be: '?',
    ar: '؟',
    vowel: false
}, {
    be: ':',
    ar: ':',
    vowel: false
}, {
    be: ';',
    ar: '؛',
    vowel: false
}, {
    be: ' ',
    ar: ' ',
    vowel: false
}, {
    be: 'ь',
    ar: '',
    vowel: false
}]

export function beArConvert(input) {
    let result = input.toLowerCase();
    for (let i = 0; i < config.length; i++) {
        if (typeof config[i].arBeginning !== 'undefined') {
            let regex = new RegExp('([^а-яА-ЯіІўЎ\\\'ёЁ]|^)' + config[i].be, 'g');
            result = result.replaceAll(regex, '$1' + config[i].arBeginning);
        }
        result = result.replaceAll(config[i].be, config[i].ar);
    }
    return result;
}

export function arBeConvert(input) {
    let result = input;
    for (let i = 0; i < config.length; i++) {
        if (typeof config[i].arBeginning !== 'undefined') {
            result = result.replaceAll(config[i].arBeginning, config[i].be);
        }
        if (config[i].ar !== '') {
            result = result.replaceAll(config[i].ar, config[i].be);
        }
    }
    return result;
}
