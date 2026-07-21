const fs = require('fs');
const path = require('path');

function splitLocale(lang) {
    const filePath = `src/locales/${lang}/translation.json`;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    for (const [key, value] of Object.entries(data)) {
        const outPath = `src/locales/${lang}/${key}.json`;
        fs.writeFileSync(outPath, JSON.stringify(value, null, 4));
    }
    
    // Rename old translation.json so it's not used, but kept as backup for a moment
    fs.renameSync(filePath, `${filePath}.bak`);
}

splitLocale('id');
splitLocale('en');

// Generate i18n config
const keys = Object.keys(JSON.parse(fs.readFileSync('src/locales/id/translation.json.bak', 'utf8')));

let imports = '';
let idObj = 'const idTranslation = {\n';
let enObj = 'const enTranslation = {\n';

keys.forEach(key => {
    imports += `import id_${key} from '@/locales/id/${key}.json'\n`;
    imports += `import en_${key} from '@/locales/en/${key}.json'\n`;
    
    idObj += `    ${key}: id_${key},\n`;
    enObj += `    ${key}: en_${key},\n`;
});

idObj += '}\n';
enObj += '}\n';

const newI18nConfig = `import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

${imports}

${idObj}

${enObj}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            id: { translation: idTranslation }
        },
        fallbackLng: 'id',
        lng: 'id',
        debug: false,
        interpolation: { escapeValue: false },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    })

export default i18n
`;

fs.writeFileSync('src/i18n/config.ts', newI18nConfig);
console.log('Split successful, generated new i18n/config.ts');

