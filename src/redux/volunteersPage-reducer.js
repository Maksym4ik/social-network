let FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS',
    CLICK_ON_PAGE = 'CLICK_ON_PAGE',
    IS_FETCHING_ACTIVE = 'IS_FETCHING_ACTIVE';


let initialState =
    {
        filtersVolunteers: [
            {
                id: 1001,
                filterName: 'Вік',
                property: ['12-15', '16-19', '20-22', '22+'],
                pathTo: 'f1'
            },
            {
                id: 1002,
                filterName: 'Вид діяльності',
                property: ['Гуманітарій', 'ІТ', 'Юрист'],
                pathTo: 'f2'
            },
            {
                id: 1003,
                filterName: 'Стать',
                property: ['чоловіча', 'жіноча'],
                pathTo: 'f3'
            },
            {
                id: 1004,
                filterName: 'Мова',
                property: ['українська', 'російська', 'англійська', 'трускавки', 'швайне'],
                pathTo: 'f4'
            }], //данные - фильтры для волонтеров
        volunteers: [],
        volunteersCount: 14,
        volunteersPageSize: 5,
        volunteersCurrentPage: 1,
        isFetching: false
    };


let volunteersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, volunteers: action.volunteers}
        case FOLLOW:
            return {
                ...state,
                volunteers: state.volunteers.map(volunteer => {
                    if (volunteer.id === action.userId) {
                        if (volunteer.followed) return {...volunteer, followed: false}
                        else return {...volunteer, followed: true}

                    }
                    return volunteer
                })

            }
        case CLICK_ON_PAGE:
            console.log(action.pageNumber);
            return {
                ...state,
                volunteersCurrentPage: action.pageNumber
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

export default volunteersPageReducer;
export let followUser = (userId) => ({type: FOLLOW, userId});
export let setVolunteers = (volunteers) => ({type: SET_USERS, volunteers});
export let clickOnPageVolunteers = (pageNumber) => ({type:CLICK_ON_PAGE, pageNumber: pageNumber});
export let isFetchingActive = (isFetching) => ({type: IS_FETCHING_ACTIVE, isFetching});
