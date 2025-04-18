function suffle_array(array) {
    let array_clone = [...array];
    for (let i = array_clone.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array_clone[i], array_clone[j]] = [array_clone[j], array_clone[i]];
    }
    return array_clone;
}

function generate_question(questionData, questionIndex) {
    let quizItem = $("<div/>", { id: `ID_Question_${questionData.question_id}`, class: "quiz-item" });

    let quizItemQuestion = $("<div/>", { class: "quiz-item_question" });
    let quizItemQuestionInfor = $("<p/>", { class: "quiz-item_question-infor fw-bold" });
    quizItemQuestionInfor.html(`Câu ${questionIndex + 1}: ${questionData.question}`).appendTo(quizItemQuestion);
    if (questionData.image && questionData.image !== "") {
        let quizItemQuestionImage = $("<img/>",
            {
                src: questionData.image,
                alt: "Question image"
            });
        quizItemQuestionImage.html(questionData.question).appendTo(quizItemQuestion);
    }

    let quizItemAnswers = $("<div/>", { class: "quiz-item_answers d-flex flex-wrap" });

    for (let index = 0; index < questionData.options.length; index++) {
        let quizItemAnswersFormCheck = $("<div/>", { class: `form-check ps-0 ${questionData.cssClass}` });
        let quizItemAnswerWrapper = $("<div/>", { class: "quiz-item-answer" })
        let quizItemAnswersFormCheckInput = $("<input/>",
            {
                id: `Question${questionIndex + 1}_${index + 1}`,
                class: "form-check-input",
                type: "radio",
                name: `Question_${questionData.question_id}`,
                "data-value": index,
                "data-target-control": `#ID_Question_Control_${questionData.question_id}`
            });
        quizItemAnswersFormCheckInput.appendTo(quizItemAnswerWrapper);
        let quizItemAnswersFormCheckLabel = $("<label/>",
            {
                class: "form-check-label",
                for: `Question${questionIndex + 1}_${index + 1}`
            });

        if (questionData.options[index].image !== "") {
            let quizItemAnswersFormCheckLabelImg = $("<img/>",
                {
                    class: "quiz-item-answer-img",
                    src: questionData.options[index].image,
                    height: 250
                });
            quizItemAnswersFormCheckLabelImg.appendTo(quizItemAnswersFormCheckLabel);
        }

        if (questionData.options[index].text !== "") {
            let quizItemAnswersFormCheckLabelText = $("<span/>");
            quizItemAnswersFormCheckLabelText.html(questionData.options[index].text);
            quizItemAnswersFormCheckLabelText.appendTo(quizItemAnswersFormCheckLabel);
        }

        quizItemAnswersFormCheckLabel.appendTo(quizItemAnswerWrapper);
        quizItemAnswerWrapper.appendTo(quizItemAnswersFormCheck);
        quizItemAnswersFormCheck.appendTo(quizItemAnswers);
    }

    quizItemQuestion.appendTo(quizItem);
    quizItemAnswers.appendTo(quizItem);

    return quizItem;
}

function generate_question_control(questionData, questionIndex) {
    let quizControlAnswerButton = $("<a/>", { id: `ID_Question_Control_${questionData.question_id}`, href: `#ID_Question_${questionData.question_id}`, class: "quiz-control-answer-button" });
    let quizControlAnswerButtonText = $("<span/>");
    quizControlAnswerButtonText.html(questionIndex + 1).appendTo(quizControlAnswerButton);
    return quizControlAnswerButton;
}

function start_quiz() {
    let quizView = $("#ID_quiz-view");
    let quizControlAnswers = $("#ID_quiz-control-answers");
    quizView.html("");
    quizControlAnswers.html("");
    let questions_bank = suffle_array(quizData);
    let maxNumber = questions_bank.length > NumberQuestions ? NumberQuestions : questions_bank.length;
    for (let index = 0; index < maxNumber; index++) {
        generate_question(questions_bank[index], index).appendTo(quizView);
        generate_question_control(questions_bank[index], index).appendTo(quizControlAnswers);
    }
}

function confirm_quiz() {
    $(".form-check .quiz-item-answer input.form-check-input").each((index, item) => {
        let questionID = $(item).attr("name").replace("Question_", "");
        let quizDataMaster = quizData.find(quiz => quiz.question_id == questionID);
        if ($(item).attr("data-value") == quizDataMaster.correct) {
            $(item).parent().removeClass("wrong");
            $(item).parent().addClass("right");
        }
        else {
            if ($(item).is(":checked")) {
                $(item).parent().removeClass("right");
                $(item).parent().addClass("wrong");
            }
        }
    });
}

function confirm_control_quiz(questionData) {
    for (let index = 0; index < questionData.length; index++) {
        let quizItem = $(`input[name="Question_${questionData[index].question_id}"]:checked`)
        let quizItemTargetControl = $(quizItem.attr("data-target-control"));
        if (quizItem.attr("data-value") == questionData[index].correct) {
            quizItemTargetControl.addClass("right");
            quizItemTargetControl.removeClass("wrong");
        }
        else {
            quizItemTargetControl.addClass("wrong");
            quizItemTargetControl.removeClass("right");
        }
    }
}

$(".quiz-start").on("click", function() {
    $(".quiz-start-container").addClass("d-none");
    $(".quiz-control").removeClass("d-none");
    start_quiz();
    $(".quiz-confirm").removeClass("d-none");
    $(".quiz-restart").addClass("d-none");
});

$(".quiz-restart").on("click", function() {
    $(".quiz-start-container").addClass("d-none");
    $(".quiz-control").removeClass("d-none");
    start_quiz();
    $(".quiz-confirm").removeClass("d-none");
    $(".quiz-restart").addClass("d-none");
});

$(".quiz-confirm").on("click", function() {
    if ($(".quiz-start-container").hasClass("d-none")) {
        confirm_quiz();
        confirm_control_quiz(quizData);
        let markModal = new bootstrap.Modal('#Mark-Modal');
        markModal.show();
        let maxNumber = quizData.length > NumberQuestions ? NumberQuestions : quizData.length;
        $(".quiz-mark-result").html(`${$(".quiz-control-answer-button.right").length}/${maxNumber}`);
        $(".quiz-confirm").addClass("d-none");
        $(".quiz-restart").removeClass("d-none");
    }
    else {
        let notifyModal = new bootstrap.Modal('#Notify-Modal');
        notifyModal.show();
    }
});

$("#minimize-quiz-control").on("click",  function() {
    $(".quiz-control").toggleClass("minimize")
});