import '../css/MovieDetailTrailor.css';


const MovieDetailTrailor = () => {

    return (
        <>
            {/* 트레일러 정보 */}
            <div className='movie-trailor'>
                <div className='heading'>
                    <h4>트레일러</h4>
                    <span className='count'>9건</span>
                </div>

                <div className='aside-movie-ad1'>
                    <img src="/TP4_img/babylon2.jpg" alt='babylon' />
                </div>

                {/* 이미지들 */}
                <ul>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src="/TP4_img/avatar1.jpg" alt='avatar1' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                판도라의 경이로운 대자연 영상
                            </strong>
                            <span className='text-info'>2023.01.06</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src="/TP4_img/avatar2.jpg" alt='avatar2' />
                                <span className='play-icon'>
                                    영상보기
                                </span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                캐릭터 비하인드 영상
                            </strong>
                            <span className='text-info'>2022.12.27</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar3.jpg' alt='avatar3' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                프로덕션 비하인드 영상
                            </strong>
                            <span className='text-info'>2022.12.27</span>
                        </div>
                    </li>

                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar4.jpg' alt='avatar4' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                극찬 리뷰 영상
                            </strong>
                            <span className='text-info'>2022.12.20</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar5.jpg' alt='avatar6' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                환상적인 판도라의 세계 영상
                            </strong>
                            <span className='text-info'>2022.12.13</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar6.jpg' alt='avatar6' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>

                                '아바타: 물의 길'에 대한 진실 혹은 거짓 영상
                            </strong>
                            <span className='text-info'>2022.12.13</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar7.jpg' alt='avatar7' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                파이널 예고편
                            </strong>
                            <span className='text-info'>2022.11.25</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar8.jpg' alt='avatar8' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                메인 예고편
                            </strong>
                            <span className='text-info'>2022.11.09</span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image2'>
                            <span className='box-image2-detail'>
                                <img src='/TP4_img/avatar9.jpg' alt='avatar9' />
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'>
                                <span className='hd-icon'>HD</span>
                                티저 예고편
                            </strong>
                            <span className='text-info'>2022.07.22</span>
                        </div>
                    </li>

                </ul>
            </div>



        </>
    )
}

export default MovieDetailTrailor;