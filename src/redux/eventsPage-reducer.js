let FOLLOW = 'FOLLOW',
    SET_EVENTS = 'SET_EVENTS',
    CLICK_ON_PAGE_EVENT = 'CLICK_ON_PAGE_EVENT',
    IS_FETCHING_ACTIVE = 'IS_FETCHING_ACTIVE';

let initialStale =
    {
        filtersEvents: [
            {
                id: 1001,
                filterName: 'Локація',
                property: ['Львів', 'Київ', 'Одеса', 'lutske'],
                pathTo: 'f1'
            },
            {
                id: 1002,
                filterName: 'К-сть волонтерів',
                property: ['5-10', '10-20', '20-50', '50+'],
                pathTo: 'f2'
            },
            {
                id: 1003,
                filterName: 'Вид волонтерства',
                property: ['спеціальність', 'фіз допомога', 'охорона', 'допомога на сцені', 'проведення події', 'допомога спікерам'],
                pathTo: 'f3'
            },
            {
                id: 1004,
                filterName: 'Час потреби',
                property: ['Година', 'Доба', 'Більше доби'],
                pathTo: 'f4'
            }], //данные - фильтры для ивентов
        events: [],
        eventsCount: 10,
        eventsPageSize: 5,
        eventsCurrentPage: 1,
        isFetching: false
    };

let eventsPageReducer = (state = initialStale, action) => {

    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case CLICK_ON_PAGE_EVENT:
            return {
                ...state,
                eventsCurrentPage: action.pageNumber
            }
        case IS_FETCHING_ACTIVE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export default eventsPageReducer;

export let followAC = (userId) => ({type: FOLLOW, userId});
export let setEventsAC = (events) => ({type: SET_EVENTS, events});
export let clickOnPageEventAC = (pageNumber) => ({type: CLICK_ON_PAGE_EVENT, pageNumber});
export let isFetchingActive = (isFetching) => ({type: IS_FETCHING_ACTIVE, isFetching});
