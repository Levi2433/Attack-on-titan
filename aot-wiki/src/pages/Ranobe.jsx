import { useEffect, useRef } from "react";

const novels = [
  {
    id: "before-the-fall",
    title: "Attack on Titan: Before the Fall",
    titleRu: "До падения",
    titleJp: "進撃の巨人 Before the fall",
    author: "Рё Судзукадзэ",
    illustrator: "Тацуя Кидани",
    years: "2011–2014",
    volumes: "3 тома",
    manga: "Сатоси Сяма (2013–2017, 18 томов)",
    img: "https://i.ibb.co/wh8BmQQ1/Before-The-Fall.webp",
    tags: ["Приквел", "Происхождение УПМ", "За 70 лет до основных событий"],
    rating: "8.1",
    connection: "Высокая — объясняет происхождение УПМ",
    isayama: "Одобрил публикацию, предоставил материалы по лору мира",
    synopsis: `<strong>За семьдесят лет до того, как Эрен Йегер поклялся уничтожить всех Титанов</strong> — человечество ещё не знало, что такое УПМ. Стены стояли, страх был другим, а Титаны казались абсолютным, непреодолимым ужасом.

Ранобе рассказывает историю <em>Kuklo</em> — юноши, рождённого в желудке Титана и выжившего. Общество считает его «дитём Титана» и отвергает. Но именно он станет одним из первых людей, решившихся сразиться с Титанами — и именно благодаря ему появится прообраз того устройства, которое позже назовут <strong>УПМ</strong>.

История разворачивается в три акта: рождение в тени, первое столкновение с Титанами за стенами, и кровавый путь к созданию первого прототипа маневренного снаряжения. Это история не о героях — это история об <em>изобретателях и выживших</em>, чьи имена история не запомнила, но чьи решения определили всё.`,
    details: [
      { icon: "📅", label: "Период событий", text: "За ~70 лет до основного сюжета" },
      { icon: "⚙", label: "Главная тема", text: "Создание первого прототипа УПМ" },
      { icon: "👤", label: "Главный герой", text: "Куклo — «дитя Титана», изгнанник общества" },
      { icon: "📚", label: "Адаптация", text: "Манга-адаптация (2013–2017, 18 томов)" },
    ],
    facts: [
      { title: "Первый официальный приквел", text: "Before the Fall стал первым официально одобренным Исаямой расширенным материалом вселенной. Именно он установил правила «глубокого лора» AoT." },
      { title: "УПМ не было с самого начала", text: "Один из важнейших лорных фактов: устройство маневрирования — изобретение человека, а не данность. Before the Fall показывает, какой ценой оно было создано." },
      { title: "Манга популярнее ранобе", text: "Манга-адаптация Сяма получила значительно большую аудиторию. Многие поклонники узнали историю именно через неё, а не через оригинальный текст." },
    ],
  },
  {
    id: "harsh-mistress",
    title: "Attack on Titan: The Harsh Mistress of the City",
    titleRu: "Жестокая хозяйка города",
    titleJp: "進撃の巨人 教官と迷い子",
    author: "Рё Судзукадзэ",
    illustrator: "Тацуя Кидани",
    years: "2013–2014",
    volumes: "2 тома",
    manga: "Нет адаптации",
    img: "https://i.ibb.co/FLX5qDJr/71u-Ako-Ex-LVL-AC-UF1000-1000-QL80.jpg",
    tags: ["Параллельные события", "Сезон 1", "Военная драма", "Изолированный город"],
    rating: "7.8",
    connection: "Средняя — параллельные события Сезона 1",
    isayama: "Дал добро на использование персонажей и локаций",
    synopsis: `<strong>Пока Эрен, Микаса и Армин сражаются в Тросте</strong> — в другом месте разворачивается совершенно иная история. Город <em>Утрост</em> оказывается отрезан от остального мира: его жители застряли между Стеной Марией и Стеной Розой после прорыва Титанов в 845 году.

В центре повествования — <strong>Рита Ледер</strong>, бывший гарнизонный капрал, вынужденная взять на себя командование изолированным городом. Она не герой. Она уставший солдат с приказами, которые противоречат совести, и подчинёнными, которые смотрят на неё в ожидании чуда.

Два тома исследуют не битвы с Титанами, а <em>человеческую цену власти</em>: что происходит с обществом, когда исчезает внешняя поддержка? Кто принимает решения, когда нет командиров? Как выживают люди, которых история не упомянет?`,
    details: [
      { icon: "🗺", label: "Место действия", text: "Изолированный город Утрост между двумя стенами" },
      { icon: "⏱", label: "Период", text: "Параллельно событиям 845–850 годов" },
      { icon: "👤", label: "Главная героиня", text: "Рита Ледер — солдат, ставшая правителем" },
      { icon: "🎭", label: "Жанр", text: "Политическая драма, военная психология" },
    ],
    facts: [
      { title: "Без манга-адаптации", text: "Единственный из крупных ранобе AoT, не получивший манга-адаптации. Это значит, что большинство фанатов о нём просто не знают — незаслуженно." },
      { title: "Лучший политический ранобе серии", text: "Многие поклонники называют «Жестокую хозяйку» самым взрослым и психологически насыщенным спин-оффом — именно потому что он не пытается быть экшеном." },
      { title: "Прямая отсылка к теме власти", text: "Ранобе предвосхищает политические темы 3-го сезона аниме: фальшивое правительство, цена управления, моральные издержки командования." },
    ],
  },
  {
    id: "lost-girls",
    title: "Attack on Titan: Lost Girls",
    titleRu: "Потерянные девочки",
    titleJp: "進撃の巨人 Lost Girls",
    author: "Хироси Сэко",
    illustrator: "Тацуя Кидани",
    years: "2014–2015",
    volumes: "1 том (2 истории)",
    manga: "Манга-адаптация (2015–2017, 3 тома)",
    img: "https://i.ibb.co/Ldjq7hJ2/71-G1-LFRAq-QL-UF1000-1000-QL80.jpg",
    tags: ["Микаса", "Энни", "Психология", "Параллельный мир", "Самая глубокая история"],
    rating: "9.2",
    connection: "Очень высокая — раскрывает двух ключевых персонажей",
    isayama: "Назвал «Wall Sina, Goodbye» одной из лучших историй во вселенной AoT",
    synopsis: `<strong>Два рассказа. Две девочки. Два мира, которые могли бы быть другими.</strong>

<em>«Wall Sina, Goodbye»</em> — история <strong>Энни Леонхарт</strong> накануне её разоблачения. Она получает задание найти пропавшую девушку из богатой семьи в Стохессе. Простое задание. Детективная история. Но пока Энни идёт по следу — мы видим её изнутри: усталую шпионку, которая давно перестала понимать, ради чего живёт. Каждая встреча с обычными людьми обнажает её пустоту. Она сделает всё правильно. Она выполнит задание. И всё равно не почувствует ничего.

<em>«Lost in the Cruel World»</em> — история <strong>Микасы Аккерман</strong>, рассказанная через <em>альтернативную реальность</em>. Что если бы в ту ночь убийцы не пришли? Что если бы Эрен никогда не постучал в дверь? Микаса живёт в параллельном мире — спокойном, мирном, без Титанов, без крови — и чувствует, что что-то не так. Что кого-то не хватает. Что она ждёт кого-то, кого никогда не видела.`,
    details: [
      { icon: "👤", label: "История 1", text: "«Wall Sina, Goodbye» — Энни Леонхарт, детектив" },
      { icon: "👤", label: "История 2", text: "«Lost in the Cruel World» — Микаса в параллельном мире" },
      { icon: "✍", label: "Автор", text: "Хироси Сэко — сценарист аниме AoT (Сезоны 1–4)" },
      { icon: "📚", label: "Адаптация", text: "Манга (2015–2017) + OVA-аниме (2017–2018)" },
    ],
    lostGirlsDeep: {
      annie: {
        title: "Энни в «Wall Sina, Goodbye»: маска без лица",
        text: `Энни Леонхарт в этой истории — <strong>не Женский Титан</strong>. Она просто уставший человек с заданием.

Сэко показывает её через взаимодействие с обычными людьми: торговцем, который мечтает о тихой жизни; девушкой, которая хочет сбежать из золотой клетки богатой семьи. Каждый из них напоминает Энни о том, чего у неё нет — <em>выбора</em>.

Самый важный момент: Энни находит пропавшую. Но вместо того чтобы вернуть её семье — помогает ей сбежать. Это не логично для шпиона. Это не выгодно. Это просто... правильно. Единственный раз, когда Энни делает что-то не по заданию. И именно это делает её человеком.

<strong>Исаяма сказал</strong>, что эта история лучше всего передаёт то, кем была Энни «до того, как всё сломалось».`,
      },
      mikasa: {
        title: "Микаса в «Lost in the Cruel World»: любовь без имени",
        text: `Альтернативная Микаса живёт в мире без Титанов. Она не солдат. Она обычная школьница. Её родители живы. Всё хорошо.

Но что-то не так. Она постоянно чувствует <em>тоску по кому-то</em>, кого не знает. Ей снится красный шарф. Она рисует незнакомое лицо. Она ищет кого-то, кого в этом мире не существует.

Это история о том, что <strong>настоящая связь между людьми существует вне времени и обстоятельств</strong>. Даже в мире, где они никогда не встретились — Микаса чувствует отсутствие Эрена. Это не романтика. Это нечто глубже: <em>два человека, которые были созданы быть рядом</em>.

Финал истории оставляет вопрос открытым: это сон? Видение? Или след другой жизни? Сэко намеренно не отвечает.`,
      },
    },
    facts: [
      { title: "Автор — сценарист аниме", text: "Хироси Сэко писал сценарии для аниме-адаптации AoT. «Lost Girls» — редкий случай, когда человек из команды адаптации создаёт канонический расширенный материал." },
      { title: "OVA по «Wall Sina, Goodbye»", text: "В 2017–2018 годах вышли три OVA-эпизода по истории Энни. Они вошли в Blu-ray издание Сезона 2 и считаются каноном." },
      { title: "Самый высокий рейтинг среди ранобе", text: "По данным MyAnimeList и GoodReads, «Lost Girls» имеет наивысший рейтинг среди всех ранобе и манга-спин-оффов AoT." },
      { title: "Реакция Исаямы", text: "Исаяма публично назвал «Wall Sina, Goodbye» «историей, которую он хотел бы написать сам». Это редкое признание для материала, созданного без его авторства." },
      { title: "Микаса без Эрена — важный эксперимент", text: "«Lost in the Cruel World» — единственное каноническое произведение, где Микаса показана без связи с Эреном. Это позволяет увидеть, кем она является сама по себе — и одновременно доказывает, насколько глубока их связь." },
    ],
  },
  {
    id: "garrison-girl",
    title: "Garrison Girl: An Attack on Titan Novel",
    titleRu: "Девочка из гарнизона",
    titleJp: "進撃の巨人 ガリソンガール",
    author: "Рэйчел Аарон",
    illustrator: "Тацуя Кидани (обложка)",
    years: "2019",
    volumes: "1 том",
    manga: "Нет адаптации",
    img: "https://i.ibb.co/1Y9Q2kgZ/Garrison-Girl.webp" ,
    tags: ["Западный автор", "Оригинальная героиня", "Гарнизон", "Параллельные события"],
    rating: "7.4",
    connection: "Низкая-средняя — параллельные события, оригинальные персонажи",
    isayama: "Проект одобрен Kodansha USA, Исаяма не комментировал лично",
    synopsis: `<strong>Первый — и единственный — официальный англоязычный ранобе AoT.</strong>

<strong>Роза Спрехер</strong> поступает в ряды Гарнизона не из патриотизма, а из расчёта: служба даёт еду, крышу, статус. Она умная, циничная и не собирается умирать ради идеалов. Она просто хочет выжить.

История разворачивается <em>параллельно событиям первого сезона аниме</em>, показывая войну с Титанами глазами рядового гарнизонного солдата — без героизма, без особых сил, без великой судьбы. Только патрулирование, страх, усталость и маленькие победы над собой.

Ранобе задаёт важный вопрос: <em>каково это — быть обычным солдатом в мире, где героями становятся единицы?</em>`,
    details: [
      { icon: "🌍", label: "Издатель", text: "Kodansha USA — первый западный ранобе AoT" },
      { icon: "👤", label: "Главная героиня", text: "Роза Спрехер — циничный рядовой Гарнизона" },
      { icon: "📅", label: "Период", text: "Параллельно Сезону 1 (845–850 годы)" },
      { icon: "🏆", label: "Особенность", text: "Единственный ранобе, написанный западным автором" },
    ],
    facts: [
      { title: "Рэйчел Аарон — не аниме-автор", text: "Аарон известна как автор фэнтезийных серий «Легенды Эли Монпресс» и «Провозвестники». Для неё это первый опыт работы с японской IP. Результат получился неожиданно уважительным к лору." },
      { title: "Точка зрения большинства", text: "В аниме мы видим исключительных людей. «Garrison Girl» — про всех остальных. Про 30 000 солдат Гарнизона, чьи имена история не запомнила." },
      { title: "Смешанные отзывы фандома", text: "Японский фандом принял книгу сдержанно — часть читателей считает западный взгляд на AoT «слишком буквальным». Западный фандом оценил её как отличную точку входа в расширенную вселенную." },
    ],
  },
];

export default function Ranobe({ navigate }) {
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
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rn-fade").forEach((el) =>
      observerRef.current.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="blood-splatter top-left" />

      {/* ── HEADER ── */}
      <section className="char-page-header">
        <div className="container">
          <div className="char-portrait fade-in-up">
            <img
              src="https://i.ibb.co/hJy5qN3m/91-Vl-IW1pn8-L-AC-UF1000-1000-QL80.jpg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/0a0a1a/c0392b?text=Ранобе"; }}
              alt="Ранобе AoT"
            />
            <p className="portrait-caption">Расширенная вселенная · Лайт-новеллы</p>
          </div>
          <div className="char-intro fade-in-up delay-1">
            <p className="breadcrumb">
              <a onClick={() => navigate("home")}>Главная</a> › Вселенная › Ранобе
            </p>
            <h1>Ранобе вселенной AoT</h1>
            <p className="char-subtitle">Before the Fall · Lost Girls · Harsh Mistress · Garrison Girl</p>
            <p className="char-lead">
              Четыре официальных лайт-новеллы расширяют вселенную «Атаки на Титанов» — рассказывая истории, которые манга и аниме не успели охватить. От предыстории УПМ до альтернативных реальностей Микасы и Энни.
            </p>
            <table className="char-meta-table">
              <tbody>
                <tr><td>Новелл всего</td><td>4 основных + спин-оффы</td></tr>
                <tr><td>Авторы</td><td>Судзукадзэ, Сэко, Аарон</td></tr>
                <tr><td>Годы выхода</td><td>2011–2019</td></tr>
                <tr><td>Лучший рейтинг</td><td>Lost Girls — 9.2 / 10</td></tr>
                <tr><td>Адаптации</td><td>3 манги + OVA-аниме</td></tr>
                <tr><td>Статус канона</td><td>Официально одобрены Kodansha</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── NOVELS ── */}
      <section className="char-content" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="char-main">

            {novels.map((novel, idx) => (
              <div key={novel.id} className="article-section rn-fade rn-novel-block">

                {/* TITLE BLOCK */}
                <h2>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  {novel.title}
                </h2>
                <p className="rn-subtitle-line">
                  <em>{novel.titleRu}</em> · <strong>{novel.author}</strong> · {novel.years} · {novel.volumes}
                </p>

                {/* TAGS */}
                <div className="rn-tags">
                  {novel.tags.map((t) => (
                    <span className="rn-tag" key={t}>{t}</span>
                  ))}
                  <span className="rn-rating">★ {novel.rating}</span>
                </div>

                {/* IMAGE + SYNOPSIS */}
                <div className="rn-main-grid">
                  <div className="rn-cover-wrap">
                    <img
                      src={novel.img}
                      alt={novel.title}
                      className="rn-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/200x300/111/c0392b?text=${encodeURIComponent(novel.titleRu)}`;
                      }}
                    />
                    <div className="rn-cover-meta">
                      <div className="rn-meta-row"><span>Автор</span><span>{novel.author}</span></div>
                      <div className="rn-meta-row"><span>Иллюстратор</span><span>{novel.illustrator}</span></div>
                      <div className="rn-meta-row"><span>Томов</span><span>{novel.volumes}</span></div>
                      <div className="rn-meta-row"><span>Манга</span><span>{novel.manga}</span></div>
                      <div className="rn-meta-row rn-meta-connection"><span>Связь с каноном</span><span>{novel.connection}</span></div>
                    </div>
                  </div>

                  <div className="rn-synopsis">
                    <p className="rn-synopsis-label">Синопсис</p>
                    <div
                      className="rn-synopsis-text"
                      dangerouslySetInnerHTML={{ __html: novel.synopsis.replace(/\n\n/g, "</p><p>") }}
                    />
                  </div>
                </div>

                {/* DETAILS GRID */}
                <div className="rn-details-grid">
                  {novel.details.map((d) => (
                    <div className="rn-detail-card" key={d.label}>
                      <span className="rn-detail-icon">{d.icon}</span>
                      <span className="rn-detail-label">{d.label}</span>
                      <p className="rn-detail-text">{d.text}</p>
                    </div>
                  ))}
                </div>

                {/* LOST GIRLS DEEP DIVE */}
                {novel.lostGirlsDeep && (
                  <div className="rn-deep-dive">
                    <p className="rn-deep-title">⚡ Подробный разбор: Lost Girls</p>
                    <div className="rn-deep-grid">
                      <div className="rn-deep-card rn-deep-annie">
                        <p className="rn-deep-card-title">{novel.lostGirlsDeep.annie.title}</p>
                        <div
                          className="rn-deep-text"
                          dangerouslySetInnerHTML={{ __html: novel.lostGirlsDeep.annie.text.replace(/\n\n/g, "</p><p>") }}
                        />
                      </div>
                      <div className="rn-deep-card rn-deep-mikasa">
                        <p className="rn-deep-card-title">{novel.lostGirlsDeep.mikasa.title}</p>
                        <div
                          className="rn-deep-text"
                          dangerouslySetInnerHTML={{ __html: novel.lostGirlsDeep.mikasa.text.replace(/\n\n/g, "</p><p>") }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ISAYAMA REACTION */}
                <div className="rn-isayama-block">
                  <span className="rn-isayama-icon">✏</span>
                  <div>
                    <p className="rn-isayama-label">Реакция Исаямы</p>
                    <p className="rn-isayama-text">{novel.isayama}</p>
                  </div>
                </div>

                {/* FACTS */}
                <p className="rn-facts-title">Интересные факты</p>
                <div className="mil-members-list">
                  {novel.facts.map((f) => (
                    <div className="mil-member-row" key={f.title}>
                      <div className="mil-member-head">
                        <span className="mil-member-name">{f.title}</span>
                      </div>
                      <p className="mil-member-desc">{f.text}</p>
                    </div>
                  ))}
                </div>

              </div>
            ))}

            {/* COMPARISON TABLE */}
            <div className="article-section rn-fade">
              <h2><span>05</span>Сравнение всех ранобе</h2>
              <div style={{ overflowX: "auto" }}>
                <table className="rn-compare-table">
                  <thead>
                    <tr>
                      <th>Ранобе</th>
                      <th>Рейтинг</th>
                      <th>Манга</th>
                      <th>Аниме</th>
                      <th>Связь с каноном</th>
                      <th>Для кого</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Before the Fall</strong></td>
                      <td>8.1</td>
                      <td>✅ 18 томов</td>
                      <td>❌</td>
                      <td>Высокая</td>
                      <td>Любители лора и приквелов</td>
                    </tr>
                    <tr>
                      <td><strong>Harsh Mistress</strong></td>
                      <td>7.8</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>Средняя</td>
                      <td>Ценители политической драмы</td>
                    </tr>
                    <tr>
                      <td><strong>Lost Girls</strong></td>
                      <td>9.2</td>
                      <td>✅ 3 тома</td>
                      <td>✅ OVA</td>
                      <td>Очень высокая</td>
                      <td>Все — особенно фанаты Микасы и Энни</td>
                    </tr>
                    <tr>
                      <td><strong>Garrison Girl</strong></td>
                      <td>7.4</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>Низкая-средняя</td>
                      <td>Западный фандом, новички</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* С ЧЕГО НАЧАТЬ */}
            <div className="article-section rn-fade">
              <h2><span>06</span>С чего начать читать?</h2>
              <div className="rn-start-grid">
                <div className="rn-start-card">
                  <span className="rn-start-num">01</span>
                  <p className="rn-start-title">Если вы новичок во вселенной</p>
                  <p className="rn-start-text">Начните с <strong>Garrison Girl</strong> — она доступнее всего написана и не требует глубокого знания лора. Хороший вход.</p>
                </div>
                <div className="rn-start-card">
                  <span className="rn-start-num">02</span>
                  <p className="rn-start-title">Если хотите лучшее</p>
                  <p className="rn-start-text">Читайте <strong>Lost Girls</strong>. Без вопросов. Это вершина спин-офф литературы AoT по глубине и эмоциональному воздействию.</p>
                </div>
                <div className="rn-start-card">
                  <span className="rn-start-num">03</span>
                  <p className="rn-start-title">Если любите лор и историю мира</p>
                  <p className="rn-start-text"><strong>Before the Fall</strong> — ваш выбор. Узнайте, как появилось УПМ, и познакомьтесь с миром за 70 лет до Эрена.</p>
                </div>
                <div className="rn-start-card">
                  <span className="rn-start-num">04</span>
                  <p className="rn-start-title">Если любите политику и психологию</p>
                  <p className="rn-start-text"><strong>Harsh Mistress</strong> — недооценённый шедевр. Нет экшена, но есть честный разговор о власти и цене командования.</p>
                </div>
              </div>
            </div>

            <div className="char-nav fade-in-up" style={{ marginTop: "40px" }}>
              <a onClick={() => navigate("manga")}>Манга</a>
              <a onClick={() => navigate("home")}>Главная</a>
              <a onClick={() => navigate("series")}>Серии аниме</a>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="char-sidebar">
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Рейтинги ранобе</h3>
              {[["Lost Girls","9.2 / 10"],["Before the Fall","8.1 / 10"],["Harsh Mistress","7.8 / 10"],["Garrison Girl","7.4 / 10"]].map(([l,v])=>(
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Авторы</h3>
              {[["Before the Fall","Рё Судзукадзэ"],["Harsh Mistress","Рё Судзукадзэ"],["Lost Girls","Хироси Сэко"],["Garrison Girl","Рэйчел Аарон"]].map(([l,v])=>(
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Адаптации</h3>
              {[["Before the Fall","Манга (18 томов)"],["Lost Girls","Манга + OVA"],["Harsh Mistress","—"],["Garrison Girl","—"]].map(([l,v])=>(
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>
            <div className="sidebar-card fade-in-up delay-3">
              <h3>Навигация</h3>
              <div className="sidebar-stat"><a onClick={() => navigate("manga")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}>→ Манга</a></div>
              <div className="sidebar-stat"><a onClick={() => navigate("series")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}>→ Серии аниме</a></div>
              <div className="sidebar-stat"><a onClick={() => navigate("studio")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}>→ Студии</a></div>
              <div className="sidebar-stat"><a onClick={() => navigate("home")} style={{color:"var(--red-light)",textDecoration:"none",fontSize:".85rem",cursor:"pointer"}}>← Главная</a></div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama · Kodansha</p>
        </div>
      </footer>
    </>
  );
}