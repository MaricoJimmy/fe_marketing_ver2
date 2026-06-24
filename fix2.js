const fs = require('fs');
let c = fs.readFileSync('components/UseCaseGrid.jsx', 'utf-8');

c = c.replace('<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">', '<h2 className="text-2xl md:text-4xl font-bold text-white mb-6 px-4 md:px-0 leading-tight">');
c = c.replace('<p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">', '<p className="text-base md:text-lg text-[#9CA3AF] max-w-3xl mx-auto px-4 md:px-0">');
c = c.replace('className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${', 'className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium text-[13px] md:text-sm transition-all duration-300 ${');

fs.writeFileSync('components/UseCaseGrid.jsx', c);
console.log("Done");
