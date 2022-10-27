// 1. PC버전 서브메뉴 관련
    const menu = document.querySelector(".menu__main")       //전체 메뉴
    const subMenus = document.querySelectorAll(".list__drop") //하위 메뉴는 여러개
    const panel = document.querySelector(".header__pannel")  //하위 메뉴 나올때 나오는 판넬
    const header = document.querySelector(".header")         //전체 header


    //하위 메뉴 보여주기
    menu.addEventListener('mouseover', () => {  
        panel.style.display = 'block';              //스타일 display = 'block'
        subMenus.forEach(function(subMenu) {
            subMenu.style.display = 'block';
        })
    });  //마우스만 올려도 메뉴창이 나오게끔

    //하위 메뉴 숨기기
    header.addEventListener("mouseout", () => {
        panel.style.display = 'none';              //스타일 display = 'block'
        subMenus.forEach(function(subMenu) {
        subMenu.style.display = 'none';

    }); //마우스를 뗄 때 메뉴창이 없어지게끔 (버그없애기)

    panel.addEventListener("mouseout", () => {
        panel.style.display = 'none';              //스타일 display = 'block'
        subMenus.forEach(function(subMenu) {
        subMenu.style.display = 'none';
    }); //마우스를 뗄 때 메뉴창이 없어지게끔 (버그없애기)
})

// 2. 모바일 버전 메뉴 보이기, 숨기기

const Mhamburger = document.querySelector('.mobile.hamburger');
const Mclose = document.querySelector('.mobile.close'); //닫기 버튼
const Mnav = document.querySelector('.header__Mnav');   //모바일 메뉴 전체

    Mhamburger.addEventListener('click', () => {
        Mnav.style.display = 'block';
    })

    Mclose.addEventListener('click', () => {
        Mnav.style.display = 'none';
    })


// 3. 모바일 하위 메뉴 보이기 숨기기

    function showHide(e) {  //e는 이벤트 약자이고 값은 index.html에 있는 showHide(this)의 this에서 값을 받는다
                            //e 값은 this이다
        console.log(e.children)                            
        const MListDrop = e.children[2];    //내가 선택한 메뉴의 하위메뉴 선택
        // const displayAttr = MListDrop.style.display;     //<=실행 안됨
        const displayAttr = window.getComputedStyle(MListDrop).display;  //window는 최상위 객체

        if (displayAttr === 'none') {
            MListDrop.style.display = 'block';
        }
        else {
            MListDrop.style.display = 'none';
        }
    }

// 4. width가 767px 이상일 때 모바일 메뉴 보임 방지

                            //optimizedResize
    window.addEventListener('optimizedResize', () => {   //window는 전체 창에 적용
                                                //resize는 조건마다 사이즈 변경
        let winWidth = window.innerWidth;       //innerWidth는 창 크기 볼 수 있음
        console.log(winWidth);

        if (winWidth >= 767) {
            Mnav.style.display = 'none';
        }
    })
