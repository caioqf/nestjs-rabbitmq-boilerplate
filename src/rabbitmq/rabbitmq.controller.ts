import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { RabbitmqService } from './rabbitmq.service';
import { CreateRabbitmqDto } from './dto/create-rabbitmq.dto';
import { UpdateRabbitmqDto } from './dto/update-rabbitmq.dto';

@Controller()
export class RabbitmqController {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

	@EventPattern('whatsapp_to_send')
	async send(@Payload() data: any, @Ctx() context: RmqContext) {
		try {
			await new Promise(r => setTimeout(r, 4000));
			const res = await this.senderService.sendMessage(data, data.variables)
			
		} catch (error) {
			throw new HttpException(error.message, error.status)
		}
	}

}
