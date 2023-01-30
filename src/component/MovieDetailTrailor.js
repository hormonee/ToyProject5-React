import { useState } from 'react';
import '../css/MovieDetailTrailor.css';


const MovieDetailTrailor = () => {

    const arr = [
        { src: '/TP4_img/avatar1.jpg', title: '아바타1', date: '2023.01.06', content: '판도라의 경이로운 대자연 영상' },
        { src: '/TP4_img/avatar2.jpg', title: '아바타2', date: '2022.12.27', content: '캐릭터 비하인드 영상' },
        { src: '/TP4_img/avatar3.jpg', title: '아바타3', date: '2022.12.27', content: '프로덕션 비하인드 영상' },
        { src: '/TP4_img/avatar4.jpg', title: '아바타4', date: '2022.12.20', content: '극찬 리뷰 영상' },
        { src: '/TP4_img/avatar5.jpg', title: '아바타5', date: '2022.12.13', content: '환상적인 판도라의 세계 영상' },
        { src: '/TP4_img/avatar6.jpg', title: '아바타6', date: '2022.12.13', content: "'아바타: 물의 길'에 대한 진실 혹은 거짓 영상" },
        { src: '/TP4_img/avatar7.jpg', title: '아바타7', date: '2022.11.25', content: '파이널 예고편' },
        { src: '/TP4_img/avatar8.jpg', title: '아바타8', date: '2022.11.09', content: '메인 예고편' },
        { src: '/TP4_img/avatar9.jpg', title: '아바타9', date: '2022.07.22', content: '티저 예고편' },
    ]

    const [list, setList] = useState(arr);

    const newList = list.map(item =>
        <li>
            <div className='box-image2'>
                <span className='box-image2-detail'>
                    <img src={item.src} alt={item.title} />
                    <span className='play-icon'>영상보기</span>
                </span>
            </div>
            <div className='box-contents'>
                <strong className='title'>
                    <span className='hd-icon'>HD</span>
                    {item.content}
                </strong>
                <span className='text-info'>{item.date}</span>
            </div>
        </li>
    )

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
                    {newList}
                </ul>
            </div>



        </>
    )
}

export default MovieDetailTrailor;