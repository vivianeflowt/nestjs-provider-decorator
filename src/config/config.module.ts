import { DynamicModule, Module } from '@nestjs/common';

import { log } from 'console';
import { ProviderFactory } from '../common/provider-factory';
import { ConfigService } from './config.service';

interface ConfigModuleOptions {
  name: string;
}

const configModuleOptions = ProviderFactory.createValueProvider(
  'CONFIG_MODULE_OPTIONS',
  {
    name: 'vivi',
  },
);

@Module({})
export class ConfigModule {
  static register(options?: Partial<ConfigModuleOptions>): DynamicModule {
    log('ConfigModule.register');
    log(options);

    return {
      module: ConfigModule,
      providers: [ConfigService, configModuleOptions],
      exports: [ConfigService],
    };
  }
}
