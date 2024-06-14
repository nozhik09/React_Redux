import { LikeImg, DislikeImg } from "assets"
import {
    FeedbackWrapper,
    Count,
    ImageContainer,
    Image,
    ImagesResultsWrapper
} from "./styles"
import Button from "components/Button/Button"
import {feedbackSliceActions, feedbackSliceSelectors} from "../../store/redux/feedback/feedbackSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";



function Feedback() {

    const like = useAppSelector(feedbackSliceSelectors.like)
    const dislike = useAppSelector(feedbackSliceSelectors.dislike)

    const dispatch = useAppDispatch();


const addLike = ()=> {dispatch(feedbackSliceActions.addLike())}
const addDisLike = ()=> {dispatch(feedbackSliceActions.addDisLike())}
    const resetsResults = ()=>{dispatch(feedbackSliceActions.resetResult())}



    return (
        <FeedbackWrapper>
            <ImagesResultsWrapper>
                <Count>{like}</Count>
                <ImageContainer>
                    <Image src={LikeImg} alt='like' onClick={addLike} />
                </ImageContainer>
                <ImageContainer>
                    <Image src={DislikeImg} alt='dislike' onClick={addDisLike} />
                </ImageContainer>
                <Count>{dislike}</Count>
            </ImagesResultsWrapper>
            <Button name='Reset results' onClick={resetsResults} />
        </FeedbackWrapper>
    )
}

export default Feedback