import ILessons from "../../../db/models/lessons"
import ILessonsStep from "../../../db/models/lessonsStep"
import IQuestion from "../../../db/models/questions"
import IRmLessonsSummaryStep from "../../../db/models/rmLessonsSummarySteps"

export const LESSON_STEP_CREATED = '[Lesson] Lesson Step Created'
export const lessonStepCreated = async ({topic, partition, message, heartbeat,}) => {
    console.log("EVENT CONSUMED")
    console.log(message.key.toString())
    console.log(JSON.parse(message.value))
    const data: any = JSON.parse(message.value);

    const question = await IQuestion.findOne({
        where: {
            id: data.questionId,
        },
        raw: true
    })

    const lesson = await ILessons.findOne({
        where: {
            id: data.lessonId,
        },
        raw: true
    })

    const step = await ILessonsStep.findOne({
        where: {
            id: data.id,
        },
        raw: true
    })


    console.log({
        stepId: step.id,
        lessonId: lesson.id,
        lessonName: '',
        questionId: question.id,
        firstValue: question.firstValue,
        secondValue: question.secondValue,
        userAnswer: step.userAnswer,
        userId: step.userId,
        correctness: step.correctness
    })

    await IRmLessonsSummaryStep.create({
        stepId: step.id,
        lessonId: lesson.id,
        lessonName: '',
        questionId: question.id,
        firstValue: question.firstValue,
        secondValue: question.secondValue,
        userAnswer: step.userAnswer,
        userId: step.userId,
        correctness: step.correctness,
        createdAt: step.createdAt
    })

}