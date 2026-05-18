import { readFileSync } from 'fs';

const content = readFileSync('.env.local', 'utf8');

// Extrai o valor da GOOGLE_PRIVATE_KEY (suporta valor entre aspas ou sem)
const lines = content.split('\n');
let keyValue = '';
let inKey = false;

for (const line of lines) {
  if (line.startsWith('GOOGLE_PRIVATE_KEY=')) {
    keyValue = line.slice('GOOGLE_PRIVATE_KEY='.length);
    inKey = true;
    // Remove aspas iniciais se existir
    if (keyValue.startsWith('"')) keyValue = keyValue.slice(1);
    if (keyValue.endsWith('"')) { keyValue = keyValue.slice(0, -1); inKey = false; }
  } else if (inKey) {
    if (line.endsWith('"')) { keyValue += '\n' + line.slice(0, -1); inKey = false; }
    else keyValue += '\n' + line;
  }
}

// Normaliza \n literais para quebras reais
const normalizedKey = keyValue.replace(/\\n/g, '\n').trim();

const b64 = Buffer.from(normalizedKey).toString('base64');

console.log('\n=== GOOGLE_PRIVATE_KEY_B64 (cole no Easypanel) ===\n');
console.log(b64);
console.log('\n=== FIM ===\n');
console.log('Diagnóstico:');
console.log('  Tamanho da chave original:', normalizedKey.length, 'chars');
console.log('  Tamanho base64:', b64.length, 'chars');
console.log('  Início:', normalizedKey.substring(0, 27));
console.log('  Fim:', normalizedKey.slice(-25).trim());
