import React from 'react';
import Feature from './feature';

export default function ISFP({ staticPath, mbti, preference }) {
  const preferenceNum = parseFloat(preference);

  return (
    <>
    {preferenceNum >= 1 && preferenceNum < 2 ?
    <div className="result">
      <div className="title"><img src={staticPath + "/assets/img/title_result.png"} alt="xxx에서 당신은?" /></div>
      <div className="character_title">
        ISFP 굉장한 집돌이
        <strong>두두</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_dudu.png"} alt="두두" /></div>
      <div className="character_text">
        <p className="text">
          매사에 귀찮고 무기력하지만
          한번 느낌이 오면 누구보다 열정적이다!
        </p>
        <p className="text">
          친구들과 한창 이야기 중에도
          기운이 빠지면 홀연히 사라져 버린다.
          집에 있으면 연락 두절되는 스타일.
        </p>
        <p className="text">
          조용하지만 무대 위에서는
          끼가 넘치는 반전 매력의 소유자.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/timmy.png"} alt="티미" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/xxx.png"} alt="xxx" /></li>
            <li><img src={staticPath + "/assets/img/match/alphonse.png"} alt="알폰스" /></li>
            <li><img src={staticPath + "/assets/img/match/moca.png"} alt="모카" /></li>
            <li><img src={staticPath + "/assets/img/match/henry.png"} alt="헨리" /></li>
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
        ISFP 차가운 첫인상
        <strong>키리</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_kiri.png"} alt="키리" /></div>
      <div className="character_text">
        <p className="text">
          사소한 일에도 잘 흥분하며,
          날카롭게 말하는 스타일로 첫인상이 차갑다.
        </p>
        <p className="text">
          하지만 알면 알수록 정이 많다.
          또한, 털털한 성격의 소유자로
          사교적이며, 평판이 나쁘지 않다.
        </p>
        <p className="text">
          강력한 철벽으로 인해 소수의 친구와 깊게 인연을 맺으며, 의리를 매우 중요시한다!
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/arc.png"} alt="아크" /></li>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/ricky.png"} alt="리키" /></li>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
            <li><img src={staticPath + "/assets/img/match/popo.png"} alt="포포" /></li>
            <li><img src={staticPath + "/assets/img/match/panboo.png"} alt="팬부" /></li>
            <li><img src={staticPath + "/assets/img/match/noy.png"} alt="노이" /></li>
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
        ISFP 낙천적 몽상가
        <strong>페페</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_pepe.png"} alt="페페" /></div>
      <div className="character_text">
        <p className="text">
          기억력이 좋지 않아
          했던 말을 또 하는 경우가 허다하다.
        </p>
        <p className="text">
          특유의 낙천적인 성격으로
          당황스럽거나 불행한 일이 닥쳐도
          그냥 그러려니 하고 웃어넘기는 편.
        </p>
        <p className="text">
          관습과 같은 틀에 묶여있는 것을
          싫어하는 자유로운 영혼의 소유자이다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/berrie.png"} alt="베리" /></li>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
            <li><img src={staticPath + "/assets/img/match/viva.png"} alt="비바" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/midori.png"} alt="미도리" /></li>
            <li><img src={staticPath + "/assets/img/match/harabi.png"} alt="하라비" /></li>
            <li><img src={staticPath + "/assets/img/match/chet.png"} alt="쳇" /></li>
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
        ISFP 폼생폼사
        <strong>크루그</strong>
      </div>
      <div className="character_image"><img src={staticPath + "/assets/img/result/img_character_kroog.png"} alt="크루그" /></div>
      <div className="character_text">
        <p className="text">
          조용한 관종 스타일☆
          하고 싶은 것만 하며 살기 때문에
          타인에게 자유롭고 독립적인 사람으로 보인다.
        </p>
        <p className="text">
          고집과 자존심이 세지만, 천성이 선해서 
          남에게 피해가 되거나, 싫은 소리를 못 한다.
        </p>
        <p className="text">
          쿨한 척하지만, 마음이 여려
          상처를 쉽게 받으며, 마음에 담아둔다.
        </p>
        <Feature mbti={mbti} />
      </div>
      <div className="character_match">
        <div className="match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/aris.png"} alt="아리스" /></li>
            <li><img src={staticPath + "/assets/img/match/vic.png"} alt="빅" /></li>
            <li><img src={staticPath + "/assets/img/match/bell.png"} alt="벨" /></li>
            <li><img src={staticPath + "/assets/img/match/kuri.png"} alt="쿠리" /></li>
          </ul>
        </div>
        <div className="mis_match">
          <ul>
            <li><img src={staticPath + "/assets/img/match/monta.png"} alt="몬타" /></li>
            <li><img src={staticPath + "/assets/img/match/tenboo.png"} alt="텐부" /></li>
            <li><img src={staticPath + "/assets/img/match/zelly.png"} alt="젤리" /></li>
            <li><img src={staticPath + "/assets/img/match/greepo.png"} alt="그리포" /></li>
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