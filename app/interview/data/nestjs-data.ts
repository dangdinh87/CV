import { QAItem } from '../interview-data'

export const NESTJS_DATA: QAItem[] = [
  {
    id: 3260,
    category: 'NestJS',
    subcategory: 'Core',
    level: 'beginner',
    q: 'NestJS là gì? Tại sao nên dùng NestJS thay vì Express thuần?',
    a: `NestJS là framework Node.js được xây dựng trên TypeScript, lấy cảm hứng từ Angular. NestJS cung cấp kiến trúc module rõ ràng, Dependency Injection tích hợp sẵn và nhiều tính năng enterprise-ready.

**Lý do chọn NestJS thay vì Express thuần:**
- **Kiến trúc có cấu trúc:** Modules, Controllers, Services phân tách rõ ràng
- **TypeScript first:** Type safety, decorators, metadata reflection
- **Dependency Injection:** IoC container tích hợp sẵn, dễ test
- **Scalable:** Hỗ trợ Microservices, GraphQL, WebSockets, gRPC
- **Convention over configuration:** Giảm boilerplate, dễ onboard team

**Bên dưới vẫn dùng Express (hoặc Fastify):**
\`\`\`typescript
// main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
\`\`\``,
    q_en: 'What is NestJS? Why use NestJS instead of plain Express?',
    a_en: `NestJS is a Node.js framework built on TypeScript, inspired by Angular. It provides a clear modular architecture, built-in Dependency Injection, and many enterprise-ready features.

**Why choose NestJS over plain Express:**
- **Structured architecture:** Modules, Controllers, Services clearly separated
- **TypeScript first:** Type safety, decorators, metadata reflection
- **Dependency Injection:** Built-in IoC container, easy to test
- **Scalable:** Microservices, GraphQL, WebSockets, gRPC support
- **Convention over configuration:** Less boilerplate, easier team onboarding

**Under the hood still uses Express (or Fastify):**
\`\`\`typescript
// main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
\`\`\``,
  },
  {
    id: 3261,
    category: 'NestJS',
    subcategory: 'Core',
    level: 'beginner',
    q: 'Module trong NestJS là gì? Giải thích cấu trúc @Module decorator.',
    a: `Module là đơn vị tổ chức cơ bản trong NestJS, nhóm các thành phần liên quan lại. Mỗi app có ít nhất một **root module** (AppModule).

**Cấu trúc @Module:**
\`\`\`typescript
@Module({
  imports: [],      // Modules khác mà module này cần
  controllers: [],  // Controllers xử lý HTTP requests
  providers: [],    // Services, Repositories, Factories, Guards...
  exports: [],      // Providers cho phép modules khác dùng
})
export class UsersModule {}
\`\`\`

**Ví dụ thực tế:**
\`\`\`typescript
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService], // AuthModule có thể dùng UsersService
})
export class UsersModule {}
\`\`\`

**Các loại module:**
- **Feature Module:** Nhóm tính năng (UsersModule, AuthModule)
- **Shared Module:** Export providers để tái sử dụng
- **Global Module:** \`@Global()\` — providers available everywhere
- **Dynamic Module:** Cấu hình runtime (forRoot, forRootAsync)`,
    q_en: 'What is a Module in NestJS? Explain the @Module decorator structure.',
    a_en: `A Module is the basic organizational unit in NestJS, grouping related components. Every app has at least one root module (AppModule).

**@Module structure:**
\`\`\`typescript
@Module({
  imports: [],      // Other modules this module needs
  controllers: [],  // Controllers handling HTTP requests
  providers: [],    // Services, Repositories, Factories, Guards...
  exports: [],      // Providers other modules can use
})
export class UsersModule {}
\`\`\`

**Real-world example:**
\`\`\`typescript
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService], // AuthModule can use UsersService
})
export class UsersModule {}
\`\`\`

**Module types:**
- **Feature Module:** Groups a feature (UsersModule, AuthModule)
- **Shared Module:** Exports providers for reuse
- **Global Module:** \`@Global()\` — providers available everywhere
- **Dynamic Module:** Runtime configuration (forRoot, forRootAsync)`,
  },
  {
    id: 3262,
    category: 'NestJS',
    subcategory: 'Core',
    level: 'beginner',
    q: 'Controller trong NestJS làm gì? Cách định nghĩa routes với decorators?',
    a: `Controller chịu trách nhiệm nhận requests và trả về responses. Controller map HTTP routes đến handler methods thông qua decorators.

\`\`\`typescript
@Controller('users') // Base route: /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()                    // GET /users
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')              // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Post()                  // POST /users
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Patch(':id')            // PATCH /users/:id
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(+id, dto)
  }

  @Delete(':id')           // DELETE /users/:id
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
\`\`\`

**Các parameter decorators:**
- \`@Param()\` — route params
- \`@Query()\` — query string
- \`@Body()\` — request body
- \`@Headers()\` — request headers
- \`@Req() / @Res()\` — raw request/response`,
    q_en: 'What does a Controller do in NestJS? How to define routes with decorators?',
    a_en: `A Controller is responsible for receiving requests and returning responses. Controllers map HTTP routes to handler methods via decorators.

\`\`\`typescript
@Controller('users') // Base route: /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()                    // GET /users
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')              // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Post()                  // POST /users
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Patch(':id')            // PATCH /users/:id
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(+id, dto)
  }

  @Delete(':id')           // DELETE /users/:id
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
\`\`\`

**Parameter decorators:**
- \`@Param()\` — route params
- \`@Query()\` — query string
- \`@Body()\` — request body
- \`@Headers()\` — request headers
- \`@Req() / @Res()\` — raw request/response`,
  },
  {
    id: 3263,
    category: 'NestJS',
    subcategory: 'Core',
    level: 'beginner',
    q: 'Provider và Dependency Injection trong NestJS hoạt động như thế nào?',
    a: `**Provider** là bất kỳ class nào được annotate với \`@Injectable()\` — services, repositories, factories, helpers. NestJS quản lý vòng đời và inject chúng tự động.

**Cách hoạt động của DI:**
\`\`\`typescript
// 1. Định nghĩa provider
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepo.find()
  }
}

// 2. Đăng ký trong module
@Module({
  providers: [UsersService], // NestJS tạo và quản lý instance
})
export class UsersModule {}

// 3. Inject vào controller (qua constructor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
\`\`\`

**Scope của Providers:**
| Scope | Mô tả |
|---|---|
| \`DEFAULT\` (Singleton) | Một instance cho toàn app |
| \`REQUEST\` | Instance mới cho mỗi request |
| \`TRANSIENT\` | Instance mới mỗi lần inject |

**Custom Provider:**
\`\`\`typescript
// Value provider
{ provide: 'CONFIG', useValue: { apiKey: '...' } }

// Factory provider
{ provide: 'DB', useFactory: (config) => createConnection(config), inject: [ConfigService] }
\`\`\``,
    q_en: 'How do Providers and Dependency Injection work in NestJS?',
    a_en: `A **Provider** is any class annotated with \`@Injectable()\` — services, repositories, factories, helpers. NestJS manages their lifecycle and injects them automatically.

**How DI works:**
\`\`\`typescript
// 1. Define provider
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepo.find()
  }
}

// 2. Register in module
@Module({
  providers: [UsersService], // NestJS creates and manages the instance
})
export class UsersModule {}

// 3. Inject into controller (via constructor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
\`\`\`

**Provider Scopes:**
| Scope | Description |
|---|---|
| \`DEFAULT\` (Singleton) | One instance for the entire app |
| \`REQUEST\` | New instance per request |
| \`TRANSIENT\` | New instance each time injected |

**Custom Provider:**
\`\`\`typescript
// Value provider
{ provide: 'CONFIG', useValue: { apiKey: '...' } }

// Factory provider
{ provide: 'DB', useFactory: (config) => createConnection(config), inject: [ConfigService] }
\`\`\``,
  },
  {
    id: 3264,
    category: 'NestJS',
    subcategory: 'Middleware',
    level: 'intermediate',
    q: 'Giải thích Request Lifecycle trong NestJS: Middleware → Guards → Interceptors → Pipes → Controller → Exception Filters.',
    a: `NestJS xử lý request qua một pipeline có thứ tự rõ ràng:

\`\`\`
Incoming Request
  ↓
Middleware          — xử lý raw req/res (logging, cors, session)
  ↓
Guards             — kiểm tra authorization (trả về true/false)
  ↓
Interceptors (pre) — transform request trước khi vào handler
  ↓
Pipes              — validate & transform input data
  ↓
Controller Handler — business logic chính
  ↓
Interceptors (post)— transform response
  ↓
Exception Filters  — bắt và format errors
  ↓
Response
\`\`\`

**Ví dụ minh họa từng lớp:**
\`\`\`typescript
// Guard: kiểm tra JWT
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest()
    return validateToken(req.headers.authorization)
  }
}

// Interceptor: ghi log thời gian xử lý
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now()
    return next.handle().pipe(
      tap(() => console.log(\`Request took \${Date.now() - start}ms\`))
    )
  }
}

// Pipe: validate DTO
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // validate...
    return value
  }
}
\`\`\``,
    q_en: 'Explain the NestJS Request Lifecycle: Middleware → Guards → Interceptors → Pipes → Controller → Exception Filters.',
    a_en: `NestJS processes requests through a clearly ordered pipeline:

\`\`\`
Incoming Request
  ↓
Middleware          — handle raw req/res (logging, cors, session)
  ↓
Guards             — check authorization (return true/false)
  ↓
Interceptors (pre) — transform request before entering handler
  ↓
Pipes              — validate & transform input data
  ↓
Controller Handler — main business logic
  ↓
Interceptors (post)— transform response
  ↓
Exception Filters  — catch and format errors
  ↓
Response
\`\`\`

**Example of each layer:**
\`\`\`typescript
// Guard: JWT check
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest()
    return validateToken(req.headers.authorization)
  }
}

// Interceptor: log processing time
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now()
    return next.handle().pipe(
      tap(() => console.log(\`Request took \${Date.now() - start}ms\`))
    )
  }
}

// Pipe: validate DTO
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // validate...
    return value
  }
}
\`\`\``,
  },
  {
    id: 3265,
    category: 'NestJS',
    subcategory: 'Guards',
    level: 'intermediate',
    q: 'Guards trong NestJS là gì? Cách implement JWT Auth Guard?',
    a: `**Guards** quyết định request có được phép đi tiếp không (authorization). Khác với Middleware, Guards có access vào \`ExecutionContext\` — biết được handler nào sẽ được gọi.

**JWT Auth Guard thực tế:**
\`\`\`typescript
// jwt-auth.guard.ts
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const token = this.extractToken(request)

    if (!token) throw new UnauthorizedException()

    try {
      const payload = this.jwtService.verify(token)
      request.user = payload // attach user to request
      return true
    } catch {
      throw new UnauthorizedException()
    }
  }

  private extractToken(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : null
  }
}
\`\`\`

**Sử dụng Guard:**
\`\`\`typescript
// Áp dụng cho toàn controller
@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfileController {}

// Áp dụng cho 1 route
@Get('me')
@UseGuards(JwtAuthGuard)
getMe(@Request() req) {
  return req.user
}

// Guard toàn app (global)
app.useGlobalGuards(new JwtAuthGuard(jwtService))
\`\`\`

**Public decorator để bỏ qua guard:**
\`\`\`typescript
export const Public = () => SetMetadata('isPublic', true)

// Trong guard
const isPublic = this.reflector.get('isPublic', context.getHandler())
if (isPublic) return true
\`\`\``,
    q_en: 'What are Guards in NestJS? How to implement a JWT Auth Guard?',
    a_en: `**Guards** decide whether a request should proceed (authorization). Unlike Middleware, Guards have access to \`ExecutionContext\` — they know which handler will be called.

**Practical JWT Auth Guard:**
\`\`\`typescript
// jwt-auth.guard.ts
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const token = this.extractToken(request)

    if (!token) throw new UnauthorizedException()

    try {
      const payload = this.jwtService.verify(token)
      request.user = payload // attach user to request
      return true
    } catch {
      throw new UnauthorizedException()
    }
  }

  private extractToken(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : null
  }
}
\`\`\`

**Using the Guard:**
\`\`\`typescript
// Apply to entire controller
@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfileController {}

// Apply to single route
@Get('me')
@UseGuards(JwtAuthGuard)
getMe(@Request() req) {
  return req.user
}

// Global guard
app.useGlobalGuards(new JwtAuthGuard(jwtService))
\`\`\`

**Public decorator to skip guard:**
\`\`\`typescript
export const Public = () => SetMetadata('isPublic', true)

// In the guard
const isPublic = this.reflector.get('isPublic', context.getHandler())
if (isPublic) return true
\`\`\``,
  },
  {
    id: 3266,
    category: 'NestJS',
    subcategory: 'Pipes',
    level: 'intermediate',
    q: 'Pipes trong NestJS là gì? Cách dùng ValidationPipe với class-validator?',
    a: `**Pipes** có hai use-case chính: **validation** (ném exception nếu data không hợp lệ) và **transformation** (chuyển đổi input sang dạng mong muốn).

**Setup ValidationPipe toàn app:**
\`\`\`typescript
// main.ts
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,      // strip unknown properties
  forbidNonWhitelisted: true, // throw error for unknown props
  transform: true,      // auto-transform types (string → number)
  transformOptions: {
    enableImplicitConversion: true,
  },
}))
\`\`\`

**DTO với class-validator:**
\`\`\`typescript
import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator'
import { Transform } from 'class-transformer'

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string

  @IsString()
  @MinLength(8)
  password: string

  @IsOptional()
  @IsEnum(['admin', 'user'])
  role?: 'admin' | 'user'
}
\`\`\`

**Custom Pipe — parse và validate ID:**
\`\`\`typescript
@Injectable()
export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const n = parseInt(value, 10)
    if (isNaN(n) || n <= 0) {
      throw new BadRequestException(\`"\${value}" is not a positive integer\`)
    }
    return n
  }
}

// Dùng trong controller
@Get(':id')
findOne(@Param('id', ParsePositiveIntPipe) id: number) {}
\`\`\``,
    q_en: 'What are Pipes in NestJS? How to use ValidationPipe with class-validator?',
    a_en: `**Pipes** have two main use cases: **validation** (throw exception if data is invalid) and **transformation** (convert input to the desired type).

**Setup global ValidationPipe:**
\`\`\`typescript
// main.ts
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,      // strip unknown properties
  forbidNonWhitelisted: true, // throw error for unknown props
  transform: true,      // auto-transform types (string → number)
  transformOptions: {
    enableImplicitConversion: true,
  },
}))
\`\`\`

**DTO with class-validator:**
\`\`\`typescript
import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator'
import { Transform } from 'class-transformer'

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string

  @IsString()
  @MinLength(8)
  password: string

  @IsOptional()
  @IsEnum(['admin', 'user'])
  role?: 'admin' | 'user'
}
\`\`\`

**Custom Pipe — parse and validate ID:**
\`\`\`typescript
@Injectable()
export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const n = parseInt(value, 10)
    if (isNaN(n) || n <= 0) {
      throw new BadRequestException(\`"\${value}" is not a positive integer\`)
    }
    return n
  }
}

// Use in controller
@Get(':id')
findOne(@Param('id', ParsePositiveIntPipe) id: number) {}
\`\`\``,
  },
  {
    id: 3267,
    category: 'NestJS',
    subcategory: 'Interceptors',
    level: 'intermediate',
    q: 'Interceptors trong NestJS hoạt động như thế nào? Nêu các use-case phổ biến.',
    a: `**Interceptors** wrap việc thực thi handler, cho phép chạy code **trước và sau** handler. Chúng dùng RxJS Observable.

**Cú pháp cơ bản:**
\`\`\`typescript
@Injectable()
export class MyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Code chạy TRƯỚC handler
    console.log('Before handler')

    return next.handle().pipe(
      // Code chạy SAU handler
      tap(data => console.log('After handler', data)),
      map(data => ({ success: true, data })), // transform response
      catchError(err => throwError(() => new Error(err.message))),
    )
  }
}
\`\`\`

**Use-case 1: Wrap response trong object chuẩn:**
\`\`\`typescript
@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map(data => ({ success: true, data, timestamp: new Date().toISOString() }))
    )
  }
}
\`\`\`

**Use-case 2: Cache response:**
\`\`\`typescript
@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private cache = new Map<string, any>()

  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest()
    const key = req.url

    if (this.cache.has(key)) {
      return of(this.cache.get(key))
    }

    return next.handle().pipe(
      tap(response => this.cache.set(key, response))
    )
  }
}
\`\`\`

**Use-case 3: Timeout:**
\`\`\`typescript
return next.handle().pipe(timeout(5000)) // throw TimeoutError sau 5s
\`\`\``,
    q_en: 'How do Interceptors work in NestJS? List common use cases.',
    a_en: `**Interceptors** wrap handler execution, allowing code to run **before and after** the handler. They use RxJS Observables.

**Basic syntax:**
\`\`\`typescript
@Injectable()
export class MyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Code runs BEFORE handler
    console.log('Before handler')

    return next.handle().pipe(
      // Code runs AFTER handler
      tap(data => console.log('After handler', data)),
      map(data => ({ success: true, data })), // transform response
      catchError(err => throwError(() => new Error(err.message))),
    )
  }
}
\`\`\`

**Use case 1: Wrap response in standard object:**
\`\`\`typescript
@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map(data => ({ success: true, data, timestamp: new Date().toISOString() }))
    )
  }
}
\`\`\`

**Use case 2: Cache response:**
\`\`\`typescript
@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private cache = new Map<string, any>()

  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest()
    const key = req.url

    if (this.cache.has(key)) {
      return of(this.cache.get(key))
    }

    return next.handle().pipe(
      tap(response => this.cache.set(key, response))
    )
  }
}
\`\`\`

**Use case 3: Timeout:**
\`\`\`typescript
return next.handle().pipe(timeout(5000)) // throw TimeoutError after 5s
\`\`\``,
  },
  {
    id: 3268,
    category: 'NestJS',
    subcategory: 'Filters',
    level: 'intermediate',
    q: 'Exception Filters trong NestJS là gì? Cách tạo global error handler.',
    a: `**Exception Filters** bắt các exceptions được throw trong ứng dụng và format response lỗi. NestJS có built-in filter cho \`HttpException\`.

**Custom Global Exception Filter:**
\`\`\`typescript
@Catch() // Bắt TẤT CẢ exceptions (không truyền args)
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    let status = 500
    let message = 'Internal server error'

    if (exception instanceof HttpException) {
      status = exception.getStatus()
      const res = exception.getResponse()
      message = typeof res === 'string' ? res : (res as any).message
    } else if (exception instanceof Error) {
      message = exception.message
    }

    this.logger.error(\`[\${request.method}] \${request.url} — \${status}: \${message}\`)

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}
\`\`\`

**Đăng ký global:**
\`\`\`typescript
// main.ts
app.useGlobalFilters(new AllExceptionsFilter(new Logger()))

// Hoặc qua DI (preferred)
@Module({
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter }
  ]
})
\`\`\`

**Built-in HTTP Exceptions:**
\`\`\`typescript
throw new BadRequestException('Invalid data')
throw new UnauthorizedException()
throw new ForbiddenException()
throw new NotFoundException(\`User #\${id} not found\`)
throw new ConflictException('Email already exists')
throw new InternalServerErrorException()
\`\`\``,
    q_en: 'What are Exception Filters in NestJS? How to create a global error handler.',
    a_en: `**Exception Filters** catch exceptions thrown in the application and format error responses. NestJS has a built-in filter for \`HttpException\`.

**Custom Global Exception Filter:**
\`\`\`typescript
@Catch() // Catch ALL exceptions (no args)
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    let status = 500
    let message = 'Internal server error'

    if (exception instanceof HttpException) {
      status = exception.getStatus()
      const res = exception.getResponse()
      message = typeof res === 'string' ? res : (res as any).message
    } else if (exception instanceof Error) {
      message = exception.message
    }

    this.logger.error(\`[\${request.method}] \${request.url} — \${status}: \${message}\`)

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}
\`\`\`

**Register globally:**
\`\`\`typescript
// main.ts
app.useGlobalFilters(new AllExceptionsFilter(new Logger()))

// Or via DI (preferred)
@Module({
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter }
  ]
})
\`\`\`

**Built-in HTTP Exceptions:**
\`\`\`typescript
throw new BadRequestException('Invalid data')
throw new UnauthorizedException()
throw new ForbiddenException()
throw new NotFoundException(\`User #\${id} not found\`)
throw new ConflictException('Email already exists')
throw new InternalServerErrorException()
\`\`\``,
  },
  {
    id: 3269,
    category: 'NestJS',
    subcategory: 'TypeORM',
    level: 'intermediate',
    q: 'Cách tích hợp TypeORM với NestJS? Repository pattern hoạt động như thế nào?',
    a: `**TypeORM** là ORM phổ biến nhất với NestJS, hỗ trợ Active Record và Data Mapper (Repository) pattern.

**Setup:**
\`\`\`typescript
// app.module.ts
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // KHÔNG dùng trong production
      migrations: ['dist/migrations/*.js'],
    }),
  ],
})
export class AppModule {}
\`\`\`

**Entity:**
\`\`\`typescript
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ select: false }) // không return trong query mặc định
  password: string

  @CreateDateColumn()
  createdAt: Date

  @OneToMany(() => Post, post => post.author)
  posts: Post[]
}
\`\`\`

**Service với Repository:**
\`\`\`typescript
// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule {}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({ relations: ['posts'] })
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } })
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto)
    return this.userRepo.save(user)
  }

  // Query Builder cho query phức tạp
  async findActiveWithPosts() {
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.posts', 'post')
      .where('user.isActive = :active', { active: true })
      .orderBy('user.createdAt', 'DESC')
      .getMany()
  }
}
\`\`\``,
    q_en: 'How to integrate TypeORM with NestJS? How does the Repository pattern work?',
    a_en: `**TypeORM** is the most popular ORM with NestJS, supporting Active Record and Data Mapper (Repository) patterns.

**Setup:**
\`\`\`typescript
// app.module.ts
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // NEVER use in production
      migrations: ['dist/migrations/*.js'],
    }),
  ],
})
export class AppModule {}
\`\`\`

**Entity:**
\`\`\`typescript
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ select: false }) // not returned in default queries
  password: string

  @CreateDateColumn()
  createdAt: Date

  @OneToMany(() => Post, post => post.author)
  posts: Post[]
}
\`\`\`

**Service with Repository:**
\`\`\`typescript
// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
})
export class UsersModule {}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({ relations: ['posts'] })
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } })
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto)
    return this.userRepo.save(user)
  }

  // Query Builder for complex queries
  async findActiveWithPosts() {
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.posts', 'post')
      .where('user.isActive = :active', { active: true })
      .orderBy('user.createdAt', 'DESC')
      .getMany()
  }
}
\`\`\``,
  },
  {
    id: 3270,
    category: 'NestJS',
    subcategory: 'Auth',
    level: 'intermediate',
    q: 'Implement JWT Authentication flow trong NestJS với @nestjs/jwt và Passport?',
    a: `**Full JWT Auth flow:**

**1. Cài đặt:**
\`\`\`bash
pnpm add @nestjs/jwt @nestjs/passport passport passport-jwt bcryptjs
pnpm add -D @types/passport-jwt @types/bcryptjs
\`\`\`

**2. Auth Module:**
\`\`\`typescript
@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
\`\`\`

**3. Auth Service:**
\`\`\`typescript
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const payload = { sub: user.id, email: user.email, role: user.role }
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    }
  }
}
\`\`\`

**4. JWT Strategy:**
\`\`\`typescript
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    })
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email, role: payload.role }
  }
}
\`\`\`

**5. Auth Controller:**
\`\`\`typescript
@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password)
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Request() req) {
    return req.user
  }
}
\`\`\``,
    q_en: 'Implement JWT Authentication flow in NestJS with @nestjs/jwt and Passport?',
    a_en: `**Full JWT Auth flow:**

**1. Install:**
\`\`\`bash
pnpm add @nestjs/jwt @nestjs/passport passport passport-jwt bcryptjs
pnpm add -D @types/passport-jwt @types/bcryptjs
\`\`\`

**2. Auth Module:**
\`\`\`typescript
@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
\`\`\`

**3. Auth Service:**
\`\`\`typescript
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const payload = { sub: user.id, email: user.email, role: user.role }
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    }
  }
}
\`\`\`

**4. JWT Strategy:**
\`\`\`typescript
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    })
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email, role: payload.role }
  }
}
\`\`\`

**5. Auth Controller:**
\`\`\`typescript
@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password)
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Request() req) {
    return req.user
  }
}
\`\`\``,
  },
  {
    id: 3271,
    category: 'NestJS',
    subcategory: 'Config',
    level: 'beginner',
    q: 'ConfigModule và ConfigService trong NestJS hoạt động như thế nào?',
    a: `**@nestjs/config** giúp quản lý environment variables an toàn với type-safety.

**Setup:**
\`\`\`typescript
// app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,     // không cần import lại ở modules khác
      envFilePath: '.env',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        PORT: Joi.number().default(3000),
        DB_HOST: Joi.string().required(),
        JWT_SECRET: Joi.string().min(32).required(),
      }),
    }),
  ],
})
export class AppModule {}
\`\`\`

**Typed Config với namespace:**
\`\`\`typescript
// config/database.config.ts
export const databaseConfig = registerAs('database', () => ({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
}))

// Sử dụng
@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {
    // Type-safe access
    const host = this.dbConfig.host
    const port = this.dbConfig.port

    // Hoặc qua ConfigService
    const jwtSecret = this.configService.get<string>('JWT_SECRET')
    const dbHost = this.configService.get<string>('database.host')
  }
}
\`\`\``,
    q_en: 'How do ConfigModule and ConfigService work in NestJS?',
    a_en: `**@nestjs/config** helps manage environment variables safely with type-safety.

**Setup:**
\`\`\`typescript
// app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,     // no need to import in other modules
      envFilePath: '.env',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        PORT: Joi.number().default(3000),
        DB_HOST: Joi.string().required(),
        JWT_SECRET: Joi.string().min(32).required(),
      }),
    }),
  ],
})
export class AppModule {}
\`\`\`

**Typed Config with namespace:**
\`\`\`typescript
// config/database.config.ts
export const databaseConfig = registerAs('database', () => ({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
}))

// Usage
@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {
    // Type-safe access
    const host = this.dbConfig.host
    const port = this.dbConfig.port

    // Or via ConfigService
    const jwtSecret = this.configService.get<string>('JWT_SECRET')
    const dbHost = this.configService.get<string>('database.host')
  }
}
\`\`\``,
  },
  {
    id: 3272,
    category: 'NestJS',
    subcategory: 'Testing',
    level: 'intermediate',
    q: 'Cách viết unit tests và integration tests trong NestJS?',
    a: `NestJS dùng Jest và cung cấp \`Test.createTestingModule()\` để tạo test environment.

**Unit Test (Service):**
\`\`\`typescript
describe('UsersService', () => {
  let service: UsersService

  const mockUserRepo = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepo,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  afterEach(() => jest.clearAllMocks())

  describe('findAll', () => {
    it('should return array of users', async () => {
      const users = [{ id: 1, email: 'test@test.com' }]
      mockUserRepo.find.mockResolvedValue(users)

      const result = await service.findAll()

      expect(result).toEqual(users)
      expect(mockUserRepo.find).toHaveBeenCalledTimes(1)
    })
  })
})
\`\`\`

**Integration / E2E Test:**
\`\`\`typescript
describe('UsersController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersService)
      .useValue({ findAll: () => [{ id: 1, email: 'a@b.com' }] })
      .compile()

    app = moduleFixture.createNestApplication()
    app.useGlobalPipes(new ValidationPipe())
    await app.init()
  })

  afterAll(() => app.close())

  it('GET /users should return 200', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveLength(1)
        expect(res.body[0].email).toBe('a@b.com')
      })
  })
})
\`\`\``,
    q_en: 'How to write unit tests and integration tests in NestJS?',
    a_en: `NestJS uses Jest and provides \`Test.createTestingModule()\` to create a test environment.

**Unit Test (Service):**
\`\`\`typescript
describe('UsersService', () => {
  let service: UsersService

  const mockUserRepo = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepo,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  afterEach(() => jest.clearAllMocks())

  describe('findAll', () => {
    it('should return array of users', async () => {
      const users = [{ id: 1, email: 'test@test.com' }]
      mockUserRepo.find.mockResolvedValue(users)

      const result = await service.findAll()

      expect(result).toEqual(users)
      expect(mockUserRepo.find).toHaveBeenCalledTimes(1)
    })
  })
})
\`\`\`

**Integration / E2E Test:**
\`\`\`typescript
describe('UsersController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersService)
      .useValue({ findAll: () => [{ id: 1, email: 'a@b.com' }] })
      .compile()

    app = moduleFixture.createNestApplication()
    app.useGlobalPipes(new ValidationPipe())
    await app.init()
  })

  afterAll(() => app.close())

  it('GET /users should return 200', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveLength(1)
        expect(res.body[0].email).toBe('a@b.com')
      })
  })
})
\`\`\``,
  },
  {
    id: 3273,
    category: 'NestJS',
    subcategory: 'Microservices',
    level: 'advanced',
    q: 'NestJS Microservices hoạt động như thế nào? Các transport layers phổ biến?',
    a: `NestJS Microservices là pattern giao tiếp giữa services, hỗ trợ nhiều transport layers khác nhau.

**Transport layers:**
| Transport | Dùng khi |
|---|---|
| TCP | Internal services, low latency |
| Redis | Pub/Sub, simple messaging |
| NATS | Lightweight, cloud-native |
| Kafka | High-throughput event streaming |
| RabbitMQ | Complex routing, dead-letter |
| gRPC | Strongly-typed, high performance |

**Setup Microservice (TCP):**
\`\`\`typescript
// users-service/main.ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.TCP,
  options: { host: 'localhost', port: 3001 },
})
await app.listen()

// Message handler
@Controller()
export class UsersController {
  @MessagePattern('find_user')      // Request/Response
  findUser(@Payload() data: { id: number }) {
    return this.usersService.findOne(data.id)
  }

  @EventPattern('user_created')    // Fire-and-forget
  handleUserCreated(@Payload() data: any) {
    this.logger.log('User created:', data)
  }
}
\`\`\`

**API Gateway gọi microservice:**
\`\`\`typescript
// gateway/app.module.ts
@Module({
  imports: [
    ClientsModule.register([{
      name: 'USERS_SERVICE',
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3001 },
    }]),
  ],
})
export class AppModule {}

// gateway/users.controller.ts
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private client: ClientProxy,
  ) {}

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.client.send('find_user', { id: +id }) // Request/Response
  }

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    this.client.emit('user_created', dto) // Fire-and-forget
    return { message: 'Processing' }
  }
}
\`\`\``,
    q_en: 'How do NestJS Microservices work? What are the common transport layers?',
    a_en: `NestJS Microservices is a pattern for inter-service communication, supporting multiple transport layers.

**Transport layers:**
| Transport | Use when |
|---|---|
| TCP | Internal services, low latency |
| Redis | Pub/Sub, simple messaging |
| NATS | Lightweight, cloud-native |
| Kafka | High-throughput event streaming |
| RabbitMQ | Complex routing, dead-letter |
| gRPC | Strongly-typed, high performance |

**Setup Microservice (TCP):**
\`\`\`typescript
// users-service/main.ts
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.TCP,
  options: { host: 'localhost', port: 3001 },
})
await app.listen()

// Message handler
@Controller()
export class UsersController {
  @MessagePattern('find_user')      // Request/Response
  findUser(@Payload() data: { id: number }) {
    return this.usersService.findOne(data.id)
  }

  @EventPattern('user_created')    // Fire-and-forget
  handleUserCreated(@Payload() data: any) {
    this.logger.log('User created:', data)
  }
}
\`\`\`

**API Gateway calling microservice:**
\`\`\`typescript
// gateway/app.module.ts
@Module({
  imports: [
    ClientsModule.register([{
      name: 'USERS_SERVICE',
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3001 },
    }]),
  ],
})
export class AppModule {}

// gateway/users.controller.ts
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private client: ClientProxy,
  ) {}

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.client.send('find_user', { id: +id }) // Request/Response
  }

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    this.client.emit('user_created', dto) // Fire-and-forget
    return { message: 'Processing' }
  }
}
\`\`\``,
  },
  {
    id: 3274,
    category: 'NestJS',
    subcategory: 'Advanced',
    level: 'advanced',
    q: 'CQRS pattern trong NestJS: Commands, Queries, Events, Sagas?',
    a: `**CQRS (Command Query Responsibility Segregation)** tách biệt write operations (Commands) và read operations (Queries). NestJS cung cấp \`@nestjs/cqrs\`.

\`\`\`bash
pnpm add @nestjs/cqrs
\`\`\`

**Command (Write):**
\`\`\`typescript
// create-user.command.ts
export class CreateUserCommand {
  constructor(
    public readonly email: string,
    public readonly name: string,
  ) {}
}

// create-user.handler.ts
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private userRepo: UserRepository,
    private eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand) {
    const user = await this.userRepo.create(command)
    this.eventBus.publish(new UserCreatedEvent(user.id))
    return user
  }
}
\`\`\`

**Query (Read):**
\`\`\`typescript
export class GetUserQuery {
  constructor(public readonly id: number) {}
}

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  async execute(query: GetUserQuery) {
    return this.userReadModel.findById(query.id)
  }
}
\`\`\`

**Event + Saga:**
\`\`\`typescript
export class UserCreatedEvent {
  constructor(public readonly userId: number) {}
}

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent) {
    // Send welcome email
    this.emailService.sendWelcome(event.userId)
  }
}
\`\`\`

**Controller dùng CommandBus / QueryBus:**
\`\`\`typescript
@Controller('users')
export class UsersController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(dto.email, dto.name))
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetUserQuery(+id))
  }
}
\`\`\``,
    q_en: 'CQRS pattern in NestJS: Commands, Queries, Events, Sagas?',
    a_en: `**CQRS (Command Query Responsibility Segregation)** separates write operations (Commands) from read operations (Queries). NestJS provides \`@nestjs/cqrs\`.

\`\`\`bash
pnpm add @nestjs/cqrs
\`\`\`

**Command (Write):**
\`\`\`typescript
// create-user.command.ts
export class CreateUserCommand {
  constructor(
    public readonly email: string,
    public readonly name: string,
  ) {}
}

// create-user.handler.ts
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private userRepo: UserRepository,
    private eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand) {
    const user = await this.userRepo.create(command)
    this.eventBus.publish(new UserCreatedEvent(user.id))
    return user
  }
}
\`\`\`

**Query (Read):**
\`\`\`typescript
export class GetUserQuery {
  constructor(public readonly id: number) {}
}

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  async execute(query: GetUserQuery) {
    return this.userReadModel.findById(query.id)
  }
}
\`\`\`

**Event + Handler:**
\`\`\`typescript
export class UserCreatedEvent {
  constructor(public readonly userId: number) {}
}

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent) {
    this.emailService.sendWelcome(event.userId)
  }
}
\`\`\`

**Controller using CommandBus / QueryBus:**
\`\`\`typescript
@Controller('users')
export class UsersController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(dto.email, dto.name))
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetUserQuery(+id))
  }
}
\`\`\``,
  },
  {
    id: 3275,
    category: 'NestJS',
    subcategory: 'Advanced',
    level: 'advanced',
    q: 'Dynamic Modules trong NestJS — forRoot / forRootAsync pattern là gì?',
    a: `**Dynamic Modules** cho phép cấu hình module khi import, thay vì hardcode. Pattern phổ biến trong các library modules.

**Implement Dynamic Module:**
\`\`\`typescript
// mailer.module.ts
export interface MailerOptions {
  host: string
  port: number
  user: string
  pass: string
  from: string
}

@Module({})
export class MailerModule {
  // Đồng bộ — config biết trước
  static forRoot(options: MailerOptions): DynamicModule {
    return {
      module: MailerModule,
      providers: [
        { provide: 'MAILER_OPTIONS', useValue: options },
        MailerService,
      ],
      exports: [MailerService],
      global: true,
    }
  }

  // Bất đồng bộ — config từ ConfigService, DB, ...
  static forRootAsync(options: {
    inject?: any[]
    useFactory: (...args: any[]) => MailerOptions | Promise<MailerOptions>
    imports?: any[]
  }): DynamicModule {
    return {
      module: MailerModule,
      imports: options.imports || [],
      providers: [
        {
          provide: 'MAILER_OPTIONS',
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        MailerService,
      ],
      exports: [MailerService],
      global: true,
    }
  }
}
\`\`\`

**Cách sử dụng:**
\`\`\`typescript
// forRoot — config tĩnh
@Module({
  imports: [
    MailerModule.forRoot({
      host: 'smtp.gmail.com',
      port: 587,
      user: 'my@gmail.com',
      pass: 'secret',
      from: 'noreply@myapp.com',
    }),
  ],
})
export class AppModule {}

// forRootAsync — lấy config từ ConfigService
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        host: config.get('SMTP_HOST'),
        port: config.get('SMTP_PORT'),
        user: config.get('SMTP_USER'),
        pass: config.get('SMTP_PASS'),
        from: config.get('SMTP_FROM'),
      }),
    }),
  ],
})
export class AppModule {}
\`\`\``,
    q_en: 'What are Dynamic Modules in NestJS — the forRoot / forRootAsync pattern?',
    a_en: `**Dynamic Modules** allow configuring a module at import time, instead of hardcoding. Common pattern in library modules.

**Implement Dynamic Module:**
\`\`\`typescript
// mailer.module.ts
export interface MailerOptions {
  host: string
  port: number
  user: string
  pass: string
  from: string
}

@Module({})
export class MailerModule {
  // Synchronous — config known ahead of time
  static forRoot(options: MailerOptions): DynamicModule {
    return {
      module: MailerModule,
      providers: [
        { provide: 'MAILER_OPTIONS', useValue: options },
        MailerService,
      ],
      exports: [MailerService],
      global: true,
    }
  }

  // Asynchronous — config from ConfigService, DB, ...
  static forRootAsync(options: {
    inject?: any[]
    useFactory: (...args: any[]) => MailerOptions | Promise<MailerOptions>
    imports?: any[]
  }): DynamicModule {
    return {
      module: MailerModule,
      imports: options.imports || [],
      providers: [
        {
          provide: 'MAILER_OPTIONS',
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        MailerService,
      ],
      exports: [MailerService],
      global: true,
    }
  }
}
\`\`\`

**Usage:**
\`\`\`typescript
// forRoot — static config
@Module({
  imports: [
    MailerModule.forRoot({
      host: 'smtp.gmail.com',
      port: 587,
      user: 'my@gmail.com',
      pass: 'secret',
      from: 'noreply@myapp.com',
    }),
  ],
})
export class AppModule {}

// forRootAsync — config from ConfigService
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        host: config.get('SMTP_HOST'),
        port: config.get('SMTP_PORT'),
        user: config.get('SMTP_USER'),
        pass: config.get('SMTP_PASS'),
        from: config.get('SMTP_FROM'),
      }),
    }),
  ],
})
export class AppModule {}
\`\`\``,
  },
  {
    id: 3276,
    category: 'NestJS',
    subcategory: 'Decorators',
    level: 'intermediate',
    q: 'Custom Decorators trong NestJS — cách tạo @CurrentUser, @Roles, @Public?',
    a: `Custom Decorators giúp code sạch hơn và tái sử dụng được. NestJS cung cấp \`createParamDecorator\` và \`SetMetadata\`.

**@CurrentUser — lấy user từ request:**
\`\`\`typescript
// decorators/current-user.decorator.ts
export const CurrentUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user

    return data ? user?.[data] : user
  },
)

// Dùng trong controller
@Get('me')
@UseGuards(JwtAuthGuard)
getProfile(@CurrentUser() user: User) {
  return user
}

@Get('my-email')
@UseGuards(JwtAuthGuard)
getEmail(@CurrentUser('email') email: string) {
  return { email }
}
\`\`\`

**@Roles — RBAC authorization:**
\`\`\`typescript
// decorators/roles.decorator.ts
export const Roles = (...roles: string[]) => SetMetadata('roles', roles)

// guards/roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ])
    if (!requiredRoles) return true

    const { user } = context.switchToHttp().getRequest()
    return requiredRoles.includes(user.role)
  }
}

// Dùng
@Delete(':id')
@Roles('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
remove(@Param('id') id: string) {}
\`\`\`

**@Public — bỏ qua auth:**
\`\`\`typescript
export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)

// Trong JwtAuthGuard
const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  context.getHandler(),
  context.getClass(),
])
if (isPublic) return true
\`\`\``,
    q_en: 'Custom Decorators in NestJS — how to create @CurrentUser, @Roles, @Public?',
    a_en: `Custom Decorators make code cleaner and reusable. NestJS provides \`createParamDecorator\` and \`SetMetadata\`.

**@CurrentUser — get user from request:**
\`\`\`typescript
// decorators/current-user.decorator.ts
export const CurrentUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user

    return data ? user?.[data] : user
  },
)

// Use in controller
@Get('me')
@UseGuards(JwtAuthGuard)
getProfile(@CurrentUser() user: User) {
  return user
}

@Get('my-email')
@UseGuards(JwtAuthGuard)
getEmail(@CurrentUser('email') email: string) {
  return { email }
}
\`\`\`

**@Roles — RBAC authorization:**
\`\`\`typescript
// decorators/roles.decorator.ts
export const Roles = (...roles: string[]) => SetMetadata('roles', roles)

// guards/roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ])
    if (!requiredRoles) return true

    const { user } = context.switchToHttp().getRequest()
    return requiredRoles.includes(user.role)
  }
}

// Usage
@Delete(':id')
@Roles('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
remove(@Param('id') id: string) {}
\`\`\`

**@Public — skip auth:**
\`\`\`typescript
export const IS_PUBLIC_KEY = 'isPublic'
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)

// In JwtAuthGuard
const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  context.getHandler(),
  context.getClass(),
])
if (isPublic) return true
\`\`\``,
  },
  {
    id: 3277,
    category: 'NestJS',
    subcategory: 'WebSockets',
    level: 'advanced',
    q: 'WebSockets trong NestJS — cách implement real-time features với @WebSocketGateway?',
    a: `NestJS hỗ trợ WebSockets qua \`@WebSocketGateway\` — tích hợp với socket.io hoặc ws.

**Setup:**
\`\`\`bash
pnpm add @nestjs/websockets @nestjs/platform-socket.io socket.io
\`\`\`

**Chat Gateway:**
\`\`\`typescript
@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/chat', // optional namespace
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server

  private logger = new Logger('ChatGateway')

  afterInit() {
    this.logger.log('WebSocket Gateway initialized')
  }

  handleConnection(client: Socket) {
    this.logger.log(\`Client connected: \${client.id}\`)
  }

  handleDisconnect(client: Socket) {
    this.logger.log(\`Client disconnected: \${client.id}\`)
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room)
    client.to(room).emit('user_joined', { id: client.id })
    return { event: 'joined', room }
  }

  @SubscribeMessage('send_message')
  @UseGuards(WsJwtGuard) // Guards hoạt động trên WS cũng!
  handleMessage(
    @MessageBody() data: { room: string; text: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = {
      id: Date.now(),
      text: data.text,
      sender: client.data.user,
      timestamp: new Date(),
    }

    // Broadcast to all in room (including sender)
    this.server.to(data.room).emit('message', message)

    // Persist to DB
    return this.chatService.saveMessage(message)
  }

  // Emit từ service bất kỳ
  sendNotification(userId: string, payload: any) {
    this.server.to(\`user:\${userId}\`).emit('notification', payload)
  }
}
\`\`\`

**Client-side (socket.io):**
\`\`\`javascript
const socket = io('http://localhost:3000/chat')
socket.emit('join_room', 'room-1')
socket.emit('send_message', { room: 'room-1', text: 'Hello!' })
socket.on('message', (msg) => console.log(msg))
\`\`\``,
    q_en: 'WebSockets in NestJS — how to implement real-time features with @WebSocketGateway?',
    a_en: `NestJS supports WebSockets via \`@WebSocketGateway\` — integrates with socket.io or ws.

**Setup:**
\`\`\`bash
pnpm add @nestjs/websockets @nestjs/platform-socket.io socket.io
\`\`\`

**Chat Gateway:**
\`\`\`typescript
@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/chat', // optional namespace
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server

  private logger = new Logger('ChatGateway')

  afterInit() {
    this.logger.log('WebSocket Gateway initialized')
  }

  handleConnection(client: Socket) {
    this.logger.log(\`Client connected: \${client.id}\`)
  }

  handleDisconnect(client: Socket) {
    this.logger.log(\`Client disconnected: \${client.id}\`)
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room)
    client.to(room).emit('user_joined', { id: client.id })
    return { event: 'joined', room }
  }

  @SubscribeMessage('send_message')
  @UseGuards(WsJwtGuard) // Guards work on WS too!
  handleMessage(
    @MessageBody() data: { room: string; text: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = {
      id: Date.now(),
      text: data.text,
      sender: client.data.user,
      timestamp: new Date(),
    }

    // Broadcast to all in room (including sender)
    this.server.to(data.room).emit('message', message)

    return this.chatService.saveMessage(message)
  }
}
\`\`\`

**Client-side (socket.io):**
\`\`\`javascript
const socket = io('http://localhost:3000/chat')
socket.emit('join_room', 'room-1')
socket.emit('send_message', { room: 'room-1', text: 'Hello!' })
socket.on('message', (msg) => console.log(msg))
\`\`\``,
  },
  {
    id: 3278,
    category: 'NestJS',
    subcategory: 'Performance',
    level: 'advanced',
    q: 'Tối ưu performance NestJS: Fastify, Caching, Compression, Rate Limiting?',
    a: `**1. Dùng Fastify thay Express (2-3x nhanh hơn):**
\`\`\`typescript
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({ logger: true }),
)
await app.listen(3000, '0.0.0.0')
\`\`\`

**2. Response Caching:**
\`\`\`typescript
// Cài thêm cache-manager
pnpm add @nestjs/cache-manager cache-manager

// Module setup
@Module({
  imports: [
    CacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        store: redisStore,
        host: config.get('REDIS_HOST'),
        ttl: 300, // 5 phút
      }),
    }),
  ],
})

// Sử dụng trong controller
@Get('products')
@UseInterceptors(CacheInterceptor)
@CacheTTL(60) // 60s override
getProducts() {
  return this.productsService.findAll()
}
\`\`\`

**3. Compression:**
\`\`\`typescript
import compression from 'compression'
app.use(compression())
\`\`\`

**4. Rate Limiting:**
\`\`\`typescript
pnpm add @nestjs/throttler

@Module({
  imports: [
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 3 },   // 3 req/s
      { name: 'long', ttl: 60000, limit: 100 },  // 100 req/min
    ]),
  ],
})

// Áp dụng global
@Module({
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})

// Override cho route cụ thể
@Throttle({ short: { ttl: 1000, limit: 1 } })
@Post('login')
login() {}
\`\`\`

**5. Database connection pooling:**
\`\`\`typescript
TypeOrmModule.forRoot({
  extra: {
    max: 20,     // max connections
    min: 5,      // min connections
    idleTimeoutMillis: 30000,
  }
})
\`\`\``,
    q_en: 'NestJS performance optimization: Fastify, Caching, Compression, Rate Limiting?',
    a_en: `**1. Use Fastify instead of Express (2-3x faster):**
\`\`\`typescript
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({ logger: true }),
)
await app.listen(3000, '0.0.0.0')
\`\`\`

**2. Response Caching:**
\`\`\`typescript
// Install cache-manager
pnpm add @nestjs/cache-manager cache-manager

// Module setup
@Module({
  imports: [
    CacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        store: redisStore,
        host: config.get('REDIS_HOST'),
        ttl: 300, // 5 minutes
      }),
    }),
  ],
})

// Use in controller
@Get('products')
@UseInterceptors(CacheInterceptor)
@CacheTTL(60) // 60s override
getProducts() {
  return this.productsService.findAll()
}
\`\`\`

**3. Compression:**
\`\`\`typescript
import compression from 'compression'
app.use(compression())
\`\`\`

**4. Rate Limiting:**
\`\`\`typescript
pnpm add @nestjs/throttler

@Module({
  imports: [
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 3 },   // 3 req/s
      { name: 'long', ttl: 60000, limit: 100 },  // 100 req/min
    ]),
  ],
})

// Apply globally
@Module({
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})

// Override for specific route
@Throttle({ short: { ttl: 1000, limit: 1 } })
@Post('login')
login() {}
\`\`\`

**5. Database connection pooling:**
\`\`\`typescript
TypeOrmModule.forRoot({
  extra: {
    max: 20,     // max connections
    min: 5,      // min connections
    idleTimeoutMillis: 30000,
  }
})
\`\`\``,
  },
  {
    id: 3279,
    category: 'NestJS',
    subcategory: 'Advanced',
    level: 'advanced',
    q: 'Middleware trong NestJS — functional vs class middleware, apply theo routes?',
    a: `**Middleware** được thực thi trước Guards. Có thể dùng để logging, CORS, session, body parsing, v.v.

**Functional Middleware (đơn giản):**
\`\`\`typescript
export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`)
  next()
}
\`\`\`

**Class Middleware (có DI):**
\`\`\`typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const start = Date.now()
    this.logger.log(\`START: \${req.method} \${req.originalUrl}\`)

    res.on('finish', () => {
      const duration = Date.now() - start
      this.logger.log(\`END: \${req.method} \${req.originalUrl} \${res.statusCode} +\${duration}ms\`)
    })

    next()
  }
}
\`\`\`

**Apply middleware trong Module:**
\`\`\`typescript
@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'health', method: RequestMethod.GET },
      )
      .forRoutes('*') // Tất cả routes

    // Hoặc chỉ apply cho routes cụ thể
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
        UsersController, // Tất cả routes trong controller này
      )

    // Multiple middlewares
    consumer
      .apply(CorsMiddleware, RateLimitMiddleware, LoggerMiddleware)
      .forRoutes('*')
  }
}
\`\`\`

**Global Middleware (Express-style):**
\`\`\`typescript
// main.ts
app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL }))
app.use(express.json({ limit: '10mb' }))
\`\`\``,
    q_en: 'Middleware in NestJS — functional vs class middleware, apply by routes?',
    a_en: `**Middleware** executes before Guards. Used for logging, CORS, session, body parsing, etc.

**Functional Middleware (simple):**
\`\`\`typescript
export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`)
  next()
}
\`\`\`

**Class Middleware (with DI):**
\`\`\`typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const start = Date.now()
    this.logger.log(\`START: \${req.method} \${req.originalUrl}\`)

    res.on('finish', () => {
      const duration = Date.now() - start
      this.logger.log(\`END: \${req.method} \${req.originalUrl} \${res.statusCode} +\${duration}ms\`)
    })

    next()
  }
}
\`\`\`

**Apply middleware in Module:**
\`\`\`typescript
@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'health', method: RequestMethod.GET },
      )
      .forRoutes('*') // All routes

    // Or apply to specific routes
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
        UsersController, // All routes in this controller
      )

    // Multiple middlewares
    consumer
      .apply(CorsMiddleware, RateLimitMiddleware, LoggerMiddleware)
      .forRoutes('*')
  }
}
\`\`\`

**Global Middleware (Express-style):**
\`\`\`typescript
// main.ts
app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL }))
app.use(express.json({ limit: '10mb' }))
\`\`\``,
  },
  {
    id: 3280,
    category: 'NestJS',
    subcategory: 'Core',
    level: 'beginner',
    q: 'Swagger / OpenAPI documentation trong NestJS — setup và các annotations phổ biến?',
    a: `NestJS tích hợp sẵn với Swagger qua \`@nestjs/swagger\`.

**Setup:**
\`\`\`bash
pnpm add @nestjs/swagger
\`\`\`

\`\`\`typescript
// main.ts
const config = new DocumentBuilder()
  .setTitle('My API')
  .setDescription('API documentation')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('api/docs', app, document)
\`\`\`

**Annotations trên DTO:**
\`\`\`typescript
export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name' })
  @IsString()
  name: string

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'password123', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string

  @ApiPropertyOptional({ enum: ['admin', 'user'], default: 'user' })
  @IsOptional()
  role?: string
}
\`\`\`

**Annotations trên Controller:**
\`\`\`typescript
@ApiTags('Users')      // Nhóm trong Swagger UI
@ApiBearerAuth()       // Yêu cầu JWT
@Controller('users')
export class UsersController {
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, type: User, description: 'User created' })
  @ApiResponse({ status: 400, description: 'Validation failed' })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  create(@Body() dto: CreateUserDto) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  findOne(@Param('id') id: string) {}

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 20 })
  findAll(@Query() query: PaginationDto) {}
}
\`\`\``,
    q_en: 'Swagger / OpenAPI documentation in NestJS — setup and common annotations?',
    a_en: `NestJS integrates with Swagger via \`@nestjs/swagger\`.

**Setup:**
\`\`\`bash
pnpm add @nestjs/swagger
\`\`\`

\`\`\`typescript
// main.ts
const config = new DocumentBuilder()
  .setTitle('My API')
  .setDescription('API documentation')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('api/docs', app, document)
\`\`\`

**Annotations on DTO:**
\`\`\`typescript
export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name' })
  @IsString()
  name: string

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'password123', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string

  @ApiPropertyOptional({ enum: ['admin', 'user'], default: 'user' })
  @IsOptional()
  role?: string
}
\`\`\`

**Annotations on Controller:**
\`\`\`typescript
@ApiTags('Users')      // Group in Swagger UI
@ApiBearerAuth()       // Require JWT
@Controller('users')
export class UsersController {
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, type: User, description: 'User created' })
  @ApiResponse({ status: 400, description: 'Validation failed' })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  create(@Body() dto: CreateUserDto) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  findOne(@Param('id') id: string) {}

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 20 })
  findAll(@Query() query: PaginationDto) {}
}
\`\`\``,
  },
]
