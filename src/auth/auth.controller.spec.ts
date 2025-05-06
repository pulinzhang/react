import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;
  let jwtService: JwtService;

  const mockAuthService = {
    validateUser: jest.fn(),
    login: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('login', () => {
    it('should return access token when credentials are valid', async () => {
      const loginDto = {
        username: 'testuser',
        password: 'password123',
      };

      const mockUser = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
      };

      const mockToken = 'mock.jwt.token';

      mockAuthService.validateUser.mockResolvedValue(mockUser);
      mockJwtService.sign.mockReturnValue(mockToken);
      mockAuthService.login.mockResolvedValue({ access_token: mockToken });

      const result = await controller.login(loginDto);

      expect(result).toEqual({ access_token: mockToken });
      expect(mockAuthService.validateUser).toHaveBeenCalledWith(
        loginDto.username,
        loginDto.password,
      );
      expect(mockAuthService.login).toHaveBeenCalledWith(mockUser);
    });

    it('should throw UnauthorizedException when credentials are invalid', async () => {
      const loginDto = {
        username: 'testuser',
        password: 'wrongpassword',
      };

      mockAuthService.validateUser.mockResolvedValue(null);

      await expect(controller.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });
}); 