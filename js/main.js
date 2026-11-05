// jsを記述する際はここに記載していく

let isProcessing = false;


// マルチエンディング用の動画クラス名設定＆チートモード切替
// チートモード用場合わけ
let endcut = "";

// 最初の判定のため一度処理を行う 処理ランダム＆チート判定
if ($("#lock_end_none").hasClass("CHEAT_select")) {
    // ノーマルならランダム
    let number = Math.ceil(Math.random() * 3);

    if (number == 1) {
        endcut = "v-3th_Toilet";
    } else if (number == 2) {
        endcut = "v-3th_pc";
    } else if (number == 3) {
        endcut = "v-3th_brain";
    }

} else if ($("#lock_end_1th").hasClass("CHEAT_select")) {
    // 変数の固定
    endcut = "v-3th_Toilet";
} else if ($("#lock_end_2th").hasClass("CHEAT_select")) {
    // 変数の固定
    endcut = "v-3th_pc";
} else if ($("#lock_end_3th").hasClass("CHEAT_select")) {
    // 変数の固定
    endcut = "v-3th_brain";
}


// クリックした場合のための判定
$("#lock_end_none, #lock_end_1th, #lock_end_2th, #lock_end_3th").on("click", function () {

    $("#lock_end_none, #lock_end_1th, #lock_end_2th, #lock_end_3th").removeClass("CHEAT_select");
    $(this).addClass("CHEAT_select");

    // 最初の判定のため一度処理を行う 処理ランダム＆チート判定 上と一緒
    if ($("#lock_end_none").hasClass("CHEAT_select")) {
        // ノーマルならランダム
        let number = Math.ceil(Math.random() * 3);

        if (number == 1) {
            endcut = "v-3th_Toilet";
        } else if (number == 2) {
            endcut = "v-3th_pc";
        } else if (number == 3) {
            endcut = "v-3th_brain";
        }

    } else if ($("#lock_end_1th").hasClass("CHEAT_select")) {
        // 変数の固定
        endcut = "v-3th_Toilet";
    } else if ($("#lock_end_2th").hasClass("CHEAT_select")) {
        // 変数の固定
        endcut = "v-3th_pc";
    } else if ($("#lock_end_3th").hasClass("CHEAT_select")) {
        // 変数の固定
        endcut = "v-3th_brain";
    }

});


// 「ゲームに参加する」ボタンが押された時のスライド演出の関数
$("#start_btn").on("click", game_join);




// じゃんけん部門 ここから↓

// グー用
$("#gu_btn").on("click", function () {


    // 連打バグ対策
    if (isProcessing) return;   // クリックロックの宣言
    isProcessing = true; // クリックロック


    // クリックされた瞬間に、一旦表示を「考え中...」にする
    $("#pc_hands-original").show();
    $("#overlay_text").show();   // 重ねる文字を表示（ON）

    $("#pc_hands-result").hide();
    $("#judgment").html("pending...");

    setTimeout(function () {    // 3000ミリ秒（3秒）後に実行する

        // チートモード用に判定を追加
        if ($("#God_mode_off").hasClass("CHEAT_select")) {

            // 通常モード
            let num = Math.ceil(Math.random() * 3);
            if (num == 1) {
                $("#pc_hands-result").html("ROCK");
                $("#judgment").html("IT’S A DRAW !");   // IT’S A DRAW !
            } else if (num == 2) {
                $("#pc_hands-result").html("SCISSORS");
                $("#judgment").html("YOU WIN !");
            } else if (num == 3) {
                $("#pc_hands-result").html("PAPER");
                $("#judgment").html("YOU LOSE ...");    // YOU LOSE ...
            }

        } else if ($("#God_mode_on").hasClass("CHEAT_select_red")) {

            // 無敵モード

            $("#pc_hands-result").html("SCISSORS");
            $("#judgment").html("YOU WIN !");   // IT’S A DRAW !


        }

        $("#pc_hands-original").hide();
        $("#overlay_text").hide();   // 重ねていた文字も非表示にする

        $("#pc_hands-result").show();


        isProcessing = false;   // クリックロック解除

        judgment_end();     // 勝敗判定を関数化

        console.log(endcut);

    }, 3000); // ここで3秒（3000ms）を指定

});



// チョキ用
$("#cho_btn").on("click", function () {

    // 連打バグ対策
    if (isProcessing) return;   // クリックロックの宣言
    isProcessing = true; // クリックロック


    // クリックされた瞬間に、一旦表示を「考え中...」にする
    $("#pc_hands-original").show();
    $("#overlay_text").show();   // 重ねる文字を表示（ON）

    $("#pc_hands-result").hide();
    $("#judgment").html("pending...");

    setTimeout(function () {    // 3000ミリ秒（3秒）後に実行する

        // チートモード用に判定を追加
        if ($("#God_mode_off").hasClass("CHEAT_select")) {

            // 通常モード
            let num = Math.ceil(Math.random() * 3);
            if (num == 1) {
                $("#pc_hands-result").html("ROCK");
                $("#judgment").html("YOU LOSE ...");
            } else if (num == 2) {
                $("#pc_hands-result").html("SCISSORS");
                $("#judgment").html("IT’S A DRAW !");
            } else if (num == 3) {
                $("#pc_hands-result").html("PAPER");
                $("#judgment").html("YOU WIN !");
            }

        } else if ($("#God_mode_on").hasClass("CHEAT_select_red")) {

            // 無敵無敵モード

            $("#pc_hands-result").html("PAPER");
            $("#judgment").html("YOU WIN !");   // IT’S A DRAW !
        }


        $("#pc_hands-original").hide();
        $("#overlay_text").hide();   // 重ねていた文字も非表示にする

        $("#pc_hands-result").show();

        isProcessing = false;   // クリックロック解除

        judgment_end();     // 勝敗判定を関数化

        console.log(endcut);

    }, 3000); // ここで3秒（3000ms）を指定
});



// パー用
$("#par_btn").on("click", function () {

    // 連打バグ対策
    if (isProcessing) return;   // クリックロックの宣言
    isProcessing = true; // クリックロック


    // クリックされた瞬間に、一旦表示を「考え中...」にする
    $("#pc_hands-original").show();
    $("#overlay_text").show();   // 重ねる文字を表示（ON）

    $("#pc_hands-result").hide();
    $("#judgment").html("pending...");

    setTimeout(function () {    // 3000ミリ秒（3秒）後に実行する

        // チートモード用に判定を追加
        if ($("#God_mode_off").hasClass("CHEAT_select")) {

            // 通常モード
            let num = Math.ceil(Math.random() * 3);
            if (num == 1) {
                $("#pc_hands-result").html("ROCK");
                $("#judgment").html("YOU WIN !");
            } else if (num == 2) {
                $("#pc_hands-result").html("SCISSORS");
                $("#judgment").html("YOU LOSE ...");
            } else if (num == 3) {
                $("#pc_hands-result").html("PAPER");
                $("#judgment").html("IT’S A DRAW !");
            }
        } else if ($("#God_mode_on").hasClass("CHEAT_select_red")) {

            // 無敵無敵モード

            $("#pc_hands-result").html("ROCK");
            $("#judgment").html("YOU WIN !");   // IT’S A DRAW !
        }


        $("#pc_hands-original").hide();
        $("#overlay_text").hide();   // 重ねていた文字も非表示にする

        $("#pc_hands-result").show();

        isProcessing = false;   // クリックロック解除

        judgment_end();     // 勝敗判定を関数化

        console.log(endcut);

    }, 3000); // ここで3秒（3000ms）を指定
});



// じゃんけん部門 ここまで↑





// $(document).on にして、後から出たボタンCのクリックを絶対に逃さないようにします
$(document).on("click", "#end_re-btn", function () {
    // 目印付きのURLを作ってリロード
    window.location.href = window.location.pathname + "?autosubmit=true";
});

// ページが新しく読み込まれたときの処理
$(function () {
    // URLに目印「?autosubmit=true」が入っていたら
    if (location.search.includes("autosubmit=true")) {

        // リロード直後はボタンの準備ができていないことがあるので、0.5秒（500ミリ秒）ゆとりを持ってからPCに押させます
        setTimeout(function () {
            $("#start_btn").click();
        }, 500);

        // URLの目印を消して綺麗に戻しておく
        window.history.replaceState(null, '', window.location.pathname);
    }
});



// CHEATのモード設定

$("#God_mode_on").on("click", function () {
    $("#God_mode_off").removeClass("CHEAT_select");
    $("#God_mode_on").addClass("CHEAT_select_red");
    $("#gu_btn, #par_btn, #cho_btn").addClass("God_mode_on_card");
    $("#gu_btn div, #par_btn div, #cho_btn div").addClass("God_mode_on_text");
});

$("#God_mode_off").on("click", function () {
    $("#God_mode_on").removeClass("CHEAT_select_red");
    $("#gu_btn, #par_btn, #cho_btn").removeClass("God_mode_on_card");
    $("#gu_btn div, #par_btn div, #cho_btn div").removeClass("God_mode_on_text");
    $("#God_mode_off").addClass("CHEAT_select");
});


$("#lock_end_none").on("click", function () {
    $("#lock_end_none").addClass("CHEAT_select");
    $("#lock_end_1th, #lock_end_2th, #lock_end_3th").removeClass("CHEAT_select");
});

$("#lock_end_1th").on("click", function () {
    $("#lock_end_1th").addClass("CHEAT_select");
    $("#lock_end_1th").addClass("CHEAT_select");
    $("#lock_end_none, #lock_end_2th, #lock_end_3th").removeClass("CHEAT_select");
});

$("#lock_end_2th").on("click", function () {
    $("#lock_end_2th").addClass("CHEAT_select");
    $("#lock_end_none, #lock_end_1th, #lock_end_3th").removeClass("CHEAT_select");
});

$("#lock_end_3th").on("click", function () {
    $("#lock_end_3th").addClass("CHEAT_select");
    $("#lock_end_none, #lock_end_1th, #lock_end_2th").removeClass("CHEAT_select");
});

