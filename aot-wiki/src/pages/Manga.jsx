import { useEffect, useRef } from "react";


const adaptationData = [
  {
    season: "Сезон 1",
    year: "2013",
    chapters: "Главы 1–33",
    episodes: "25 серий",
    studio: "Wit Studio",
    note: "Начало легенды. Разрушение Шиганшины, битва за Тростен, 57-я экспедиция. Самый просматриваемый аниме-сезон десятилетия на момент выхода.",
  },
  {
    season: "Сезон 2",
    year: "2017",
    chapters: "Главы 34–50",
    episodes: "12 серий",
    studio: "Wit Studio",
    note: "Раскрытие тайны Стен. Битва в Утгарде. Шокирующее разоблачение Райнера и Бертольдта. Рекорд Crunchyroll по просмотрам в день выхода.",
  },
  {
    season: "Сезон 3 (ч. 1)",
    year: "2018",
    chapters: "Главы 51–69",
    episodes: "12 серий",
    studio: "Wit Studio",
    note: "Политический переворот, правда о королевской семье, история Хистории. Адаптация самой политически насыщенной арки манги.",
  },
  {
    season: "Сезон 3 (ч. 2)",
    year: "2019",
    chapters: "Главы 70–90",
    episodes: "10 серий",
    studio: "Wit Studio",
    note: "Битва за Шиганшин. Смерть Эрвина. Раскрытие тайны за стенами. Эпизод 17 «Победитель» — один из наиболее оцениваемых эпизодов в истории аниме (9.95/10 на IMDb).",
  },
  {
    season: "Сезон 4 (ч. 1)",
    year: "2020–2021",
    chapters: "Главы 91–116",
    episodes: "16 серий",
    studio: "MAPPA",
    note: "Переход к MAPPA. Марлия, Воины, нападение на Либерио. Эрен как новый протагонист с неоднозначной моралью. Смена POV шокировала аудиторию.",
  },
  {
    season: "Сезон 4 (ч. 2)",
    year: "2022",
    chapters: "Главы 117–130",
    episodes: "12 серий",
    studio: "MAPPA",
    note: "Грохот Земли. Раскол в рядах союзников. Эрен запускает апокалипсис. Один из самых обсуждаемых финалов в истории аниме.",
  },
  {
    season: "Сезон 4 (ч. 3)",
    year: "2023",
    chapters: "Главы 131–139",
    episodes: "2 спецвыпуска",
    studio: "MAPPA",
    note: "Финальная битва. Смерть Эрена. Спорная концовка, вызвавшая волну дискуссий по всему миру. Завершение истории спустя 11 лет.",
  },
];

const covers = [
  { vol: "Том 1", url: "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg" },
  { vol: "Том 5", url: "https://i.ibb.co/WWcFRx9c/256237-0.jpg" },
  { vol: "Том 10", url: "https://i.ibb.co/ym5MJDCw/71qyw-WSb-Re-L-AC-UF350-350-QL50.jpg" },
  { vol: "Том 15", url: "https://i.ibb.co/0j6pNL7f/819-E4yd1-TNL-AC-UF1000-1000-QL80.jpg" },
  { vol: "Том 20", url: "https://i.ibb.co/Txzt1gck/29496367.jpg" },
  { vol: "Том 25", url: "https://i.ibb.co/TD7YYxqj/dfa80aae-ad00-45c6-ba71-0f2a816da4a7.jpg" },
  { vol: "Том 34", url: "https://i.ibb.co/v4T9zZ5f/product-book-manga-attack-on-titan-34.webp" },
];

export default function Manga({ navigate }) {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observerRef.current.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".mg-fade").forEach((el) =>
      observerRef.current.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <div className="manga-page">
        <div className="ink-deco" />
        <div className="ink-deco-2" />

        {/* ═══ HERO ═══ */}
        <section className="manga-hero">
          <div className="manga-hero-visual">
            <div className="panel-lines" />
            <img
              className="manga-hero-img"
              src="https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x900/0a0a0a/c0392b?text=MANGA";
              }}
              alt="Shingeki no Kyojin"
            />
          </div>
          <div className="manga-hero-content">
            <p className="manga-eyebrow">Hajime Isayama · Bessatsu Shōnen Magazine</p>
            <h1 className="manga-hero-title">ATTACK<br />ON<br />TITAN</h1>
            <p className="manga-hero-title-jp">進撃の巨人</p>
            <p className="manga-hero-desc">
              Манга, изменившая индустрию. Одиннадцать лет, 139 глав, 34 тома и
              более <strong>110 миллионов</strong> проданных копий по всему миру. История, которая
              началась как история о монстрах — и закончилась как история о
              людях.
            </p>
            <div className="quick-stats">
              <div className="qs-item">
                <span className="qs-num">139</span>
                <span className="qs-label">Глав</span>
              </div>
              <div className="qs-item">
                <span className="qs-num">34</span>
                <span className="qs-label">Томов</span>
              </div>
              <div className="qs-item">
                <span className="qs-num">110M+</span>
                <span className="qs-label">Копий продано</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BODY ═══ */}
        <div className="manga-body">

          {/* SECTION: CREATION */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">01</span>
            <span className="sec-divider-title">Создание</span>
            <div className="sec-divider-line" />
          </div>

          <div className="creation-grid mg-fade d1">
            <div className="creation-text">
              <p>
                <strong>«Атака на Титанов»</strong> — манга японского автора <em>Хадзимэ Исаямы</em>, публиковавшаяся в ежемесячном журнале Bessatsu Shōnen Magazine издательства Kodansha с <strong>9 сентября 2009 года</strong> по <strong>9 апреля 2021 года</strong>. За 11 лет и 8 месяцев Исаяма опубликовал 139 глав, вышедших в 34 танкобона.
              </p>
              <p>
                История создания манги уходит корнями в период, когда Исаяма работал в интернет-кафе в Токио. Будучи 19-летним студентом, он <strong>отправил рукопись в Shōnen Jump</strong> — и получил отказ. Редакторы сказали, что концепция слишком «тёмная» для их аудитории. Тогда он обратился в Kodansha — и нашёл издателя, готового рискнуть.
              </p>
              <p>
                Первоначальная рукопись была <em>настолько сырой</em>, что Исаяма публично признался: он стыдится ранних глав. Анатомия персонажей была непропорциональной, перспектива — грубой. Но именно эта «дикая», неотшлифованная энергия ранних глав привлекла читателей — там чувствовалась <strong>настоящая страсть</strong>, а не ремесло.
              </p>
              <p>
                Ключевой вдохновляющей силой для <strong>сеттинга</strong> стало детство Исаямы в префектуре Оита — горном регионе, окружённом горами, словно стенами. Мальчик, выросший внутри «кольца», которое казалось ему одновременно защитой и тюрьмой, создал мир, буквально построенный на этом ощущении.
              </p>
              <p>
                Для <strong>титанов</strong> вдохновением стала случайная встреча с пьяным покупателем в том самом интернет-кафе. Исаяма сказал в интервью: <em>«Что-то в его движениях — непредсказуемых, неуклюжих, но при этом угрожающих — было по-настоящему пугающим. Это не было злобой. Это была неразумность»</em>. Именно это он хотел воплотить в дизайне Чистых Титанов.
              </p>
              <p>
                Исаяма <strong>заранее знал концовку</strong>. По его словам, финальная сцена была придумана ещё до того, как первая глава ушла в печать. Это редчайший случай в манге — и объясняет, почему многие детали из первых глав приобретают новый смысл при перечитывании после финала.
              </p>
            </div>
            <div className="creation-sidebar">
              <img
                className="creator-portrait"
                src="https://i.ibb.co/8DGTjCR3/image-w856.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/300x400/111/c0392b?text=Isayama";
                }}
                alt="Хадзимэ Исаяма"
              />
              <p className="creator-name">Hajime Isayama</p>
              <p className="creator-name-jp">諫山 創</p>
              <div className="creator-facts">
                {[
                  ["Дата рождения", "29 августа 1986"],
                  ["Место рождения", "Хита, Оита, Япония"],
                  ["Дебют", "2009 — SnK"],
                  ["Образование", "Кит Кюсю Дайгаку"],
                  ["Статус", "Завершил мангу (2021)"],
                  ["Стиль", "Реализм / Экспрессионизм"],
                  ["Влияния", "Berserk, Fullmetal Alchemist"],
                  ["Состояние (оценка)", "~$5 млн+"],
                ].map(([l, v]) => (
                  <div className="cf-row" key={l}>
                    <span className="cf-label">{l}</span>
                    <span className="cf-val">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION: TIMELINE */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">02</span>
            <span className="sec-divider-title">Хронология</span>
            <div className="sec-divider-line" />
          </div>

          <div className="timeline-wrap mg-fade d1">
            <div className="timeline-line" />
            {[
              {
                year: "2006",
                tag: "Начало пути",
                title: "Первые наброски",
                text: "19-летний Исаяма создаёт первые прототипы персонажей и концепцию мира. Рукопись отклонена Shōnen Jump как «слишком жестокая».",
              },
              {
                year: "2009",
                tag: "Дебют",
                title: "Первая публикация",
                text: "9 сентября в Bessatsu Shōnen Magazine выходит первая глава. Тираж манги немедленно начинает расти — нетипично для дебюта нового автора.",
              },
              {
                year: "2011",
                tag: "Прорыв",
                title: "Признание индустрии",
                text: "Манга номинирована на Манга Taishou Award. Начало активного международного лицензирования. Продажи превышают 1 миллион копий.",
              },
              {
                year: "2013",
                tag: "Аниме",
                title: "Wit Studio адаптирует мангу",
                text: "Выход первого сезона аниме становится феноменом. Интернет переполнен обсуждениями. Продажи манги вырастают в 5 раз за месяц. 50 миллионов просмотров за первую неделю трансляции.",
              },
              {
                year: "2015",
                tag: "Рекорд",
                title: "70 миллионов копий",
                text: "Манга входит в список самых продаваемых манга в истории. Сопутствующие товары приносят миллиарды иен. Живые экранизации, спин-оффы, игры.",
              },
              {
                year: "2021",
                tag: "Финал",
                title: "Глава 139: конец истории",
                text: "9 апреля 2021 выходит финальная глава. Социальные сети захлестнула волна обсуждений — как восторженных, так и критических. Проданных томов: более 100 миллионов.",
              },
              {
                year: "2023",
                tag: "Конец эры",
                title: "Финал аниме-адаптации",
                text: "MAPPA завершает адаптацию финальной арки. История, начавшаяся в 2009 году, получает своё последнее экранное воплощение. Суммарная аудитория аниме — более 300 миллионов человек.",
              },
            ].map((item, i) => (
              <div className="timeline-item mg-fade" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="tl-year">{item.year}</div>
                <div className="tl-content">
                  <span className="tl-tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION: RECORDS */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">03</span>
            <span className="sec-divider-title">Рекорды</span>
            <div className="sec-divider-line" />
          </div>

          <div className="records-grid mg-fade d1">
            {[
              {
                num: "110M+",
                unit: "",
                label: "Копий продано",
                desc: "Входит в топ-10 самых продаваемых манга в истории наравне с One Piece, Naruto и Dragon Ball Z.",
                icon: "📚",
              },
              {
                num: "9.95",
                unit: "/10",
                label: "IMDb — эп. «Победитель»",
                desc: "Серия 17 сезона 3 получила рейтинг 9.95 на IMDb — один из высочайших в истории телевидения и аниме.",
                icon: "⭐",
              },
              {
                num: "#1",
                unit: "",
                label: "Myanimelist (2013–2022)",
                desc: "На протяжении почти 9 лет аниме занимало первое место на MyAnimeList с рейтингом выше 9.0, установив рекорд длительности.",
                icon: "🏆",
              },
              {
                num: "56",
                unit: "стран",
                label: "Лицензировано в",
                desc: "Манга и аниме лицензированы более чем в 56 странах мира. Переведена на 20+ языков.",
                icon: "🌍",
              },
              {
                num: "¥1T+",
                unit: "",
                label: "Доходы от франшизы",
                desc: "Совокупный оборот франшизы (манга, аниме, мерч, игры, коллаборации) превысил триллион иен.",
                icon: "💴",
              },
              {
                num: "300M+",
                unit: "",
                label: "Просмотров аниме",
                desc: "Суммарная международная аудитория всех сезонов анимационной адаптации превышает 300 миллионов человек.",
                icon: "👁",
              },
              {
                num: "34",
                unit: "тома",
                label: "Полная серия",
                desc: "34 танкобона охватывают 11 лет публикации. Каждый том выходил с уникальной обложкой, ставшей самостоятельным арт-объектом.",
                icon: "📖",
              },
              {
                num: "2021",
                unit: "",
                label: "Год завершения",
                desc: "Одна из немногих крупных манг, завершённых в соответствии с заранее спланированной автором концовкой — без редакционного давления.",
                icon: "🎯",
              },
            ].map((r, i) => (
              <div className="record-card" key={i} data-icon={r.icon}>
                <span className="rec-num">
                  {r.num}
                  <span className="rec-unit">{r.unit}</span>
                </span>
                <span className="rec-label">{r.label}</span>
                <p className="rec-desc">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION: INSPIRATION */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">04</span>
            <span className="sec-divider-title">Вдохновение</span>
            <div className="sec-divider-line" />
          </div>

          <div className="inspo-grid mg-fade d1">
            {[
              {
                icon: "⛰️",
                label: "Детство",
                title: "Горы как стены",
                body: "Исаяма вырос в Хита — небольшом городе в окружении гор префектуры Оита. Это ощущение «замкнутости» внутри красивого, но непроницаемого пространства напрямую вдохновило образ трёх стен. Для него горы были одновременно защитой и тюрьмой — так же, как стены для персонажей.",
              },
              {
                icon: "🎮",
                label: "Медиа",
                title: "Muv-Luv Alternative",
                body: "Визуальная новелла Muv-Luv Alternative — один из главных источников вдохновения автора. Её жёсткий, безжалостный нарратив о выживании перед лицом непостижимого врага, и особенно — способность убивать важных персонажей — сильно повлияли на подход Исаямы к структуре истории.",
              },
              {
                icon: "🪰",
                label: "Литература",
                title: "Lord of the Flies",
                body: "«Повелитель мух» Голдинга вдохновил тему того, как цивилизация и человеческая природа взаимодействуют в условиях изоляции. Вопрос: насколько «добро» и «зло» являются продуктом системы, а не природы человека — проходит через всю мангу.",
              },
              {
                icon: "🎬",
                label: "Кино",
                title: "Корейский экшн",
                body: "Исаяма называл корейские фильмы о выживании (в частности, работы Пон Чжун Хо) источником вдохновения для темпа повествования и структуры напряжения. Умение удерживать аудиторию в состоянии постоянной неопределённости — сильно ощущается в манге.",
              },
              {
                icon: "🏘️",
                label: "Социальный контекст",
                title: "Метафора изоляции",
                body: "Ряд исследователей усматривают в «Атаке на Титанов» метафору японского общества: закрытость, боязнь внешнего мира, национальная идентичность. Сам Исаяма эти интерпретации не отрицает, но и не подтверждает — оставляя пространство для чтения.",
              },
              {
                icon: "☠️",
                label: "Военная история",
                title: "Реальные войны",
                body: "4-й сезон манги явно обращается к образам Второй мировой войны — концентрационные лагеря, пропаганда, геноцид как государственная политика, цикл мести между народами. Это превратило «Атаку на Титанов» из приключенческой манги в военную трагедию с философским измерением.",
              },
            ].map((item, i) => (
              <div className="inspo-card" key={i}>
                <span className="inspo-icon">{item.icon}</span>
                <span className="inspo-label">{item.label}</span>
                <p className="inspo-title">{item.title}</p>
                <p className="inspo-body">{item.body}</p>
              </div>
            ))}
          </div>

          {/* ═══ NEW SECTION: ISAYAMA CREATIVE PROCESS ═══ */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">04б</span>
            <span className="sec-divider-title">Исаяма за работой</span>
            <div className="sec-divider-line" />
          </div>

          <div className="creation-grid mg-fade d1">
            <div className="creation-text">
              <p>
                <strong>Исаяма не жил в романтическом образе «художника в мастерской».</strong> Он работал в режиме, который большинство людей назвали бы саморазрушением. В пиковые периоды — особенно в финальной арке — он спал <strong>по 3–4 часа в сутки</strong>, вставал, рисовал, снова ложился. Его редактор в нескольких интервью говорил, что сильно беспокоился о его здоровье, но Исаяма отказывался замедляться: <em>«Я не мог остановиться. Я знал, что история кончается, и боялся, что если остановлюсь — потеряю нить»</em>.
              </p>
              <p>
                Каждый том манги выходил ежемесячно — без пропусков на протяжении почти <strong>12 лет</strong>. Это означало около 45 страниц плотного нарратива в месяц, с минимальной командой. Для сравнения: многие топовые авторы манги берут регулярные перерывы или работают с большими ассистентскими группами. Исаяма — нет. <strong>Ноль пропущенных номеров за 12 лет.</strong>
              </p>
              <p>
                Особенно тяжёлой для него стала финальная арка. В интервью 2021 года он признался: <strong>«Последние два года я думал о финале каждый день. Просыпался с этим, засыпал с этим. Иногда мне снилось, что я не успею»</strong>. Под этим давлением он сохранял дисциплину выпуска — ни одного пропущенного номера.
              </p>
              <p>
                Есть деталь, которую мало кто знает: когда Исаяма рисовал <strong>смерть Эрвина Смита</strong> в Шиганшине, он, по его словам, <em>«плакал за рабочим столом несколько часов подряд»</em>. Это был персонаж, которого он сам построил как воплощение всего, что ценил в людях — и которого сам же уничтожил, потому что история требовала именно этого. Он сказал: «Если я не чувствую смерть персонажа физически — значит, я написал её неправильно».
              </p>
              <p>
                Аналогичное он описывал при работе над финальным диалогом Эрена и Армина. <strong>Этот диалог переписывался более десяти раз.</strong> Исаяма не мог найти баланс между тем, что Эрен должен был сказать как архитектор катастрофы — и тем, что он чувствовал как человек, выросший с Армином. В итоге опубликованная версия — его десятая попытка. Предыдущие он уничтожил.
              </p>
            </div>
            <div className="creation-sidebar">
              <div className="article-img-banner" style={{ marginBottom: "1.2rem" }}>
                <img
                  src="https://i.ibb.co/TxDt6vSK/3q476by80gu31.jpg"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x260/0a0a0a/c0392b?text=Isayama"; }}
                  alt="Хадзимэ Исаяма"
                  style={{ width: "100%", borderRadius: "6px" }}
                />
                <div className="article-img-caption">Хадзимэ Исаяма — автор, работавший без перерывов 12 лет</div>
              </div>
              <div className="creator-facts">
                {[
                  ["Сон в финале", "3–4 часа в сутки"],
                  ["Диалог Эрен/Армин", "Переписан 10+ раз"],
                  ["Пропущенных номеров", "0 за 12 лет"],
                  ["Смерть Эрвина", "Плакал за столом"],
                  ["Финал придуман", "До первой главы"],
                  ["Самый тяжёлый момент", "Рагако — мать Конни"],
                ].map(([l, v]) => (
                  <div className="cf-row" key={l}>
                    <span className="cf-label">{l}</span>
                    <span className="cf-val">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHAT HE HATED + SOURCES OF IDEAS */}
          <div className="inspo-grid mg-fade d2" style={{ marginTop: "2rem" }}>
            {[
              {
                icon: "💡",
                label: "Источник образов",
                title: "Пьяный посетитель и мальчик с ножом",
                body: "Два ключевых момента рождения манги: <strong>пьяный покупатель в интернет-кафе</strong> — вдохновивший Чистых Титанов своей неразумной, непредсказуемой угрозой. И образ <strong>мальчика с ножом</strong> за поясом — которого Исаяма увидел на улице в Токио и который стал прообразом молодого Эрена. «Он шёл так, словно был готов умереть прямо сейчас» — сказал Исаяма.",
              },
              {
                icon: "😣",
                label: "Что ему не давалось",
                title: "Глава 90 — «конец, которого я боялся»",
                body: "Глава 90 — первая сцена у океана — по признанию Исаямы, <strong>далась ему труднее всего</strong> в начале 4-й арки. Он знал, что должен перевернуть всё, что читатели считали правдой о мире. <em>«Я боялся, что люди меня возненавидят. Я почти изменил задуманное»</em> — признался он. Но не изменил.",
              },
              {
                icon: "🖊️",
                label: "Самокритика",
                title: "«Первые 30 глав — мне стыдно»",
                body: "В 2019 году Исаяма сказал: <strong>«Если бы я мог, я бы перерисовал первые 30 глав полностью»</strong>. Он считал анатомию персонажей и боевые сцены слишком слабыми. При этом он намеренно отказался от переиздания с правками — <em>«это была бы ложь о том, как я начинал»</em>.",
              },
              {
                icon: "🩸",
                label: "Самый тяжёлый момент",
                title: "Рагако — мать Конни",
                body: "Из всего, что он нарисовал, Исаяма называл <strong>сцену с матерью Конни</strong> — превращённой в Титана, сидящей в развалинах дома и произносящей «добро пожаловать домой» — самым психологически тяжёлым моментом. «Именно тогда я понял, что пишу о природе войны. Не о монстрах».",
              },
              {
                icon: "🧠",
                label: "Навязчивая мысль",
                title: "«Я думал об этом каждый день»",
                body: "На протяжении последних <strong>двух лет написания</strong> Исаяма каждый день заново проверял: правильный ли финал он планирует. Он переписывал финальный монолог несколько раз. Он спрашивал редактора: <em>«Это честно по отношению к читателям?»</em>. Ответ, который он выбрал в итоге, — неоднозначный. Намеренно.",
              },
              {
                icon: "🎨",
                label: "Рука сопротивлялась",
                title: "Тела детей в церкви Рейссов",
                body: "Исаяма признавался, что <strong>сцена убийства детей семьи Рейсс</strong> Гришей стала единственной, где он почти остановился. Он сидел над ней несколько дней, не мог провести линию. <em>«Это должно было быть именно так. Но моя рука сопротивлялась»</em> — сказал он. В итоге нарисовал — и оставил без смягчений.",
              },
            ].map((item, i) => (
              <div className="inspo-card" key={i}>
                <span className="inspo-icon">{item.icon}</span>
                <span className="inspo-label">{item.label}</span>
                <p className="inspo-title">{item.title}</p>
                <p className="inspo-body" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>

          {/* ═══ ISAYAMA QUOTES BLOCK ═══ */}
          <div className="mg-fade d2" style={{ margin: "2.5rem 0 3rem" }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(192,57,43,0.07) 0%, rgba(0,0,0,0) 100%)",
              border: "1px solid rgba(192,57,43,0.18)",
              borderLeft: "4px solid #c0392b",
              borderRadius: "0 8px 8px 0",
              padding: "2rem 2rem 2rem 2.5rem",
            }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c0392b", marginBottom: "1.5rem" }}>
                ◆ ИСАЯМА О ФИНАЛЕ — ПРЯМАЯ РЕЧЬ
              </p>
              {[
                {
                  quote: "Я написал финал, который хотел написать я — не тот, который хотели читатели. Я думаю, это было правильным решением. Но я понимаю разочарование. И мне жаль тех, кто ждал другого.",
                  context: "Интервью после публикации главы 139, апрель 2021",
                },
                {
                  quote: "Эрен не герой и не злодей. Он человек, который шёл вперёд — потому что не умел останавливаться. Я думаю, многие из нас такие же. Именно поэтому он тронул людей.",
                  context: "Авторский комментарий к финальному тому, 2021",
                },
                {
                  quote: "Когда я рисовал последнюю страницу — птицу у могилы — я не знал точно, что именно она означает. Я знал только, что это правда. Иногда история сама знает, чем ей закончиться.",
                  context: "Интервью NHK, 2021",
                },
                {
                  quote: "Если бы я начал всё заново — я бы написал ту же историю. Но нарисовал бы её лучше. Намного лучше.",
                  context: "Ответ на вопрос читателя в Twitter, 2022",
                },
              ].map((q, i, arr) => (
                <div key={i} style={{ marginBottom: i < arr.length - 1 ? "1.5rem" : 0 }}>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic", color: "var(--text, #e8e8e8)", margin: "0 0 0.4rem" }}>
                    «{q.quote}»
                  </p>
                  <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.38)", margin: 0 }}>— {q.context}</p>
                  {i < arr.length - 1 && <div style={{ height: "1px", background: "rgba(192,57,43,0.15)", margin: "1.2rem 0 0" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: ANIME ADAPTATION TABLE */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">05</span>
            <span className="sec-divider-title">Адаптация</span>
            <div className="sec-divider-line" />
          </div>

          <div className="adaptation-wrap mg-fade d1">
            <table className="adaptation-table">
              <thead>
                <tr>
                  <th>Сезон</th>
                  <th>Год</th>
                  <th>Главы манги</th>
                  <th>Серий</th>
                  <th>Студия</th>
                  <th>Примечание</th>
                </tr>
              </thead>
              <tbody>
                {adaptationData.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <span className="season-badge">{row.season}</span>
                    </td>
                    <td>{row.year}</td>
                    <td>{row.chapters}</td>
                    <td>{row.episodes}</td>
                    <td>{row.studio}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MANGA COVERS STRIP */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">06</span>
            <span className="sec-divider-title">Обложки</span>
            <div className="sec-divider-line" />
          </div>

          <div className="covers-strip mg-fade d1">
            <div className="covers-scroll">
              {covers.map((c, i) => (
                <div className="cover-item" key={i}>
                  <img
                    src={c.url}
                    alt={c.vol}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/110x160/111/c0392b?text=${c.vol}`;
                    }}
                  />
                  <div className="cover-vol">{c.vol}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: INTERESTING FACTS */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">07</span>
            <span className="sec-divider-title">Факты</span>
            <div className="sec-divider-line" />
          </div>

          <div className="facts-bento mg-fade d1">
            <div className="fact-cell tall">
              <span className="fact-num">01</span>
              <span className="fact-tag">Загадка с самого начала</span>
              <p className="fact-title">Конец был известен с первой главы</p>
              <p className="fact-body">
                Исаяма заявил в нескольких интервью, что <strong>финальная сцена была в его голове ещё до того, как первая глава ушла в печать</strong>. Он знал, кто умрёт, кто выживет и чем завершится история человечества на острове. Это объясняет, почему многие детали — в частности, улыбка Гриши у стены в самом начале — при перечтении приобретают совершенно иной смысл.
              </p>
              <br />
              <p className="fact-body">
                Многие 10 лет гадали, что это значит. Ответ пришёл только в 122 главе (80 серия), которая называется «От тебя, 2000 лет назад». Это было послание основательницы Имир Эрену. Исаяма связал начало и конец временной петлёй, длиной в два тысячелетия, ещё до того, как мы узнали, кто такая Имир.
              </p>
              <br />
              <p className="fact-body">
                Самый главный шок финала — осознание того, что Эрен Йегер сам является творцом своей судьбы и своих страданий. Когда в первой главе Эрен просыпается под деревом и спрашивает: «Микаса, когда у тебя успели так отрасти волосы?» — это не случайная фраза. В манге перед этим моментом он видит образ Микасы, которая говорит: «Увидимся позже, Эрен». Это воспоминание из последней главы, которое пришло к нему «вчера» — хотя для нас прошло 11 лет.
              </p>
              <br />
              <p className="fact-body">
                В первой же главе присутствует фраза Армина: «Тот, кто не рискует, не может изменить мир». Она станет ключевой темой финала — написанной за 11 лет до него.
              </p>
            </div>
            <div className="fact-cell">
              <span className="fact-num">02</span>
              <span className="fact-tag">Рисунок</span>
              <p className="fact-title">Публичный стыд за ранние главы</p>
              <p className="fact-body">
                Исаяма публично признал, что считает <strong>первые ~30 глав «ужасными» с точки зрения рисунка</strong>. Его анатомия и перспектива были намеренно гротескными. Критики в начале называли его стиль «самодельным» — и именно это стало частью уникальности.
              </p>
            </div>
            <div className="fact-cell">
              <span className="fact-num">03</span>
              <span className="fact-tag">Отказ</span>
              <p className="fact-title">Shōnen Jump отклонил рукопись</p>
              <p className="fact-body">
                Первый издатель, к которому обратился Исаяма — <strong>Shōnen Jump</strong> — отказал ему. Редакторы сочли концепцию слишком мрачной для их целевой аудитории. Kodansha рискнул — и получил одну из самых прибыльных манг в истории.
              </p>
            </div>
            <div className="fact-cell">
              <span className="fact-num">04</span>
              <span className="fact-tag">Топография</span>
              <p className="fact-title">Реальный город вдохновил Стохесс</p>
              <p className="fact-body">
                Город <strong>Дубровник (Хорватия)</strong> и немецкий средневековый город Ротенбург-на-Таубере считаются прообразами Стохесса и архитектуры Паради. Исаяма изучал European walled cities для создания визуального языка манги.
              </p>
            </div>
            <div className="fact-cell">
              <span className="fact-num">05</span>
              <span className="fact-tag">Темп</span>
              <p className="fact-title">Один из самых плотных нарративов в манге</p>
              <p className="fact-body">
                При средней длине главы в 45 страниц Исаяма упаковывал в каждую главу больше сюжетных событий, чем большинство авторов — за 2–3 главы. Это делало ожидание между выпусками особенно мучительным для читателей.
              </p>
            </div>
            <div className="fact-cell wide">
              <span className="fact-num">06</span>
              <span className="fact-tag">Контроверсия</span>
              <p className="fact-title">Самый обсуждаемый финал в истории манги</p>
              <p className="fact-body">
                Финальная глава вызвала волну критики за неоднозначную судьбу персонажей и «незакрытые» вопросы. Однако это же сделало «Атаку на Титанов» одним из самых обсуждаемых произведений в истории — фанаты до сих пор пишут <strong>альтернативные концовки, анализы и теории</strong>. Исаяма позже выпустил версию с дополнительными страницами в tankōbon — изменив несколько деталей финала, что породило новую волну дискуссий.
              </p>
            </div>
          </div>

          {/* SECTION: POPULARITY */}
          <div className="sec-divider mg-fade">
            <span className="sec-divider-num">08</span>
            <span className="sec-divider-title">Популярность</span>
            <div className="sec-divider-line" />
          </div>

          <div className="popularity-wrap mg-fade d1">
            <div className="pop-block">
              <p className="pop-title">Продажи томов — топ годов</p>
              {[
                { name: "2013 — год выхода аниме, пик продаж", pct: 100 },
                { name: "2021 — финал манги", pct: 88 },
                { name: "2022 — 4 сезон часть 2", pct: 76 },
                { name: "2020 — начало 4 сезона", pct: 70 },
                { name: "2014 — после взрывного старта", pct: 65 },
              ].map((item, i) => (
                <div className="pop-item" key={i}>
                  <span className="pop-rank">{i + 1}</span>
                  <div className="pop-bar-wrap">
                    <p className="pop-name">{item.name}</p>
                    <div className="pop-bar-bg">
                      <div className="pop-bar-fill" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pop-block">
              <p className="pop-title">Награды и признание</p>
              <div className="awards-list">
                {[
                  { year: "2011", text: "<strong>Nominierung</strong> auf den Manga Taishō Award — первое крупное признание" },
                  { year: "2011", text: "Включена в список <strong>«Этот манга поразителен!»</strong> для мужской аудитории" },
                  { year: "2013", text: "<strong>Harvey Award</strong> (США) — лучший зарубежный манга-проект" },
                  { year: "2013", text: "Анисong и аниме <strong>Anime of the Year</strong> по версии множества изданий" },
                  { year: "2019", text: "<strong>Kyōiku Manga Taishō</strong> — образовательная ценность произведения" },
                  { year: "2021", text: "Введён в <strong>Guinness World Records</strong> по суммарным продажам" },
                ].map((a, i) => (
                  <div className="award-row" key={i}>
                    <span className="award-year">{a.year}</span>
                    <p className="award-text" dangerouslySetInnerHTML={{ __html: a.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ═══ FOOTER ═══ */}
        <footer className="manga-footer">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama · Kodansha</p>
          <button className="back-btn" onClick={() => navigate("home")}>
            ← Все персонажи
          </button>
        </footer>
      </div>
    </>
  );
}