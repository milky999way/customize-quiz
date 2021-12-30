import React from 'react';
import Feature from './feature';

export default function ISTP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISTP 혼자가 좋아
        <strong>팬부</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_panboo.png"} alt="팬부" /></div>
      <div className="character_text">
        <p className="text">
          효율성을 중요시하므로
          쓸데없는 말을 하는 것을 이해하지 못한다.
        </p>
        <p className="text">
          집 밖을 잘 나가지 않는 집돌이/집순이라서
          고요한 하루를 보내는 것이 인생의 낙이다.
        </p>
        <p className="text">
          평소엔 온순한 성격이지만
          배가 고프면 매우 까칠해지는 편!
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
            <li><img src={staticPath + "/assets/img/match/boogy.png"} alt="부기" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
            <li><img src={staticPath + "/assets/img/match/kiri.png"} alt="키리" /></li>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>

    : preferenceNum >= 2 && preferenceNum < 2.5 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISTP 손재주가 뛰어난
        <strong>아담</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_adam.png"} alt="아담" /></div>
      <div className="character_text">
        <p className="text">
          책임감이 강해 아랫사람을 잘 챙긴다.
          전형적인 첫째 스타일.
        </p>
        <p className="text">
          손재주가 좋다는 소리를 자주 듣는다.
          혼자 있는 시간이 제일 중요하며,
          혼자서 이것저것 만드는 것을 좋아한다.
        </p>
        <p className="text">
          현실에 안주하지 않고
          한계에 도전하는 것을 좋아하는 성격!
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
            <li><img src={staticPath + "/assets/img/match/jackee.png"} alt="재키" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>
    
    : preferenceNum >= 2.5 && preferenceNum <= 3 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISTP 이성적인
        <strong>록키</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_rocky.png"} alt="록키" /></div>
      <div className="character_text">
        <p className="text">
          약간은 보수적인 마인드의 소유자.
          보편적이지 않은 것에 대해 거부감이 있다.
        </p>
        <p className="text">
          감정표현을 잘 하지 않는다.
          냉철한 성향으로 매사에 신중한 편이다.
        </p>
        <p className="text">
          자존심이 강한 성격이며,
          짓궂은 장난을 종종 치는 걸 좋아한다.
          하지만, 내면 어딘가엔 외로움을 갖고 있다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
            <li><img src={staticPath + "/assets/img/match/kuku.png"} alt="쿠쿠" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/snow.png"} alt="스노우" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
            <li><img src={staticPath + "/assets/img/match/tygo.png"} alt="타이고" /></li>
            <li><img src={staticPath + "/assets/img/match/bray.png"} alt="브레이" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>

    : preferenceNum > 3 && preferenceNum <= 4 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISTP 야행성
        <strong>키니</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_keeney.png"} alt="키니" /></div>
      <div className="character_text">
        <p className="text">
          세상에 별 관심이 없는 유형.
          공과 사의 구별이 뚜렷하지만
          친해지면 반전매력을 가지고 있다.
        </p>
        <p className="text">
          독립적인 성격에, 고집이 있어
          타인의 말에 잘 휘둘리지 않는다.
        </p>
        <p className="text">
          타인과 만나는 것을 매우 귀찮아한다.
          하지만 때론 필요에 의해 사교적으로 변하기도 한다!
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
            <li><img src={staticPath + "/assets/img/match/aroo.png"} alt="아루" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/coco.png"} alt="코코" /></li>
            <li><img src={staticPath + "/assets/img/match/violet.png"} alt="바이올렛" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
          </ul>
        </div>
      </div>
      <p className="caution">* 결과 내용은 MBTI에 기반하여 제작되었으므로 실제 캐릭터의 성격 및 관계도와 상이할 수 있습니다.</p>
      <div className="replay">
        <a href="/quiz/1">다시하기</a>
      </div>
    </div>
    
    :
    <div className="result">
      <div className="unknown">
        <p>결과가 존재하지않습니다. 다시 시도해주세요.</p>
        <a href="/quiz/1" className="btn">처음으로</a>
      </div>
    </div>
    }
    </>
  )
}