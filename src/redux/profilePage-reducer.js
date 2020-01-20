//имена для dispatch
//профиль пост
const type_PUSH_NEW_POST = 'PUSH_NEW_POST';
const type_NEW_POST_TEXT = 'NEW_POST_TEXT';
//профиль сообщение
const type_PUSH_NEW_MESSAGE = 'PUSH_NEW_MESSAGE';
const type_NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';

const TAKE_NEW_PROFILE = 'TAKE_NEW_PROFILE';
const TAKE_ME_BACK = 'TAKE_ME_BACK';

let initialState =
    {
        myProfile: {
            id: 10001,
            followed: false,
            firstName: 'Maksym',
            age: '22',
            location: 'Львів',
            career: 'безробітній',
            photoUrl: null,
            about: 'Шел чудак Раскаленному солнцу подставив нагретый чердак Шел чудак, за спиной его тихо качался рюкзак Шел домой Представляя, как все удивятся тому, что живой Что ничто не случилось такого с его головой Так и есть У него для людей была самая добрая весть И он шел по дороге, от счастья светящийся весь Love and peace Люди могут конечно спастись от падения вниз И он шел рассказать им о том как им можно спастись'
        },
        profileInfo: {
            id: 10001,
            followed: false,
            firstName: 'Maksym',
            age: '22',
            location: 'Львів',
            career: 'безробітній',
            photoUrl: null,
            about: 'Шел чудак Раскаленному солнцу подставив нагретый чердак Шел чудак, за спиной его тихо качался рюкзак Шел домой Представляя, как все удивятся тому, что живой Что ничто не случилось такого с его головой Так и есть У него для людей была самая добрая весть И он шел по дороге, от счастья светящийся весь Love and peace Люди могут конечно спастись от падения вниз И он шел рассказать им о том как им можно спастись'
        },
        messages: [
            {id: 0, message: 'Маю цікаву пропозиію', idMessage: 0, from: 'andrew'},

            {id: 1, message: 'Маю нецікаву пропозиію', from: 'sasha'},
            {id: 2, message: 'Маю цікаву пропозиію', from: 'vova'},
            {id: 3, message: 'Маю нецікаву пропозиію', from: 'ivan'},
            {id: 4, message: 'Маю цікаву пропозиію', from: 'artur'},
            {id: 5, message: 'Маю нецікаву пропозиію', from: 'somak'}
        ],
        updateMessageText: '',
        posts: [
            {
                id: 0,
                title: 'Перевірка',
                description: 'Woow це пост на цьому сайті',
                date: '12.01.2020',
                likes: 1
            },
            {
                id: 1,
                title: 'новий пост',
                description: 'новий день',
                date: '18.01.2020',
                likes: 2
            },
            {
                id: 2,
                title: 'подія',
                description: 'пост для показу події',
                date: '05.02.2020',
                likes: 7
            },
        ],
        updatePostText: {
            textTitle: '',
            textDescription: ''
        }

    };

let profilePageReducer = (state = initialState, action) => {

    const getDate = () => {
        let d = new Date();
        let curr_date = d.getDate();
        if (curr_date < 10) curr_date = '0' + curr_date;
        let curr_month = d.getMonth() + 1;
        if (curr_month < 10) curr_month = '0' + curr_month;
        let curr_year = d.getFullYear();
        return curr_date + '.' + curr_month + '.' + curr_year;
    }
    switch (action.type) {
        //Оновление UI при вводе информации в меню посты
        case type_NEW_POST_TEXT :
            return {
                ...state,
                updatePostText: {textTitle: action.title, textDescription: action.description}
            };


        //функция добавления поста в масив
        case type_PUSH_NEW_POST:
            debugger;
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length,
                    title: state.updatePostText.textTitle,
                    description: state.updatePostText.textDescription,
                    date: getDate(),
                    likes: 0
                }
                ],
                updatePostText: {textTitle: '', textDescription: ''}
            };


        //Оновление UI при вводе информации в меню сообщения
        case type_NEW_MESSAGE_TEXT :
            return {
                ...state,
                updateMessageText: action.messageText
            };


        //функция добавления сообщения в масив
        case type_PUSH_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length,
                    message: state.updateMessageText,
                    from: 'Maksym'
                }],
                updateMessageText: ''
            }
        case TAKE_NEW_PROFILE:
            return {
                ...state,
                profileInfo: action.newProfile
            }
        case TAKE_ME_BACK:
            return {
                ...state,
                profileInfo: {...state.myProfile}
            }
        default:
            return state;
    }
}

export default profilePageReducer;

//информация (обьекты) для dispatch
export let pushNewPostCreator = () => ({type: type_PUSH_NEW_POST});
export let newPostTextCreator = (title, description) => ({
    type: type_NEW_POST_TEXT,
    title: title,
    description: description
});
export let pushNewMessageCreator = () => ({type: type_PUSH_NEW_MESSAGE});
export let newMessageTextCreator = (messageText) => ({type: type_NEW_MESSAGE_TEXT, messageText});
export let takeNewProfile = (newProfile) => ({type: TAKE_NEW_PROFILE, newProfile});
export let takeMeBack = () => ({type: TAKE_ME_BACK});