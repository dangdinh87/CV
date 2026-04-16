import type { QAItem } from '../interview-data'

export const SYSTEM_DESIGN_DATA: QAItem[] = [
  // ─── Fundamentals (2001–2008) ───────────────────────────────────────────────
  {
    id: 2001,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "CAP Theorem là gì và tại sao nó quan trọng trong thiết kế hệ thống phân tán? (What is the CAP Theorem and why does it matter in distributed system design?)",
    q_en: "What is the CAP Theorem and why does it matter in distributed system design?",
    a: "CAP Theorem phát biểu rằng một hệ thống phân tán chỉ có thể đảm bảo đồng thời tối đa 2 trong 3 thuộc tính: Consistency (tính nhất quán – mọi node trả về dữ liệu mới nhất), Availability (tính sẵn sàng – mọi request đều nhận được response), và Partition Tolerance (chịu lỗi phân vùng – hệ thống tiếp tục hoạt động dù mạng bị chia cắt). Trong thực tế, Partition Tolerance luôn cần thiết vì lỗi mạng là không thể tránh khỏi, nên lựa chọn thực sự là giữa CP (chọn consistency, hi sinh availability) và AP (chọn availability, hi sinh consistency). \n\n**Ví dụ:** HBase, Zookeeper là CP; Cassandra, DynamoDB là AP; RDBMS truyền thống là CA (chỉ dùng trong môi trường không phân tán). Khi thiết kế, cần xác định nghiệp vụ ưu tiên gì: hệ thống ngân hàng cần CP, còn mạng xã hội có thể chấp nhận AP với eventual consistency.",
    a_en: "The CAP Theorem states that a distributed system can only guarantee at most two of three properties simultaneously: Consistency (every node returns the most recent data), Availability (every request receives a response), and Partition Tolerance (the system continues operating despite network partitions). In practice, Partition Tolerance is always required since network failures are unavoidable, so the real trade-off is between CP (prioritize consistency, sacrifice availability) and AP (prioritize availability, sacrifice consistency). Examples: HBase and Zookeeper are CP; Cassandra and DynamoDB are AP; traditional RDBMS is CA (only suitable in non-distributed environments). When designing, identify business priorities: banking systems need CP, while social networks can accept AP with eventual consistency.",
  },
  {
    id: 2002,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "ACID và BASE khác nhau như thế nào? Khi nào dùng mỗi mô hình? (How do ACID and BASE differ, and when should each model be used?)",
    q_en: "How do ACID and BASE differ, and when should each model be used?",
    a: "ACID (Atomicity, Consistency, Isolation, Durability) là tập hợp thuộc tính đảm bảo transaction trong RDBMS luôn đáng tin cậy: toàn bộ transaction thành công hoặc rollback hoàn toàn, dữ liệu luôn hợp lệ, các transaction cô lập nhau, và dữ liệu đã commit không bao giờ mất. BASE (Basically Available, Soft state, Eventually consistent) là mô hình của hệ thống NoSQL phân tán: hệ thống cơ bản luôn available, trạng thái có thể thay đổi theo thời gian, và cuối cùng sẽ đạt trạng thái nhất quán. ACID phù hợp cho giao dịch tài chính, đặt hàng, bất kỳ nghiệp vụ nào yêu cầu tính chính xác tuyệt đối. BASE phù hợp cho hệ thống cần scale lớn như mạng xã hội, analytics, giỏ hàng e-commerce – nơi đôi khi đọc dữ liệu hơi cũ vẫn chấp nhận được để đổi lấy hiệu năng và khả năng mở rộng.",
    a_en: "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee reliability of transactions in relational databases: the entire transaction succeeds or rolls back completely, data always remains valid, transactions are isolated from each other, and committed data is never lost. BASE (Basically Available, Soft state, Eventually consistent) is the model used by distributed NoSQL systems: the system remains fundamentally available, state may change over time, and the system eventually reaches a consistent state. ACID is appropriate for financial transactions, order processing, and any business operation requiring absolute accuracy. BASE suits large-scale systems like social networks, analytics, and e-commerce shopping carts — where reading slightly stale data is acceptable in exchange for performance and scalability.",
  },
  {
    id: 2003,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Vertical Scaling và Horizontal Scaling là gì? Ưu nhược điểm của từng loại? (What are Vertical and Horizontal Scaling? What are the pros and cons of each?)",
    q_en: "What are Vertical and Horizontal Scaling? What are the pros and cons of each?",
    a: "Vertical Scaling (scale up) là nâng cấp phần cứng của một máy chủ duy nhất: tăng CPU, RAM, SSD – đơn giản, không cần thay đổi code, nhưng bị giới hạn bởi phần cứng tối đa và tạo ra single point of failure. Horizontal Scaling (scale out) là thêm nhiều máy chủ vào hệ thống, phân phối tải qua load balancer – không giới hạn lý thuyết, fault-tolerant hơn, nhưng phức tạp hơn vì cần xử lý distributed state, session management, và data consistency. Vertical scaling phù hợp khi muốn giải pháp nhanh cho hệ thống nhỏ/trung bình, hoặc cho database (dễ scale hơn application). Horizontal scaling là lựa chọn dài hạn cho hệ thống lớn như Netflix, Google – stateless services dễ scale ngang, trong khi database cần sharding hoặc replica để scale ngang hiệu quả.",
    a_en: "Vertical Scaling (scale up) means upgrading the hardware of a single server — more CPU, RAM, or storage. It is simple and requires no code changes, but is limited by hardware maximums and creates a single point of failure. Horizontal Scaling (scale out) means adding more servers to the system and distributing load through a load balancer — theoretically unlimited, more fault-tolerant, but more complex due to distributed state, session management, and data consistency challenges. Vertical scaling works well for quick solutions on small or medium systems, or for databases (which are harder to scale horizontally). Horizontal scaling is the long-term choice for large systems like Netflix and Google — stateless services scale out easily, while databases need sharding or replication to scale horizontally.",
  },
  {
    id: 2004,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Load Balancing hoạt động như thế nào? Các thuật toán load balancing phổ biến là gì? (How does Load Balancing work? What are the common load balancing algorithms?)",
    q_en: "How does Load Balancing work? What are the common load balancing algorithms?",
    a: "Load Balancer là thành phần đứng giữa client và các server, phân phối incoming requests để không có server nào bị quá tải, đồng thời tăng availability bằng cách redirect traffic khi có server bị lỗi. Các thuật toán phổ biến: Round Robin (luân phiên tuần tự – đơn giản nhưng không quan tâm trọng tải thực tế), Weighted Round Robin (gán trọng số theo capacity), Least Connections (gửi đến server ít connection nhất – tốt khi request có thời gian xử lý khác nhau), IP Hash (hash IP client để cùng client luôn đến cùng server – hữu ích cho session stickiness), Least Response Time (chọn server nhanh nhất). Layer 4 LB hoạt động ở transport layer (TCP/UDP), nhanh hơn nhưng ít thông minh hơn; Layer 7 LB hoạt động ở application layer, có thể route dựa trên URL, header, cookie – linh hoạt hơn nhưng overhead cao hơn. AWS ALB, Nginx, HAProxy là các giải pháp phổ biến.",
    a_en: "A Load Balancer sits between clients and servers, distributing incoming requests so no single server is overwhelmed, and improving availability by redirecting traffic when a server fails. Common algorithms: Round Robin (sequential rotation — simple but ignores actual load), Weighted Round Robin (assigns weights based on server capacity), Least Connections (routes to the server with fewest active connections — good when request processing times vary), IP Hash (hashes the client IP so the same client always reaches the same server — useful for session stickiness), and Least Response Time (routes to the fastest server). Layer 4 load balancers operate at the transport layer (TCP/UDP) — faster but less intelligent; Layer 7 load balancers operate at the application layer and can route based on URLs, headers, or cookies — more flexible but with higher overhead. AWS ALB, Nginx, and HAProxy are popular solutions.",
  },
  {
    id: 2005,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "CDN là gì và nó cải thiện hiệu năng hệ thống như thế nào? (What is a CDN and how does it improve system performance?)",
    q_en: "What is a CDN and how does it improve system performance?",
    a: "CDN (Content Delivery Network) là mạng lưới các server phân tán địa lý, lưu trữ bản sao (cache) của static content (hình ảnh, JS, CSS, video) tại các edge nodes gần người dùng nhất. Khi user request một file, CDN route request đến edge node gần nhất thay vì origin server, giảm latency đáng kể – ví dụ user ở Việt Nam truy cập CDN node Singapore thay vì origin server ở US. Ngoài latency, CDN còn giảm tải cho origin server, tăng throughput toàn cầu, có built-in DDoS protection, và cải thiện availability (cache vẫn serve được khi origin tạm thời down). CDN phù hợp nhất cho static assets và video streaming; dynamic content cũng có thể cache nếu dùng Edge Computing (Cloudflare Workers, Vercel Edge). Các CDN lớn: Cloudflare, AWS CloudFront, Akamai, Fastly.",
    a_en: "A CDN (Content Delivery Network) is a geographically distributed network of servers that cache copies of static content (images, JS, CSS, video) at edge nodes close to users. When a user requests a file, the CDN routes the request to the nearest edge node instead of the origin server, significantly reducing latency — for example, a user in Vietnam hits a CDN node in Singapore rather than an origin server in the US. Beyond latency, a CDN also reduces load on the origin server, increases global throughput, provides built-in DDoS protection, and improves availability (the cache can still serve content when the origin is temporarily down). CDNs are most effective for static assets and video streaming; dynamic content can also be cached via Edge Computing (Cloudflare Workers, Vercel Edge). Major CDN providers include Cloudflare, AWS CloudFront, Akamai, and Fastly.",
  },
  {
    id: 2006,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Forward Proxy và Reverse Proxy khác nhau như thế nào? Mỗi loại dùng trong trường hợp nào? (How do Forward Proxy and Reverse Proxy differ? When is each used?)",
    q_en: "How do Forward Proxy and Reverse Proxy differ? When is each used?",
    a: "Forward Proxy đứng phía trước client, đại diện cho client gửi request ra ngoài – client biết về proxy, nhưng server ngoài không biết request thực sự đến từ đâu. Dùng để: bypass geo-restriction, ẩn IP client, filter nội dung trong corporate network, caching outbound requests (giảm bandwidth). Reverse Proxy đứng phía trước server, đại diện cho server nhận request từ client – client nghĩ mình đang nói chuyện với server thực, không biết có proxy ở giữa. Dùng để: load balancing, SSL termination, caching, rate limiting, authentication, ẩn cấu trúc internal network. Nginx và HAProxy thường đóng vai trò reverse proxy trong production; Squid là forward proxy phổ biến. API Gateway về bản chất là một reverse proxy chuyên biệt với thêm tính năng như auth, routing, transformation.",
    a_en: "A Forward Proxy sits in front of clients, acting on behalf of clients when sending requests out — the client is aware of the proxy, but the external server does not know the true origin of the request. Use cases: bypassing geo-restrictions, hiding client IPs, content filtering in corporate networks, and caching outbound requests to reduce bandwidth. A Reverse Proxy sits in front of servers, acting on behalf of servers when receiving client requests — the client thinks it is communicating directly with the server and is unaware of the proxy. Use cases: load balancing, SSL termination, caching, rate limiting, authentication, and hiding internal network topology. Nginx and HAProxy commonly serve as reverse proxies in production; Squid is a popular forward proxy. An API Gateway is essentially a specialized reverse proxy with additional features like authentication, routing, and request/response transformation.",
  },
  {
    id: 2007,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Latency và Throughput là gì? Tại sao chúng thường có trade-off với nhau? (What are Latency and Throughput? Why do they often trade off against each other?)",
    q_en: "What are Latency and Throughput? Why do they often trade off against each other?",
    a: "Latency là thời gian để hoàn thành một request đơn lẻ (đo bằng ms) – thấp là tốt, thể hiện độ nhanh nhạy của hệ thống. Throughput là số lượng requests/operations hệ thống xử lý được trong một đơn vị thời gian (requests/second, transactions/second) – cao là tốt, thể hiện năng lực của hệ thống. Trade-off xảy ra khi: batching tăng throughput nhưng tăng latency (xử lý 100 items cùng lúc thay vì từng item); caching tăng throughput nhưng có thể tăng latency cho cache miss; thêm queue buffer tăng throughput nhưng tăng latency (message phải chờ trong queue). Trong thực tế, cần xác định SLA: hệ thống real-time gaming cần latency thấp dưới 50ms; hệ thống ETL batch xử lý data đêm cần throughput cao hơn. Benchmarking nên đo cả P50, P95, P99 latency để hiểu tail latency, không chỉ đo average.",
    a_en: "Latency is the time to complete a single request (measured in ms) — lower is better, representing system responsiveness. Throughput is the number of requests or operations the system handles per unit of time (requests/second, transactions/second) — higher is better, representing system capacity. The trade-off arises when: batching increases throughput but raises latency (processing 100 items at once instead of one at a time); caching increases throughput but may increase latency on cache misses; adding queue buffers increases throughput but raises latency (messages must wait in the queue). In practice, define your SLA: real-time gaming systems need sub-50ms latency; nightly ETL batch jobs prioritize high throughput. Benchmarking should measure P50, P95, and P99 latency to understand tail latency, not just averages.",
  },
  {
    id: 2008,
    category: "System Design",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Các mô hình Consistency trong hệ thống phân tán là gì? (What are the consistency models in distributed systems?)",
    q_en: "What are the consistency models in distributed systems?",
    a: `Các mô hình consistency phổ biến:

- Strong Consistency (Linearizability): sau khi write thành công, mọi read sau đó đều thấy giá trị mới nhất – dễ lập trình nhất nhưng latency cao nhất vì cần coordination giữa các node.
- Eventual Consistency: dữ liệu sẽ nhất quán sau một khoảng thời gian, nhưng tạm thời có thể đọc dữ liệu cũ – được dùng trong Cassandra, DynamoDB, DNS.
- Read-your-writes Consistency: sau khi user write, chính user đó luôn đọc được dữ liệu mới nhất (dù user khác chưa thấy) – quan trọng cho UX tốt trong social media.
- Causal Consistency: các operation có quan hệ nhân quả được nhìn thấy theo đúng thứ tự (A post → B comment → mọi người thấy comment sau post).
- Monotonic Read: user không bao giờ thấy dữ liệu quay ngược thời gian (không đọc v2 rồi đọc v1).

Lựa chọn consistency model ảnh hưởng trực tiếp đến latency, availability và trải nghiệm người dùng.`,
    a_en: `Common consistency models:

- Strong Consistency (Linearizability): after a successful write, every subsequent read returns the latest value — easiest to reason about but highest latency since it requires coordination across nodes.
- Eventual Consistency: data will become consistent over time, but reads may temporarily return stale values — used in Cassandra, DynamoDB, and DNS.
- Read-your-writes Consistency: after a user writes data, that same user always reads the latest value (even if other users haven't seen it yet) — important for good UX in social media.
- Causal Consistency: causally related operations are observed in the correct order (A posts → B comments → everyone sees the comment after the post).
- Monotonic Read: a user never observes data going backwards in time (won't read v2 and then read v1).

The choice of consistency model directly impacts latency, availability, and user experience.`,
  },

  // ─── Scaling (2009–2016) ────────────────────────────────────────────────────
  {
    id: 2009,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Database Sharding là gì? Các chiến lược sharding phổ biến và khi nào nên dùng? (What is Database Sharding? What are common sharding strategies and when should you use it?)",
    q_en: "What is Database Sharding? What are common sharding strategies and when should you use it?",
    a: "Sharding là kỹ thuật chia dữ liệu của một database thành nhiều phần nhỏ hơn (shards), mỗi shard nằm trên một database server riêng, cho phép scale ngang khi dữ liệu vượt quá capacity của một server. Các chiến lược: Range-based sharding (chia theo range của key, ví dụ user_id 1-1M trên shard 1 – dễ implement nhưng dễ tạo hot spot); Hash-based sharding (hash key để phân phối đều – tránh hot spot nhưng khó range query); Directory-based sharding (lookup table ánh xạ key → shard – linh hoạt nhất nhưng thêm lookup overhead); Geographic sharding (chia theo region – tốt cho compliance và latency). Thách thức của sharding: cross-shard joins rất tốn kém, distributed transactions phức tạp, rebalancing khi thêm shard khó khăn. Nên dùng sharding khi đã tối ưu hết cách khác (index, caching, read replicas) và dataset thực sự vượt quá TB. Pinterest, Slack, GitHub đều dùng sharding.",
    a_en: "Sharding is the technique of splitting a database's data into smaller pieces (shards), each residing on a separate database server, enabling horizontal scaling when data exceeds a single server's capacity. Common strategies: Range-based sharding (split by key ranges, e.g., user_id 1–1M on shard 1 — easy to implement but prone to hot spots); Hash-based sharding (hash the key to distribute evenly — avoids hot spots but complicates range queries); Directory-based sharding (a lookup table maps keys to shards — most flexible but adds lookup overhead); Geographic sharding (split by region — good for compliance and latency). Sharding challenges: cross-shard joins are expensive, distributed transactions are complex, and rebalancing when adding shards is difficult. Use sharding only after exhausting other optimizations (indexes, caching, read replicas) and when the dataset genuinely exceeds terabytes. Pinterest, Slack, and GitHub all use sharding.",
  },
  {
    id: 2010,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Read Replica là gì và nó giúp scale database như thế nào? Có những hạn chế nào? (What are Read Replicas and how do they help scale a database? What are the limitations?)",
    q_en: "What are Read Replicas and how do they help scale a database? What are the limitations?",
    a: "Read Replica là bản sao của primary database, chỉ nhận read queries trong khi primary (master) nhận tất cả write queries – asynchronous replication đồng bộ dữ liệu từ primary sang replica. \n\n**Lợi ích:** giảm read load trên primary (80-90% workload thường là read), cho phép scale read throughput bằng cách thêm replicas, dùng replica cho analytics/reporting mà không ảnh hưởng production. AWS RDS, PostgreSQL, MySQL đều hỗ trợ read replicas dễ dàng. Hạn chế quan trọng: replication lag – replica có thể chậm hơn primary vài ms đến vài giây, nên có thể đọc stale data (eventual consistency); cần application-level logic để route read vs write queries; failover tự động cần configuration thêm; write vẫn là bottleneck vì chỉ có một primary. Giải pháp cho write bottleneck là sharding hoặc multi-master replication (phức tạp hơn vì conflict resolution).",
    a_en: "A Read Replica is a copy of the primary database that only accepts read queries while the primary (master) handles all writes — asynchronous replication keeps the replica in sync with the primary. \n\n**Benefits:** reduces read load on the primary (80–90% of workloads are typically reads), allows scaling read throughput by adding more replicas, and enables analytics/reporting queries on replicas without impacting production. AWS RDS, PostgreSQL, and MySQL all support read replicas easily. Key limitations: replication lag — replicas may be behind the primary by milliseconds to seconds, meaning you may read stale data (eventual consistency); application-level logic is needed to route reads vs writes; automatic failover requires additional configuration; writes remain a bottleneck since there is only one primary. Solutions for write bottlenecks include sharding or multi-master replication (more complex due to conflict resolution).",
  },
  {
    id: 2011,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Cache-aside, Write-through, và Write-back caching khác nhau như thế nào? (How do Cache-aside, Write-through, and Write-back caching strategies differ?)",
    q_en: "How do Cache-aside, Write-through, and Write-back caching strategies differ?",
    a: "Cache-aside (Lazy Loading): application tự quản lý cache – trước tiên check cache, nếu miss thì đọc từ DB và populate cache (cache-aside pattern). Ưu: chỉ cache dữ liệu thực sự được đọc, cache failure không block read; Nhược: cache miss đầu tiên luôn có extra latency, dữ liệu cache có thể stale nếu DB được update trực tiếp. Write-through: mỗi write đồng thời cập nhật cả cache và DB trước khi trả response. Ưu: cache luôn fresh, không bao giờ stale; Nhược: write latency cao hơn, cache dữ liệu ít được đọc lãng phí memory. Write-back (Write-behind): write chỉ vào cache trước, trả response ngay, sau đó async flush xuống DB. Ưu: write latency rất thấp, tốt cho write-heavy workloads; Nhược: data loss risk nếu cache crash trước khi flush, phức tạp hơn. Redis thường dùng cho cả 3 pattern; cache-aside là phổ biến nhất trong thực tế vì đơn giản và phù hợp hầu hết use case.",
    a_en: "Cache-aside (Lazy Loading): the application manages the cache itself — check the cache first, and on a miss, read from the database and populate the cache. \n\n**Pros:** only caches data that is actually read; cache failure does not block reads. \n\n**Cons:** the first cache miss always incurs extra latency; cache data can become stale if the database is updated directly. Write-through: every write synchronously updates both the cache and the database before returning a response. \n\n**Pros:** cache is always fresh and never stale. \n\n**Cons:** higher write latency; memory is wasted caching rarely-read data. Write-back (Write-behind): writes go to the cache first, the response is returned immediately, and the cache is asynchronously flushed to the database. \n\n**Pros:** very low write latency, great for write-heavy workloads. \n\n**Cons:** risk of data loss if the cache crashes before flushing; more complex to implement. Redis is commonly used for all three patterns; cache-aside is most prevalent in practice due to its simplicity and suitability for most use cases.",
  },
  {
    id: 2012,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Rate Limiting là gì? Các thuật toán rate limiting phổ biến và cách implement? (What is Rate Limiting? What are common algorithms and how to implement it?)",
    q_en: "What is Rate Limiting? What are common algorithms and how to implement it?",
    a: "Rate Limiting là kỹ thuật kiểm soát tần suất request từ một client/IP/user để bảo vệ hệ thống khỏi abuse, DDoS, và đảm bảo fair usage. Các thuật toán: Token Bucket – có một bucket chứa tokens, mỗi request tiêu 1 token, tokens được refill theo rate cố định; linh hoạt cho phép burst ngắn. Leaky Bucket – requests được xử lý ở rate cố định như nước rỉ qua lỗ; smooths out bursts nhưng không cho phép burst. Fixed Window Counter – đếm request trong window cố định (mỗi phút); đơn giản nhưng có boundary problem (spike ở cuối+đầu window). Sliding Window Log – lưu timestamp của mỗi request, chính xác nhất nhưng tốn memory. Sliding Window Counter – kết hợp Fixed Window + sliding, cân bằng tốt. Implementation: Redis với INCR + EXPIRE cho distributed rate limiting; Nginx module; API Gateway built-in (AWS API GW, Kong). Cần quyết định rate limit theo: IP, user_id, API key; và action khi vượt limit: 429 Too Many Requests với Retry-After header.",
    a_en: "Rate Limiting is the technique of controlling the frequency of requests from a client, IP, or user to protect the system from abuse, DDoS attacks, and to ensure fair usage. Common algorithms: Token Bucket — a bucket holds tokens; each request consumes one token; tokens are refilled at a fixed rate; allows short bursts. Leaky Bucket — requests are processed at a constant rate like water dripping through a hole; smooths out bursts but does not allow them. Fixed Window Counter — counts requests within a fixed window (e.g., per minute); simple but has a boundary problem (spikes at the end and start of windows). Sliding Window Log — stores the timestamp of each request; most accurate but memory-intensive. Sliding Window Counter — combines fixed window and sliding approaches for a good balance. Implementation: Redis with INCR + EXPIRE for distributed rate limiting; Nginx modules; built-in API Gateway features (AWS API GW, Kong). Decide how to key rate limits: by IP, user_id, or API key; and what action to take when limits are exceeded: return 429 Too Many Requests with a Retry-After header.",
  },
  {
    id: 2013,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Connection Pooling là gì và tại sao nó quan trọng cho database performance? (What is Connection Pooling and why is it critical for database performance?)",
    q_en: "What is Connection Pooling and why is it critical for database performance?",
    a: "Mỗi khi application tạo kết nối mới đến database, có overhead lớn: TCP handshake, authentication, session setup – có thể mất 20-100ms. Connection Pooling giải quyết vấn đề này bằng cách duy trì sẵn một pool các kết nối đã được khởi tạo; khi cần, application lấy connection từ pool, dùng xong trả lại thay vì đóng. \n\n**Lợi ích:** giảm latency đáng kể (lấy connection từ pool chỉ mất vài microseconds), giới hạn số lượng connections đến DB (tránh quá tải – PostgreSQL thường giới hạn max_connections ~100-500), tăng throughput tổng thể. Pool size quan trọng: quá nhỏ gây bottleneck (application chờ connection), quá lớn gây OOM hoặc quá tải DB. Công thức của PgBouncer: pool_size ≈ (core_count * 2) + effective_spindle_count. Công cụ phổ biến: PgBouncer (PostgreSQL), HikariCP (Java), pg-pool (Node.js), SQLAlchemy pool (Python). Với serverless/container environments, connection pooling càng quan trọng hơn vì mỗi instance có thể mở nhiều connections.",
    a_en: "Every time an application opens a new database connection, there is significant overhead: TCP handshake, authentication, and session setup — which can take 20–100ms. Connection Pooling solves this by maintaining a pool of already-initialized connections; when needed, the application borrows a connection from the pool and returns it when done instead of closing it. \n\n**Benefits:** significantly reduced latency (grabbing a connection from the pool takes only microseconds), capping the number of connections to the database (PostgreSQL typically limits max_connections to ~100–500), and higher overall throughput. Pool size matters: too small causes a bottleneck (application waits for a connection), too large causes OOM or database overload. PgBouncer's recommended formula: pool_size ≈ (core_count × 2) + effective_spindle_count. Popular tools: PgBouncer (PostgreSQL), HikariCP (Java), pg-pool (Node.js), SQLAlchemy pool (Python). In serverless and container environments, connection pooling is even more critical because each instance can open many connections.",
  },
  {
    id: 2014,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "CQRS Pattern là gì? Khi nào nên áp dụng và những thách thức gì khi implement? (What is the CQRS Pattern? When should it be applied and what are the challenges?)",
    q_en: "What is the CQRS Pattern? When should it be applied and what are the implementation challenges?",
    a: "CQRS (Command Query Responsibility Segregation) là pattern tách biệt hoàn toàn model đọc (Query) và model ghi (Command) – thay vì một model dùng cho cả CRUD. Command side xử lý mutations và thường dùng domain model phức tạp; Query side tối ưu cho read và có thể dùng denormalized view riêng. \n\n**Lợi ích:** Read model có thể scale độc lập với Write model; Query side có thể dùng database khác (Elasticsearch cho search, Redis cho cache); mỗi side được tối ưu riêng. Thường kết hợp với Event Sourcing: mỗi Command tạo ra Events, Events cập nhật Read Model (eventual consistency). Phù hợp khi: read/write ratio không cân bằng, domain logic phức tạp, cần nhiều dạng read views khác nhau. Thách thức: eventual consistency giữa write và read side; operational complexity tăng; debugging khó hơn; không phù hợp cho CRUD đơn giản. Ví dụ thực tế: e-commerce – order placement (Command) và order listing dashboard (Query) dùng store riêng biệt.",
    a_en: "CQRS (Command Query Responsibility Segregation) is a pattern that fully separates the read model (Query) from the write model (Command), rather than using one model for all CRUD operations. The Command side handles mutations and typically uses a rich domain model; the Query side is optimized for reads and can use a denormalized view. \n\n**Benefits:** the read model can scale independently from the write model; the query side can use a different database (Elasticsearch for search, Redis for caching); each side is independently optimized. CQRS is often combined with Event Sourcing: each Command produces Events, which update the Read Model (eventual consistency). Best applied when: the read/write ratio is imbalanced, domain logic is complex, or multiple different read views are needed. Challenges: eventual consistency between the write and read sides; increased operational complexity; harder debugging; not appropriate for simple CRUD applications. Real-world example: in e-commerce, order placement (Command) and the order listing dashboard (Query) use separate stores.",
  },
  {
    id: 2015,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Event Sourcing là gì? Lợi ích và hạn chế so với traditional state storage? (What is Event Sourcing? Benefits and limitations compared to traditional state storage?)",
    q_en: "What is Event Sourcing? What are its benefits and limitations compared to traditional state storage?",
    a: "Event Sourcing là pattern lưu trữ mọi thay đổi trạng thái của application dưới dạng chuỗi immutable events thay vì chỉ lưu trạng thái hiện tại – giống như transaction log của bank hơn là số dư hiện tại. \n\n**Ví dụ:** thay vì lưu `account.balance = 1000`, lưu [Deposited(500), Deposited(700), Withdrew(200)] – số dư là kết quả replay của events. \n\n**Lợi ích:** complete audit trail miễn phí, có thể rebuild state tại bất kỳ điểm nào trong lịch sử, time-travel debugging, dễ tích hợp với CQRS và projections, event stream là nguồn sự thật duy nhất. Hạn chế: querying current state cần replay (giải quyết bằng snapshots), event schema evolution phức tạp khi domain thay đổi, storage tốn hơn, learning curve cao. Phù hợp cho: banking/fintech (audit trail bắt buộc), booking systems, domain-driven design với complex business rules. EventStoreDB là database chuyên biệt cho Event Sourcing; có thể implement trên PostgreSQL, Kafka cũng được.",
    a_en: "Event Sourcing is a pattern that stores every state change in an application as a sequence of immutable events, rather than storing only the current state — more like a bank's transaction log than just the current balance. For example, instead of storing `account.balance = 1000`, you store [Deposited(500), Deposited(700), Withdrew(200)] — the balance is derived by replaying the events. \n\n**Benefits:** a complete audit trail for free, the ability to rebuild state at any point in history, time-travel debugging, easy integration with CQRS and projections, and the event stream as a single source of truth. Limitations: querying current state requires replaying events (addressed with snapshots); event schema evolution is complex when the domain changes; higher storage requirements; steep learning curve. Best suited for: banking/fintech (where audit trails are mandatory), booking systems, and domain-driven design with complex business rules. EventStoreDB is a purpose-built database for Event Sourcing; it can also be implemented on PostgreSQL or Kafka.",
  },
  {
    id: 2016,
    category: "System Design",
    subcategory: "Scaling",
    level: "intermediate",
    q: "Các pattern horizontal scaling cho stateful services là gì? Làm thế nào để handle session state? (What are horizontal scaling patterns for stateful services? How to handle session state?)",
    q_en: "What are horizontal scaling patterns for stateful services? How do you handle session state?",
    a: "Stateless services dễ scale ngang – chỉ cần thêm instance và load balancer. Stateful services phức tạp hơn vì session/state gắn với một instance cụ thể. Các giải pháp: Sticky Sessions (Session Affinity) – load balancer route cùng user về cùng server dựa trên cookie; đơn giản nhưng tạo uneven load và failover khó. Externalized Session Store – lưu session trong shared store (Redis, Memcached) thay vì in-memory; mọi instance đều đọc được, stateless về session, dễ scale và failover. JWT Tokens – encode state vào token, server không lưu state; client gửi token theo mỗi request; hoàn toàn stateless nhưng không thể revoke trước khi expire (giải quyết bằng blacklist). Database-backed Sessions – lưu session trong DB; đơn giản nhưng chậm hơn Redis. Trong thực tế: kết hợp JWT cho authentication + Redis cho session data ngắn hạn là pattern phổ biến nhất. Kubernetes với horizontal pod autoscaler dễ scale khi dùng externalized state.",
    a_en: "Stateless services are easy to scale horizontally — just add more instances behind a load balancer. Stateful services are more complex because session or state is tied to a specific instance. Solutions: Sticky Sessions (Session Affinity) — the load balancer routes the same user to the same server using a cookie; simple but creates uneven load and complicates failover. Externalized Session Store — store sessions in a shared store (Redis, Memcached) rather than in-memory; every instance can read the session, making services effectively stateless, and simplifying scaling and failover. JWT Tokens — encode state into the token; the server stores no state; the client sends the token with every request; fully stateless but tokens cannot be revoked before expiry (addressed with a blacklist). Database-backed Sessions — store sessions in a database; simple but slower than Redis. In practice, combining JWT for authentication with Redis for short-lived session data is the most common pattern. Kubernetes with a Horizontal Pod Autoscaler scales easily when externalized state is used.",
  },

  // ─── Architecture Patterns (2017–2024) ─────────────────────────────────────
  {
    id: 2017,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Microservices và Monolith khác nhau như thế nào? Khi nào nên migrate sang Microservices? (How do Microservices and Monolith differ? When should you migrate to Microservices?)",
    q_en: "How do Microservices and Monolith differ? When should you migrate to Microservices?",
    a: "Monolith là toàn bộ application được deploy như một unit duy nhất – đơn giản để develop, test, deploy ban đầu, không có network overhead giữa components. Microservices chia application thành nhiều services nhỏ, độc lập, mỗi service có database riêng và được deploy độc lập – cho phép scale từng service riêng, team độc lập, polyglot tech stack. Microservices không phải lúc nào cũng tốt hơn: overhead của distributed systems (network latency, distributed transactions, service discovery, observability) rất lớn. Nên bắt đầu với Monolith hoặc Modular Monolith (monolith với boundaries rõ ràng). Chỉ migrate sang microservices khi: team lớn (>50 engineers) và bottleneck khi deploy, các module có nhu cầu scale khác nhau rõ rệt, cần polyglot technology. Martin Fowler khuyên: 'Don't start with microservices' – thay vào đó xây dựng monolith tốt trước, sau đó tách dần theo domain boundaries (DDD Bounded Contexts).",
    a_en: "A Monolith deploys the entire application as a single unit — simpler to develop, test, and deploy initially, with no network overhead between components. Microservices decompose the application into many small, independent services, each with its own database and deployed independently — enabling independent scaling, team autonomy, and polyglot tech stacks. Microservices are not always better: the overhead of distributed systems (network latency, distributed transactions, service discovery, observability) is substantial. Start with a Monolith or Modular Monolith (a monolith with clear internal boundaries). Only migrate to microservices when: the team is large (>50 engineers) and deployment is a bottleneck, different modules have clearly different scaling requirements, or polyglot technology is needed. Martin Fowler advises: 'Don't start with microservices' — build a well-structured monolith first, then extract services along domain boundaries (DDD Bounded Contexts).",
  },
  {
    id: 2018,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "API Gateway là gì? Vai trò và các tính năng chính của nó trong microservices architecture? (What is an API Gateway? Its role and key features in a microservices architecture?)",
    q_en: "What is an API Gateway? What is its role and key features in a microservices architecture?",
    a: "API Gateway là single entry point cho tất cả client requests đến microservices – hoạt động như reverse proxy với nhiều tính năng bổ sung. Vai trò: routing (forward request đến đúng service), authentication/authorization (centralized auth thay vì mỗi service tự verify), rate limiting, SSL termination, request/response transformation, API versioning, caching. \n\n**Lợi ích:** client chỉ cần biết một endpoint thay vì nhiều service URLs; giảm round trips với request aggregation (BFF pattern – Backend for Frontend); dễ thêm cross-cutting concerns mà không sửa services. Hạn chế: single point of failure nếu không có HA setup; có thể trở thành bottleneck; thêm latency; có thể tạo coupling nếu overloaded với logic. Phân biệt API Gateway vs Service Mesh: API Gateway xử lý North-South traffic (external → internal), Service Mesh xử lý East-West traffic (service → service). Giải pháp phổ biến: AWS API Gateway, Kong, Nginx, Traefik, Envoy.",
    a_en: "An API Gateway is the single entry point for all client requests to microservices — acting as a reverse proxy with additional features. Its role includes: routing (forwarding requests to the correct service), centralized authentication and authorization (eliminating per-service auth), rate limiting, SSL termination, request/response transformation, API versioning, and caching. \n\n**Benefits:** clients only need to know one endpoint instead of many service URLs; round trips are reduced through request aggregation (BFF pattern — Backend for Frontend); cross-cutting concerns can be added without modifying individual services. Drawbacks: single point of failure without HA setup; can become a bottleneck; adds latency; can create tight coupling if overloaded with business logic. Key distinction — API Gateway vs Service Mesh: the API Gateway handles North-South traffic (external → internal), while Service Mesh handles East-West traffic (service → service). Popular solutions: AWS API Gateway, Kong, Nginx, Traefik, and Envoy.",
  },
  {
    id: 2019,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Service Mesh là gì và tại sao nó cần thiết trong kiến trúc microservices? (What is a Service Mesh and why is it needed in microservices architecture?)",
    q_en: "What is a Service Mesh and why is it needed in a microservices architecture?",
    a: "Service Mesh là infrastructure layer xử lý service-to-service communication trong microservices, thường được implement qua sidecar proxy pattern (mỗi service pod có một proxy container đi kèm). Service Mesh cung cấp: mTLS (mutual TLS) cho encrypted communication giữa services, load balancing, circuit breaking, retry logic, timeout, distributed tracing, metrics collection – tất cả mà không cần sửa application code. Vấn đề Service Mesh giải quyết: khi có hàng chục microservices, implement networking concerns trong mỗi service (bằng library) rất khó maintain, tốn công, dễ inconsistent. Service Mesh chuyển những concerns này ra infrastructure layer. Istio (với Envoy sidecar) và Linkerd là hai giải pháp phổ biến nhất. Trade-off: operational complexity rất cao, Istio đặc biệt nặng và có learning curve lớn – chỉ phù hợp khi có đủ platform engineering team. Nhiều tổ chức chọn giải pháp đơn giản hơn như Consul Connect hoặc AWS App Mesh.",
    a_en: "A Service Mesh is an infrastructure layer that handles service-to-service communication in microservices, typically implemented via the sidecar proxy pattern (each service pod has an accompanying proxy container). A Service Mesh provides: mTLS (mutual TLS) for encrypted inter-service communication, load balancing, circuit breaking, retry logic, timeouts, distributed tracing, and metrics collection — all without modifying application code. The problem it solves: with dozens of microservices, implementing networking concerns in each service (via libraries) is hard to maintain, labor-intensive, and inconsistent. A Service Mesh moves these concerns to the infrastructure layer. Istio (with an Envoy sidecar) and Linkerd are the two most popular solutions. Trade-offs: operational complexity is very high; Istio in particular is heavyweight with a steep learning curve — only appropriate when you have a dedicated platform engineering team. Many organizations opt for simpler solutions like Consul Connect or AWS App Mesh.",
  },
  {
    id: 2020,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Circuit Breaker Pattern là gì? Nó ngăn chặn cascading failures như thế nào? (What is the Circuit Breaker Pattern? How does it prevent cascading failures?)",
    q_en: "What is the Circuit Breaker Pattern? How does it prevent cascading failures?",
    a: "Circuit Breaker là pattern bảo vệ hệ thống khỏi cascading failures khi một dependency bị lỗi – lấy cảm hứng từ cầu dao điện. Hoạt động qua 3 states: Closed (hoạt động bình thường, theo dõi failure rate), Open (sau khi failure rate vượt threshold, tất cả requests đều fail fast ngay lập tức mà không gọi service lỗi – cho service thời gian recover), Half-Open (sau timeout, cho một số requests thử đến service, nếu thành công thì đóng lại, nếu thất bại thì mở lại). Ví dụ không có Circuit Breaker: Payment Service gọi Fraud Detection Service bị chậm → threads bị block chờ timeout → thread pool exhaustion → Payment Service cũng down → cascading failure lan rộng. Với Circuit Breaker: sau N failures, mở circuit, fail fast với cached response hoặc fallback → hệ thống vẫn partially functional. Netflix Hystrix là library phổ biến (hiện maintenance mode), Resilience4j là lựa chọn hiện đại hơn cho Java; Python có pybreaker; built-in trong Istio Service Mesh.",
    a_en: "The Circuit Breaker pattern protects a system from cascading failures when a dependency goes down — inspired by an electrical circuit breaker. It operates through three states: Closed (normal operation, monitoring the failure rate), Open (once the failure rate exceeds a threshold, all requests fail fast immediately without calling the failing service — giving it time to recover), and Half-Open (after a timeout, a small number of probe requests are allowed through; if they succeed, the circuit closes; if they fail, it reopens). Without a Circuit Breaker: the Payment Service calls a slow Fraud Detection Service → threads are blocked waiting for timeouts → thread pool exhaustion → Payment Service also goes down → cascading failure spreads. With a Circuit Breaker: after N failures, the circuit opens, requests fail fast with a cached response or fallback → the system remains partially functional. Netflix Hystrix is the well-known library (now in maintenance mode); Resilience4j is the modern choice for Java; Python has pybreaker; Istio Service Mesh has it built in.",
  },
  {
    id: 2021,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Saga Pattern giải quyết vấn đề gì trong microservices? Choreography vs Orchestration? (What problem does the Saga Pattern solve in microservices? Choreography vs Orchestration?)",
    q_en: "What problem does the Saga Pattern solve in microservices? What is the difference between Choreography and Orchestration?",
    a: `Trong microservices, mỗi service có database riêng, nên không thể dùng distributed transactions (2PC) – quá phức tạp và tạo tight coupling. Saga Pattern giải quyết bằng cách chia distributed transaction thành chuỗi local transactions, mỗi bước publish event; nếu một bước fail, thực hiện compensating transactions để rollback các bước trước. Ví dụ Order Saga: CreateOrder → ReserveInventory → ProcessPayment → ShipOrder; nếu ProcessPayment fail → UnreserveInventory → CancelOrder.

- Choreography: mỗi service lắng nghe events và tự quyết định hành động tiếp theo – không có coordinator trung tâm, loosely coupled hơn nhưng khó theo dõi flow tổng thể, dễ tạo circular dependencies.
- Orchestration: có một Saga Orchestrator trung tâm điều phối các bước, gửi commands đến từng service – dễ hiểu và debug flow, nhưng orchestrator có thể trở thành bottleneck và chứa nhiều business logic.

Temporal.io, AWS Step Functions là công cụ hỗ trợ orchestration saga.`,
    a_en: `In microservices, each service owns its own database, making distributed transactions (2PC) impractical — too complex and too tightly coupled. The Saga Pattern solves this by breaking a distributed transaction into a sequence of local transactions, each publishing an event; if any step fails, compensating transactions roll back the previous steps. Example Order Saga: CreateOrder → ReserveInventory → ProcessPayment → ShipOrder; if ProcessPayment fails → UnreserveInventory → CancelOrder.

- Choreography: each service listens for events and decides its own next action — no central coordinator, more loosely coupled, but the overall flow is hard to track and prone to circular dependencies.
- Orchestration: a central Saga Orchestrator coordinates all steps, sending commands to each service — easier to understand and debug, but the orchestrator can become a bottleneck and accumulate too much business logic.

Temporal.io and AWS Step Functions are tools that support orchestration-based sagas.`,
  },
  {
    id: 2022,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Event-Driven Architecture là gì? Lợi ích và các thách thức khi implement? (What is Event-Driven Architecture? Benefits and challenges when implementing?)",
    q_en: "What is Event-Driven Architecture? What are its benefits and implementation challenges?",
    a: "Event-Driven Architecture (EDA) là kiến trúc nơi các components giao tiếp với nhau qua events (notifications về điều gì đó đã xảy ra) thay vì direct API calls. Producer emit events mà không biết consumer là ai; consumer subscribe và xử lý events async – đạt được loose coupling cao. \n\n**Lợi ích:** producers và consumers hoàn toàn độc lập (có thể deploy, scale, fail độc lập), dễ thêm consumer mới mà không sửa producer, natural fit cho audit logging và event sourcing, handle high throughput tốt qua buffering. Thách thức: debugging và tracing khó hơn vì flow phi tuyến tính; eventual consistency – consumer có thể xử lý chậm hơn producer; ordering guarantees phức tạp (Kafka đảm bảo ordering trong partition); idempotency – consumer cần handle duplicate events; schema evolution khi event format thay đổi. Patterns quan trọng: dead letter queue cho failed events, event schema registry (Confluent Schema Registry), outbox pattern để đảm bảo atomicity giữa DB write và event publish.",
    a_en: "Event-Driven Architecture (EDA) is an architectural style where components communicate via events (notifications that something has happened) rather than direct API calls. Producers emit events without knowing who the consumers are; consumers subscribe and process events asynchronously — achieving high loose coupling. \n\n**Benefits:** producers and consumers are fully independent (can be deployed, scaled, and fail independently); new consumers can be added without modifying producers; it is a natural fit for audit logging and event sourcing; high throughput is handled well through buffering. Challenges: debugging and tracing are harder due to non-linear flows; eventual consistency — consumers may process events more slowly than producers; ordering guarantees are complex (Kafka ensures ordering within a partition); idempotency — consumers must handle duplicate events; schema evolution when the event format changes. Key patterns: dead letter queues for failed events, event schema registries (Confluent Schema Registry), and the outbox pattern to ensure atomicity between a database write and an event publish.",
  },
  {
    id: 2023,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Kafka và RabbitMQ khác nhau như thế nào? Khi nào dùng mỗi loại? (How do Kafka and RabbitMQ differ? When to use each?)",
    q_en: "How do Kafka and RabbitMQ differ? When should you use each?",
    a: "RabbitMQ là traditional message broker (queue-based): messages được push đến consumers, sau khi consumer acknowledge thì message bị xóa, hỗ trợ nhiều messaging patterns (pub/sub, point-to-point, routing với exchanges), tốt cho task queues và RPC. Kafka là distributed event log (log-based): messages được append vào log và retained theo thời gian (không xóa sau consume), consumers tự pull và track offset của mình, hỗ trợ replay messages, designed cho high-throughput (hàng triệu messages/second). Chọn RabbitMQ khi: cần complex routing logic, task distribution (job queues), message TTL và priority, tích hợp với nhiều protocols (AMQP, STOMP, MQTT), team nhỏ cần dễ ops. Chọn Kafka khi: event streaming và event sourcing, audit log cần retention lâu dài, multiple consumers cần đọc cùng message độc lập, high throughput analytics pipeline, real-time data integration giữa nhiều systems. Netflix, Uber, LinkedIn dùng Kafka ở quy mô hàng trăm tỷ messages/ngày.",
    a_en: "RabbitMQ is a traditional message broker (queue-based): messages are pushed to consumers; once acknowledged, messages are deleted; it supports many messaging patterns (pub/sub, point-to-point, routing with exchanges); well-suited for task queues and RPC. Kafka is a distributed event log (log-based): messages are appended to a log and retained over time (not deleted after consumption); consumers pull messages and track their own offsets; supports message replay; designed for high throughput (millions of messages per second). Choose RabbitMQ when: complex routing logic is needed, job distribution (task queues), message TTL and priority are required, multi-protocol integration (AMQP, STOMP, MQTT) is needed, or a small team needs easy operations. Choose Kafka when: event streaming and event sourcing are the goal, long-term audit log retention is needed, multiple independent consumers must read the same messages, a high-throughput analytics pipeline is required, or real-time data integration across many systems is needed. Netflix, Uber, and LinkedIn use Kafka at hundreds of billions of messages per day.",
  },
  {
    id: 2024,
    category: "System Design",
    subcategory: "Architecture Patterns",
    level: "intermediate",
    q: "Serverless Architecture là gì? Ưu nhược điểm và khi nào phù hợp? (What is Serverless Architecture? Pros, cons, and when is it appropriate?)",
    q_en: "What is Serverless Architecture? What are its pros, cons, and when is it appropriate?",
    a: "Serverless (FaaS – Function as a Service) là mô hình cloud computing nơi developer chỉ viết code (functions), không quản lý server infrastructure; provider tự động provision, scale, và bill theo actual invocations (pay-per-use). AWS Lambda, Google Cloud Functions, Vercel Functions là các giải pháp phổ biến. \n\n**Ưu điểm:** zero infrastructure management, auto-scaling từ 0 đến hàng nghìn instances ngay lập tức, cost-effective cho sporadic/unpredictable traffic (không trả tiền khi idle), giảm operational overhead. \n\n**Nhược điểm:** Cold Start latency (10ms-1s+ khi function chưa được warm) – vấn đề lớn cho real-time apps; execution time limit (Lambda tối đa 15 phút); vendor lock-in; stateless (mỗi invocation độc lập, phải dùng external store); debugging và local testing phức tạp hơn; không phù hợp cho long-running processes. Phù hợp cho: webhooks, scheduled jobs (cron), event-driven processing (S3 trigger, SQS), APIs với variable traffic, glue code giữa services. Không phù hợp cho: latency-sensitive real-time APIs, stateful applications, CPU-intensive workloads dài.",
    a_en: "Serverless (FaaS — Function as a Service) is a cloud computing model where developers write only code (functions) and do not manage server infrastructure; the provider automatically provisions, scales, and bills based on actual invocations (pay-per-use). AWS Lambda, Google Cloud Functions, and Vercel Functions are popular solutions. \n\n**Pros:** zero infrastructure management, instant auto-scaling from zero to thousands of instances, cost-effective for sporadic or unpredictable traffic (no cost when idle), reduced operational overhead. \n\n**Cons:** cold start latency (10ms to 1s+ when the function is not warm) — a significant issue for real-time apps; execution time limits (Lambda max 15 minutes); vendor lock-in; stateless (each invocation is independent, requiring an external state store); debugging and local testing are more complex; not suitable for long-running processes. Best suited for: webhooks, scheduled jobs (cron), event-driven processing (S3 triggers, SQS), APIs with variable traffic, and glue code between services. Not suited for: latency-sensitive real-time APIs, stateful applications, or long-running CPU-intensive workloads.",
  },

  // ─── Data & Storage (2025–2032) ─────────────────────────────────────────────
  {
    id: 2025,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "intermediate",
    q: "Khi nào chọn SQL và khi nào chọn NoSQL? Các yếu tố quyết định? (When to choose SQL vs NoSQL? What are the deciding factors?)",
    q_en: "When should you choose SQL vs NoSQL? What are the deciding factors?",
    a: "SQL (Relational DB): dùng khi cần ACID transactions (tài chính, đặt hàng), data có structure rõ ràng và ổn định, cần complex queries với JOINs, relationships giữa entities quan trọng. PostgreSQL, MySQL là lựa chọn mặc định tốt cho hầu hết applications. NoSQL chia thành nhiều loại với use case khác nhau: Document DB (MongoDB, Firestore) – flexible schema, tốt cho content management, user profiles; Key-Value (Redis, DynamoDB) – cực nhanh, tốt cho caching, session, leaderboards; Column-family (Cassandra, HBase) – write-heavy workloads, time-series, IoT data ở scale lớn; Graph DB (Neo4j) – relationship-heavy queries, social networks, fraud detection. Quyết định không chỉ là SQL vs NoSQL mà là chọn đúng database cho use case: write pattern, read pattern, scale requirement, consistency requirement, query complexity. Polyglot persistence – dùng nhiều database types trong cùng hệ thống – là approach của các hệ thống lớn (Netflix dùng MySQL + Cassandra + Elasticsearch + Redis cùng lúc).",
    a_en: "SQL (Relational DB): use when ACID transactions are required (finance, order management), data has a clear and stable structure, complex JOINs are needed, or relationships between entities are critical. PostgreSQL and MySQL are good default choices for most applications. NoSQL comes in several types with different use cases: Document DB (MongoDB, Firestore) — flexible schema, great for content management and user profiles; Key-Value (Redis, DynamoDB) — extremely fast, ideal for caching, sessions, and leaderboards; Column-family (Cassandra, HBase) — write-heavy workloads, time-series data, IoT at large scale; Graph DB (Neo4j) — relationship-heavy queries, social networks, fraud detection. The decision is not just SQL vs NoSQL but choosing the right database for the use case: write patterns, read patterns, scale requirements, consistency requirements, and query complexity all matter. Polyglot persistence — using multiple database types in the same system — is the approach taken by large-scale systems (Netflix uses MySQL, Cassandra, Elasticsearch, and Redis simultaneously).",
  },
  {
    id: 2026,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "intermediate",
    q: "Database Indexing hoạt động như thế nào? Các loại index và khi nào nên dùng? (How does Database Indexing work? Types of indexes and when to use them?)",
    q_en: "How does Database Indexing work? What are the types of indexes and when should you use them?",
    a: `Index là data structure (thường là B-Tree) cho phép database tìm kiếm records nhanh mà không cần full table scan – giảm query time từ O(n) xuống O(log n).

- B-Tree Index: phổ biến nhất, hỗ trợ equality và range queries (=, <, >, BETWEEN, LIKE 'prefix%'), tốt cho high-cardinality columns.
- Hash Index: cực nhanh cho equality lookups (=) nhưng không hỗ trợ range queries, dùng trong memory-optimized tables.
- Composite Index: index trên nhiều columns – thứ tự columns quan trọng (leftmost prefix rule); index (a,b,c) hỗ trợ queries trên (a), (a,b), (a,b,c) nhưng không hỗ trợ chỉ (b) hoặc (c).
- Partial Index: chỉ index một subset của rows (ví dụ \`WHERE status='active'\`) – nhỏ hơn và hiệu quả hơn.
- Full-Text Index: cho text search.
- GIN/GiST Index (PostgreSQL): cho array, JSONB, geometric data.
- Covering Index: index chứa tất cả columns cần cho query – không cần đọc thêm table rows.

Trade-off: mỗi index tốn storage và làm chậm write (phải cập nhật index); không phải nhiều index là tốt hơn. Dùng EXPLAIN ANALYZE để hiểu query plan trước khi thêm index.`,
    a_en: `An index is a data structure (typically a B-Tree) that allows the database to find records quickly without a full table scan — reducing query time from O(n) to O(log n).

- B-Tree Index: the most common type; supports equality and range queries (=, <, >, BETWEEN, LIKE 'prefix%'); good for high-cardinality columns.
- Hash Index: extremely fast for equality lookups (=) but does not support range queries; used in memory-optimized tables.
- Composite Index: an index on multiple columns — column order matters (leftmost prefix rule); an index on (a, b, c) supports queries on (a), (a, b), and (a, b, c) but not queries on only (b) or (c).
- Partial Index: indexes only a subset of rows (e.g., WHERE status='active') — smaller and more efficient.
- Full-Text Index: for text search queries.
- GIN/GiST Index (PostgreSQL): for arrays, JSONB, and geometric data.
- Covering Index: includes all columns needed for a query, eliminating the need to read the actual table rows.

Trade-offs: each index consumes storage and slows writes (the index must be updated); more indexes is not always better. Use EXPLAIN ANALYZE to understand the query plan before adding an index.`,
  },
  {
    id: 2027,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "intermediate",
    q: "Normalization và Denormalization là gì? Trade-off và khi nào dùng mỗi kỹ thuật? (What are Normalization and Denormalization? Trade-offs and when to use each?)",
    q_en: "What are Normalization and Denormalization? What are the trade-offs and when should you use each?",
    a: "Normalization là quá trình tổ chức database để giảm data redundancy và dependency thông qua các Normal Forms (1NF, 2NF, 3NF, BCNF) – chia data thành nhiều tables liên quan, tránh duplicate data. \n\n**Lợi ích:** storage hiệu quả, dễ maintain consistency khi update (chỉ cần update một chỗ), ít risk inconsistency. \n\n**Nhược điểm:** cần nhiều JOINs để reconstruct data, JOINs tốn kém ở scale lớn. Denormalization là cố tình thêm redundant data để tăng read performance – ví dụ lưu username trong bảng posts thay vì JOIN với bảng users mỗi lần query. \n\n**Lợi ích:** read queries nhanh hơn đáng kể, đơn giản hóa query. \n\n**Nhược điểm:** duplicate data tốn storage, phức tạp khi update (phải update nhiều chỗ), risk inconsistency. Quyết định: OLTP (transaction processing) thường normalize để đảm bảo data integrity; OLAP (analytics, data warehouse) thường denormalize (star/snowflake schema) để tăng query speed. Với NoSQL Document DB, denormalization là mặc định – embed related data vào document nếu luôn được đọc cùng nhau.",
    a_en: "Normalization is the process of organizing a database to reduce data redundancy and dependency through Normal Forms (1NF, 2NF, 3NF, BCNF) — splitting data into related tables and eliminating duplicate data. \n\n**Benefits:** efficient storage, easy consistency maintenance on updates (only one place to update), lower risk of inconsistency. Drawbacks: requires many JOINs to reconstruct data, and JOINs become expensive at scale. Denormalization intentionally adds redundant data to improve read performance — for example, storing the username in the posts table instead of joining with the users table on every query. \n\n**Benefits:** significantly faster read queries, simpler query logic. Drawbacks: duplicate data wastes storage, updates are complex (must update multiple places), and there is a risk of inconsistency. Decision guide: OLTP (transaction processing) typically uses normalization to ensure data integrity; OLAP (analytics, data warehousing) typically uses denormalization (star/snowflake schema) for query speed. With NoSQL document databases, denormalization is the default — embed related data in the document when it is always read together.",
  },
  {
    id: 2028,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "advanced",
    q: "Data Partitioning là gì? Horizontal vs Vertical Partitioning và các chiến lược partition? (What is Data Partitioning? Horizontal vs Vertical Partitioning and partitioning strategies?)",
    q_en: "What is Data Partitioning? What is the difference between Horizontal and Vertical Partitioning, and what are common partitioning strategies?",
    a: "Data Partitioning là chia một large table/dataset thành nhiều phần nhỏ hơn để cải thiện performance và manageability. Horizontal Partitioning (Sharding): chia rows – ví dụ users 1-1M vào partition 1, 1M-2M vào partition 2; mỗi partition có cùng schema. Vertical Partitioning: chia columns – ví dụ tách blob/text columns ít được đọc ra table riêng để hot data nằm cùng nhau trên disk, cải thiện cache efficiency. Partitioning strategies cho Horizontal: Range Partitioning (theo date range, ID range – tốt cho time-series, dễ archive old data); Hash Partitioning (hash của partition key – phân phối đều, tránh hot spots); List Partitioning (theo enumerated values, ví dụ country); Composite Partitioning (kết hợp nhiều strategies). PostgreSQL Table Partitioning là built-in solution: khai báo partition key, tự động route inserts và prune partitions khi query. \n\n**Lợi ích:** partition pruning giảm data scanned, parallel query trên nhiều partitions, dễ archive/drop old partitions (DROP PARTITION nhanh hơn DELETE). Khác biệt với Sharding: partitioning thường trong cùng một database instance, sharding là across nhiều servers.",
    a_en: "Data Partitioning is the technique of splitting a large table or dataset into smaller pieces to improve performance and manageability. Horizontal Partitioning (Sharding): splits rows — e.g., users 1–1M go to partition 1, 1M–2M to partition 2; each partition has the same schema. Vertical Partitioning: splits columns — e.g., separating rarely-read blob/text columns into a separate table so hot data is co-located on disk, improving cache efficiency. Horizontal partitioning strategies: Range Partitioning (by date or ID range — good for time-series data, easy to archive old data); Hash Partitioning (hash of the partition key — even distribution, avoids hot spots); List Partitioning (by enumerated values, e.g., country); Composite Partitioning (combining multiple strategies). PostgreSQL Table Partitioning is a built-in solution: declare a partition key, and it automatically routes inserts and prunes partitions at query time. \n\n**Benefits:** partition pruning reduces the amount of data scanned; parallel queries across partitions; easy archiving or dropping old partitions (DROP PARTITION is much faster than DELETE). Key difference from Sharding: partitioning typically operates within a single database instance, while sharding spreads data across multiple servers.",
  },
  {
    id: 2029,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "intermediate",
    q: "Blob Storage là gì và khi nào dùng thay vì database? Thiết kế hệ thống lưu trữ file? (What is Blob Storage and when to use it instead of a database? How to design a file storage system?)",
    q_en: "What is Blob Storage and when should you use it instead of a database? How do you design a file storage system?",
    a: "Blob Storage (Binary Large Object) là storage chuyên biệt cho unstructured data như images, videos, audio, documents – ví dụ AWS S3, Google Cloud Storage, Azure Blob Storage. Không nên lưu files trực tiếp vào database vì: làm database backup lớn, ảnh hưởng query performance, tốn RAM cho buffer pool, không scale tốt. Pattern đúng: lưu file lên Blob Storage, chỉ lưu metadata (URL, size, type, owner) trong database. Thiết kế hệ thống upload file: Client → generate pre-signed URL từ backend → upload trực tiếp lên S3 (bypass server, tránh bandwidth bottleneck) → backend nhận callback/event để cập nhật DB. Tối ưu: dùng CDN (CloudFront) trước S3 để serve files nhanh cho users globally, enable S3 Transfer Acceleration cho upload quốc tế, dùng multipart upload cho files lớn (>100MB). Security: pre-signed URLs với expiration time, bucket policy không public, virus scanning với Lambda trigger. Storage tiers: S3 Standard → S3 IA (Infrequent Access) → S3 Glacier cho archival – giảm cost đáng kể.",
    a_en: "Blob Storage (Binary Large Object storage) is specialized storage for unstructured data such as images, videos, audio, and documents — examples include AWS S3, Google Cloud Storage, and Azure Blob Storage. Storing files directly in a database is inadvisable because it bloats backups, degrades query performance, wastes RAM in the buffer pool, and scales poorly. The correct pattern: upload files to Blob Storage and store only metadata (URL, size, type, owner) in the database. File upload system design: Client → backend generates a pre-signed URL → client uploads directly to S3 (bypassing the server to avoid a bandwidth bottleneck) → backend receives a callback/event and updates the database. Optimizations: use a CDN (CloudFront) in front of S3 to serve files quickly to global users; enable S3 Transfer Acceleration for international uploads; use multipart upload for large files (>100MB). Security: pre-signed URLs with expiration times, non-public bucket policies, virus scanning via Lambda triggers. Storage tiers: S3 Standard → S3 IA (Infrequent Access) → S3 Glacier for archival — significantly reduces cost.",
  },
  {
    id: 2030,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "advanced",
    q: "Time-Series Database là gì? Khi nào cần dùng và các giải pháp phổ biến? (What is a Time-Series Database? When is it needed and what are popular solutions?)",
    q_en: "What is a Time-Series Database? When is it needed and what are the popular solutions?",
    a: "Time-Series Database (TSDB) là database được tối ưu đặc biệt cho dữ liệu có timestamp – metrics, sensor readings, financial ticks, logs, IoT data. Đặc điểm: write-heavy (liên tục insert new data points), dữ liệu cũ ít được query, aggregation theo time windows (avg, sum, min/max trong khoảng thời gian), data retention policies (tự động xóa data cũ). Vì sao RDBMS không tốt cho time-series: index B-Tree không hiệu quả cho sequential time-based writes, phải manually partition và archive old data. TSDB tối ưu qua: columnar storage (compress cùng metric đến 10-100x), time-based partitioning built-in, downsampling (giảm resolution của old data), optimized aggregation functions. InfluxDB: phổ biến nhất, có InfluxQL/Flux query language, built-in retention policies. TimescaleDB: extension của PostgreSQL, dùng được SQL quen thuộc, hypertables tự động partition. Prometheus + Grafana: stack tiêu chuẩn cho infrastructure monitoring. Cassandra: cũng thường dùng cho time-series ở scale rất lớn (IoT). Use cases: application metrics (Datadog, New Relic dùng TSDB), stock prices, server monitoring, IoT sensor data.",
    a_en: "A Time-Series Database (TSDB) is a database optimized specifically for timestamped data — metrics, sensor readings, financial ticks, logs, and IoT data. Key characteristics: write-heavy (continuously inserting new data points), old data is rarely queried, aggregation by time windows (avg, sum, min/max over time ranges), and data retention policies (automatic deletion of old data). Why RDBMS falls short for time-series: B-Tree indexes are inefficient for sequential time-based writes, and old data must be manually partitioned and archived. TSDBs optimize via: columnar storage (compresses the same metric up to 10–100x), built-in time-based partitioning, downsampling (reducing resolution of old data), and optimized aggregation functions. InfluxDB: the most popular, with InfluxQL/Flux query language and built-in retention policies. TimescaleDB: a PostgreSQL extension using familiar SQL, with hypertables that auto-partition. Prometheus + Grafana: the standard stack for infrastructure monitoring. Cassandra: also commonly used for time-series at very large scale (IoT). Use cases: application metrics (Datadog, New Relic use TSDBs), stock prices, server monitoring, and IoT sensor data.",
  },
  {
    id: 2031,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "advanced",
    q: "Data Lake và Data Warehouse khác nhau như thế nào? Khi nào dùng mỗi loại? (How do Data Lake and Data Warehouse differ? When to use each?)",
    q_en: "How do Data Lake and Data Warehouse differ? When should you use each?",
    a: "Data Warehouse là repository lưu structured, processed data được tổ chức theo schema cụ thể (star/snowflake schema) cho business intelligence và SQL analytics – data được ETL (Extract, Transform, Load) trước khi load vào. \n\n**Ví dụ:** Amazon Redshift, Google BigQuery, Snowflake. Data Lake là repository lưu raw data ở bất kỳ format nào (structured, semi-structured, unstructured) ở quy mô massive – schema được áp dụng khi đọc (schema-on-read) thay vì khi ghi. \n\n**Ví dụ:** AWS S3 + Glue + Athena, Azure Data Lake, Hadoop HDFS. Data Warehouse dùng khi: BI dashboards, regular business reports, data analysts cần SQL queries dễ dàng, data quality quan trọng. Data Lake dùng khi: data science và ML cần raw data, lưu trữ tất cả data để phân tích sau (không biết trước cần gì), log files, clickstream data. Data Lakehouse là trend mới (Databricks Delta Lake, Apache Iceberg) kết hợp cả hai: lưu raw data trong object storage nhưng có ACID transactions, schema enforcement, và query performance tốt như warehouse.",
    a_en: "A Data Warehouse is a repository that stores structured, processed data organized under a defined schema (star or snowflake schema) for business intelligence and SQL analytics — data is ETL'd (Extracted, Transformed, Loaded) before ingestion. Examples: Amazon Redshift, Google BigQuery, Snowflake. A Data Lake is a repository that stores raw data in any format (structured, semi-structured, unstructured) at massive scale — schema is applied at read time (schema-on-read) rather than at write time. Examples: AWS S3 + Glue + Athena, Azure Data Lake, Hadoop HDFS. Use a Data Warehouse when: building BI dashboards, generating regular business reports, data analysts need easy SQL queries, or data quality is critical. Use a Data Lake when: data scientists and ML engineers need raw data, you want to store all data for future analysis (use cases unknown upfront), or ingesting log files and clickstream data. The Data Lakehouse is an emerging trend (Databricks Delta Lake, Apache Iceberg) that combines both: storing raw data in object storage while providing ACID transactions, schema enforcement, and warehouse-like query performance.",
  },
  {
    id: 2032,
    category: "System Design",
    subcategory: "Data & Storage",
    level: "advanced",
    q: "Change Data Capture (CDC) là gì? Cách hoạt động và use cases? (What is Change Data Capture (CDC)? How it works and use cases?)",
    q_en: "What is Change Data Capture (CDC)? How does it work and what are its use cases?",
    a: "CDC là kỹ thuật theo dõi và capture mọi thay đổi (INSERT, UPDATE, DELETE) trong database và stream những thay đổi đó ra các system khác gần như real-time – thay vì polling database định kỳ. Cách hoạt động phổ biến nhất: Log-based CDC đọc database transaction log (WAL trong PostgreSQL, binlog trong MySQL) – non-intrusive, không ảnh hưởng production write performance, capture tất cả changes kể cả DELETE. Debezium là open-source CDC platform phổ biến nhất, kết nối với PostgreSQL/MySQL/MongoDB và stream changes vào Kafka. Use cases: cache invalidation (khi DB thay đổi → invalidate Redis cache ngay lập tức); data synchronization (sync dữ liệu từ OLTP sang data warehouse real-time thay vì batch ETL hàng đêm); microservices event sourcing (DB change → event); Elasticsearch sync (full-text search index luôn up-to-date); audit logging. Lợi thế so với polling: lower latency (seconds thay vì minutes/hours), ít load hơn cho DB, không miss delete events. Outbox Pattern là cách đảm bảo CDC reliability: write changes vào outbox table trong cùng transaction, CDC đọc từ outbox.",
    a_en: "CDC is the technique of tracking and capturing every change (INSERT, UPDATE, DELETE) in a database and streaming those changes to other systems in near real-time — instead of periodically polling the database. The most common approach: Log-based CDC reads the database transaction log (WAL in PostgreSQL, binlog in MySQL) — non-intrusive, does not impact production write performance, and captures all changes including DELETEs. Debezium is the most popular open-source CDC platform, connecting to PostgreSQL, MySQL, and MongoDB and streaming changes into Kafka. Use cases: cache invalidation (when the DB changes → immediately invalidate the Redis cache); data synchronization (sync data from OLTP to a data warehouse in real-time instead of nightly batch ETL); microservices event sourcing (DB change → event); Elasticsearch sync (keeping full-text search indexes up to date); audit logging. Advantages over polling: lower latency (seconds instead of minutes or hours), less load on the database, and no missed DELETE events. The Outbox Pattern ensures CDC reliability: write changes to an outbox table in the same transaction, and CDC reads from the outbox.",
  },

  // ─── Interview Scenarios (2033–2040) ────────────────────────────────────────
  {
    id: 2033,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế hệ thống URL Shortener (như bit.ly). Các thành phần chính và quyết định kỹ thuật? (Design a URL Shortener system like bit.ly. Key components and technical decisions?)",
    q_en: "Design a URL Shortener system like bit.ly. What are the key components and technical decisions?",
    a: `Requirements: tạo short URL từ long URL, redirect từ short → long, ~100M URLs/day (write), ~1B redirects/day (read, read-heavy 10:1).

- Hash Generation: dùng Base62 encoding (a-zA-Z0-9) trên 7 ký tự = 62^7 ≈ 3.5 tỷ unique URLs; tránh MD5/SHA vì collision; thay vào đó dùng auto-increment ID convert sang Base62.
- Database: lưu \`short_code → long_url\` mapping; read-heavy nên cần caching aggressive; có thể dùng Cassandra (scale tốt) hoặc MySQL/PostgreSQL với Redis cache.
- Cache: 80% traffic chỉ đến 20% URLs (hot URLs) → cache top URLs trong Redis với LRU eviction, cache hit rate rất cao.
- Redirect: 301 (permanent, browser cache – ít load server nhưng không track analytics) vs 302 (temporary, browser không cache – track được mỗi click).

Architecture: API Server stateless → Redis cache → Database; Rate limiting để tránh abuse; Custom domain support cần DNS wildcard; Analytics pipeline: click → Kafka → Spark → analytics DB. Scale: phân tách read service (redirect) và write service (create) vì load pattern khác nhau.`,
    a_en: `Requirements: generate a short URL from a long URL, redirect from short to long, ~100M URLs/day (write), ~1B redirects/day (read — heavily read-biased at 10:1 ratio).

- Hash Generation: use Base62 encoding (a-zA-Z0-9) on 7 characters = 62^7 ≈ 3.5 billion unique URLs; avoid MD5/SHA due to collision risk; instead, use an auto-incrementing ID converted to Base62.
- Database: stores the \`short_code → long_url\` mapping; since reads dominate, aggressive caching is needed; Cassandra (scales well) or MySQL/PostgreSQL with a Redis cache are good options.
- Cache: 80% of traffic hits 20% of URLs (hot URLs) → cache top URLs in Redis with LRU eviction for very high cache hit rates.
- Redirect: 301 (permanent — browser caches it, reduces server load but cannot track analytics) vs 302 (temporary — browser does not cache, each click is trackable).

Architecture: stateless API Server → Redis cache → Database; rate limiting to prevent abuse; custom domain support requires a DNS wildcard; analytics pipeline: click → Kafka → Spark → analytics DB. Scaling: separate the read service (redirect) from the write service (create) since their load patterns differ significantly.`,
  },
  {
    id: 2034,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế hệ thống Chat real-time (như WhatsApp/Slack). Làm thế nào để handle kết nối và tin nhắn? (Design a real-time chat system like WhatsApp/Slack. How to handle connections and messages?)",
    q_en: "Design a real-time chat system like WhatsApp or Slack. How do you handle connections and messages?",
    a: `Requirements: real-time messaging, online/offline status, message history, 1-1 và group chat.

- Connection layer: WebSocket là lựa chọn tốt hơn long polling vì bi-directional, persistent connection, low latency – mỗi client maintain một WebSocket connection đến chat server.
- Cross-server routing: users kết nối đến different servers – cần pub/sub layer (Redis Pub/Sub hoặc Kafka): Server A nhận message cho User B đang connect đến Server B → publish lên Redis → Server B subscribe và push đến User B.
- Message storage: Cassandra (HBase ở Facebook Messenger, Cassandra ở Discord) vì write-heavy, time-based access pattern. Schema: partition key là \`(conversation_id)\`, clustering key là \`(timestamp, message_id)\`.
- Offline messages: nếu user offline khi nhận message, lưu vào DB; khi reconnect, fetch unread messages.
- Status service: heart-beat mỗi 5s để track online status, lưu trong Redis với TTL.
- Fanout cho group chat: fanout-on-write (push đến tất cả members) vs fanout-on-read (members pull khi cần); với group lớn, fanout-on-write tốn kém → giới hạn group size hoặc hybrid approach.`,
    a_en: `Requirements: real-time messaging, online/offline presence, message history, 1-on-1 and group chat.

- Connection layer: WebSockets are preferred over long polling — bidirectional, persistent connection, low latency; each client maintains one WebSocket connection to a chat server.
- Cross-server routing: users connect to different servers — a pub/sub layer (Redis Pub/Sub or Kafka) is needed: Server A receives a message for User B (connected to Server B) → publishes to Redis → Server B subscribes and pushes the message to User B.
- Message storage: Cassandra (Facebook Messenger uses HBase, Discord uses Cassandra) — write-heavy, time-based access patterns. Schema: partition key is \`(conversation_id)\`, clustering key is \`(timestamp, message_id)\`.
- Offline messages: if the user is offline, store the message in the DB; fetch unread messages on reconnect.
- Presence service: heartbeat every 5s to track online status, stored in Redis with TTL.
- Group chat fanout: fanout-on-write (push to all members immediately) vs fanout-on-read (members pull when needed); for large groups, fanout-on-write is expensive → enforce a group size limit or use a hybrid approach.`,
  },
  {
    id: 2035,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế hệ thống Notification (push/email/SMS notifications). Các thành phần và đảm bảo delivery? (Design a Notification System (push/email/SMS). Components and ensuring delivery?)",
    q_en: "Design a Notification System supporting push, email, and SMS. What are the key components and how do you ensure reliable delivery?",
    a: `Requirements: multi-channel (push, email, SMS), high volume (hàng trăm triệu notifications/day), reliable delivery, user preferences.

Architecture: Producer Services → Notification Service → Channel Handlers → Third-party providers.

- Notification Service: nhận events (order shipped, friend request), lookup user preferences (channel, quiet hours, opt-out), enqueue vào Kafka với separate topics per channel.
- Channel Workers: Push Notification Worker gọi FCM (Android)/APNs (iOS); Email Worker gọi SendGrid/SES; SMS Worker gọi Twilio/SNS.
- Reliability: at-least-once delivery via Kafka; lưu notification vào DB với status (pending/sent/failed); retry with exponential backoff; dead letter queue cho permanent failures.
- Rate limiting per user: không spam user với 100 notifications cùng lúc – aggregate/throttle.
- Notification template service: versioned templates với i18n support.
- User preference service: per-channel opt-in/out, quiet hours, digest mode.
- Monitoring: delivery rate per channel, bounce/unsubscribe tracking, latency P99.

Scale bottleneck thường ở third-party API calls – cần circuit breakers và fallback providers. Idempotency key để tránh duplicate notifications khi retry.`,
    a_en: `Requirements: multi-channel (push, email, SMS), high volume (hundreds of millions of notifications per day), reliable delivery, user preference support.

Architecture: Producer Services → Notification Service → Channel Handlers → Third-party providers.

- Notification Service: receives events (order shipped, friend request), looks up user preferences (channel, quiet hours, opt-out), and enqueues into Kafka with separate topics per channel.
- Channel Workers: Push Notification Worker calls FCM (Android) / APNs (iOS); Email Worker calls SendGrid/SES; SMS Worker calls Twilio/SNS.
- Reliability: at-least-once delivery via Kafka; store notifications in the DB with status (pending/sent/failed); retry with exponential backoff; dead letter queue for permanent failures.
- Rate limiting per user: avoid spamming users with 100 notifications at once — aggregate or throttle.
- Notification template service: versioned templates with i18n support.
- User preference service: per-channel opt-in/out, quiet hours, and digest mode.
- Monitoring: delivery rate per channel, bounce/unsubscribe tracking, P99 latency.

The typical scale bottleneck is third-party API calls — circuit breakers and fallback providers are essential. Use idempotency keys to avoid duplicate notifications during retries.`,
  },
  {
    id: 2036,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế Rate Limiter phân tán cho API. Các yêu cầu và giải pháp kỹ thuật? (Design a distributed Rate Limiter for an API. Requirements and technical solutions?)",
    q_en: "Design a distributed Rate Limiter for an API. What are the requirements and technical solutions?",
    a: "Requirements: limit requests per user/IP/API key, distributed (nhiều API servers), low latency overhead (<1ms), accurate (không cho phép vượt limit nhiều), handle race conditions. Approach 1 – Centralized Redis: dùng Redis Lua script (atomic operations) để implement sliding window counter hoặc token bucket. Redis INCR + EXPIRE cho fixed window; sorted set với ZADD/ZREMRANGEBYSCORE cho sliding window log. Ưu: centralized, chính xác; Nhược: Redis là single point of failure (giải quyết bằng Redis Cluster), mỗi request phải gọi Redis (+latency). Approach 2 – Token Bucket với Redis: lưu (tokens, last_refill_time) per user trong Redis; mỗi request atomic update via Lua script; refill tokens theo elapsed time. Approach 3 – Local + Global: mỗi API server có local counter, sync với Redis định kỳ – giảm Redis calls nhưng ít chính xác hơn (có thể vượt limit tạm thời). Response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After`. Multi-level rate limiting: per IP, per user, per endpoint, per API key – với different limits. Distributed Rate Limiting phức tạp hơn vì không có shared memory – Redis là giải pháp thực tế nhất; nếu Redis down, circuit breaker để decide fail-open (allow all) hay fail-closed (block all).",
    a_en: "Requirements: limit requests per user/IP/API key, distributed (multiple API servers), low latency overhead (<1ms), high accuracy (must not allow significant over-limit), and handle race conditions. Approach 1 — Centralized Redis: use Redis Lua scripts (atomic operations) to implement a sliding window counter or token bucket. Redis INCR + EXPIRE for a fixed window; a sorted set with ZADD/ZREMRANGEBYSCORE for a sliding window log. \n\n**Pros:** centralized and accurate. \n\n**Cons:** Redis is a single point of failure (addressed with Redis Cluster); every request must call Redis, adding latency. Approach 2 — Token Bucket with Redis: store (tokens, last_refill_time) per user in Redis; each request atomically updates via a Lua script; refill tokens based on elapsed time. Approach 3 — Local + Global: each API server maintains a local counter and syncs with Redis periodically — reduces Redis calls but is less accurate (limit can be temporarily exceeded). Response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After`. Multi-level rate limiting: per IP, per user, per endpoint, per API key — each with different limits. Distributed rate limiting is more complex because there is no shared memory — Redis is the most practical solution; if Redis goes down, use a circuit breaker to decide whether to fail-open (allow all) or fail-closed (block all).",
  },
  {
    id: 2037,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế News Feed (như Facebook/Twitter). Fanout strategies và caching? (Design a News Feed like Facebook/Twitter. Fanout strategies and caching?)",
    q_en: "Design a News Feed like Facebook or Twitter. What are the fanout strategies and caching approaches?",
    a: `Requirements: user thấy posts từ người họ follow, realtime updates, pagination, ~500M users.

Core challenge: khi user A post, tất cả followers của A cần thấy post đó trong feed.

- Fanout-on-write (Push model): immediately push vào feed cache của tất cả followers → feed read rất nhanh, nhưng write amplification lớn: user có 1M followers → 1M cache writes.
- Fanout-on-read (Pull model): khi user load feed, query tất cả người họ follow, merge và sort → không có write overhead, nhưng read rất chậm và expensive.
- Hybrid approach (Facebook/Twitter): fanout-on-write cho users thường (< N followers), fanout-on-read cho celebrities (> N followers); merge pre-computed feed + real-time pull từ celebrities.

- Feed Storage: Redis sorted set với timestamp là score, post_id là member – ZREVRANGE để paginate; TTL để evict old feeds.
- Post storage: separate service, fetch post content từ DB/cache khi render feed.
- Ranking: chronological là đơn giản nhất; ML-based ranking (engagement prediction) phức tạp hơn nhưng giữ user lâu hơn.

Cursor-based pagination thay vì offset pagination để tránh missing/duplicate items khi feed thay đổi.`,
    a_en: `Requirements: users see posts from people they follow, real-time updates, pagination support, ~500M users.

Core challenge: when user A posts, all of A's followers need to see that post in their feed.

- Fanout-on-write (Push model): immediately push into the feed cache of all followers → very fast reads, but high write amplification: a user with 1M followers triggers 1M cache writes.
- Fanout-on-read (Pull model): when a user loads their feed, query all followed accounts, merge and sort → no write overhead, but reads are very slow and expensive.
- Hybrid approach (Facebook/Twitter): fanout-on-write for regular users (fewer than N followers); fanout-on-read for celebrities (more than N followers); merge the pre-computed feed with a real-time pull from celebrities.

- Feed storage: Redis sorted set with timestamp as the score and post_id as the member — ZREVRANGE for pagination; TTL to evict stale feeds.
- Post storage: a separate service fetches post content from the DB/cache when rendering the feed.
- Ranking: chronological order is simplest; ML-based ranking (engagement prediction) is more complex but increases user retention.

Use cursor-based pagination instead of offset pagination to avoid missing or duplicate items as the feed changes.`,
  },
  {
    id: 2038,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế hệ thống File Storage như Google Drive hoặc Dropbox. Các thành phần chính? (Design a file storage system like Google Drive or Dropbox. Key components?)",
    q_en: "Design a file storage system like Google Drive or Dropbox. What are the key components?",
    a: `Requirements: upload/download/sync files, share với others, version history, ~1B users, ~10 exabytes storage.

- Chunking: chia file thành chunks (4-8MB), mỗi chunk được hash (SHA-256) để detect duplicates (deduplication) và support delta sync (chỉ upload chunks thay đổi).
- Upload flow: Client chunker → tính hash của mỗi chunk → gửi chunk hashes lên server → server trả lại chunks nào cần upload → client upload missing chunks lên Blob Storage (S3) → server ghi metadata vào DB.
- Metadata DB: lưu file tree structure, ownership, permissions, version history – dùng RDBMS (MySQL) cho ACID và complex queries.
- Blob Storage: S3-compatible object storage cho raw file chunks.
- Deduplication: nếu hai users upload cùng file, chỉ lưu một bản vật lý, tham chiếu từ nhiều users – tiết kiệm storage đáng kể.
- Sync service: khi file thay đổi trên device A → upload delta chunks → notify other devices qua WebSocket/long polling → devices download changed chunks.
- Conflict resolution: last-write-wins hoặc tạo conflict copy như Dropbox.

Bandwidth optimization: client-side deduplication và delta sync giảm upload data tới 90%. Permission model: owner, editor, viewer; sharing links với expiry. CDN cho download popular files. File metadata search dùng Elasticsearch.`,
    a_en: `Requirements: upload/download/sync files, sharing with others, version history, ~1B users, ~10 exabytes of storage.

- Chunking: split files into chunks (4–8MB each); each chunk is hashed (SHA-256) to detect duplicates (deduplication) and support delta sync (only upload changed chunks).
- Upload flow: Client chunker → compute hash of each chunk → send chunk hashes to the server → server responds with which chunks are missing → client uploads missing chunks to Blob Storage (S3) → server writes metadata to the database.
- Metadata DB: stores file tree structure, ownership, permissions, and version history — use an RDBMS (MySQL) for ACID guarantees and complex queries.
- Blob Storage: S3-compatible object storage for raw file chunks.
- Deduplication: if two users upload the same file, store only one physical copy and reference it from multiple users — significant storage savings.
- Sync service: when a file changes on device A → upload delta chunks → notify other devices via WebSocket/long polling → devices download the changed chunks.
- Conflict resolution: last-write-wins or create a conflict copy (like Dropbox).

Bandwidth optimization: client-side deduplication and delta sync can reduce uploaded data by up to 90%. Permission model: owner, editor, viewer; sharing links with expiry. CDN for downloading popular files. File metadata search powered by Elasticsearch.`,
  },
  {
    id: 2039,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế Search Autocomplete (Typeahead Suggestions). Tối ưu latency và ranking? (Design a Search Autocomplete / Typeahead system. How to optimize latency and ranking?)",
    q_en: "Design a Search Autocomplete / Typeahead system. How do you optimize for latency and ranking?",
    a: `Requirements: suggest top-K queries khi user gõ, latency < 100ms, millions of users.

- Data collection: log tất cả search queries; aggregation job (Hadoop/Spark) chạy weekly/daily để tính frequency của mỗi query (hay trending score).
- Trie (Prefix Tree): data structure lý tưởng cho prefix matching – mỗi node đại diện một ký tự, lưu top-K queries tại mỗi node. Query time: traverse trie theo prefix → O(prefix_length).
- Trie storage: serialized trie lưu trong distributed cache (Redis).
- Caching: top-20% prefixes chiếm ~80% traffic → cache aggressively; prefix cache với TTL 24h; browser cache ở client để giảm requests.
- Ranking factors: frequency, freshness (trending queries), personalization (user's search history).
- Trie update: không update real-time (expensive); rebuild offline và swap atomically.
- Scale: shard trie theo first character (26 shards); consistent hashing để route request đến đúng shard.

Filter: cần filter offensive/spam queries trước khi hiển thị. API: GET /autocomplete?q={prefix}&limit=10 → cần < 50ms để UX tốt.`,
    a_en: `Requirements: suggest top-K queries as the user types, latency < 100ms, millions of users.

- Data collection: log all search queries; run an aggregation job (Hadoop/Spark) weekly or daily to compute the frequency (or trending score) of each query.
- Trie (Prefix Tree): the ideal data structure for prefix matching — each node represents a character and stores the top-K queries at that node. Query time: traverse the trie following the prefix → O(prefix_length).
- Trie storage: serialize the trie and store it in a distributed cache (Redis).
- Caching: the top 20% of prefixes account for ~80% of traffic → cache aggressively; prefix cache with a 24h TTL; browser-cache client-side to reduce requests.
- Ranking factors: query frequency, freshness (trending queries), and personalization (user's own search history).
- Trie updates: do not update in real-time (too expensive); rebuild offline and swap atomically.
- Scaling: shard the trie by the first character (26 shards); use consistent hashing to route requests to the correct shard.

Filtering: screen for offensive or spam queries before displaying. API: GET /autocomplete?q={prefix}&limit=10 — must respond in < 50ms for good UX.`,
  },
  {
    id: 2040,
    category: "System Design",
    subcategory: "Interview Scenarios",
    level: "advanced",
    q: "Thiết kế hệ thống Payment như Stripe. Đảm bảo tính chính xác và idempotency? (Design a payment system like Stripe. Ensuring correctness and idempotency?)",
    q_en: "Design a payment system like Stripe. How do you ensure correctness and idempotency?",
    a: `Requirements: process payments, prevent double charges, handle failures gracefully, PCI compliance, audit trail đầy đủ.

- Idempotency (quan trọng nhất): client gửi \`Idempotency-Key\` (UUID) theo mỗi request; server lưu {idempotency_key → response} trong DB; nếu cùng key gửi lại (do retry), trả về cached response mà không xử lý lại – ngăn double charge tuyệt đối.
- Payment flow: Create PaymentIntent (created) → Client collect card info (Stripe.js không gửi card data đến server – PCI scope reduction) → Confirm payment → Server gọi payment processor → Update trạng thái.
- State machine: created → processing → succeeded/failed/refunded – mọi transition được log với Event Sourcing.
- Outbox Pattern: ghi payment record và outbox event trong cùng DB transaction; worker đọc outbox và gọi external API, update status khi xong.
- Reconciliation: hàng đêm so sánh internal records với statement từ bank/processor để phát hiện discrepancy.
- Security: TLS everywhere, no log card data, tokenization (lưu token thay vì raw card number), fraud detection ML model.
- Retry strategy: exponential backoff với jitter cho transient failures; không retry idempotent operations mà không có idempotency key.

Compliance: PCI-DSS, SOC2, GDPR data retention policies.`,
    a_en: `Requirements: process payments, prevent double charges, handle failures gracefully, PCI compliance, full audit trail.

- Idempotency (most critical): the client sends an \`Idempotency-Key\` (UUID) with every request; the server stores {idempotency_key → response} in the DB; if the same key is sent again (due to a retry), return the cached response without reprocessing — absolutely preventing double charges.
- Payment flow: Create PaymentIntent (created) → Client collects card info (Stripe.js does not send card data to your server — reducing PCI scope) → Confirm payment → Server calls the payment processor → Update status.
- State machine: created → processing → succeeded/failed/refunded — every transition is logged using Event Sourcing.
- Outbox Pattern: write the payment record and an outbox event in the same DB transaction; a worker reads the outbox and calls the external API, updating status when complete.
- Reconciliation: nightly comparison of internal records against bank/processor statements to detect discrepancies.
- Security: TLS everywhere, never log card data, tokenization (store tokens instead of raw card numbers), fraud detection ML model.
- Retry strategy: exponential backoff with jitter for transient failures; never retry operations without an idempotency key.

Compliance: PCI-DSS, SOC2, GDPR data retention policies.`,
  },
]
