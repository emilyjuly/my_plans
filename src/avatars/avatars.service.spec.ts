// import { Test, TestingModule } from '@nestjs/testing';
// import { AvatarsService } from './avatars.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateAvatarDto } from './dto/create-avatar.dto';

// describe('AvatarsService', () => {
//   let service: AvatarsService;
//   let prismaService: PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [AvatarsService, PrismaService],
//     }).compile();

//     service = module.get<AvatarsService>(AvatarsService);
//     prismaService = module.get<PrismaService>(PrismaService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should create an avatar', async () => {
//     // Arrange
//     const createAvatarDto: CreateAvatarDto = {
//       name: 'Teste Avatar',
//       style: 'Test Style',
//     };

//     // Act
//     const createdAvatar = await service.create(createAvatarDto);

//     // Assert
//     expect(createdAvatar).toHaveProperty('id');
//     expect(createdAvatar.name).toBe(createAvatarDto.name);
//     expect(createdAvatar.style).toBe(createAvatarDto.style);

//     const fetchedAvatar = await prismaService.avatars.findUnique({
//       where: { id: createdAvatar.id },
//     });
//     expect(fetchedAvatar).toEqual(createdAvatar);
//   }, 50000);

//   it('should find an avatar by id', async () => {
//     // Arrange
//     const createAvatarDto: CreateAvatarDto = {
//       name: 'Teste Avatar',
//       style: 'Test Style',
//     };
//     const createdAvatar = await service.create(createAvatarDto);

//     // Act
//     const foundAvatar = await service.findOne(createdAvatar.id);

//     // Assert
//     expect(foundAvatar).toEqual(createdAvatar);
//   }, 50000);

//   it('should update an avatar by id', async () => {
//     // Arrange
//     const createAvatarDto: CreateAvatarDto = {
//       name: 'Teste Avatar',
//       style: 'Test Style',
//     };
//     const createdAvatar = await service.create(createAvatarDto);

//     const updatedAvatarDto = { name: 'Updated Name' };

//     // Act
//     const updatedAvatar = await service.update(
//       createdAvatar.id,
//       updatedAvatarDto,
//     );

//     // Assert
//     expect(updatedAvatar).toHaveProperty('id');
//     expect(updatedAvatar.name).toBe(updatedAvatarDto.name);
//     expect(updatedAvatar.style).toBe(createAvatarDto.style);

//     const fetchedAvatar = await prismaService.avatars.findUnique({
//       where: { id: createdAvatar.id },
//     });
//     expect(fetchedAvatar).toEqual(updatedAvatar);
//   }, 50000);

//   it('should remove an avatar by id', async () => {
//     // Arrange
//     const createAvatarDto: CreateAvatarDto = {
//       name: 'Teste Avatar',
//       style: 'Test Style',
//     };
//     const createdAvatar = await service.create(createAvatarDto);

//     // Act
//     await service.remove(createdAvatar.id);

//     // Assert
//     const fetchedAvatar = await prismaService.avatars.findUnique({
//       where: { id: createdAvatar.id },
//     });
//     expect(fetchedAvatar).toBeNull();
//   }, 50000);
// });
