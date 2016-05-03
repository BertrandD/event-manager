import * as actions from '../actions/TournamentActionTypes';

export function tournaments (state = {}, action) {
    switch (action.type) {
        case actions.FETCH_TOURNAMENT_SUCCESS:
            return Object.assign({}, state, action.payload.tournaments);
        default:
            return state;
    }
}