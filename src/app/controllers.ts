import { Request, Response } from 'express'
import { transporter } from '../mailer/index'

class Controller {
    async send (req: Request, res:  Response) {
        const { email } = req.body
        await transporter.sendMail({
            from: "GuilhermeTeste@gmail.com",
            to: email,
            subject: "Fala Guilherme",
            text: "Meu nome é Guilherme Humberto e eu sou um Dev"
        })
        .then((message) => console.log(message))
        .catch(err => console.log("Deu ruim" + err))
    }
}

export default new Controller();