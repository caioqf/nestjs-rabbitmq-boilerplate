import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({
	path:
		process.env.NODE_ENV === 'dev'
			? path.resolve(__dirname, '..', '..', '.env.dev')
			: path.resolve(__dirname, '..', '..', '.env')
});

const rmqConfig = `amqp://${process.env.RMQ_USER}:${process.env.RMQ_PASSWORD}@${process.env.RMQ_HOST}:${process.env.RMQ_PORT}/${process.env.RMQ_VHOST}`

export default rmqConfig;
