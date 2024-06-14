import {Paragraph, UserCard, UsersPageWrapper} from "./styles";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {usersSliceActions, usersSliceSelector} from "../../store/redux/usersSlice/usersSlice";
import {v4} from "uuid";
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";


function Users() {
    const users = useAppSelector(usersSliceSelector.users)
    const usersShow = users.length > 0;

    const dispatch = useAppDispatch()


    const usersCards = users.map((user) => {
        return (
            <UserCard key={v4()}>
                <Paragraph>{user.fullName}</Paragraph>
                <Paragraph>{user.age}</Paragraph>
                <Paragraph>{user.jobTitle}</Paragraph>
            </UserCard>

        )


    })

    const deleteUsers = () => {
        dispatch(usersSliceActions.deleteUser([]))


    }


    return (

        <UsersPageWrapper>


            {usersCards}
            {usersShow && (<Button name="DeleteAllUsers" onClick={deleteUsers}/>)}
        </UsersPageWrapper>


    )


}

export default Users