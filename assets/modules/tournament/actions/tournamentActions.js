import * as actions from './TournamentActionTypes'
import { fetch } from '../../../utils/post-as-form'
import config from '../../../config'
import { tournament } from '../../../schema/schemas'
import { normalize, arrayOf } from 'normalizr'

function fetchTournamentSuccess(tournaments) {
    return {
        type: actions.FETCH_TOURNAMENT_SUCCESS,
        payload: tournaments
    }
}
function fetchTournamentFailure() {
    return {
        type: actions.FETCH_TOURNAMENT_FAILURE
    }
}

export function fetchTournaments() {
    return dispatch => {
        return fetch(config.api.url + '/tournament')
        .then(res => {
            try {
                dispatch(fetchTournamentSuccess(normalize(res, arrayOf(tournament)).entities))
            } catch(e) {
                console.error(e);
            }
        })
        .catch(e => {
            dispatch(fetchTournamentFailure())
        })
    }
}