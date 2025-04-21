import HeroScreen from "../_components/screens/HeroScreen";

export default function MarketingHomePage() {
  return (
    <div className="flex flex-col gap-12 py-16 space-container">
      {/* Экран 1 - Hero секция */}
      <HeroScreen />

      {/* Экран 2 - Что ты получаешь - улучшенный космический дизайн */}
      <section id="learn-more" className="mt-24 relative">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="star" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center relative inline-block mx-auto text-white">
          <span className="relative z-10">Что даёт тебе сообщество — конкретно, по делу, без воды</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
        </h2>
        <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-white/90">
          Ты получаешь не просто доступ к платформе.<br/>
          Ты получаешь <span className="font-bold text-primary">живую AI‑инфраструктуру</span>, которую можно сразу применять в бизнесе, проектах или на фрилансе.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📦</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Библиотека решений</h3>
                <p>Готовые сценарии с JSON, видео и инструкцией — для e‑commerce, агентств, продюсеров, маркетологов, стартапов.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">AI-агенты и кастомные узлы</h3>
                <p>Агенты, которые создают сценарии, проверяют ошибки, рассчитывают эффективность и сами масштабируют процессы.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🧱</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">База знаний по созданию агентов</h3>
                <p>Из чего они собираются, как взаимодействуют с ИИ, куда выводят данные и как могут работать полностью автономно.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌀</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Связки на основе MCP и вайбкодинга</h3>
                <p>Передовые подходы к проектированию сценариев на основе ощущений, потоков данных и мультимодальности.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💬</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Чат с практиками и наставниками</h3>
                <p>Реальные специалисты, которые не "обучают", а помогают запускать. Быстрая обратная связь и живые разборы.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔁</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Новые связки каждую неделю</h3>
                <p>Актуальные AI-интеграции, ноды, API-подключения — проверенные в действии и готовые к запуску.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-card col-span-1 md:col-span-2 mt-8 p-8 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💸</span>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Доступ к внутренним кейсам и монетизации</h3>
              <p>Как участники используют сценарии, чтобы зарабатывать: фриланс, консалтинг, продукты.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center styled-border p-8 max-w-3xl mx-auto">
          <p className="font-medium text-lg">Это не сообщество «чтобы поучиться».<br/>
          Это среда, где создают, внедряют и зарабатывают вместе.</p>
          <p className="mt-3">Хочешь — берёшь готовое. Хочешь — собираешь своё. В любом случае: ты не один.</p>
        </div>
      </section>

      {/* Экран 3 - Преимущества */}
      <section id="benefits" className="mt-24 relative">
        <h2 className="text-3xl font-bold mb-6 text-center relative inline-block mx-auto text-white">
          <span className="relative z-10">Как ты получаешь пользу с первых дней — и растёшь на годы вперёд</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
        </h2>
        
        <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-white/90">
          Ты заходишь — и сразу начинаешь решать свои задачи: автоматизируешь, подключаешь ИИ, настраиваешь сценарии.<br/><br/>
          Но за этим стоит гораздо больше, чем просто «связки».<br/>
          Ты начинаешь управлять процессами — и своей ценностью на рынке.
        </p>
        
        <p className="text-center text-xl font-semibold mb-10 text-white">Вот как это устроено:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          <div className="p-6 feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔎</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Ты находишь решение под свою задачу</h3>
                <p>Или через поиск, или просто спросив в чате. Готовые сценарии ждут, чтобы ты их адаптировал и запустил.</p>
              </div>
            </div>
          </div>
          <div className="p-6 feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📼</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Смотришь скринкаст и загружаешь JSON</h3>
                <p>Никакой воды. Инструкция, файл, подключение — и ты уже в деле.</p>
              </div>
            </div>
          </div>
          <div className="p-6 feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🛠</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Если хочешь глубже — учишься создавать своих AI-агентов</h3>
                <p>Понимаешь, как строятся системы, как они анализируют, реагируют, оптимизируют.</p>
              </div>
            </div>
          </div>
          <div className="p-6 feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🤝</span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Получаешь обратную связь и поддержку в любой момент</h3>
                <p>Кураторы, комьюнити, Zoom-разборы. Один вопрос — десятки полезных ответов.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10 text-white">И главное:</h3>
          
          <div className="feature-card p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💥</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Ты осваиваешь рычаги влияния</h3>
                <p className="mb-4">Медиа, маркетинг, нейросети, автоматизация, разработка — всё переплетается.</p>
                <p className="mb-4">Хочешь уверенно продавать, вести переговоры, запускать проекты, создавать saas и кодить сайты — всё это внутри.</p>
                <p>А главное — научишься собирать процессы вокруг себя и масштабировать их без команды.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center styled-border p-8 max-w-3xl mx-auto">
          <p className="font-medium text-lg">
            Ты растёшь — потому что учишься делать то, что действительно даёт контроль над результатами.
          </p>
          <p className="mt-3">
            И сообщество будет рядом всё время — вплоть до 2030-го и дальше.
          </p>
        </div>
      </section>

      {/* Экран 4 - О продукте */}
      <section id="growth" className="mt-24 relative">
        <h2 className="text-3xl font-bold mb-6 text-center relative inline-block mx-auto text-white">
          <span className="relative z-10">Ты перестаёшь быть исполнителем. Ты становишься точкой роста.</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
        </h2>
        
        <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-white/90">
          Когда ты умеешь собирать процессы, автоматизировать и подключать ИИ — ты превращаешься в человека, 
          который не «делает задачи», а устраняет их навсегда.
        </p>
        
        <p className="text-center text-xl font-semibold mb-10 text-white">Вот как меняется твоя позиция и доход:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💼</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Ты не зависишь от программистов, дизайнеров, маркетологов</h3>
                <p>Бизнесу больше не нужно содержать отделы. Он ищет тех, кто может всё решить сам — с помощью AI и автоматизации.</p>
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🧠</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Ты становишься универсальным инженером ИИ</h3>
                <p>У тебя есть собственные агенты, которые помогают писать, генерировать, проектировать, кодить, считать и продавать.</p>
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💸</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Ты легко монетизируешь знания</h3>
                <p>Сценарии, которые ты собрал — можно адаптировать, продавать, предлагать бизнесу и внедрять за деньги.</p>
              </div>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔁</span>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Ты уходишь от "ручного режима" работы</h3>
                <p>Ты больше не привязан ко времени или числу клиентов. AI работает за тебя, масштабирует тебя.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-card p-8 mt-12 max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🌍</span>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Ты становишься частью новой волны</h3>
              <p className="mb-4">В 2025 году уже появился первый человек, который в одиночку с AI‑агентами заработал $1 млрд.</p>
              <p className="mb-4">Сегодня таких единицы. Через 2 года — их будут тысячи.</p>
              <p className="font-semibold">Вопрос: ты будешь среди них?</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center styled-border p-8 max-w-3xl mx-auto">
          <p className="font-medium text-lg">
            Пока другие ждут команду — бизнес ищет тех, кто умеет всё собрать сам.
          </p>
          <p className="mt-3 font-bold text-xl text-primary">
            И таких, как ты, будет хотеть каждый.
          </p>
        </div>
      </section>

      {/* Экран 5 - Сценарии */}
      <section id="solutions" className="mt-24 relative">
        <h2 className="text-3xl font-bold mb-6 text-center relative inline-block mx-auto text-white">
          <span className="relative z-10">Что ты найдёшь внутри — сценарии, которые уже работают и приносят деньги</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
        </h2>
        
        <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-white/90">
          Это не теоретические лекции. Это живой стек решений, которые уже используются в бизнесе, 
          продаются, оптимизируют расходы и создают новые источники дохода.
        </p>
        
        <div className="styled-border bg-black/60 backdrop-blur-md p-8 mb-10 max-w-4xl mx-auto">
          <p className="text-xl font-semibold mb-6 text-white">Вот лишь часть:</p>
          
          <ul className="space-y-6 text-gray-200">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">—</span>
              <span>автоматизация e‑commerce, маркетинга, аналитики, контента</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">—</span>
              <span>готовые агенты и шаблоны: автоворонки, AI‑секретари, генераторы офферов</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">—</span>
              <span>интеграции с GPT, Claude, Gemini, Vision, Notion, CRM, мессенджерами</span>
            </li>
            
            <li>
              <div className="flex items-start">
                <span className="text-amber-400 mr-2">—</span>
                <span>инструменты нового поколения:</span>
              </div>
              
              <ul className="mt-4 ml-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Голосовой менеджер</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Контент-завод</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>AI-продавец V3</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Анализ соцсетей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Автоматизация под SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>RSS-агенты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>AI в динамике</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-lg p-8 border border-amber-500/20 max-w-4xl mx-auto">
          <div className="flex gap-6 items-center flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-6xl">🤖</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-4">И, конечно, — Джарвис. Настоящий. Рабочий.</h3>
              <p className="text-gray-200 mb-3">
                Голосовой AI‑ассистент, который управляет твоими задачами, файлами, контентом, CRM и финансами.
              </p>
              <p className="text-gray-200 mb-3">
                Создан на базе n8n, подключается к любым сервисам. Работает 24/7.
              </p>
              <p className="text-gray-200 italic">
                Как у Тони Старка, только в твоём Telegram.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button className="px-6 py-3 rounded-md bg-black/50 text-white hover:bg-black/60 transition border border-amber-500/30 backdrop-blur-sm hover:shadow-lg hover:scale-105 flex items-center gap-2">
            <span className="text-lg">🔗</span>
            <span>Посмотреть кейсы из сообщества</span>
          </button>
          <button className="px-6 py-3 rounded-md bg-black/50 text-white hover:bg-black/60 transition border border-amber-500/30 backdrop-blur-sm hover:shadow-lg hover:scale-105 flex items-center gap-2">
            <span className="text-lg">🔗</span>
            <span>Открыть чемоданчик с решениями</span>
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-bold text-2xl text-white">
            Подключай. Запускай. Зарабатывай.
          </p>
        </div>
      </section>

      {/* Экран 6 - Подписка */}
      <section id="pricing" className="mt-24 relative">
        <h2 className="text-3xl font-bold mb-6 text-center relative inline-block mx-auto text-white">
          <span className="relative z-10">Подписка, которая окупается быстрее, чем ты успеешь это прочитать</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-2xl font-bold text-white mb-2">Стоимость доступа — 5 000 ₽ в месяц.</p>
          <p className="text-xl text-white/80">Это меньше, чем одна консультация разработчика.</p>
        </div>
        
        <div className="styled-border bg-black/60 backdrop-blur-md p-8 mb-10 max-w-4xl mx-auto">
          <p className="text-xl font-semibold mb-6 text-white text-center">Но ты получаешь больше, чем просто доступ:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-200">Полный стек готовых сценариев</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-200">Постоянные обновления и новые решения</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-200">Закрытое сообщество и поддержка</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-200">Доступ к AI‑агентам, шаблонам, авто‑воронкам</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-200">Возможность не только применять, но и продавать готовые решения</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-3xl mt-1">🧠</span>
            <div>
              <p className="text-xl font-bold text-white mb-4">Ты не покупаешь доступ. Ты покупаешь точку роста.</p>
              <ul className="space-y-3 text-gray-200">
                <li>Для бизнеса — это автоматизация под ключ без команды.</li>
                <li>Для специалиста — путь к высоким чекам и сильным кейсам.</li>
                <li>Для продюсера — рычаг управления целыми экосистемами.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a href="https://t.me/oplataaifors_bot" className="gradient-button glow px-6 py-3 text-center rounded-md hover:scale-105 transition flex items-center justify-center gap-2">
            <span className="text-lg">🔗</span>
            <span>Подключить подписку</span>
          </a>
          <button className="px-6 py-3 rounded-md bg-black/50 text-white hover:bg-black/60 transition border border-amber-500/30 backdrop-blur-sm hover:shadow-lg hover:scale-105 flex items-center gap-2 justify-center">
            <span className="text-lg">🔗</span>
            <span>Перейти в сообщество</span>
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-bold text-2xl text-white">
            У тебя есть цель — у нас есть готовые процессы.
          </p>
        </div>
      </section>

      {/* Экран 7 - Создатели */}
      <section id="founders" className="mt-24 relative">
        <h2 className="text-3xl font-bold mb-6 text-center relative inline-block mx-auto text-white">
          <span className="relative z-10">Кто создал это сообщество — и почему тебе сюда стоит попасть</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-10 transform -rotate-1"></span>
        </h2>
        
        <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-white/90">
          Сообщество основано Георгием Джачвадзе и Ильёй Логвиновым —<br/>
          экспертами, которые работают на стыке нейросетей, автоматизации и бизнес-инженерии.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 max-w-5xl mx-auto">
          {/* Георгий */}
          <div className="feature-card">
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">📍</span>
                <h3 className="text-2xl font-bold text-primary">Георгий Джачвадзе</h3>
              </div>
              <ul className="space-y-3 text-gray-200 ml-9">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Экс-директор по маркетингу Skillbox Offline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Автор курсов по нейросетям и маркетингу в Skillbox</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Спикер на БРИКС+ по теме ИИ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Сооснователь агентства Foresight AI Lab</span>
                </li>
                <li className="flex flex-col gap-1">
                  <div className="flex items-start">
                    <span className="text-amber-400 mr-2">—</span>
                    <span>Ведущий каналов:</span>
                  </div>
                  <ul className="ml-8 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>@neiro_void — канал о нейросетях</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>@foresight_aitechnology — кейсы и агентная автоматизация</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mt-6 space-y-2 ml-9">
                <p className="flex items-center gap-2">
                  <span className="text-xl">📰</span> 
                  <a href="#" className="text-amber-400 hover:underline">Интервью Skillbox о личном пути Георгия</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl">🎓</span> 
                  <a href="#" className="text-amber-400 hover:underline">Курс «Нейросети и маркетинг» в Skillbox</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl">🎤</span> 
                  <a href="#" className="text-amber-400 hover:underline">Выступление на БРИКС+</a>
                </p>
              </div>
            </div>
          </div>

          {/* Илья */}
          <div className="feature-card">
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">📍</span>
                <h3 className="text-2xl font-bold text-primary">Илья Логвинов</h3>
              </div>
              <ul className="space-y-3 text-gray-200 ml-9">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Архитектор AI-агентов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Создатель кастомного голосового ассистента «Джарвис»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Разработчик решений на базе n8n, GPT и Vision‑моделей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Ведущий инженер в Foresight AI Lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">—</span>
                  <span>Telegram: @logvinovv01</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center styled-border p-8 max-w-3xl mx-auto">
          <p className="font-medium text-xl mb-4">
            Ты входишь не в группу, а в экосистему.
          </p>
          <p className="font-medium text-lg">
            Внутри — экспертиза, поддержка, проверенные инструменты и рывок в будущее.
          </p>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="mt-24 bg-primary/10 p-8 rounded-lg text-center styled-border">
        <h2 className="text-3xl font-bold mb-4">Сделай первый шаг сегодня</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Присоединяйся к сообществу ИИ-специалистов и автоматизируй свои процессы уже сейчас. 
          Будь на шаг впереди рынка.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://t.me/oplataaifors_bot" className="gradient-button glow px-6 py-3 text-lg">
            Начать за 5000 ₽/месяц
          </a>
          <button className="px-6 py-3 rounded-md bg-black/30 text-white hover:bg-black/40 transition border border-amber-500/30 backdrop-blur-sm hover:shadow-lg hover:scale-105">
            Задать вопрос
          </button>
        </div>
        <p className="text-sm mt-6 text-gray-300 max-w-xl mx-auto">
          Инвестируй в будущее прямо сейчас - в мире, где ИИ и автоматизация правят, 
          ты будешь среди лидеров, а не догоняющих.
        </p>
      </section>
    </div>
  );
} 