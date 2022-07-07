import { Inject, Injectable } from '@nestjs/common';
import { ConfigModuleOptions } from '@nestjs/config';
import { log } from 'console';

@Injectable()
export class ConfigService {
  //

  constructor(
    @Inject('CONFIG_MODULE_OPTIONS')
    private readonly moduleOptions: ConfigModuleOptions,
  ) {
    log('ConfigService.constructor');
    log(moduleOptions);
  }

  debug() {
    log('ConfigService.debug');
  }
}
