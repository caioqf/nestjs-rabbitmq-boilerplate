import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import rmqConfig from 'config/config.rabbitmq';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.RMQ,
			options: {
				noAck: true,
				urls: [rmqConfig],
				queue: process.env.RMQ_QUEUE,
				queueOptions: {
					durable: true,
				}
			}
		},
	)

	app.listen().then(() => {
		Logger.log(`\u001b[33m[INFO] \u001b[32mWaiting messages in queue \u001b[34m${process.env.RMQ_QUEUE}...`);
	});
}

bootstrap();