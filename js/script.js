_.templateSettings = {
    evaluate: /\{\[([\s\S]+?)\]\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g
};

$.fn.cardGame = function() {
    var $card = $(this),
        questionsData = gameData.questionsData,
        answersData = gameData.answersData,

        quizTmpl = _.template($("#quiz__tmpl").html()),
        answerTmpl = _.template($("#answer__tmpl").html()),
        finishTmpl = _.template($("#finish__tmpl").html());

    $card.on("click.cardGame", ".js-to-question", function(e) {
        var $this = $(e.currentTarget),
            questionId = $this.data("question");
        if (questionId === -1) {

        } else {
            $card.html(quizTmpl(_.extend(questionsData[questionId], {id: questionId})))
        }
    });

    $card.on("click.cardGame", ".js-to-answer", function(e) {
        var $this = $(e.currentTarget),
            questionId = $this.data("question"),
            answerId = $this.data("answer");

        $card.html(answerTmpl(answersData[questionId][answerId]));
    });

    return {
        init: function () {
            $card
                .removeClass("card-content__type-start")
                .addClass("card-content__type-quiz")
                .html(quizTmpl(_.extend(questionsData[1], {id: 1})))
        }
    };


};

$(document).ready(function() {
    setTimeout(function () {
        var startTmpl = _.template($("#start__tmpl").html());
        $("#card")
            .removeClass("card-content__type-loader")
            .addClass("card-content__type-start")
            .html(startTmpl());
        $("#start-button")
            .one("click.cardGame", function(e) {
                $("#card").cardGame().init();
            });
    }, 1000);

});









