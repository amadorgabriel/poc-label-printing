const { execSync } = require('child_process');

// Caminho para o arquivo PDF de entrada
const inputPDF = 'output.pdf';

// Caminho para o arquivo PostScript (PS) de saída
const outputPS = 'output.ps';

// Comando para a conversão do PDF para PS usando o Ghostscript
const command = `gswin64c -o ${outputPS} -sDEVICE=ps2write ${inputPDF}`;

// Executa o comando usando o Ghostscript
try {
  execSync(command);
  console.log('PDF convertido com sucesso para PostScript (PS).');
} catch (error) {
  console.error('Erro ao converter o PDF para PostScript (PS):', error);
}
