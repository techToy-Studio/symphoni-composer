const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

function updateLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\]\(\/docs\//g, '](/symphoni-composer/docs/');
  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.md')) {
      updateLinksInFile(filePath);
    }
  }
}

processDirectory(docsDir);
console.log('All links have been updated!'); 