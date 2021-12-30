import React from 'react';

export default function Loading({ staticPath, paramMbti, paramPreference }) {
  const onLoading = (e) => {
    e.preventDefault();
    const loadingEl = e.target.parentNode;
    setInterval(() => {
      loadingEl.classList.remove('loading');
      loadingEl.classList.remove('start');
      window.location.href = '/quiz/1?mbti='+paramMbti+'&preference='+paramPreference;
      setTimeout(() => {
        loadingEl.classList.add('loading');
      }, 750)
    }, 3000);
  }

  return (
    <li className="qna_result_loading on" onLoad={onLoading}>
      <p>나와 닮은 xxx<br />캐릭터 찾는 중</p>
      <div className="loading start">
        <img src={staticPath + "/assets/img/img_loading1.png"} alt="로딩 xxx" className="loading1" />
        <img src={staticPath + "/assets/img/img_loading2.png"} alt="로딩 코코" className="loading2" />
        <img src={staticPath + "/assets/img/img_loading3.png"} alt="로딩 오비스" className="loading3" />
      </div>
    </li>
  )
}