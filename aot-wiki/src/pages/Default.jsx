import { useEffect } from "react";
import { useFadeIn } from "../hooks/useAnimations";

export default function GamesAoT({ navigate }) {
  useFadeIn();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // ─── PART 1: Game mechanics & popularity ───────────────────────────────────
  const gameMechanics = [
    {
      icon: "⚔️",
      label: "УПМ-система (ODM Gear)",
      desc: "<strong>Трёхмерное манёвренное снаряжение</strong> — основа геймплея. Игрок стреляет крюками в здания и деревья, летит на высокой скорости, использует газовые баллоны для ускорения. Цель — подлететь к нужной точке на шее Титана и нанести удар. Система требует постоянной тренировки и создаёт <em>уникальное ощущение скорости</em>, редкое в других играх.",
    },
    {
      icon: "🎯",
      label: "Удар по нужной точке",
      desc: "Слабое место Титана — <strong>затылок</strong>. Чтобы убить его, нужно зайти сзади, набрать скорость, точно прицелиться и нанести удар клинками. Промах — и крюк отцепляется, персонаж падает. Это требует <em>точного тайминга и чтения движений врага</em>. Боссы (Колоссальный, Бронированный) имеют дополнительные уязвимые точки.",
    },
    {
      icon: "🗡️",
      label: "Лезвия и ресурсы",
      desc: "Лезвия <strong>ломаются от использования</strong> — их нужно менять в бою. Газ заканчивается — нужно пополнять на специальных станциях. Система добавляет <em>тактическое давление</em>: нельзя бесконечно атаковать. В некоторых играх серии можно улучшать снаряжение, увеличивая ёмкость газовых баллонов или прочность лезвий.",
    },
    {
      icon: "🤝",
      label: "Кооперативные атаки",
      desc: "В <em>Attack on Titan 2</em> введена система <strong>командных атак</strong>. Игрок может призвать союзника-NPC для совместного удара по Титану — это повышает урон и добавляет зрелищность. Некоторые боссы практически непобедимы в одиночку: ключ — координация с напарниками.",
    },
    {
      icon: "📊",
      label: "Система прокачки",
      desc: "Между миссиями открывается меню развития персонажа. <strong>Тренировки, выполнение заданий, убийство Титанов</strong> — всё приносит очки, которые тратятся на улучшение скорости полёта, силы удара, запаса газа и прочности лезвий. Есть и пассивные способности: например, <em>«Ощущение присутствия» Леви</em> — увеличение зоны восприятия врагов.",
    },
    {
      icon: "🏰",
      label: "Защита базы",
      desc: "Ряд миссий — не охота, а <strong>оборона объектов</strong>. Нужно не допустить, чтобы Титаны добрались до ворот, пушек или гражданских. Это меняет геймплей: вместо свободной охоты — постоянное переключение между угрозами, приоритизация целей. В этих миссиях особенно важны <em>быстрая перезарядка и управление ресурсами</em>.",
    },
    {
      icon: "🎮",
      label: "Играбельные персонажи",
      desc: "В <em>Attack on Titan 2</em> доступно <strong>более 30 персонажей</strong> из аниме. У каждого уникальные характеристики: Леви — максимальная скорость и урон; Микаса — баланс скорости и силы; Армин — низкие боевые показатели, но уникальные командные способности. DLC добавляет персонажей из поздних сезонов.",
    },
    {
      icon: "🌍",
      label: "Открытые карты",
      desc: "<em>Final Battle</em> (DLC к AoT 2) добавила <strong>карты за пределами Стен</strong> — Марлию, её города и форты. Это первое появление внешнего мира в серии игр. Враги изменились: теперь это не просто Титаны, но и <em>воины Марлии с УПМ-снаряжением</em>, которые ведут себя как игрок.",
    },
  ];

  const isayamaRole = [
    {
      name: "Консультант по канону",
      desc: "Исаяма <strong>консультировал команду Omega Force</strong> при разработке первой части. Основная задача — следить за тем, чтобы игра не противоречила событиям манги. Он проверял сценарий оригинальных миссий и одобрял добавление новых диалогов для персонажей.",
    },
    {
      name: "Оригинальные сцены в AoT 1",
      desc: "Первая игра содержит несколько <strong>сцен, написанных специально для неё</strong> — с одобрения Исаямы. Это не просто «игра по мотивам»: некоторые диалоги между персонажами расширяют то, что в аниме показано вскользь. Фанаты ценят их как <em>неофициальную, но авторизованную дополнительную историю</em>.",
    },
    {
      name: "Дизайн Титанов",
      desc: "Исаяма предоставил Koei Tecmo <strong>оригинальные эскизы</strong> процедурно генерируемых Титанов — тех, что появляются как рядовые враги. В манге рядовые Титаны имеют одинаковую механику, но разную внешность; игра расширила эту систему, создав сотни вариаций на основе авторских принципов.",
    },
    {
      name: "Ограничения по спойлерам",
      desc: "На момент выхода первой игры (2016) манга ещё не завершилась. Исаяма <strong>запретил разработчикам использовать события после Сезона 2</strong> как основной контент — чтобы не спойлерить читателей. Это объясняет, почему сюжет первой игры охватывает только первые два сезона.",
    },
    {
      name: "Final Battle и правда о мире",
      desc: "DLC <em>Final Battle</em> (2019) вышло уже после того, как аниме показало Марлию. Исаяма <strong>дал разрешение на использование событий Сезона 3</strong> и консультировал лично сцены, связанные с Грумой и вторжением в Либерио. По словам продюсера, это была <em>«наиболее полная версия участия Исаямы»</em> в серии.",
    },
    {
      name: "Реакция автора на игры",
      desc: "В интервью 2013 года, ещё до выхода первой игры, Исаяма сказал: <em>«Я всегда хотел, чтобы УПМ-система стала основой игры. Я рад, что кто-то наконец это сделал»</em>. После выхода первой части он публично <strong>рекомендовал её фанатам</strong> — редкое прямое одобрение со стороны мангаки.",
    },
  ];

  // ─── PART 2: Story moments & characters ───────────────────────────────────
  const storyMoments = [
    {
      num: "01",
      season: "Сезон 1",
      title: "Эрен узнаёт правду о себе — первое превращение",
      desc: "В игре сцена превращения Эрена в Атакующего Титана воссоздана <strong>максимально близко к аниме</strong>. Игрок переживает момент от третьего лица: Эрен кричит, трансформация происходит на улицах Трости. Это ключевой момент первой игры — геймплей меняется, и впервые игроку дают управлять Титаном.",
      manga_moment: "В манге это происходит так же резко и без объяснений. Исаяма намеренно не даёт Эрену (и читателю) времени осознать происходящее.",
      game_moment: "Игра добавляет <em>тактильное ощущение трансформации</em>: QTE-механика, вибрация контроллера, смена перспективы. То, что в аниме длилось секунды — в игре ощущается как кульминация.",
      img: "https://i.ibb.co/pBM8qn4F/Eren-Jaeger-29-character-image-29.webp",
      color: "#c0392b",
    },
    {
      num: "02",
      season: "Сезон 1",
      title: "Микаса думает, что Эрен мёртв — объятие",
      desc: "После того как Микаса решает, что Эрен погиб в желудке Титана — одна из самых эмоциональных сцен первого сезона. <strong>Игра воспроизводит её через кат-сцену</strong>, где Микаса обнимает вернувшегося Эрена. Этот момент в игре сопровождается знакомой музыкой из аниме.",
      manga_moment: "В манге Микаса демонстрирует редкую эмоциональную уязвимость — её обычно холодное лицо меняется. Это момент, объясняющий всю её линию.",
      game_moment: "Игра воссоздаёт объятие как <em>статичную, но детальную кат-сцену</em>. Микаса в её игровом воплощении сохраняет все эмоциональные нюансы оригинала — это одна из лучших адаптированных сцен в серии.",
      img: "https://i.ibb.co/k2s09z7j/Mikasa-Ackermann-29-character-image-29.webp",
      color: "#f43f5e",
    },
    {
      num: "03",
      season: "Сезон 1",
      title: "Леви vs Женский Титан — лес Стохесс",
      desc: "Бой Леви с Женским Титаном — <strong>самый технически сложный момент первой игры</strong>. Аниме-версия этой схватки стала одной из самых цитируемых в истории жанра. Игра предлагает сыграть за Леви и самостоятельно воспроизвести серию молниеносных ударов.",
      manga_moment: "В манге Леви атакует Женского Титана с хирургической точностью — это первый момент, когда читатель понимает, насколько он отличается от остальных.",
      game_moment: "<em>Режим «скоростной атаки»</em> Леви — уникальная механика, доступная только этому персонажу. В этой миссии игрок обязан использовать её на полную катушку, иначе Титан регенерирует быстрее, чем наносится урон.",
      img: "https://i.ibb.co/gCJqNZn/thumb-1920-375291.jpg",
      color: "#38bdf8",
    },
    {
      num: "04",
      season: "Сезон 1",
      title: "Арнольд Леонарт — раскрытие личности Энни",
      desc: "Момент, когда Арнин понимает, что <strong>Энни — Женский Титан</strong>, воссоздан в игре через диалог и последующую трансформацию. Сцена финального боя с Энни в Стохессе — одна из самых атмосферных в первой части. Ледяной кокон воспроизведён как визуальный эффект финальной кат-сцены.",
      manga_moment: "Армин принимает решение солгать Энни, чтобы вывести её на чистую воду — это первое проявление его «тёмной стороны», которая раскроется в финале.",
      game_moment: "Финальная битва с Женским Титаном — <em>полноценный босс-файт</em> с несколькими фазами. После ледяного кокона миссия завершается кат-сценой, идентичной аниме.",
      img: "https://i.ibb.co/HDB3XD6Y/35e70a6893a30c7ea2b68d73a42fbd61.jpg",
      color: "#8e44ad",
    },
    {
      num: "05",
      season: "Сезон 2",
      title: "Райнер и Бертольт раскрывают себя",
      desc: "«<strong>Я — Бронированный Титан. Он — Колоссальный.</strong>» — одна из самых шокирующих сцен в истории аниме. В игре этот момент воспроизведён с максимальным вниманием к диалогу. После кат-сцены начинается немедленный бой с Бронированным Титаном.",
      manga_moment: "В манге Райнер произносит эти слова почти апатично — как человек, давно сломленный раздвоением личности. Это не злодейское признание, это исповедь уставшего человека.",
      game_moment: "Игра добавляет к этому моменту <em>интерактивность</em>: после шока персонажей начинается битва, где Эрен сражается сразу с двумя Прародителями. Это технически самый сложный боссовый эпизод первой игры.",
      img: "https://i.ibb.co/N2hyx1B4/Zeke-Jaeger-29-character-image.webp",
      color: "#d4ac0d",
    },
    {
      num: "06",
      season: "Сезон 2",
      title: "Леви спасает Эрена — битва с Бронированным Титаном",
      desc: "После захвата Эрена Райнером начинается <strong>погоня и бой на открытой местности</strong>. Леви, Микаса и команда атакуют Бронированного Титана. Игра позволяет сыграть за нескольких персонажей в этой миссии, переключаясь между Леви и Микасой.",
      manga_moment: "В манге Микаса бросается атаковать в одиночку, не дожидаясь команды — это её момент, где чувства берут верх над тактикой.",
      game_moment: "Миссия разделена на <em>два акта</em>: сначала погоня за Райнером через лес, затем полноценная атака на Бронированного Титана командой. Система кооперативных ударов впервые становится обязательной для победы.",
      img: "https://i.ibb.co/tw0bbHKn/Mikasa-Ackerman-character-image-29.webp",
      color: "#f43f5e",
    },
    {
      num: "07",
      season: "Сезон 3",
      title: "Смерть Эрвина — атака Шиганшины",
      desc: "Финальная атака Эрвина во главе отряда Разведчиков — <strong>один из самых эмоциональных моментов в игре</strong>. Его речь перед Звероподобным Титаном воссоздана полностью. Игрок управляет Леви и должен добраться до Зика, пока Эрвин ведёт солдат в последнюю атаку.",
      manga_moment: "В манге речь Эрвина — манипуляция. Он использует боль и отчаяние солдат как оружие. Леви видит это — и всё равно выполняет план.",
      game_moment: "Это <em>хронометрированная миссия</em> — нужно добраться до Зика за ограниченное время, пока Эрвин держит линию. Смерть Эрвина наступает в кат-сцене независимо от действий игрока — и это правильное геймдизайнерское решение.",
      img: "https://i.ibb.co/4Rv4X5F2/i-thought-erwin-was-armoured-titan-v0-gvfqfoi088vc1.webp",
      color: "#d4ac0d",
    },
    {
      num: "08",
      season: "Сезон 3",
      title: "Армин vs Колоссальный Титан — жертва",
      desc: "Армин приманивает Колоссального Титана, зная, что его сожгут заживо. <strong>Эта миссия — одна из самых атмосферных в AoT 2</strong>. Игрок управляет Арминым на парусном судне, а Берт — Колоссальный — надвигается. Затем переключение на Эрена и удар по Берту внутри Титана.",
      manga_moment: "Армин в манге принимает это решение в полной тишине. Никакого пафоса. Только расчёт и готовность умереть.",
      game_moment: "Игра разделяет эту сцену на <em>две управляемые части</em>: сначала финт Армина (уклонение от атак Титана), затем атака Эрена изнутри. Момент извлечения обугленного Армина воссоздан в финальной кат-сцене главы.",
      img: "https://i.ibb.co/JW5bMxhw/Armin-Arlelt-29-character-image-29.webp",
      color: "#e67e22",
    },
  ];

  const characters = [
    {
      name: "Леви Аккерман",
      role: "Капитан Разведчиков",
      color: "#38bdf8",
      img: "https://i.ibb.co/gCJqNZn/thumb-1920-375291.jpg",
      stats: [
        ["Скорость", "S"],
        ["Атака", "S"],
        ["Защита", "C"],
        ["Сложность", "Высокая"],
      ],
      desc: "Самый сильный боевой персонаж в обеих играх. <strong>Уникальная механика — скоростная атака</strong>: Леви наносит серию из 8–12 ударов подряд, не теряя импульса. Его единственный минус — низкий запас здоровья. Рекомендован только опытным игрокам.",
    },
    {
      name: "Микаса Аккерман",
      role: "Солдат 104-го отряда",
      color: "#f43f5e",
      img: "https://i.ibb.co/k2s09z7j/Mikasa-Ackermann-29-character-image-29.webp",
      stats: [
        ["Скорость", "A"],
        ["Атака", "A"],
        ["Защита", "B"],
        ["Сложность", "Средняя"],
      ],
      desc: "Лучший выбор для универсального прохождения. <strong>Баланс всех характеристик</strong> делает её эффективной в любой ситуации. Специальная способность — <em>«Инстинкт»</em>: кратковременное ускорение при получении урона.",
    },
    {
      name: "Эрен Йегер",
      role: "Солдат / Атакующий Титан",
      color: "#c0392b",
      img: "https://i.ibb.co/pBM8qn4F/Eren-Jaeger-29-character-image-29.webp",
      stats: [
        ["Скорость", "B"],
        ["Атака", "B+"],
        ["Защита", "B"],
        ["Сложность", "Низкая"],
      ],
      desc: "Протагонист и лучший персонаж для начинающих. <strong>Способность к трансформации в Титана</strong> — уникальна для него. В режиме Титана меняется весь геймплей: крюки не нужны, атаки наносятся кулаками.",
    },
    {
      name: "Армин Арлерт",
      role: "Стратег Разведчиков",
      color: "#e67e22",
      img: "https://i.ibb.co/JW5bMxhw/Armin-Arlelt-29-character-image-29.webp",
      stats: [
        ["Скорость", "C"],
        ["Атака", "C"],
        ["Защита", "C"],
        ["Сложность", "Высокая"],
      ],
      desc: "Технически слабейший боевой персонаж — <strong>но сильнейший в командной игре</strong>. Его особая способность усиливает союзников в радиусе. В миссиях с защитой базы он фактически незаменим.",
    },
    {
      name: "Эрвин Смит",
      role: "Командующий Разведчиков",
      color: "#d4ac0d",
      img: "https://i.ibb.co/4Rv4X5F2/i-thought-erwin-was-armoured-titan-v0-gvfqfoi088vc1.webp",
      stats: [
        ["Скорость", "B"],
        ["Атака", "B"],
        ["Защита", "A"],
        ["Сложность", "Средняя"],
      ],
      desc: "Командир с <strong>высоким показателем защиты</strong> и уникальной способностью — <em>«Тактический приказ»</em>: временное усиление всех союзников в миссии. Доступен в AoT 2 и Final Battle DLC.",
    },
    {
      name: "Энни Леонарт",
      role: "Женский Титан / Воин",
      color: "#8e44ad",
      img: "https://i.ibb.co/HDB3XD6Y/35e70a6893a30c7ea2b68d73a42fbd61.jpg",
      stats: [
        ["Скорость", "A"],
        ["Атака", "A"],
        ["Защита", "B"],
        ["Сложность", "Средняя"],
      ],
      desc: "Доступна как играбельный персонаж в <em>AoT 2: Final Battle</em>. <strong>Трансформация в Женского Титана</strong> — её особая способность. В режиме Титана имеет уникальные кристаллические атаки.",
    },
    {
      name: "Райнер Браун",
      role: "Бронированный Титан / Воин",
      color: "#27ae60",
      img: "https://i.ibb.co/N2hyx1B4/Zeke-Jaeger-29-character-image.webp",
      stats: [
        ["Скорость", "C"],
        ["Атака", "A"],
        ["Защита", "S"],
        ["Сложность", "Низкая"],
      ],
      desc: "Доступен в <em>Final Battle DLC</em>. <strong>Трансформация в Бронированного Титана</strong> — высочайший показатель защиты в игре. Медленный, но практически неуязвимый в режиме Титана. Идеален для миссий обороны.",
    },
    {
      name: "Бертольт Хувер",
      role: "Колоссальный Титан / Воин",
      color: "#e67e22",
      img: "https://i.ibb.co/JjgNdBmj/grishas-pov-of-the-day-he-stole-the-founding-titan-v0-gh3g59j6ssvc1.webp",
      stats: [
        ["Скорость", "D"],
        ["Атака", "S"],
        ["Защита", "B"],
        ["Сложность", "Высокая"],
      ],
      desc: "Самая мощная атака в игре — <strong>взрыв пара при трансформации</strong>. В режиме Колоссального Титана наносит урон по площади, но крайне медленен. В человеческом облике — средний боец с высоким потенциалом.",
    },
  ];

  return (
    <>
      <div className="noise-overlay" />
      <div className="blood-splatter top-left" />

      {/* ── HEADER ── */}
      <section className="char-page-header">
        <div className="container">
          <div className="char-portrait fade-in-up">
            <img
              src="https://i.ibb.co/qLnwdN7y/2c13434bf174e326c8dcdf9692661876.jpg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/0a0a0a/c0392b?text=AoT+Games"; }}
              alt="Attack on Titan Games"
            />
            <p className="portrait-caption">Attack on Titan / A.O.T. Wings of Freedom · A.O.T. 2 · Final Battle · Koei Tecmo / Omega Force</p>
          </div>
          <div className="char-intro fade-in-up delay-1">
            <p className="breadcrumb">
              <a onClick={() => navigate("home")}>Главная</a> › Игры › Attack on Titan
            </p>
            <h1>Игры Attack on Titan</h1>
            <p className="char-subtitle">Wings of Freedom · AoT 2 · Final Battle · Механика · История · Персонажи</p>
            <p className="char-lead">
              <strong>«Attack on Titan / A.O.T. Wings of Freedom»</strong> (2016) и <strong>«A.O.T. 2»</strong> (2018) — серия игр от Koei Tecmo и Omega Force, разработанная в жанре <em>action hack-and-slash</em> с уникальной системой трёхмерного манёвренного снаряжения. Исаяма лично консультировал разработку, одобрял сценарии и рекомендовал игры фанатам.
            </p>
            <table className="char-meta-table">
              <tbody>
                <tr><td>Разработчик</td><td>Koei Tecmo / Omega Force</td></tr>
                <tr><td>Первая часть</td><td>A.O.T. Wings of Freedom · 2016</td></tr>
                <tr><td>Вторая часть</td><td>Attack on Titan 2 · 2018</td></tr>
                <tr><td>DLC</td><td>Final Battle · 2019 · Сезон 3 + Марлия</td></tr>
                <tr><td>Платформы</td><td>PS4, Xbox One, Switch, PC (Steam)</td></tr>
                <tr><td>Участие Исаямы</td><td>Консультант · оригинальные сцены · одобрение</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="char-content">
        <div className="container">
          <div className="char-main">

            {/* ══ ЧАСТЬ 1 ══ */}
            <div className="article-section fade-in-up" style={{ borderTop: "3px solid var(--red)", paddingTop: "2rem", marginBottom: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "var(--red)", color: "#fff", padding: "0.3rem 1rem", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-display)" }}>Часть I</div>
                <h2 style={{ margin: 0, borderBottom: "none" }}>Механика, популярность и роль Исаямы</h2>
              </div>
            </div>

            {/* 00 — Механика */}
            <div className="article-section fade-in-up">
              <h2><span>00</span>Игровая механика: как работает УПМ-система</h2>
              <div className="article-img-banner">
                <img
                  src="https://i.ibb.co/Dg9xPjQQ/ars5nrog0y951.png"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x300/0a0a0a/c0392b?text=УПМ+геймплей"; }}
                  alt="УПМ геймплей"
                />
                <div className="article-img-caption">Трёхмерная манёвренность — основа всего геймплея серии</div>
              </div>
              <p>
                Серия игр Attack on Titan построена вокруг <strong>одной принципиальной идеи</strong>: дать игроку ощущение того, каково это — летать между домами и деревьями на крюках, нестись к Титану и наносить точный удар по затылку. Omega Force реализовала эту систему так, что она стала <em>не похожа ни на одну другую игровую механику</em>.
              </p>
              <div className="mil-upm-specs">
                {gameMechanics.map((s) => (
                  <div className="mil-spec-card" key={s.label}>
                    <span className="mil-spec-icon">{s.icon}</span>
                    <span className="mil-spec-label">{s.label}</span>
                    <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                  </div>
                ))}
              </div>
            </div>

            {/* 01 — Популярность */}
            <div className="article-section fade-in-up">
              <h2><span>01</span>Популярность серии: цифры и признание</h2>
              <div className="mil-members-list">
                {[
                  { name: "Продажи Wings of Freedom", desc: "Первая часть продалась тиражом <strong>более 700 000 копий</strong> в первый месяц на японском рынке — неожиданно высокий результат для нишевого аниме-тайтла. В Северной Америке и Европе общие продажи превысили <strong>1,5 миллиона копий</strong> к 2018 году. Steam-версия стала одной из самых продаваемых аниме-игр платформы того периода." },
                  { name: "Attack on Titan 2 и Final Battle", desc: "Вторая часть при запуске стала <strong>«самой быстро продающейся аниме-игрой Koei Tecmo»</strong> на тот момент. DLC Final Battle добавило контент Сезона 3 и <em>значительно расширило число играбельных персонажей</em> — это продлило жизнь игры на несколько лет. Совокупные продажи серии к 2021 году превысили <strong>4 миллиона копий</strong>." },
                  { name: "Критический приём", desc: "Игры серии получили <strong>смешанные оценки критиков</strong> (6–7 из 10 в среднем), но крайне высокие оценки от фанатов аниме (8–9 из 10). Главная претензия критиков — однообразие геймплея и слабый сюжетный режим. Фанаты, напротив, ценили именно <em>верность оригинальному тону</em> и качество воссозданных сцен." },
                  { name: "Пользовательские оценки", desc: "На Metacritic пользовательские оценки обеих игр стабильно выше критических — <strong>8.0–8.5</strong>. На Steam Wings of Freedom имеет статус «Крайне положительных» отзывов с более чем 10 000 рецензий. Чаще всего в отзывах упоминается: <em>«лучшая реализация УПМ-системы в любой игре»</em>." },
                  { name: "Влияние на аниме-игры", desc: "Серия AoT повлияла на подход к аниме-адаптациям в целом. После её успеха несколько студий заявили о намерении делать <strong>«механически уникальные»</strong> аниме-игры, а не просто визуальные новеллы или арена-файтеры. Игры показали, что <em>фирменная механика аниме-вселенной может стать основой геймплея</em>." },
                ].map((f) => (
                  <div className="mil-member-row" key={f.name}>
                    <div className="mil-member-head"><span className="mil-member-name">{f.name}</span></div>
                    <p className="mil-member-desc" dangerouslySetInnerHTML={{ __html: f.desc }} />
                  </div>
                ))}
              </div>
            </div>

            {/* 02 — Исаяма */}
            <div className="article-section fade-in-up">
              <h2><span>02</span>Роль Исаямы в разработке</h2>
              <div className="article-img-banner">
                <img
                  src="https://i.ibb.co/yFsdWcxt/static-assets-upload13010327151982399829.webp"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x300/0a0a0a/e67e22?text=Хадзимэ+Исаяма"; }}
                  alt="Хадзимэ Исаяма"
                />
                <div className="article-img-caption">Хадзимэ Исаяма — консультант, одобривший игры и рекомендовавший их фанатам</div>
              </div>
              <p>
                Участие Исаямы в разработке игр серии <strong>значительно глубже, чем стандартное лицензирование</strong>. Автор не просто разрешил использовать своих персонажей — он активно влиял на ключевые решения.
              </p>
              <div className="mil-members-list">
                {isayamaRole.map((f) => (
                  <div className="mil-member-row" key={f.name}>
                    <div className="mil-member-head"><span className="mil-member-name">{f.name}</span></div>
                    <p className="mil-member-desc" dangerouslySetInnerHTML={{ __html: f.desc }} />
                  </div>
                ))}
              </div>
            </div>

            {/* ══ ЧАСТЬ 2 ══ */}
            <div className="article-section fade-in-up" style={{ borderTop: "3px solid #3498db", paddingTop: "2rem", marginBottom: "0.5rem", marginTop: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "#3498db", color: "#fff", padding: "0.3rem 1rem", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-display)" }}>Часть II</div>
                <h2 style={{ margin: 0, borderBottom: "none" }}>Сюжет, ключевые моменты и персонажи</h2>
              </div>
            </div>

            {/* 03 — Ключевые моменты */}
            <div className="article-section fade-in-up">
              <h2><span>03</span>Восемь ключевых моментов в игре: Сезоны 1–3</h2>
              <p>
                Игра адаптирует события первых трёх сезонов аниме. Одни сцены воспроизведены почти дословно — другие <strong>переосмыслены через интерактивность</strong>. Вот самые значимые.
              </p>

              {storyMoments.map((s) => (
                <div key={s.num} style={{ marginBottom: "3rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "1.5rem", alignItems: "start", marginBottom: "1.2rem" }}>
                    <div style={{ position: "relative", overflow: "hidden", borderRadius: "6px", border: `1px solid ${s.color}40` }}>
                      <img
                        src={s.img}
                        alt={s.title}
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/180x260/0d0d0d/888?text=${s.num}`; }}
                        style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                      <div style={{ position: "absolute", top: 0, left: 0, background: s.color, color: "#fff", padding: "3px 10px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em" }}>{s.season}</div>
                    </div>
                    <div>
                      <div style={{ borderLeft: `4px solid ${s.color}`, paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                        <span style={{ fontSize: "0.65rem", color: s.color, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.num}</span>
                        <h3 style={{ color: "var(--text)", fontFamily: "var(--font-display)", fontSize: "1rem", margin: "0.2rem 0 0", letterSpacing: "0.04em" }}>{s.title}</h3>
                      </div>
                      <p style={{ fontSize: "0.87rem", lineHeight: 1.7, color: "var(--text-muted, #ccc)", marginBottom: "0.8rem" }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                    </div>
                  </div>

                  <div className="mil-commanders-grid">
                    <div className="mil-commander-card" style={{ borderLeftColor: "#666" }}>
                      <span className="mil-cmd-num" style={{ color: "#aaa" }}>📖</span>
                      <span className="mil-cmd-name">В манге / аниме</span>
                      <p className="mil-cmd-info">{s.manga_moment}</p>
                    </div>
                    <div className="mil-commander-card" style={{ borderLeftColor: s.color }}>
                      <span className="mil-cmd-num" style={{ color: s.color }}>🎮</span>
                      <span className="mil-cmd-name">В игре</span>
                      <p className="mil-cmd-info" dangerouslySetInnerHTML={{ __html: s.game_moment }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 04 — Персонажи */}
            <div className="article-section fade-in-up">
              <h2><span>04</span>Играбельные персонажи: характеристики и особенности</h2>
              <p>
                В <em>AoT 2: Final Battle</em> доступно более 30 персонажей. Вот ключевые — с игровыми характеристиками и описанием уникальных механик.
              </p>

              {characters.map((c) => (
                <div key={c.name} style={{ marginBottom: "2.5rem" }}>
                  <div style={{ borderLeft: `4px solid ${c.color}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                    <h3 style={{ color: c.color, fontFamily: "var(--font-display)", fontSize: "1.05rem", margin: 0, letterSpacing: "0.06em" }}>{c.name}</h3>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-dim, #888)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.role}</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "1.2rem", alignItems: "start" }}>
                    <div style={{ position: "relative", overflow: "hidden", borderRadius: "6px", border: `1px solid ${c.color}30` }}>
                      <img
                        src={c.img}
                        alt={c.name}
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/160x220/0d0d0d/888?text=${encodeURIComponent(c.name)}`; }}
                        style={{ width: "100%", height: "220px", objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                        {c.stats.map(([label, val]) => (
                          <div key={label} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${c.color}30`, borderRadius: "4px", padding: "4px 10px", textAlign: "center" }}>
                            <div style={{ fontSize: "0.6rem", color: "var(--text-dim, #888)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
                            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: c.color, fontFamily: "var(--font-display)" }}>{val}</div>
                          </div>
                        ))}
                      </div>
                      <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "var(--text-muted, #ccc)" }} dangerouslySetInnerHTML={{ __html: c.desc }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="char-nav fade-in-up">
              <a onClick={() => navigate("home")}>Главная</a>
              <a onClick={() => navigate("manga")}>Манга vs Аниме</a>
              <a onClick={() => navigate("eren")}>Эрен Йегер</a>
              <a onClick={() => navigate("military")}>Военные силы</a>
              <a onClick={() => navigate("ackerman")}>Клан Аккерман</a>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="char-sidebar">
            <div className="sidebar-card fade-in-up delay-2">
              <h3>Ключевые факты</h3>
              {[
                ["Часть I", "Wings of Freedom · 2016"],
                ["Часть II", "AoT 2 · 2018"],
                ["DLC", "Final Battle · 2019"],
                ["Платформы", "PS4 · Xbox · Switch · PC"],
                ["Персонажей", "30+ в AoT 2"],
                ["Продажи", "4+ млн к 2021"],
              ].map(([l, v]) => (
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>

            <div className="sidebar-card fade-in-up delay-2">
              <h3>Роль Исаямы</h3>
              {[
                ["Консультант", "Обе части серии"],
                ["Оригинал. сцены", "Wings of Freedom"],
                ["Дизайн Титанов", "Авторские эскизы"],
                ["Final Battle", "Максимальное участие"],
                ["Рекомендовал", "Публично фанатам"],
              ].map(([l, v]) => (
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>

            <div className="sidebar-card fade-in-up delay-3">
              <h3>Ключевые моменты</h3>
              {[
                ["С1", "Первое превращение Эрена"],
                ["С1", "Объятие Микасы"],
                ["С1", "Леви vs Женский Титан"],
                ["С1", "Раскрытие Энни"],
                ["С2", "Райнер и Бертольт"],
                ["С2", "Спасение Эрена"],
                ["С3", "Смерть Эрвина"],
                ["С3", "Жертва Армина"],
              ].map(([season, l]) => (
                <div className="sidebar-stat" key={l}>
                  <span className="s-label" style={{ color: season === "С3" ? "#d4ac0d" : season === "С2" ? "#27ae60" : "var(--red)" }}>{season}</span>
                  <span className="s-val">{l}</span>
                </div>
              ))}
            </div>

            <div className="sidebar-card fade-in-up delay-3">
              <h3>Топ персонажей</h3>
              {[
                ["Леви", "S-тир · сложный"],
                ["Микаса", "A-тир · универсал"],
                ["Эрен", "B-тир · новичкам"],
                ["Армин", "C-тир · поддержка"],
                ["Райнер", "A-тир (Титан)"],
                ["Энни", "A-тир (Титан)"],
              ].map(([l, v]) => (
                <div className="sidebar-stat" key={l}><span className="s-label">{l}</span><span className="s-val">{v}</span></div>
              ))}
            </div>

            <div className="sidebar-card fade-in-up delay-3">
              <h3>Навигация</h3>
              {[
                ["manga", "→ Манга vs Аниме"],
                ["eren", "→ Эрен Йегер"],
                ["military", "→ Военные силы"],
                ["ackerman", "→ Клан Аккерман"],
                ["titans", "→ Девять Прародителей"],
                ["home", "← Главная"],
              ].map(([p, l]) => (
                <div className="sidebar-stat" key={p}>
                  <a onClick={() => navigate(p)} style={{ color: "var(--red-light)", textDecoration: "none", fontSize: ".85rem", cursor: "pointer" }}>{l}</a>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>⚔ Attack on Titan Wiki · Фан-проект · Shingeki no Kyojin © Hajime Isayama</p>
        </div>
      </footer>
    </>
  );
}