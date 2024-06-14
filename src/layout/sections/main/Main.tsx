import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Vladimir Zaharov</span></S.Name>
                        {/*<S.MainTitle>A Frontend Developer. </S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            />
                        </S.MainTitle>

                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};