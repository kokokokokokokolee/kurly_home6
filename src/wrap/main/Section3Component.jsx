import React from 'react';
import './sass/section3.scss'

export default function Section3Component () {

    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const [state, setState] = React.useState({
        H : 0,
        M : 0,
        S : 0,
    });
    React.useEffect(()=>{
        let startTime = new Date("2023-08-21 12:00:00")
        // console.log(startTime)
        let nowTime = new Date();// 현재시간
            startTime = (startTime.setHours(startTime.getHours() + 24))
            // console.log(startTime)
        let endTime = startTime - nowTime
        // console.log(endTime) // 초단위

        let H = Math.floor(endTime/(60*60*1000)%24)
        let M = Math.floor(endTime/(60*1000)%60)
        let S = Math.floor(endTime/(1000)%60)

        function timeSaleFn(){
            let nowTime = new Date();
            let endTime = startTime - nowTime;
            H = Math.floor(endTime/(60*60*1000)%24)
            M = Math.floor(endTime/(60*1000)%60)
            S = Math.floor(endTime/(1000)%60)
        if (nowTime>=startTime){ // 타임세일 끝
            // console.log('타임세일 끝!')
            setState({
                ...state,
                H : 0,
                M : 0,
                S : 0
            })
        }
        else {
            // console.log('타임세일 중...')
            setState({
                ...state,
                H : H,
                M : M,
                S : S
            })
        }
    }
    setInterval(timeSaleFn, 1000)
    }, [state.H, state.M, state.S])

    return (
        <div   id="section3">
            <div className="slide-container">
                <div className="content">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide1">
                                <div className="gap">
                                    <h3>매일 오전 11시 <br />OPEN !</h3>
                                    <p>24시간 한정 일일특가</p>
                                    <div>
                                        <img src="./img/intro/section3/timer.svg" alt="" />
                                        <strong>{state.H < 10 ? `0${state.H}` : state.H }</strong>
                                        <i>:</i>
                                        <strong>{state.M < 10 ? `0${state.M}` : state.M}</strong>
                                        <i>:</i>
                                        <strong>{state.S < 10 ? `0${state.S}` : state.S}</strong>
                                    </div>
                                    <span>망설이면 늦어요!</span>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <img src="./img/intro/section3/01a8db83-55fe-4064-99d9-2383ce8f04b6.jpg" alt="" />
                                        <span><img src="./img/intro/icon-purple-circle-cart.svg" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h3>정다운 느린농장훈제오리 500g</h3>
                                        <h4>
                                            <strong>{25}%</strong> <em>{(10125).toLocaleString('ko'-'KO')}원</em><br/>
                                            <span>{(13500).toLocaleString('ko'-'KO')}원</span>
                                        </h4>
                                        <p>
                                            <img src="./img/intro/후기.svg" alt="" />
                                            <span>후기 999+</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <img src="./img/intro/section3/2f115a45-babe-49e5-bdaa-e55a146d9ce1.jpg" alt="" />
                                        <span><img src="./img/intro/icon-purple-circle-cart.svg" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h3>[유리아쥬] 바디케어 베스트 4종 (여성청결제/립밤/바디 클렌저) (택1)</h3>
                                        <h4>
                                            <strong>70%</strong>
                                            <em>{(11900).toLocaleString('ko'-'KO')}원</em><br />
                                            <span>{(20000).toLocaleString('ko'-'KO')}원</span>
                                        </h4>
                                        <p>
                                            <img src="./img/intro/후기.svg" alt="" />
                                            <span>후기 610</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
