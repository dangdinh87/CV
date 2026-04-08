const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DATA_DIR = path.join(__dirname, '../app/interview/data');

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// Function to prompt for multi-line input. User types 'EOF' on a new line to finish.
async function promptMultiLine(questionText) {
  console.log(questionText);
  console.log('(Nhập nội dung nhiều dòng. Gõ "EOF" trên một dòng mới để kết thúc, hoặc để trống 1 dòng đầu tiên để giữ nguyên/bỏ qua)');

  let lines = [];
  while (true) {
    const line = await prompt('> ');
    if (line === 'EOF') {
      break;
    }
    if (lines.length === 0 && line.trim() === '') {
      // Empty first line means skip
      return '';
    }
    lines.push(line);
  }
  return lines.join('\n');
}

function parseItemsFromContent(content) {
  const items = [];
  // More robust regex to capture the object up to the closing brace.
  const regex = /{\s*id:\s*(\d+),\s*category:\s*"([^"]+)",\s*subcategory:\s*"([^"]+)",\s*level:\s*"([^"]+)",\s*q:\s*"((?:[^"\\]|\\.)*)",\s*a:\s*"((?:[^"\\]|\\.)*)",(.*?)}/gs;

  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({
      id: parseInt(match[1]),
      category: match[2],
      subcategory: match[3],
      level: match[4],
      q: match[5],
      a: match[6],
      fullMatch: match[0],
      index: match.index
    });
  }
  return items;
}

function formatNewItem(id, category, subcategory, level, q, a, q_en, a_en) {
  let str = `  { id: ${id}, category: "${category}", subcategory: "${subcategory}", level: "${level}", q: "${q.replace(/"/g, '\\"').replace(/\n/g, '\\n')}", a: "${a.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
  if (q_en) str += `, q_en: "${q_en.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
  if (a_en) str += `, a_en: "${a_en.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
  str += ` },`;
  return str;
}

async function main() {
  console.log('=== IT Interview Q&A Manager ===');

  const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts'));

  console.log('\nChọn file để thao tác:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });

  const fileChoice = await prompt(`\nChọn file (1-${files.length}): `);
  const selectedIndex = parseInt(fileChoice) - 1;

  if (selectedIndex < 0 || selectedIndex >= files.length) {
    console.log('Lựa chọn không hợp lệ.');
    rl.close();
    return;
  }

  const selectedFile = files[selectedIndex];
  const filePath = path.join(DATA_DIR, selectedFile);
  let content = fs.readFileSync(filePath, 'utf8');

  const items = parseItemsFromContent(content);
  console.log(`\nTìm thấy ${items.length} câu hỏi trong ${selectedFile}.`);

  while(true) {
    console.log('\n=== MENU ===');
    console.log('1. Review các câu hỏi hiện có (sửa/xóa)');
    console.log('2. Thêm câu hỏi mới');
    console.log('3. Thoát');
    const choice = await prompt('Chọn: ');

    if (choice === '3') break;

    if (choice === '2') {
      console.log('\n--- Thêm câu hỏi mới ---');
      const maxId = items.length > 0 ? Math.max(...items.map(i => i.id)) : 0;
      const newId = maxId + 1;

      const category = items.length > 0 ? items[0].category : await prompt('Category: ');
      const subcategory = items.length > 0 ? items[items.length - 1].subcategory : await prompt('Subcategory: ');
      const level = await prompt('Level (beginner/intermediate/advanced): ') || 'beginner';

      const q = await promptMultiLine('Nhập câu hỏi (Q): ');
      if (!q) {
         console.log("Hủy thêm mới.");
         continue;
      }
      const a = await promptMultiLine('Nhập câu trả lời (A): ');

      const q_en = await promptMultiLine('Nhập câu hỏi tiếng Anh (Q_EN) [Tùy chọn]: ');
      const a_en = await promptMultiLine('Nhập câu trả lời tiếng Anh (A_EN) [Tùy chọn]: ');

      const newItemString = formatNewItem(newId, category, subcategory, level, q, a, q_en, a_en);

      // Inject before the closing bracket of the array
      const insertIndex = content.lastIndexOf(']');
      if (insertIndex !== -1) {
        content = content.slice(0, insertIndex) + newItemString + '\n' + content.slice(insertIndex);
        fs.writeFileSync(filePath, content, 'utf8');
        items.push({ id: newId, category, subcategory, level, q, a, fullMatch: newItemString.trim().replace(/,$/, ''), index: -1 }); // add to items array in memory
        console.log(`Đã thêm câu hỏi thành công với ID ${newId}!`);
      } else {
         console.log("Lỗi: Không tìm thấy dấu đóng mảng `]` trong file.");
      }
      continue;
    }

    if (choice === '1') {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log('\n----------------------------------------');
        console.log(`[ID: ${item.id}] ${item.category} - ${item.subcategory} (${item.level})`);
        console.log(`Q: ${item.q.replace(/\\n/g, '\n')}`);
        console.log(`A: ${item.a.replace(/\\n/g, '\n')}`);
        console.log('----------------------------------------');

        const action = await prompt('Bạn muốn làm gì? (Enter: Bỏ qua / e: Edit / d: Delete / q: Quay lại menu): ');

        if (action.toLowerCase() === 'q') {
          break;
        } else if (action.toLowerCase() === 'e') {
          const newQ = await promptMultiLine(`Sửa câu hỏi (để trống dòng đầu để giữ nguyên):`);
          const newA = await promptMultiLine(`Sửa câu trả lời (để trống dòng đầu để giữ nguyên):`);

          let updatedItemString = item.fullMatch;
          let changed = false;

          if (newQ !== '') {
            updatedItemString = updatedItemString.replace(`q: "${item.q}"`, `q: "${newQ.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`);
            changed = true;
          }
          if (newA !== '') {
            updatedItemString = updatedItemString.replace(`a: "${item.a}"`, `a: "${newA.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`);
            changed = true;
          }

          if (changed) {
            content = content.replace(item.fullMatch, updatedItemString);
            fs.writeFileSync(filePath, content, 'utf8');
            // Update in memory
            if (newQ !== '') item.q = newQ.replace(/"/g, '\\"').replace(/\n/g, '\\n');
            if (newA !== '') item.a = newA.replace(/"/g, '\\"').replace(/\n/g, '\\n');
            item.fullMatch = updatedItemString;
            console.log('Đã cập nhật câu hỏi!');
          }
        } else if (action.toLowerCase() === 'd') {
          const confirm = await prompt('Bạn có chắc chắn muốn xóa? (y/n): ');
          if (confirm.toLowerCase() === 'y') {
            // Find line to delete properly (including the comma if present)
            content = content.replace(item.fullMatch + ',', ''); // Try with comma
            content = content.replace(item.fullMatch, ''); // Fallback
            fs.writeFileSync(filePath, content, 'utf8');
            items.splice(i, 1);
            i--; // Adjust index after deletion
            console.log('Đã xóa câu hỏi!');
          }
        }
      }
    }
  }

  console.log('\nHoàn tất!');
  rl.close();
}

main().catch(console.error);