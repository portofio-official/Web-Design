const fs = require('fs');
const filePath = '/Users/masman/Documents/001. Personal Portofolio/001. Web Design/001. Personal Portofolio/002. Design/src/App.jsx';
let content = fs.readFileSync(filePath, 'utf-8');

const listStartMarker = '// Filter Tabs inside card (underlined style)';
const listEndMarker = '})()';

const modalStartMarker = '// Modal Pop-up Overview Project Detail';
const modalEndMarker = 'document.body\n          ),';

const iListStart = content.indexOf(listStartMarker);
const iListEndTemp = content.indexOf('})()', iListStart) + 4;
const listBlock = content.substring(iListStart, content.indexOf('\n', iListEndTemp) + 1);

const iModalStart = content.indexOf(modalStartMarker);
const modalBlockStartStr = 'selectedProject && createPortal(';
const iModalBlockStart = content.indexOf(modalBlockStartStr, iModalStart);
const iModalEnd = content.indexOf('document.body\n          ),', iModalBlockStart) + 26;
const modalBlock = content.substring(iModalStart, iModalEnd);

const bodyStartMarker = '// Gambar Project / Carousel';
const iBodyStart = modalBlock.indexOf(bodyStartMarker);

// Find the end of the body content inside the modal
const searchStr = ')\n                  )\n                )\n              )\n            ),\n            document.body';
const iBodyEnd = modalBlock.indexOf(searchStr);

let fullInnerBody = modalBlock.substring(iBodyStart, iBodyEnd);

const newBlock = `              !selectedProject ? (
                React.createElement(React.Fragment, null,
                  ${listBlock.trim().replace(/\n/g, '\n                  ')}
                )
              ) : (
                // INLINE DETAIL VIEW
                React.createElement("div", { className: "flex flex-col flex-1 min-h-0 animate-in fade-in zoom-in-95 duration-300" },
                  // Back button header
                  React.createElement("div", { className: \`flex items-center gap-3 mb-4 pb-4 border-b shrink-0 \${actualTheme === 'dark' ? 'border-white/10' : 'border-slate-200'}\` },
                    React.createElement("button", {
                      onClick: () => setSelectedProject(null),
                      className: \`p-2 -ml-2 rounded-full transition-colors flex items-center gap-2 \${actualTheme === 'dark' ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-slate-100 text-slate-600'}\`
                    }, 
                      React.createElement(ArrowLeft, { size: 18 }),
                      React.createElement("span", { className: "font-semibold text-sm" }, "Kembali")
                    ),
                    React.createElement("h3", { className: \`font-bold text-lg truncate \${actualTheme === 'dark' ? 'text-white' : 'text-slate-900'}\` }, selectedProject.title)
                  ),
                  // Body
                  React.createElement("div", { 
                    ref: detailScrollRef,
                    className: \`relative overflow-y-auto hide-scrollbar flex-1 -mx-5 px-5 sm:-mx-6 sm:px-6\` 
                  },
                    React.createElement("div", { className: "flex flex-col gap-4 sm:gap-5 pb-4" },
                      ${fullInnerBody.trim().replace(/\n/g, '\n                      ')}
                    )
                  )
                )
              ),`;

let updatedContent = content.replace(listBlock, newBlock + '\n');
updatedContent = updatedContent.replace(modalBlock, '');

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log("Refactor complete.");
