//---------------nav-burger-right--------------
$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        // 用 on 監聽 .burgar_btn 的點擊功能
        e.preventDefault();
        // 點擊 burgar_btn 時，讓原本的 a 連結效果無效
        $('body').toggleClass('menu-show');
        // 讓瀏覽器知道有點擊 .burgar_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burgar_btn-show
    });
});

$(window).scroll(function () {
    //小屏幕下的导航条折叠
    if ($(window).width() < 768) {
        //点击导航链接之后，把导航选项折叠起来
        $(".menu a").click(function () {
            $('body').removeClass('menu-show');
        });
        //滚动屏幕时，把导航选项折叠起来
        $(window).scroll(function () {
            $('body').removeClass('menu-show');
        });
    }
});

//--------------spring------------------------
$('.solar-terms-0').click(function () {
    // console.log(this);
    // console.log($(this).attr('class'))
    // const imgSeason = $(this).attr('class')
    $('.spring-change').empty()
    $('.spring-change').append('<img src="images/solar-terms-0.png" alt="">')
    $('.spring-poem').empty()
    $('.spring-poem').append('<h1>惠崇春江晚景</h1>' +
        '<h2>蘇軾</h2>' +
        '<p class="mb-0">竹外桃花三兩枝，春江水暖鴨先知。' + ' <br>' + '蔞蒿滿地蘆芽短，正是河豚欲上時。</p>')
})

$('.solar-terms-1').click(function () {
    $('.spring-change').empty()
    $('.spring-change').append('<img src="images/solar-terms-1.png" alt="">')
    $('.spring-poem').empty()
    $('.spring-poem').append('<h1>滁州西澗</h1>' +
        '<h2>韋應物</h2>' +
        '<p class="mb-0">獨憐幽草澗邊生，上有黃鸝深樹鳴。' + ' <br>' + '春潮帶雨晚來急，野渡無人舟自橫。</p>')
})

$('.solar-terms-2').click(function () {
    $('.spring-change').empty()
    $('.spring-change').append('<img src="images/solar-terms-2.png" alt="">')
    $('.spring-poem').empty()
    $('.spring-poem').append('<h1>春居雜興</h1>' +
        '<h2>王禹偁</h2>' +
        '<p class="mb-0">一夜春雷百蟄空，山家籬落起蛇蟲。' + ' <br>' + '無端蚯蚓爭頭角，觸破莓苔氣似虹。</p>')
})

$('.solar-terms-3').click(function () {
    $('.spring-change').empty()
    $('.spring-change').append('<img src="images/solar-terms-3.png" alt="">')
    $('.spring-poem').empty()
    $('.spring-poem').append('<h1>春日田家</h1>' +
        '<h2>宋琬</h2>' +
        '<p class="mb-0">野田黃雀自為群，山叟相過話舊聞。' + ' <br>' + '夜半飯牛呼婦起，明朝種樹是春分。</p>')
})

$('.solar-terms-4').click(function () {
    $('.spring-change').empty()
    $('.spring-change').append('<img src="images/solar-terms-4.png" alt="">')
    $('.spring-poem').empty()
    $('.spring-poem').append('<h1>清明</h1>' +
        '<h2>陳子龍</h2>' +
        '<p class="mb-0">江南煙雨畫屏中，半鏡斜窗弄小紅。' + ' <br>' + '燕子不來樓閣迴，柳絲今日向東風。</p>')
})

$('.solar-terms-5').click(function () {
    $('.spring-change').empty()
    $('.spring-change').append('<img src="images/solar-terms-5.png" alt="">')
    $('.spring-poem').empty()
    $('.spring-poem').append('<h1>漁歌子</h1>' +
        '<h2>張志和</h2>' +
        '<p class="mb-0">西塞山前白鷺飛，桃花流水鱖魚肥。' + ' <br>' + '青箬笠，綠蓑衣，斜風細雨不須歸。</p>')
})
//--------------summer------------------------
$('.solar-terms-6').click(function () {
    console.log($(this).attr);
    $('.summer-change').empty()
    $('.summer-change').append('<img src="images/solar-terms-6.png" alt="">')
    $('.summer-poem').empty()
    $('.summer-poem').append('<h1>夏日田園雜興</h1>' +
        '<h2>范成大</h2>' +
        '<p class="mb-0">梅子金黃杏子肥，麥花雪白菜花稀。' + ' <br>' + '日長籬落無人過，惟有蜻蜓蛺蝶飛。</p>')
})

$('.solar-terms-7').click(function () {
    $('.summer-change').empty()
    $('.summer-change').append('<img src="images/solar-terms-7.png" alt="">')
    $('.summer-poem').empty()
    $('.summer-poem').append('<h1>小滿</h1>' +
        '<h2>吳藕汀</h2>' +
        '<p class="mb-0">白桐落盡破檐牙，或恐年年梓樹花。' + ' <br>' + '小滿田塍尋草藥，農閒莫問動三車。</p>')
})

$('.solar-terms-8').click(function () {
    $('.summer-change').empty()
    $('.summer-change').append('<img src="images/solar-terms-8.png" alt="">')
    $('.summer-poem').empty()
    $('.summer-poem').append('<h1>約客</h1>' +
        '<h2>趙師秀</h2>' +
        '<p class="mb-0">黃梅時節家家雨，青草池塘處處蛙。' + ' <br>' + '有約不來過夜半，閒敲棋子落燈花。</p>')
})

$('.solar-terms-9').click(function () {
    $('.summer-change').empty()
    $('.summer-change').append('<img src="images/solar-terms-9.png" alt="">')
    $('.summer-poem').empty()
    $('.summer-poem').append('<h1>竹枝詞</h1>' +
        '<h2>劉禹錫</h2>' +
        '<p class="mb-0">楊柳青青江水平，聞郎江上唱歌聲。' + ' <br>' + '東邊日出西邊雨，道是無晴卻有晴。</p>')
})

$('.solar-terms-10').click(function () {
    $('.summer-change').empty()
    $('.summer-change').append('<img src="images/solar-terms-10.png" alt="">')
    $('.summer-poem').empty()
    $('.summer-poem').append('<h1>納涼</h1>' +
        '<h2>秦觀</h2>' +
        '<p class="mb-0">攜扙來追柳外涼，畫橋南畔倚胡床。' + ' <br>' + '月明船笛參差起，風定池蓮自在香。</p>')
})

$('.solar-terms-11').click(function () {
    $('.summer-change').empty()
    $('.summer-change').append('<img src="images/solar-terms-11.png" alt="">')
    $('.summer-poem').empty()
    $('.summer-poem').append('<h1>山亭夏日</h1>' +
        '<h2>高駢</h2>' +
        '<p class="mb-0">綠樹陰濃夏日長，樓臺倒影入池塘。' + ' <br>' + '水晶簾動微風起，滿架薔薇一院香。</p>')
})
//--------------fall------------------------
$('.solar-terms-12').click(function () {
    $('.fall-change').empty()
    $('.fall-change').append('<img src="images/solar-terms-12.png" alt="">')
    $('.fall-poem').empty()
    $('.fall-poem').append('<h1>立秋</h1>' +
        '<h2>劉翰</h2>' +
        '<p class="mb-0">乳鴉啼散玉屏空，一枕新涼一扇風。' + ' <br>' + '睡起秋聲無覓處，滿階梧桐月明中。</p>')
})

$('.solar-terms-13').click(function () {
    $('.fall-change').empty()
    $('.fall-change').append('<img src="images/solar-terms-13.png" alt="">')
    $('.fall-poem').empty()
    $('.fall-poem').append('<h1>處暑</h1>' +
        '<h2>左河水</h2>' +
        '<p class="mb-0">一度暑出處暑時，秋風送爽已覺遲。' + ' <br>' + '日移南徑斜暉里，割稻陌阡車馬馳。</p>')
})

$('.solar-terms-14').click(function () {
    $('.fall-change').empty()
    $('.fall-change').append('<img src="images/solar-terms-14.png" alt="">')
    $('.fall-poem').empty()
    $('.fall-poem').append('<h1>衰荷</h1>' +
        '<h2>白居易</h2>' +
        '<p class="mb-0">白露凋花花不殘，涼風吹葉葉初幹。' + ' <br>' + '無人解愛蕭條境，更繞衰叢一匝看。</p>')
})

$('.solar-terms-15').click(function () {
    $('.fall-change').empty()
    $('.fall-change').append('<img src="images/solar-terms-15.png" alt="">')
    $('.fall-poem').empty()
    $('.fall-poem').append('<h1>秋詞</h1>' +
        '<h2>劉禹錫</h2>' +
        '<p class="mb-0">自古逢秋悲寂寥，我言秋日勝春朝。' + ' <br>' + '晴空一鶴排雲上，便引詩情到碧霄。</p>')
})

$('.solar-terms-16').click(function () {
    $('.fall-change').empty()
    $('.fall-change').append('<img src="images/solar-terms-16.png" alt="">')
    $('.fall-poem').empty()
    $('.fall-poem').append('<h1>敗荷鶺鴒圖</h1>' +
        '<h2>唐寅</h2>' +
        '<p class="mb-0">飛喚行搖類急難，野田寒露欲成團。' + ' <br>' + '莫言四海皆兄長，骨肉而今冷眼看。</p>')
})

$('.solar-terms-17').click(function () {
    $('.fall-change').empty()
    $('.fall-change').append('<img src="images/solar-terms-17.png" alt="">')
    $('.fall-poem').empty()
    $('.fall-poem').append('<h1>山行</h1>' +
        '<h2>杜牧</h2>' +
        '<p class="mb-0">遠上寒山石徑斜，白雲生處有人家。' + ' <br>' + '停車坐愛楓林晚，霜葉紅於二月花。</p>')
})
//--------------winter------------------------
$('.solar-terms-18').click(function () {
    $('.winter-change').empty()
    $('.winter-change').append('<img src="images/solar-terms-18.png" alt="">')
    $('.winter-poem').empty()
    $('.winter-poem').append('<h1>立冬前一日霜對菊有感</h1>' +
        '<h2>錢時</h2>' +
        '<p class="mb-0">昨夜清霜冷絮裯，紛紛紅葉滿階頭。' + ' <br>' + '園林盡掃西風去，惟有黃花不負秋。</p>')
})

$('.solar-terms-19').click(function () {
    $('.winter-change').empty()
    $('.winter-change').append('<img src="images/solar-terms-19.png" alt="">')
    $('.winter-poem').empty()
    $('.winter-poem').append('<h1>小雪</h1>' +
        '<h2>戴叔倫</h2>' +
        '<p class="mb-0">花雪隨風不厭看，更多還肯失林巒。' + ' <br>' + '愁人正在書窗下，一片飛來一片寒。</p>')
})

$('.solar-terms-20').click(function () {
    $('.winter-change').empty()
    $('.winter-change').append('<img src="images/solar-terms-20.png" alt="">')
    $('.winter-poem').empty()
    $('.winter-poem').append('<h1>對雪</h1>' +
        '<h2>高駢</h2>' +
        '<p class="mb-0">六出飛花入戶時，坐看青竹變瓊枝。' + ' <br>' + '如今好上高樓望，蓋盡人間惡路岐。</p>')
})

$('.solar-terms-21').click(function () {
    $('.winter-change').empty()
    $('.winter-change').append('<img src="images/solar-terms-21.png" alt="">')
    $('.winter-poem').empty()
    $('.winter-poem').append('<h1>冬至日獨游吉祥寺</h1>' +
        '<h2>蘇軾</h2>' +
        '<p class="mb-0">井底微陽回未回，蕭蕭寒雨濕枯荄。' + ' <br>' + '何人更似蘇夫子，不是花時肯獨來。</p>')
})

$('.solar-terms-22').click(function () {
    $('.winter-change').empty()
    $('.winter-change').append('<img src="images/solar-terms-22.png" alt="">')
    $('.winter-poem').empty()
    $('.winter-poem').append('<h1>竇園醉中前後五絕句</h1>' +
        '<h2>陳與義</h2>' +
        '<p class="mb-0">東風吹雨小寒生，楊柳飛花亂晚晴。' + ' <br>' + '客子從今無可恨，竇家園裡有鶯聲。</p>')
})

$('.solar-terms-23').click(function () {
    $('.winter-change').empty()
    $('.winter-change').append('<img src="images/solar-terms-23.png" alt="">')
    $('.winter-poem').empty()
    $('.winter-poem').append('<h1>連夕大寒示鄰士</h1>' +
        '<h2>李光</h2>' +
        '<p class="mb-0">凍雲垂地北風顛，妝點江湖欲雪天。' + ' <br>' + '我亦隨身有蓑笠，興來同上釣魚船。</p>')
})
//----------------------------------season-card----------------------
const luckyText = ['香吉', '呱吉', '普吉', '奈米吉', '終吉', '恰吉', '王老吉', '耐吉', '羅百吉', '吉卜力', '吉他', '吉古拉', '哥吉拉', '吉翁']

let circleNum = 0
$('.season-card').click(function () {
    if (circleNum == 0) {
        const cardNum = (Math.floor(Math.random() * 24));
        const luckyNum = (Math.floor(Math.random() * 14));
        $('.season-card .back').empty();
        $('.season-card .back').append(`<h1>${luckyText[luckyNum]}</h1> <img src="images/season-card-${cardNum}.jpg" alt="">`);
        $('.season-card').css('transform', 'rotateY(900deg)');
        circleNum = circleNum + 1;
        console.log(circleNum);
    }
    else {
        $('.season-card').css('transform', 'rotateY(720deg)');
        circleNum = circleNum - 1;
    }
})

//----------------------------------season-book----------------------
var pages = document.getElementsByClassName('page')
var zIndexList = []
var zIndexList2 = []
var index = 1
for (let page of pages) {
    zIndexList.push(index)
    index++
    page.addEventListener('click', function () {

        var isfy = false
        return (e) => {
            page.style.zIndex = zIndexList[0] //设置zindex翻页得时候 按顺序翻页
            console.log(page.style.zIndex)
            zIndexList.splice(0, 1)
            if (zIndexList.length == 0) {
                zIndexList = [...zIndexList2]
            }
            if (isfy) {
                page.style.transform = 'rotateY(0deg)'
                isfy = false

            } else {
                page.style.transform = 'rotateY(180deg)'
                isfy = true
            }
        }
    }())
}
zIndexList2 = [...zIndexList]
//-----------------------situation -----------------------
// 选择图片画廊元素
var elem = document.querySelector('.m-p-g');
document.addEventListener('DOMContentLoaded', function () {
    var gallery = new MaterialPhotoGallery(elem);
});

// $('.situation-wrap img').click(function(){
//     $('nav').css('position','relative')
//     console.log($('nav').css('position'));
// });

// $('.active, .m-p-g__controls, .m-p-g__controls-close, .m-p-g__btn, .m-p-g__btn svg').click(function(){
//     $('nav').css('position','fixed')
//     console.log($('nav').css('position'));
// });

// $('div').has('.m-p-g__fullscreen').not('.active')(function(){
//     $('nav').css('position','fixed')
//     console.log($('nav').css('position'));
// })

//---------------------------scrollTo-----------------------------
$(window).scroll(function () {
    // console.log('scrollTop:', $(window).scrollTop());
    if ($(window).scrollTop() >= 200) {
        $('.introduce h1, .introduce p, .introduce li').css({
            transform: 'translateX(0px)',
            opacity: 1,
        })
    }
    else {
        $('.introduce h1, .introduce p, .introduce li').css({
            transform: 'translateX(1000px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 700) {
        $('.loop-run').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })
    }
    else {
        $('.loop-run').css({
            transform: 'translateY(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 1280) {
        $('.design-tittle').css({
            opacity: 1,
        })
    }
    else {
        $('.design-tittle').css({
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 1665) {
        $('.spring-section').css({
            transform: 'translateX(0px) rotate(0deg)',
            opacity: 1,
        })
    }
    else {
        $('.spring-section').css({
            transform: 'translateX(-200px) rotate(-360deg)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 1665) {
        $('.spring-change, .spring-poem').css({
            transform: 'translateX(0px)',
            opacity: 1,
        })
    }
    else {
        $('.spring-change, .spring-poem').css({
            transform: 'translateX(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 2110) {
        $('.summer-section').css({
            transform: 'translateX(0px) rotate(0deg)',
            opacity: 1,
        })
    }
    else {
        $('.summer-section').css({
            transform: 'translateX(-200px) rotate(-360deg)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 2110) {
        $('.summer-change, .summer-poem').css({
            transform: 'translateX(0px)',
            opacity: 1,
        })
    }
    else {
        $('.summer-change, .summer-poem').css({
            transform: 'translateX(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 2555) {
        $('.fall-section').css({
            transform: 'translateX(0px) rotate(0deg)',
            opacity: 1,
        })
    }
    else {
        $('.fall-section').css({
            transform: 'translateX(-200px) rotate(-360deg)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 2555) {
        $('.fall-change, .fall-poem').css({
            transform: 'translateX(0px)',
            opacity: 1,
        })
    }
    else {
        $('.fall-change, .fall-poem').css({
            transform: 'translateX(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 3000) {
        $('.winter-section').css({
            transform: 'translateX(0px) rotate(0deg)',
            opacity: 1,
        })
    }
    else {
        $('.winter-section').css({
            transform: 'translateX(-200px) rotate(-360deg)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 3000) {
        $('.winter-change, .winter-poem').css({
            transform: 'translateX(0px)',
            opacity: 1,
        })
    }
    else {
        $('.winter-change, .winter-poem').css({
            transform: 'translateX(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 3540) {
        $('.camera').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })
    }
    else {
        $('.camera').css({
            transform: 'translateY(200px)',
            opacity: 0,
        })
    }

    if ($(window).scrollTop() >= 3900) {
        $('.season-book').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })
    }
    else {
        $('.season-book').css({
            transform: 'translateY(200px)',
            opacity: 0,
        })
    }
})

// ----------up-----------
$(document).ready(function () {
    $('.up').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
            scrollTop: 0,
        }, 1200)
    });
    $('nav').on('click', 'a', function (e) {
        e.preventDefault();
        const anchor = $(this).attr('href');
        const linkScroll = $(anchor).offset().top;
        $('html,body').stop().animate({
            scrollTop: linkScroll
        }, 1200)
    });
});

let lastScroll = 0;
$(window).scroll(function () {
    let scrollNow = $(window).scrollTop();
    if (scrollNow > lastScroll) {
        $("nav").css("opacity", "0")
        // $("nav").addClass("d-none")
    }
    else {
        $("nav").css("opacity", "1")
        // $("nav").removeClass("d-none")
    }
    lastScroll = scrollNow;
})