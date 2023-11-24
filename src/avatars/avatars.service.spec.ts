import { Test, TestingModule } from '@nestjs/testing';
import { AvatarsService } from './avatars.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAvatarDto } from './dto/create-avatar.dto';

describe('AvatarsService', () => {
  let service: AvatarsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvatarsService, PrismaService],
    }).compile();

    service = module.get<AvatarsService>(AvatarsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create avatar', async () => {
    // Arrange
    const createAvatarDto: CreateAvatarDto = {
      name: 'Teste Avatar',
      style: 'Test Style',
    };

    // Act
    const createdAvatar = await service.create(createAvatarDto);

    // Assert
    expect(createdAvatar).toHaveProperty('id');
    expect(createdAvatar.name).toBe(createAvatarDto.name);
    expect(createdAvatar.style).toBe(createAvatarDto.style);

    const fetchedAvatar = await prismaService.avatars.findUnique({
      where: { id: createdAvatar.id },
    });
    expect(fetchedAvatar).toEqual(createdAvatar);
  }, 50000);
});
