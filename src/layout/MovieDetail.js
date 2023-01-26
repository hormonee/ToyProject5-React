import Header from './Header';
import '../css/MovieDetail.css';
import { Link, Outlet } from 'react-router-dom';

const MovieDetail = () => {

    return (
        <>
            <Header />
            {/* container area */}
            <div className='container'>
                {/*contents area  */}
                <div className='contents'>
                    {/* 실 컨텐츠 시작 */}
                    <div className='movie-detail' >
                        {/* 상단 컨텐츠 정보 */}
                        <div className='movie-detail-top'>
                            <div className='box-image'>
                                <Link to='' className='box-image-block'>
                                    <span className='thumb-image'>
                                        <img src="TP4_img/AvatarImg.jpg" alt="아바타-물의 길 포스터 새창" />
                                        <span className='poster-detail'>포스터 크게 보기</span>
                                        <i className='cgvIcon-age12'>12</i>
                                    </span>
                                </Link>
                            </div>
                            <div className='box-contents'>
                                <div className='title'>
                                    <strong>아바타-물의 길</strong>
                                    <em className='round'>
                                        <span>현재상영중</span>
                                    </em>
                                    <p>Avater: The Way of Water</p>
                                </div>

                                <div className='score'>
                                    <strong className='percent'>
                                        예매율&nbsp;
                                        <span>25.0%</span>
                                    </strong>

                                    <div className='egg-gage'>
                                        <span className='egg-image'></span>
                                        <span className='percent'>96%</span>
                                    </div>

                                </div>

                                <div className='spec'>
                                    <dl>
                                        <dt>감독:&nbsp;</dt>
                                        <dd>제임스 카메론</dd>
                                        <dd></dd>
                                        <dt>&nbsp;/ 배우:&nbsp;</dt>
                                        <dd className='on'><span>조 샐다나</span>,&nbsp;<span>샘 워싱턴</span>,&nbsp;시고니 위버,&nbsp;우나 채플린,&nbsp;지오바니 리비시,&nbsp;스티븐 랭,&nbsp;케이트 윈슬렛</dd>
                                        <dt>장르:&nbsp;액션,&nbsp;어드벤쳐,&nbsp;SF,&nbsp;스릴러</dt>
                                        <dd></dd>
                                        <dt>&nbsp;/ 기본:&nbsp;</dt>
                                        <dd className='on'>12,&nbsp;192분,&nbsp;미국</dd>
                                        <dt>개봉 :&nbsp;</dt>
                                        <dd className='on'>2022.12.14</dd>

                                    </dl>
                                </div>
                                <span className='screentype'>
                                    <span className='imax'>IMAX</span>
                                    <span className='fourdx'>4DX</span>
                                </span>
                                <span className='like'>
                                    <span className='preegg'>
                                        <i className='preegg-image'></i>
                                        프리에그
                                    </span>
                                    <Link to='/reserve' className='reservation'>예매하기</Link>
                                </span>
                            </div>

                        </div>
                        {/* 하단 컨텐츠 정보 */}
                        <div className='movie-detail-bottom'>
                            {/* 중간 메뉴바 */}
                            <div className='movie-menu-bar'>
                                <ul className='tab-menu'>
                                    <li className='on'>
                                        <span><img src="TP4_img/ico_finger.png" alt='fingerpng' /><Link to='/1'>주요정보</Link></span>
                                    </li>
                                    <li><span><Link to='/2'>트레일러</Link></span></li>
                                    <li><span>스틸컷</span></li>
                                    <li><span>평점/리뷰</span></li>
                                    <li><span>상영시간표</span></li>
                                </ul>
                               
                                <Outlet/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default MovieDetail;