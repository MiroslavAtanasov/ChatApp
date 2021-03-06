import styled from 'styled-components'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import moment from 'moment'

function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth)

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever
    return (
        <Container>
            <TypeOfMessage>
                {message.message}
                <Timestamp>{message.timestamp ? moment(message.timestamp).format('LT') : '...'}</Timestamp>
            </TypeOfMessage>
        </Container>
    )
}

export default Message

const Container = styled.div`
     word-break: break-word;
`

const MessageElement = styled.p`
    width: fit-content;
    padding: 5px 15px 0 15px;
    border-radius: 8px;
    margin: 10px;
    min-width: 60px;
    max-width: 40em;
    padding-bottom: 26px;
    position: relative;
    text-align: right;
`

const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: #dcf8c6;
`

const Reciever = styled(MessageElement)`
    text-align: left;
    background-color: whitesmoke;
`

const Timestamp = styled.span`
    color: gray;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`