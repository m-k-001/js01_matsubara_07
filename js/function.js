// ゲーム参加を関数化
// 「ゲームに参加する」ボタンが押された時のスライド演出
function game_join() {

    if (isProcessing) return;
    isProcessing = true; // 画面遷移中に他の操作をされないようロック！

    // 1. 説明画面を「左側」へスライドさせて消す
    $("#start-screen").addClass("slide-out-left");


    // 2. ゲーム画面を右側から「中央」へスライドさせて入れる
    $("#game-play-screen").removeClass("hidden-screen").addClass("slide-in-center");

    // 上のタイトルテキストのスライド
    $("#h__text__ROCK").removeClass("hidden-screen").addClass("slide-in-ROCK");
    $("#h__text__PAPER").removeClass("hidden-screen").addClass("slide-in-PAPER");
    $("#h__text__SCISSORS").removeClass("hidden-screen").addClass("slide-in-SCISSORS");

    // 3. スライドのアニメーション（0.6秒）が終わったらロックを解除する
    setTimeout(function () {
        isProcessing = false; // 演出が終わったので、じゃんけんボタンを押せるように解除！
    }, 1000);

}










    




    // エンディング固定用
    // let endcut = "v-3th_Toilet";
    // let endcut = "v-3th_pc";
    // let endcut = "v-3th_brain";

// JUDGMENTの判定でYOU WIN !となったらを関数化
    function judgment_end() {
        if ($('#judgment').text().trim() === 'YOU WIN !' && $("#m__fraction__num").text().trim() === "0") {

            isProcessing = true;    // 連打バグ防止

            $("#m__fraction__num").html("1");

            // 動画の再生 jQueryには、動画に.htmlのような物がないので、[0]をつけるのがポイント
            $("#v-1th")[0].play();

            // 動画再生が終わったら、v-1thのactiveを消し、v-2thのactiveを書く
            $('#v-1th').on('ended', function () {
                $(this).removeClass('active');
                $('#v-2th').addClass('active');


                isProcessing = false;   // 連打バグ防止

            });



        } else if ($('#judgment').text().trim() === 'YOU WIN !' && $("#m__fraction__num").text().trim() === "1") {

            isProcessing = true;    // 連打バグ防止

            $("#m__fraction__num").html("2");

            // 動画の再生 jQueryには、動画に.htmlのような物がないので、[0]をつけるのがポイント
            $("#v-2th")[0].play();

            // 動画再生が終わったら、v-2thのactiveを消し、v-3thのactiveを書く
            $('#v-2th').on('ended', function () {
                $(this).removeClass('active');
                $('#' + endcut).addClass('active');

                isProcessing = false;   // 連打バグ防止

            });

        } else if ($('#judgment').text().trim() === 'YOU WIN !' && $("#m__fraction__num").text().trim() === "2") {

            isProcessing = true;    // 連打バグ防止

            $("#m__fraction__num").html("3");

            // 勝利回数表示が光る
            $("#m__fraction").addClass('m__fraction-v');

            // ３秒後にゲームUIを左にスライド
            setTimeout(function () {
                $("#game-play-screen").removeClass("slide-in-center").addClass("slide-out-left");
            }, 3000);

            // エンドクレジットを選択
            setTimeout(function () {
                $("#" + "end-" + endcut).removeClass("hidden-screen").addClass("slide-in-center");
            }, 4000);

            // 動画の再生 jQueryには、動画に.htmlのような物がないので、[0]をつけるのがポイント
            // 落ち動画の再生を3秒遅らせる
            setTimeout(function () {
                $('#' + endcut)[0].play();
            }, 3000);
        }
    }



