import React from 'react';

export default function Section3ChildComponent ({슬라이드}) {
    const slideWrap = React.useRef()
    const [state, setState] = React.useState({
        cnt:0
    })
    
    const {cnt} = state
    //이전 버튼 클릭 
    const onClickPrevBtn=(e)=>{ //preventDefault를 안 하면 기본 설정 값?이 바뀐다 
        e.preventDefault()
        setState({
            ...state,
            cnt:state.cnt-1
        })
    }
    //다음 버튼 클릭
    const onClickNextBtn=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            cnt:state.cnt+1
        })
    }
    // 버튼 누를 때마다 얼마나 움직이는지? 267* 4=1068
    const mainSlide=()=>{
        slideWrap.current.style.transform = `translateX(${-1068 * state.cnt}px)`
        slideWrap.current.style.transition = `all 0.3s ease-in-out`
    }
    React.useEffect(()=>{
        mainSlide()
    }, [cnt])


    return (
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">
                        {슬라이드.map((item,idx)=>{
                            return (
                            <li className="slide slide1" key={item.번호}>
                                <div className="gap">
                                    <div className="img-box">
                                        <img src={`./img/intro/section3/${item.이미지}`} alt="" />
                                        <span><img src="./img/intro/icon-purple-circle-cart.svg" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h3>{item.상품명}</h3>
                                        <h4>
                                            <strong>{item.할인율}%</strong>
                                            <em>{item.판매가}원</em><br />
                                            <span>{item.정가}원</span>
                                        </h4>
                                        <p>
                                            <img src="./img/intro/후기.svg" alt="" />
                                            <span>후기{item.후기수}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>

                            )
                        })
                    }  
                    </ul>
                </div>
                { state.cnt > 0 &&
                <a href="!#" className='arrow-prev-btn' onClick={onClickPrevBtn}><img src="./img/intro/icon-white-circle-next.svg" alt="" /></a>
            }
            { state.cnt < 4 &&
                <a href="!#" className='arrow-next-btn' onClick={onClickNextBtn}><img src="./img/intro/icon-white-circle-next.svg" alt="" /></a>
            }
            </div>
    );
};
