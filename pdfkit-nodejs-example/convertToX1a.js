const { execSync } = require('child_process');

const outputPDFX = 'output-pdfx.pdf';

const outputPS = 'output.ps';

const command2 = `gswin64c -o ${outputPDFX} -sDEVICE=pdfwrite ${outputPS}`;

try {
  execSync(command2);
  console.log('Arquivo PS convertido com sucesso para PDF/X-1a.');
} catch (error) {
  console.error('Erro ao converter o arquivo PS para PDF/X-1a:', error);
}
