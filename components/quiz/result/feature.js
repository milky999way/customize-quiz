import React from 'react';

export default function Feature({ mbti }) {
  return (
    mbti === 'ENFJ' ?
    <div className="feature">
      <div className="list">
        <span>★ENFJ 유형★</span>
        <ul>
          <li>- 사람들을 이끄는 것에 타고난 유형.</li>
          <li>- 사람을 좋아하고, 연애할 땐 헌신하는 스타일.</li>
          <li>- 말로 사람의 마음을 움직이게 하는 능력이 탁월하다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#눈치있음</span>
        <span>#센스쟁이</span>
        <span>#오지랖</span>
        <span>#인류애</span>
      </div>
    </div>
    :
    mbti === 'ENFP' ?
    <div className="feature">
      <div className="list">
        <span>★ENFP 유형★</span>
        <ul>
          <li>- 사람들과 잘 어울리고, 새로운 인간관계에 두려움이 없다.</li>
          <li>- 순간 집중력이 좋아서 벼락치기 해도 성과가 좋다.</li>
          <li>- 일하다 보면 금세 싫증을 내는 경우가 많다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#긍정적</span>
        <span>#인싸</span>
        <span>#충동구매</span>
        <span>#자유를원해</span>
      </div>
    </div>
    :
    mbti === 'ENTJ' ?
    <div className="feature">
      <div className="list">
        <span>★ENTJ 유형★</span>
        <ul>
          <li>- 학창 시절에 한자리하는 경우가 많은 리더 유형.</li>
          <li>- 끈기, 책임감이 뛰어나 맡은 일은 끝까지 밀고 나간다.</li>
          <li>- 자존감이 높아서 열등감을 느낀 적이 드물다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#논리적</span>
        <span>#비효율극혐</span>
        <span>#슈퍼솔직</span>
        <span>#생각많음</span>
      </div>
    </div>
    :
    mbti === 'ENTP' ?
    <div className="feature">
      <div className="list">
        <span>★ENTP 유형★</span>
        <ul>
          <li>- 완벽주의와는 거리가 멀다. 관대하고 느긋한 성격.</li>
          <li>- 임기응변에 능하고 말보다는 행동이 앞선다.</li>
          <li>- 다방면으로 재능이 있으나 엄청나게 잘하지는 않음.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#상황판단력</span>
        <span>#논쟁왕</span>
        <span>#직설적</span>
        <span>#개방적</span>
      </div>
    </div>
    :
    mbti === 'ESFJ' ?
    <div className="feature">
      <div className="list">
        <span>★ESFJ 유형★</span>
        <ul>
          <li>- 스트레스를 받으면 누구라도 만나야 하는 유형.</li>
          <li>- 사회생활 잘한다는 소리를 자주 듣는다.</li>
          <li>- 아직 일어나지 않은 상황에 대해 미리 걱정한다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#분위기메이커</span>
        <span>#감정기복</span>
        <span>#리액션</span>
        <span>#사교왕</span>
      </div>
    </div>
    :
    mbti === 'ESFP' ?
    <div className="feature">
      <div className="list">
        <span>★ESFP 유형★</span>
        <ul>
          <li>- 주목받는 것을 좋아하는 인싸 중의 인싸.</li>
          <li>- 싫고 좋은 사람 구분이 뚜렷하고, 감정을 숨기지 못한다.</li>
          <li>- 화가 나면 쉽게 감정에 휩싸이고 흥분하는 성격이다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#자유로운영혼</span>
        <span>#단순</span>
        <span>#쿠크다스멘탈</span>
        <span>#관종</span>
      </div>
    </div>
    :
    mbti === 'ESTJ' ?
    <div className="feature">
      <div className="list">
        <span>★ESTJ 유형★</span>
        <ul>
          <li>- 뭐든 딱 떨어지는 확실한 게 좋다.</li>
          <li>- 겉과 속이 일치한다. 절대 뒷담화는 하지 않음.</li>
          <li>- 일 못 하면 나쁜 사람, 일 잘하면 좋은 사람이다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#현실적</span>
        <span>#카리스마</span>
        <span>#모아니면도</span>
        <span>#젊은꼰대</span>
      </div>
    </div>
    :
    mbti === 'ESTP' ?
    <div className="feature">
      <div className="list">
        <span>★ESTP 유형★</span>
        <ul>
          <li>- 경쟁, 내기, 번개와 같은 즉흥적인 것을 좋아하는 유형.</li>
          <li>- 주변에 일어나는 일에 관심이 많다.</li>
          <li>- 갈등이 심해질수록 머리가 차가워지는 말싸움 끝판왕.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#눈치빠름</span>
        <span>#돌직구</span>
        <span>#넓은인맥</span>
        <span>#개방적</span>
      </div>
    </div>
    :

    mbti === 'INFJ' ?
    <div className="feature">
      <div className="list">
        <span>★INFJ 유형★</span>
        <ul>
          <li>- 섬세하고, 완벽주의적인 성향이 있는 유형.</li>
          <li>- 비유나 은유 등을 써서 표현하는 것을 잘한다.</li>
          <li>- 철학, 심리학, 인문학 등 추상적인 분야에 관심이 많다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#가면장착</span>
        <span>#다정다감</span>
        <span>#예리한통찰력</span>
        <span>#허당미</span>
      </div>
    </div>
    :
    mbti === 'INFP' ?
    <div className="feature">
      <div className="list">
        <span>★INFP 유형★</span>
        <ul>
          <li>- 나만의 신념과 가치관이 뚜렷하다.</li>
          <li>- 감정 기복이 심하여, 멘탈이 가장 약한 유형.</li>
          <li>- 나의 가치를 존중해주는 사람이 있다면 올인한다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#이해심</span>
        <span>#소심한관종</span>
        <span>#우유부단</span>
        <span>#의미부여</span>
      </div>
    </div>
    :
    mbti === 'INTJ' ?
    <div className="feature">
      <div className="list">
        <span>★INTJ 유형★</span>
        <ul>
          <li>- 목표를 달성하면 큰 행복감을 느낀다.</li>
          <li>- '나 오늘 뭐 바뀐 것 없어?'라면 물어보면 대답을 못 한다.</li>
          <li>- 인싸들의 관심사에서 매우 동떨어진 유형.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#효율성</span>
        <span>#객관적태도</span>
        <span>#원리원칙</span>
        <span>#신중함</span>
      </div>
    </div>
    :
    mbti === 'INTP' ?
    <div className="feature">
      <div className="list">
        <span>★INTP 유형★</span>
        <ul>
          <li>- 말이 별로 없으나 관심 분야에서는 말이 많아진다.</li>
          <li>- 비논리적이고 어리석은 사람들을 보면 화가 난다.</li>
          <li>- 타인이 내 욕을 하든 말든 신경 안 쓰는 성격.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#게으른천재</span>
        <span>#팩폭러</span>
        <span>#조용함</span>
        <span>#지적호기심</span>
      </div>
    </div>
    :
    mbti === 'ISFJ' ?
    <div className="feature">
      <div className="list">
        <span>★ISFJ 유형★</span>
        <ul>
          <li>- 주로 자신의 이야기를 하기보단 듣는 입장이다.</li>
          <li>- 싫은 소리를 못 하며, 부탁하는 것을 어려워한다.</li>
          <li>- 기억력이 좋아서 과거 일들을 모두 기억한다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#거절못함</span>
        <span>#친절함</span>
        <span>#알뜰함</span>
        <span>#뒤끝있음</span>
      </div>
    </div>
    :
    mbti === 'ISFP' ?
    <div className="feature">
      <div className="list">
        <span>★ISFP 유형★</span>
        <ul>
          <li>- 사람 만나는 걸 좋아하지만 싫어하는 유형.</li>
          <li>- 규칙이나 관습에 묶이는 것을 싫어한다.</li>
          <li>- 발등에 불이 떨어질 때까지 일을 미루는 경향이 있다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#선택장애</span>
        <span>#귀차니즘</span>
        <span>#독립적</span>
        <span>#감정적</span>
      </div>
    </div>
    :
    mbti === 'ISTJ' ?
    <div className="feature">
      <div className="list">
        <span>★ISTJ 유형★</span>
        <ul>
          <li>- 우리나라에서 가장 많은 유형이다.</li>
          <li>- 좁고 깊은 인간관계를 선호하며, 의리파이다.</li>
          <li>- 대충하는 것을 싫어하여 꼼꼼하다는 소리를 자주 듣는다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#강한책임감</span>
        <span>#알쓸신잡</span>
        <span>#무표정</span>
        <span>#츤데레</span>
      </div>
    </div>
    :
    mbti === 'ISTP' ?
    <div className="feature">
      <div className="list">
        <span>★ISTP 유형★</span>
        <ul>
          <li>- MBTI 짤 보는 것을 좋아하는 유형.</li>
          <li>- 사람이 많은 복잡한 곳을 싫어한다.</li>
          <li>- 많이 생각하는 것을 싫어하며 솔직하고 직설적인 편이다.</li>
        </ul>
      </div>
      <div className="hash_tag">
        <span>#동물좋아</span>
        <span>#뛰어난관찰력</span>
        <span>#객관적</span>
        <span>#과묵함</span>
      </div>
    </div>
    : null
  )
}