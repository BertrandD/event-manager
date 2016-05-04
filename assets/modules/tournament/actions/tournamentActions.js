import * as actions from './TournamentActionTypes'
import { fetch, post, put } from '../../../utils/post-as-form'
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

export function updateTournament(tournament) {
    return dispatch => {
        return put(config.api.url + '/tournament/'+tournament._id, tournament)
        .then(res => {
            dispatch(fetchTournamentSuccess(normalize(res, tournament).entities))
        })
        .catch(res => {
            dispatch(fetchTournamentFailure());
            return Promise.reject(res);
        })
    }
}

export function createTournament(tournament) {
    return dispatch => {
        return post(config.api.url + '/tournament', tournament)
        .then(res => {
            dispatch(fetchTournamentSuccess(normalize(res, tournament).entities))
        })
        .catch(res => {
            dispatch(fetchTournamentFailure());
            return Promise.reject(res);
        })
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
        return fetch(config.api.url + '/tournament?filter=all')
        .then(res => {
            dispatch(fetchTournamentSuccess(normalize(res, arrayOf(tournament)).entities))
        })
        .catch(e => {
            dispatch(fetchTournamentFailure())
        })
    }
}