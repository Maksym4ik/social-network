let state = {
    //страница волонтеров
    volunteersPage: {
        filtersVolunteers: [
            {
                filterName: 'Вік',
                property: ['12-15', '16-19', '20-22', '22+'],
                pathTo: 'f1'
            },
            {
                filterName: 'Вид діяльності',
                property: ['Гуманітарій', 'ІТ', 'Юрист'],
                pathTo: 'f2'
            },
            {
                filterName: 'Стать',
                property: ['чоловіча', 'жіноча'],
                pathTo: 'f3'
            },
            {
                filterName: 'Мова',
                property: ['українська', 'російська', 'англійська', 'трускавки', 'швайне'],
                pathTo: 'f4'
            }], //данные - фильтры для волонтеров
        volunteers: [
            {firstName: 'Сергій', career: 'Директор', location: 'Львів', age: 25, about: 'вирішую бізнес задачі'},
            {firstName: 'Павлик', career: 'школьник', location: 'Київ', age: 14, about: 'Допомагаю по дому'},
            {firstName: 'Жанночка', career: 'студентка', location: 'Одеса', age: 21, about: 'Допомагаю по дому'},
            {firstName: 'Валерчік', career: 'бляя', location: 'Луцьк', age: 43, about: 'Допомагаю по дому'},], //данные - о волонтерах
    },
    //страница ивентов
    eventsPage: {
        filtersEvents: [
            {
                filterName: 'Локація',
                property: ['Львів', 'Київ', 'Одеса', 'lutske'],
                pathTo: 'f1'
            },
            {
                filterName: 'К-сть волонтерів',
                property: ['5-10', '10-20', '20-50', '50+'],
                pathTo: 'f2'
            },
            {
                filterName: 'Вид волонтерства',
                property: ['спеціальність', 'фіз допомога', 'охорона', 'допомога на сцені', 'проведення події', 'допомога спікерам'],
                pathTo: 'f3'
            },
            {
                property: ['Година', 'Доба', 'Більше доби'],
                pathTo: 'f4'
            }], //данные - фильтры для ивентов
        events: [
            {
                eventName: 'Сімейний фест',
                nameLocation: 'Арена Львів',
                location: 'Львів',
                data: '21.09.2020',
                about: 'сімейний фест'
            },
            {
                eventName: 'Бандерштат',
                nameLocation: 'іподром',
                location: 'Луцьк',
                data: '4-6.08.2020',
                about: 'фестиваль духу'
            },
            {
                eventName: 'Захід фест',
                nameLocation: 'за містом',
                location: 'Рівне',
                data: '5-8.07.2020',
                about: 'драйв мощаа'
            },
            {
                eventName: 'Креативні ранки',
                nameLocation: 'Копальня кави',
                location: 'Львів',
                data: '31.01.2020',
                about: 'фрі кава зранку)'
            },] //данные - о ивентах}
    },
    //страница профиля
    profilePage: {
        profileInfo: {
            firstName: 'Maksym',
            secName: 'Falat',
            age: '22',
            location: 'Львів',
            career: 'поганець',
            about: 'Шел чудак Раскаленному солнцу  подставив нагретый чердак Шел чудак, за спиной его тихо качался рюкзак Шел домой Представляя, как все удивятся тому, что живой Что ничто не случилось такого с его головой Так и есть У него для людей была самая добрая весть И он шел по дороге, от счастья светящийся весь Love and peace Люди могут конечно спастись от падения вниз И он шел рассказать им о том как им можно спастись'
        },
        messages: [
            {id: 0, message: 'Маю цікаву пропозиію', from: 'andrew'},
            {id: 1, message: 'Маю нецікаву пропозиію', from: 'sasha'},
            {id: 2, message: 'Маю цікаву пропозиію', from: 'vova'},
            {id: 3, message: 'Маю нецікаву пропозиію', from: 'ivan'},
            {id: 4, message: 'Маю цікаву пропозиію', from: 'artur'},
            {id: 5, message: 'Маю нецікаву пропозиію', from: 'somak'}
        ],
        posts: [
            {
                id: 0,
                title: 'Перевірка',
                description: 'Woow це мій перший пост на цьому сайті, круто)',
                date: '12.01.2020',
                likes: 1
            },
            {
                id: 1,
                title: 'чудовий день)',
                description: 'сьогодні крутий день, щоб розвиватись))',
                date: '18.01.2020',
                likes: 2
            },
            {
                id: 2,
                title: 'хочу на подію',
                description: 'хочу потрапити на свою першу подію',
                date: '05.02.2020',
                likes: 7
            },
        ]
    }
}

export default state;