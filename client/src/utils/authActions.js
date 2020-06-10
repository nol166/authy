import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
// export const registerUser = (userData, history) => (dispatch) => {
//     axios
//         .post('/api/users/register', userData)
//         .then((res) => history.push('/login')) // re-direct to login on successful register
//         .catch((err) =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data,
//             })
//         )
// }
const history = useHistory()
export const register = (data, history) => {
    axios
        .post('/api/users/register', data)
        .then((res) => history.push('/login'))
        .catch((err) => {
            alert(err.message)
        })
}
