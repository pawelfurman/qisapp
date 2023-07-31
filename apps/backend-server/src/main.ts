import * as bodyParser from 'body-parser';
import * as express from 'express';
import authRouter from './app/features/auth/routes'
import { router as setsRouter } from './app/features/sets/routes'
import { router as questionsRouter } from './app/features/questions/routes'
import { router as lessonsRouter } from './app/features/lessons/routes'
import {authenticateMiddleware,} from './app/features/auth/middleware/authenticate'
import { authorizationMiddleware } from './app/features/auth/middleware/authorization';
import { sequelize } from './app/db/connection';
import * as cors from 'cors';
import { Kafka } from 'kafkajs'
import { Chance } from 'chance'
import { consumer, producer, Topics } from './app/kafka/connection';
import { lessonStepConsumer, runLessonConsumers } from './app/features/lessons/events';

const app = express();



try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }) ;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }



  
  app.use(cors({
    origin: '*'
    }));

  

const router =  express.Router()
app.use(bodyParser.json())
app.use(express.json()) 

const routes = router
    .get("/", (req, res) => {
        console.log('hello guys!!')

        return res.json({
            msg: 'Helloo'
        })
    })
    .post("/auth", authenticateMiddleware, authorizationMiddleware, (req, res) => {
        return res.json({
            msg: "dont tell anybody"
        })
    })



app.use(routes)
app.use(authRouter)
app.use(setsRouter)
app.use(questionsRouter)
app.use(lessonsRouter)




const chance = new Chance()


app.listen(3000, async () => {
    console.log('Init kafka...')

    await producer.connect()

    // setInterval(async () => {
    //     await producer.send({
    //         topic: 'test',
    //         messages: [{
    //             value: 'Hello ' + chance.animal()
    //         }]
    //     })
    // }, 2000)


    await runLessonConsumers()

    console.log('Kafka initialized')
    console.log('Serve in localhost:3000!')
})



