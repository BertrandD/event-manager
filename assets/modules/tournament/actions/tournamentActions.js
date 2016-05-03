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

export function fetchTournament(tournamentId) {
    return dispatch => {
        return fetch(config.api.url + '/tournament/' + tournamentId)
        .then(res => {
            dispatch(fetchTournamentSuccess(normalize(res, tournament).entities))
        })
        .catch(res => {
            dispatch(fetchTournamentFailure());
            return Promise.reject(res);
        })
    }
}

export function fetchTournaments() {
    return dispatch => {
        return fetch(config.api.url + '/tournament')
        .then(res => {
            dispatch(fetchTournamentSuccess(normalize(res, arrayOf(tournament)).entities))
        })
        .catch(e => {
            dispatch(fetchTournamentFailure())
        })
    }
}