function ActionLink() {
    let imgs = ["img/1.png", "img/2.png", "img/3.png", "img/5.png", "img/10.png", "img/20.png"];
    let check = ['❑', '❑', '❑', '❑', '❑', '❑'];

    const tonn1 = (
        <div>
            <p>Перевозки до 1 тонны</p>
            <p>Объём до 10м³</p>
           </div>
    );
    const tonn2 = (
      <div>
        <p>Перевозки до 2 тонн</p>
        <p>Объём до 25м³</p>
      </div>
    );
    const tonn3 = (
      <div>
        <p>Перевозки до 3 тонн</p>
        <p>Объём до 30м³</p>
      </div>
    );
  const tonn5 = (
    <div>
      <p>Перевозки до 5 тонн</p>
      <p>Объём до 45м³</p>
    </div>
  );
  const tonn10 = (
    <div>
      <p>Перевозки до 10 тонн</p>
      <p>Объём до 60м³</p>
    </div>
  );
  const tonn20 = (
    <div>
      <p>Перевозки до 20 тонн</p>
      <p>Объём до 120м³</p>
    </div>
  );
    let texts = [tonn1, tonn2, tonn3, tonn5, tonn10, tonn20];
    let cursor = 0;
    slide();

    function slide() {
        ReactDOM.render(
            <img style={{position: 'relative', bottom: '-30px'}} height="300px" src={imgs[cursor]} />,
            document.getElementById('img')
        );
        check[cursor] = '☑';
        ReactDOM.render(
            <div style={{position: 'relative', bottom: '25px'}}>{check}</div>,
            document.getElementById('checkbox')
        );
        ReactDOM.render(
          <div style={{marginBottom: '25px'}}><div style={{marginBottom: '25px'}}>{texts[cursor]}</div>
              <a className="button" href="#order">Оставить заявку</a></div>,
            document.getElementById('servicetext')
        )
    }
    function handleClickL(e) {
        e.preventDefault();
        check[cursor] = '❑';
        if (cursor === 0){
            cursor = 2;
        }else {cursor -= 1;}
        slide();
    }
    function handleClickR(e) {
        e.preventDefault();
        check[cursor] = '❑';
        if (cursor === imgs.length-1){
            cursor = 0;
        }else {cursor += 1;}
        slide();
    }

    return (
        <div style={{display: 'inline-flex'}}>
            <a href="#" onClick={handleClickL} style={{color: 'black', fontSize: '40px', position: 'relative', right: '320px', bottom: '120px'}}>
                &larr;
            </a>
            <a href="#" onClick={handleClickR} style={{color: 'black', fontSize: '40px', position: 'relative', left: '320px', bottom: '120px'}}>
                &rarr;
            </a>
        </div>

    );
}
ReactDOM.render(
    <ActionLink/>,
    document.getElementById('slider')
);
