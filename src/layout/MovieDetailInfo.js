import '../css/MovieDetail.css';

const MovieDetailInfo = () => {

    return (
        <>
            <div className='movie-detail-bottom'>
                {/* 중간 메뉴바 */}
                <div className='movie-menu-bar'>
                    <div className='movie-story'>
                        &lt;아바타: 물의 길&gt;은 판도라 행성에서&nbsp;<br />
                        '제이크 설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한 위협과&nbsp;<br />
                        살아남기 위해 떠나야 하는 긴 여정과 전투,&nbsp;<br />
                        그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.&nbsp;<br />
                        <br />
                        월드와이드 역대 흥행 순위 1위를 기록한 전편 &lt;아바타&gt;에 이어<br />
                        제임스 카메론 감독이 13년만에 선보이는 영화로,&nbsp;<br />
                        샘 워싱턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬렛이 출연하고<br />
                        존 랜도가 프로듀싱을 맡았다.
                    </div>
                    <div className='chart'>
                        <ul className='graph'>
                            <li>
                                <strong>성별 예매 분포</strong>
                                <div className='graph-sex'>
                                    <img src=" " alt='garph-sex' style={{ paddingTop: '20px' }} />
                                </div>
                            </li>
                            <li>
                                <strong>연령별 예매 분포</strong>
                                <div className='graph-age'>
                                    <img src="TP4_img/graph_age.png" alt='garph-age' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='middle-movie-ad'>
                        <img src="TP4_img/babylon.jpg" alt='babylon' />
                    </div>
                    <div className='aside-movie-ad'>
                        <img src="TP4_img/babylon2.jpg" alt='babylon' />
                    </div>

                </div>

            </div>

        </>
    )
}

export default MovieDetailInfo;