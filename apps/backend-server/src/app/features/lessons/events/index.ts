import { kafka, Topics } from "../../../kafka/connection";
import { lessonStepCreated } from "./lesson-step-created";

export const lessonStepConsumer = kafka.consumer({
    groupId: 'test-group',
    rebalanceTimeout: 2000,
    retry: {
        maxRetryTime: 2000
    }
})


export const runLessonConsumers = async () => {
    await lessonStepConsumer.connect()
    await lessonStepConsumer.subscribe({topic: Topics.LessonSteps,})
    await lessonStepConsumer.run({
        eachMessage: lessonStepCreated
    })

}