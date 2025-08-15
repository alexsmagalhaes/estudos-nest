import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll() {
    return this.messageRepository.find();
  }

  async findOne(id: string) {
    const message = await this.messageRepository.findOne({
      where: {
        id,
      },
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  async create(createMessageDto: CreateMessageDto) {
    const newMessage = this.messageRepository.create({
      ...createMessageDto,
      createdAt: new Date(),
      isRead: false,
    });

    return await this.messageRepository.save(newMessage);
  }

  async remove(id: string) {
    const message = await this.messageRepository.findOneBy({ id });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return await this.messageRepository.remove(message);
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    const message = await this.messageRepository.preload({
      id,
      ...updateMessageDto,
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return await this.messageRepository.save(message);
  }
}
