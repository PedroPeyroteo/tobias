// auth.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReasonPhrases } from 'http-status-codes';

@Controller('health')
@ApiTags('Health')
export class HealthController {
  @Get('')
  @ApiOperation({ summary: 'Retrieves server health info' })
  @ApiOkResponse({
    description: ReasonPhrases.OK,
    schema: {
      properties: {
        status: {
          type: 'string',
          example: ReasonPhrases.OK,
        },
      },
    },
  })
  async get(): Promise<unknown> {
    return {
      status: ReasonPhrases.OK,
    };
  }
}
