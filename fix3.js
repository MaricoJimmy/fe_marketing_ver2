const fs = require('fs');
let content = fs.readFileSync('components/UseCaseGrid.jsx', 'utf-8');

const startMarker = 'export default function UseCaseGrid()';
const startIdx = content.indexOf(startMarker);

if (startIdx === -1) {
  console.log("ERROR: Could not find start marker");
  process.exit(1);
}

// Keep everything before the function
const before = content.substring(0, startIdx);

const newFunction = `export default function UseCaseGrid() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filters = [
    { id: 'All', vi: 'Tất cả', en: 'All' },
    { id: 'Uboard', vi: 'Uboard', en: 'Uboard' },
    { id: 'Ugate', vi: 'Ugate', en: 'Ugate' },
    { id: 'Uzero', vi: 'Uzero', en: 'Uzero' },
    { id: 'MiniUgate', vi: 'MiniUgate', en: 'MiniUgate' }
  ];

  const filteredCases = activeFilter === 'All' 
    ? USE_CASES_DATA 
    : USE_CASES_DATA.filter(c => c.tags.includes(activeFilter));

  const activeCase = filteredCases[activeIndex] || filteredCases[0];

  const getContent = (c) => {
    if (!c) return { challenge: '', solution: '', impact: '' };
    const details = lang === 'EN' ? (c.enDetails || c.viDetails) : (c.viDetails || c.enDetails);
    if (!details) return { challenge: '', solution: '', impact: '' };
    const sections = details.sections || [];
    const challenge = sections[1]?.content || '';
    const solution = (sections[3]?.items || []).slice(0, 2).join('. ') + '.';
    const impact = sections[5]?.content || '';
    return { challenge, solution, impact };
  };

  const pcContent = getContent(activeCase);

  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case 'uboard': return 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-[#22D3EE]';
      case 'ugate': case 'miniugate': return 'border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6]';
      case 'uzero': return 'border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981]';
      default: return 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-[#22D3EE]';
    }
  };

  return (
    <section id="usecase-grid" className="py-20 md:py-28 px-6 md:px-12 relative z-10 bg-[#080B10]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 px-4 md:px-0 leading-tight">
            {t('usecases.grid.title')}
          </h2>
          <p className="text-base md:text-lg text-[#9CA3AF] max-w-3xl mx-auto px-4 md:px-0">
            {t('usecases.grid.desc')}
          </p>
        </div>

        {/* ============ DESKTOP VIEW: Sidebar + Content ============ */}
        <div className="hidden lg:flex gap-8">
          {/* Left Sidebar */}
          <div className="w-[340px] flex-shrink-0 space-y-2">
            {USE_CASES_DATA.map((c, i) => (
              <div 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={\`rounded-xl p-5 cursor-pointer transition-all duration-300 border \${
                  activeIndex === i 
                    ? 'bg-[#0C1825] border-[#22D3EE]/40 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                    : 'bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/10'
                }\`}
              >
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {c.tags.map(tag => (
                    <span key={tag} className={\`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border \${getTagColor(tag)}\`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className={\`text-sm font-semibold leading-snug transition-colors duration-300 \${
                  activeIndex === i ? 'text-white' : 'text-white/60'
                }\`}>
                  {lang === 'EN' ? c.enTitle : c.viTitle}
                </h4>
              </div>
            ))}
          </div>

          {/* Right Content Panel */}
          <div className="flex-1 min-w-0">
            {activeCase && (
              <div className="space-y-6">
                {/* Hero Image */}
                <div className="relative h-[220px] rounded-2xl overflow-hidden">
                  <img 
                    alt={lang === 'EN' ? activeCase.enTitle : activeCase.viTitle} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50" 
                    src={caseImages[activeIndex % caseImages.length]} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/60 to-transparent"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {lang === 'EN' ? activeCase.enTitle : activeCase.viTitle}
                </h3>

                {/* Challenge + Solution Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0C1017] border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-amber-400 text-lg">warning</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        {lang === 'EN' ? 'Challenge' : 'Thách thức'}
                      </span>
                    </div>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {pcContent.challenge}
                    </p>
                  </div>

                  <div className="bg-[#0C1017] border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-[#22D3EE] text-lg">lightbulb</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#22D3EE]">
                        {lang === 'EN' ? 'Solution' : 'Giải pháp'}
                      </span>
                    </div>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {pcContent.solution}
                    </p>
                  </div>
                </div>

                {/* Business Impact Card */}
                <div className="bg-[#0C1017] border border-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-[#10F0CB] text-lg">trending_up</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#10F0CB]">
                      {lang === 'EN' ? 'Business Impact' : 'Giá trị kinh doanh'}
                    </span>
                  </div>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {pcContent.impact}
                  </p>
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => setSelectedCase(activeCase)}
                  className="flex items-center gap-2 text-[#22D3EE] font-bold text-sm hover:gap-3 transition-all w-fit group/btn mt-2"
                >
                  {lang === 'EN' ? 'View Full Details' : 'Xem chi tiết đầy đủ'}
                  <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ============ MOBILE VIEW: Grid Cards ============ */}
        <div className="lg:hidden">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map(filter => {
              let activeColorClass = "";
              let hoverColorClass = "";
              switch (filter.id) {
                case 'Ugate':
                case 'MiniUgate':
                  activeColorClass = 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]';
                  hoverColorClass = 'hover:border-[#3B82F6]/50 hover:text-[#3B82F6]';
                  break;
                case 'Uzero':
                  activeColorClass = 'bg-[#10B981] text-[#06101F] shadow-[0_0_15px_rgba(16,185,129,0.3)]';
                  hoverColorClass = 'hover:border-[#10B981]/50 hover:text-[#10B981]';
                  break;
                case 'Uboard':
                case 'All':
                default:
                  activeColorClass = 'bg-[#22D3EE] text-[#06101F] shadow-[0_0_15px_rgba(34,211,238,0.3)]';
                  hoverColorClass = 'hover:border-[#22D3EE]/50 hover:text-[#22D3EE]';
                  break;
              }
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={\`px-4 py-2 rounded-full font-medium text-[13px] transition-all duration-300 \${
                    activeFilter === filter.id
                      ? activeColorClass
                      : \\\`bg-[#0C1017] border border-white/10 text-white \${hoverColorClass}\\\`
                  }\`}
                >
                  {lang === 'EN' ? filter.en : filter.vi}
                </button>
              );
            })}
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-3">
            {filteredCases.map((c, i) => {
              const imageSrc = caseImages[i % caseImages.length];
              return (
                <div 
                  key={i} 
                  onClick={() => setSelectedCase(c)}
                  className="group relative min-h-[200px] sm:min-h-[240px] rounded-xl overflow-hidden glass-card transition-all duration-700 cursor-pointer border border-white/5 hover:border-[#22D3EE]/50 shadow-lg"
                >
                  <img alt={lang === 'EN' ? c.enTitle : c.viTitle} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" src={imageSrc} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101F]/95 via-[#06101F]/70 to-transparent group-hover:from-[#06101F] group-hover:via-[#06101F]/90 transition-all duration-500"></div>

                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-20">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="material-symbols-outlined text-[#22D3EE] text-base">{c.icon}</span>
                      <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest line-clamp-1">
                        {lang === 'EN' ? c.category.en : c.category.vi}
                      </span>
                    </div>
                    
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-[#22D3EE] transition-colors duration-300 leading-snug line-clamp-3">
                      {lang === 'EN' ? c.enTitle : c.viTitle}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Render Modal */}
      <UseCaseModal 
        isOpen={!!selectedCase} 
        onClose={() => setSelectedCase(null)} 
        useCase={selectedCase} 
      />
    </section>
  );
}
`;

fs.writeFileSync('components/UseCaseGrid.jsx', before + newFunction, 'utf-8');
console.log("Successfully replaced UseCaseGrid render function!");
