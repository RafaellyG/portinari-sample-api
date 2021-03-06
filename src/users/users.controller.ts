import { Controller, Post, Body, Query, HttpCode } from '@nestjs/common';

import { PasswordRecoveryService } from './password-recovery.service';
import { AuthenticationService } from './authentication.service';

@Controller('users/')
export class UsersController {
  constructor(
    private readonly passwordRecoveryService: PasswordRecoveryService,
    private readonly authenticationService: AuthenticationService
  ) {}

  @HttpCode(200)
  @Post('password-recovery')
  async passwordRecovery(@Query('type') type, @Body() data) {
    return await this.passwordRecoveryService.passwordRecovery(type, data);
  }

  @Post('sms-validation')
  async smsValidation(@Body() data) {
    return await this.passwordRecoveryService.smsValidation(data);
  }

  @Post('authentication')
  async authentication(@Body() data) {
    return await this.authenticationService.authentication(data);
  }
}
