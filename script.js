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
    if (questionData.image) {
        let quizItemQuestionImage = $("<img/>",
            {
                src: questionData.image,
                alt: "Question image"
            });
        quizItemQuestionImage.html(questionData.question).appendTo(quizItemQuestion);
    }

    let quizItemAnswers = $("<div/>", { class: "quiz-item_answers" });

    for (let index = 0; index < questionData.options.length; index++) {
        let quizItemAnswersFormCheck = $("<div/>", { class: "form-check" });
        let quizItemAnswersFormCheckInput = $("<input/>",
            {
                id: `Question${questionIndex + 1}_${index + 1}`,
                class: "form-check-input",
                type: "radio",
                name: `Question_${questionData.question_id}`,
                "data-value": index,
                "data-target-control": `#ID_Question_Control_${questionData.question_id}`
            });
        quizItemAnswersFormCheckInput.appendTo(quizItemAnswersFormCheck);
        let quizItemAnswersFormCheckLabel = $("<label/>",
            {
                class: "form-check-label",
                for: `Question${questionIndex + 1}_${index + 1}`
            });
        quizItemAnswersFormCheckLabel.html(questionData.options[index].text).appendTo(quizItemAnswersFormCheck);
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
    for (let index = 0; index < questions_bank.length; index++) {
        generate_question(questions_bank[index], index).appendTo(quizView);
        generate_question_control(questions_bank[index], index).appendTo(quizControlAnswers);
    }
}

function confirm_quiz(questionData) {
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
    start_quiz();
});

$(".quiz-confirm").on("click", function() {
    if ($(".quiz-start-container").hasClass("d-none")) {
        confirm_quiz(quizData);
        let markModal = new bootstrap.Modal('#Mark-Modal');
        markModal.show();
    
        $(".quiz-mark-result").html(`${$(".quiz-control-answer-button.right").length}/${quizData.length}`);
    }
    else {
        let notifyModal = new bootstrap.Modal('#Notify-Modal');
        notifyModal.show();
    }
});