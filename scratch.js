const fs = require('fs');

function extractTopLevelKeys(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return Object.keys(data);
}

const keysId = extractTopLevelKeys('src/locales/id/translation.json');
console.log('Keys in ID:', keysId);
