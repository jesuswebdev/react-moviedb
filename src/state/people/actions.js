import * as peopleActions from './actionTypes';

export const fetchPeople = () => {
    return {
        type: peopleActions.REQUEST_FETCH_POPULAR_PEOPLE
    }
}

export const fetchPeopleSuccess = (people) => {
    return {
        type: peopleActions.FETCH_POPULAR_PEOPLE_SUCCESS,
        payload: {
            people
        }
    }
}

export const fetchPeopleFail = () => {
    return {
        type: peopleActions.FETCH_POPULAR_PEOPLE_FAIL
    }
}

export const fetchPeopleDetails = (id) => {
    return {
        type: peopleActions.REQUEST_FETCH_PEOPLE_DETAILS,
        payload: {
            id
        }
    }
}

export const fetchPeopleDetailsSuccess = (details) => {
    return {
        type: peopleActions.FETCH_PEOPLE_DETAILS_SUCCESS,
        payload: {
            details
        }
    }
}

export const fetchPeopleDetailsFail = () => {
    return {
        type: peopleActions.FETCH_PEOPLE_DETAILS_FAIL
    }
}

export const fetchPeopleCredits = (id) => {
    return {
        type: peopleActions.REQUEST_FETCH_PEOPLE_CREDITS,
        payload: {
            id
        }
    }
}

export const fetchPeopleCreditsSuccess = (credits) => {
    return {
        type: peopleActions.FETCH_PEOPLE_CREDITS_SUCCESS,
        payload: {
            credits
        }
    }
}

export const fetchPeopleCreditsFail = () => {
    return {
        type: peopleActions.FETCH_PEOPLE_CREDITS_FAIL
    }
}
