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
                {/* 이미지들 */}
                <ul>
                    <li>
                        <div className='box-image'>
                            <span>
                            <img src="/TP4_img/avatar1.jpg" alt='avatar1'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src="/TP4_img/avatar2.jpg" alt='avatar2'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar3.jpg' alt='avatar3'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar4.jpg' alt='avatar4'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar5.jpg' alt='avatar6'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar6.jpg' alt='avatar6'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar7.jpg' alt='avatar7'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar8.jpg' alt='avatar8'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>
                    <li>
                        <div className='box-image'>
                            <span>
                                <img src='/TP4_img/avatar9.jpg' alt='avatar9'/>
                                <span className='play-icon'>영상보기</span>
                            </span>
                        </div>
                        <div className='box-contents'>
                            <strong className='title'></strong>
                            <span className='text-info'></span>
                        </div>
                    </li>

                </ul>
            </div>



        </>
    )
}

export default MovieDetailTrailor;