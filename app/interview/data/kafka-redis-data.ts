import type { QAItem } from '../interview-data'

export const KAFKA_REDIS_DATA: QAItem[] = [
  // ─── Kafka Fundamentals (2201–2210) ──────────────────────────────────────────
  {
    id: 2201,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Apache Kafka là gì và tại sao nó được sử dụng phổ biến trong hệ thống phân tán?",
    q_en: "What is Apache Kafka and why is it widely used in distributed systems?",
    a: "Apache Kafka là một nền tảng streaming phân tán (distributed event streaming platform) được LinkedIn phát triển và open-source năm 2011. Kafka được thiết kế để xử lý luồng dữ liệu thời gian thực với thông lượng cực cao, độ trễ thấp và khả năng mở rộng theo chiều ngang. Điểm mạnh của Kafka so với các message broker truyền thống là khả năng lưu trữ message lâu dài trên disk (không xóa sau khi consumer đọc), cho phép nhiều consumer đọc lại cùng một message. Kafka thường được dùng trong các use case như event sourcing, log aggregation, real-time analytics, data pipeline giữa các microservices, và change data capture (CDC) từ database.",
    a_en: "Apache Kafka is a distributed event streaming platform developed by LinkedIn and open-sourced in 2011. It is designed to handle real-time data streams with extremely high throughput, low latency, and horizontal scalability. Unlike traditional message brokers, Kafka retains messages on disk after consumers read them, allowing multiple consumers to replay the same messages. Common use cases include event sourcing, log aggregation, real-time analytics, microservices data pipelines, and change data capture (CDC) from databases.",
  },
  {
    id: 2202,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Giải thích kiến trúc Kafka: Broker, Topic, Partition, Consumer Group hoạt động như thế nào?",
    q_en: "Explain Kafka's architecture: how do Broker, Topic, Partition, and Consumer Group work?",
    a: "Broker là một server Kafka chạy độc lập; một Kafka cluster thường có nhiều broker để đảm bảo high availability. Topic là kênh logic để phân loại message (ví dụ: topic 'orders', topic 'payments'). Mỗi topic được chia thành nhiều Partition — đây là đơn vị song song hóa của Kafka; các message trong một partition được sắp xếp theo thứ tự và mỗi message có một offset duy nhất. Consumer Group là nhóm các consumer cùng nhau đọc một topic; mỗi partition chỉ được đọc bởi đúng một consumer trong group tại một thời điểm, cho phép scale out việc tiêu thụ message. \n\n**Ví dụ:** nếu topic có 6 partition và group có 3 consumer, mỗi consumer xử lý 2 partition.",
    a_en: "A Broker is an individual Kafka server; a Kafka cluster typically runs multiple brokers to ensure high availability. A Topic is a logical channel for categorizing messages (e.g., 'orders', 'payments'). Each topic is split into multiple Partitions — the unit of parallelism in Kafka; messages within a partition are ordered and each has a unique offset. A Consumer Group is a set of consumers that collectively read a topic; each partition is assigned to exactly one consumer in the group at any given time, enabling horizontal scaling of message consumption. For example, if a topic has 6 partitions and the group has 3 consumers, each consumer processes 2 partitions.",
  },
  {
    id: 2203,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Producer và Consumer trong Kafka hoạt động như thế nào? Các cấu hình quan trọng cần biết?",
    q_en: "How do Producers and Consumers work in Kafka? What are the key configurations to know?",
    a: "Producer gửi message đến một topic và Kafka tự động phân phối message vào các partition (theo key hash, round-robin, hoặc custom partitioner). Cấu hình quan trọng của producer: `acks` (0=fire-and-forget, 1=leader ack, all=tất cả ISR ack), `retries`, `batch.size` và `linger.ms` để tối ưu throughput. Consumer đọc message từ partition theo offset và có thể commit offset tự động (`enable.auto.commit=true`) hoặc thủ công. Cấu hình quan trọng của consumer: `auto.offset.reset` (earliest/latest), `max.poll.records`, `session.timeout.ms`. Trong thực tế, nên dùng manual commit để tránh mất message khi consumer crash trước khi xử lý xong.",
    a_en: "Producers send messages to a topic and Kafka automatically distributes them across partitions (by key hash, round-robin, or a custom partitioner). Key producer configs: `acks` (0=fire-and-forget, 1=leader ack, all=all ISR ack), `retries`, `batch.size`, and `linger.ms` for throughput tuning. Consumers read messages from partitions by offset and can commit offsets automatically (`enable.auto.commit=true`) or manually. Key consumer configs: `auto.offset.reset` (earliest/latest), `max.poll.records`, `session.timeout.ms`. In practice, manual commit is recommended to avoid message loss if a consumer crashes before finishing processing.",
  },
  {
    id: 2204,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Offset management trong Kafka là gì? Phân biệt auto commit và manual commit?",
    q_en: "What is offset management in Kafka? What is the difference between auto commit and manual commit?",
    a: "Offset là số thứ tự của message trong một partition, bắt đầu từ 0. Kafka lưu offset của consumer vào một internal topic tên `__consumer_offsets`. Auto commit (`enable.auto.commit=true`) sẽ tự động commit offset theo chu kỳ `auto.commit.interval.ms` (mặc định 5000ms), nhưng có thể dẫn đến mất message nếu consumer crash sau khi commit nhưng trước khi xử lý xong, hoặc xử lý trùng nếu consumer crash sau khi xử lý nhưng trước khi auto commit. Manual commit (`commitSync()` hoặc `commitAsync()`) cho phép kiểm soát chính xác: chỉ commit sau khi xử lý thành công. `commitSync()` block cho đến khi commit thành công, `commitAsync()` không block nhưng cần callback để xử lý lỗi. Trong production, nên dùng manual commit kết hợp với idempotent processing để đảm bảo at-least-once hoặc exactly-once semantics.",
    a_en: "An offset is the sequential position of a message within a partition, starting at 0. Kafka stores consumer offsets in an internal topic called `__consumer_offsets`. Auto commit (`enable.auto.commit=true`) commits offsets periodically based on `auto.commit.interval.ms` (default 5000ms), but can cause message loss if the consumer crashes after committing but before finishing processing, or duplicate processing if it crashes after processing but before the auto commit fires. Manual commit (`commitSync()` or `commitAsync()`) gives precise control: only commit after successful processing. `commitSync()` blocks until the commit succeeds; `commitAsync()` is non-blocking but requires a callback for error handling. In production, use manual commit combined with idempotent processing to achieve at-least-once or exactly-once semantics.",
  },
  {
    id: 2205,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Message ordering trong Kafka được đảm bảo như thế nào? Khi nào ordering bị phá vỡ?",
    q_en: "How is message ordering guaranteed in Kafka? When can ordering be broken?",
    a: "Kafka đảm bảo thứ tự message trong phạm vi một partition — các message được ghi và đọc theo đúng thứ tự FIFO. Tuy nhiên, không có đảm bảo thứ tự giữa các partition khác nhau. Để đảm bảo ordering cho một nhóm message liên quan (ví dụ: tất cả sự kiện của một user), cần gán cùng một `message key` — Kafka sẽ hash key và luôn route message có cùng key vào cùng partition. Ordering có thể bị phá vỡ khi: producer bật `retries > 0` và `max.in.flight.requests.per.connection > 1` (message sau có thể arrive trước message trước bị retry) — giải pháp là bật `enable.idempotence=true`. Ngoài ra, rebalancing consumer group không ảnh hưởng đến thứ tự trong partition vì offset được duy trì.",
    a_en: "Kafka guarantees message ordering within a single partition — messages are written and read in strict FIFO order. However, there is no ordering guarantee across different partitions. To ensure ordering for a group of related messages (e.g., all events for a given user), assign the same `message key` — Kafka will hash the key and always route messages with the same key to the same partition. Ordering can be broken when a producer has `retries > 0` and `max.in.flight.requests.per.connection > 1` (a later message may arrive before a retried earlier one). The fix is to enable `enable.idempotence=true`. Consumer group rebalancing does not affect in-partition ordering because offsets are preserved.",
  },
  {
    id: 2206,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Replication và ISR (In-Sync Replicas) trong Kafka là gì? Cách Kafka đảm bảo fault tolerance?",
    q_en: "What are Replication and ISR (In-Sync Replicas) in Kafka? How does Kafka ensure fault tolerance?",
    a: "Mỗi partition có một leader và nhiều follower replica trên các broker khác nhau. Leader xử lý tất cả read/write, follower chủ động pull data từ leader để sync. ISR (In-Sync Replicas) là tập hợp các replica đang sync kịp với leader (không bị lag quá `replica.lag.time.max.ms`). Khi leader broker bị lỗi, một replica trong ISR sẽ được bầu làm leader mới. Cấu hình `replication.factor=3` và `min.insync.replicas=2` kết hợp với `acks=all` đảm bảo message chỉ được acknowledge khi ít nhất 2 replica đã ghi — bảo vệ khỏi mất data kể cả khi 1 broker bị lỗi. Trong production nên dùng `replication.factor >= 3` để chịu được lỗi của 2 broker đồng thời.",
    a_en: "Each partition has one leader and multiple follower replicas spread across different brokers. The leader handles all reads and writes; followers actively pull data from the leader to stay in sync. The ISR (In-Sync Replicas) is the set of replicas that are caught up with the leader (not lagging beyond `replica.lag.time.max.ms`). If the leader broker fails, one replica in the ISR is elected as the new leader. Setting `replication.factor=3` and `min.insync.replicas=2` combined with `acks=all` ensures a message is only acknowledged after at least 2 replicas have written it — protecting against data loss even when 1 broker fails. In production, use `replication.factor >= 3` to tolerate simultaneous failure of 2 brokers.",
  },
  {
    id: 2207,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "So sánh Kafka và RabbitMQ: khi nào nên dùng cái nào?",
    q_en: "Compare Kafka and RabbitMQ: when should you use each?",
    a: "RabbitMQ là traditional message broker dùng mô hình push (broker đẩy message đến consumer), message bị xóa sau khi consumer ack, phù hợp cho task queue, RPC, và các use case cần routing phức tạp (exchanges, bindings). Kafka dùng mô hình pull, message được lưu trữ lâu dài trên disk và nhiều consumer group có thể đọc lại cùng data — phù hợp cho event streaming, audit log, và data pipeline. Kafka có throughput cao hơn nhiều (hàng triệu msg/s so với hàng trăm nghìn của RabbitMQ). Nên dùng RabbitMQ khi: cần routing phức tạp, message TTL ngắn, use case task queue truyền thống. Nên dùng Kafka khi: cần replay event, multiple consumer với tốc độ khác nhau, throughput cao, event sourcing, hoặc integrate nhiều system qua data pipeline.",
    a_en: "RabbitMQ is a traditional message broker using a push model (broker pushes messages to consumers); messages are deleted after consumer acknowledgment. It suits task queues, RPC patterns, and complex routing (exchanges, bindings). Kafka uses a pull model; messages are retained on disk and multiple consumer groups can replay the same data — ideal for event streaming, audit logs, and data pipelines. Kafka offers significantly higher throughput (millions of msg/s vs. hundreds of thousands for RabbitMQ). Use RabbitMQ for complex routing, short-lived messages, and classic task queues. Use Kafka when you need event replay, multiple independent consumers at different speeds, high throughput, event sourcing, or integration pipelines across many systems.",
  },
  {
    id: 2208,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Kafka Connect là gì? Nó giải quyết bài toán gì trong data pipeline?",
    q_en: "What is Kafka Connect? What problem does it solve in data pipelines?",
    a: "Kafka Connect là framework tích hợp sẵn trong Kafka ecosystem để kết nối Kafka với các external system (database, file system, cloud storage, search engine) mà không cần viết code. Kafka Connect có hai loại connector: Source Connector (đọc data từ external system vào Kafka, ví dụ: Debezium CDC từ PostgreSQL) và Sink Connector (ghi data từ Kafka ra external system, ví dụ: Elasticsearch Sink). Connect chạy ở chế độ distributed với worker pool, tự động handle fault tolerance và load balancing. Ví dụ thực tế: dùng Debezium Source Connector để capture mọi thay đổi trong MySQL database, publish vào Kafka topic, sau đó Elasticsearch Sink Connector index data để search — toàn bộ pipeline không cần viết một dòng code custom nào.",
    a_en: "Kafka Connect is a built-in framework in the Kafka ecosystem for integrating Kafka with external systems (databases, file systems, cloud storage, search engines) without writing custom code. It provides two types of connectors: Source Connectors (read data from external systems into Kafka, e.g., Debezium CDC from PostgreSQL) and Sink Connectors (write data from Kafka to external systems, e.g., Elasticsearch Sink). Connect runs in distributed mode with a worker pool, automatically handling fault tolerance and load balancing. A practical example: use a Debezium Source Connector to capture all MySQL changes into Kafka topics, then an Elasticsearch Sink Connector indexes the data for search — the entire pipeline requires zero custom code.",
  },
  {
    id: 2209,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Kafka Streams là gì? Khác gì so với việc consume message thông thường?",
    q_en: "What is Kafka Streams? How does it differ from regular message consumption?",
    a: "Kafka Streams là thư viện Java/Scala để xây dựng ứng dụng stream processing trực tiếp trên Kafka, không cần external cluster như Spark hay Flink. Kafka Streams cung cấp các operation high-level như `filter`, `map`, `groupBy`, `aggregate`, `join` giữa các stream. Điểm khác biệt: consumer thông thường chỉ đọc và xử lý message, còn Kafka Streams có khái niệm KStream (unbounded stream of events) và KTable (changelog stream, represents current state), cho phép stateful processing với local state store (RocksDB). Kafka Streams tự động handle partitioning, scaling, và fault recovery — khi thêm instance, Kafka tự rebalance partition. \n\n**Ví dụ:** tính tổng doanh thu mỗi 5 phút từ stream order events, join stream clicks với stream purchases để tính conversion rate.",
    a_en: "Kafka Streams is a Java/Scala library for building stream-processing applications directly on top of Kafka, without needing an external cluster like Spark or Flink. It provides high-level operations such as `filter`, `map`, `groupBy`, `aggregate`, and `join` between streams. The key difference from regular consumers: a plain consumer just reads and processes messages, whereas Kafka Streams introduces KStream (an unbounded stream of events) and KTable (a changelog stream representing current state), enabling stateful processing backed by a local state store (RocksDB). Kafka Streams automatically handles partitioning, scaling, and fault recovery — adding a new instance triggers Kafka to rebalance partitions automatically. Examples: computing total revenue every 5 minutes from an order-events stream, or joining a click stream with a purchase stream to calculate conversion rates.",
  },
  {
    id: 2210,
    category: "Kafka",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Các use case phổ biến nhất của Kafka trong thực tế là gì?",
    q_en: "What are the most common real-world use cases for Kafka?",
    a: `Các use case phổ biến của Kafka trong production:

- Log aggregation: tập hợp log từ nhiều service vào một nơi, sau đó forward sang Elasticsearch hoặc S3 để phân tích.
- Event sourcing: lưu tất cả sự kiện (thay vì chỉ state hiện tại) để rebuild state bất kỳ lúc nào.
- Real-time analytics: stream data từ user activity vào Kafka, xử lý với Kafka Streams hoặc Flink để cập nhật dashboard real-time.
- Microservices communication: thay vì gọi API trực tiếp (tight coupling), các service publish event và service khác subscribe — giảm coupling và tăng resilience.
- Change Data Capture (CDC): dùng Debezium để capture mọi thay đổi từ database, sync sang data warehouse hoặc invalidate cache.
- Fraud detection: stream giao dịch tài chính qua Kafka, dùng ML model để detect bất thường trong real-time.`,
    a_en: `Most common real-world use cases for Kafka:

- Log aggregation: collecting logs from many services into one place, then forwarding to Elasticsearch or S3 for analysis.
- Event sourcing: storing every event (rather than just current state) so state can be rebuilt at any point in time.
- Real-time analytics: streaming user activity data into Kafka, processing with Kafka Streams or Flink to update dashboards in real time.
- Microservices communication: instead of direct API calls (tight coupling), services publish events and others subscribe — reducing coupling and improving resilience.
- Change Data Capture (CDC): using Debezium to capture all database changes, syncing to a data warehouse or invalidating caches.
- Fraud detection: streaming financial transactions through Kafka and applying ML models to detect anomalies in real time.`,
  },

  // ─── Kafka Advanced (2211–2218) ──────────────────────────────────────────────
  {
    id: 2211,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Exactly-once semantics (EOS) trong Kafka hoạt động như thế nào? Giải thích idempotent producers và transactions.",
    q_en: "How does exactly-once semantics (EOS) work in Kafka? Explain idempotent producers and transactions.",
    a: "Kafka hỗ trợ 3 delivery semantics: at-most-once (có thể mất message), at-least-once (có thể duplicate), và exactly-once. Idempotent producer (`enable.idempotence=true`) đảm bảo mỗi message chỉ được ghi đúng một lần vào một partition kể cả khi retry — producer được gán `PID` và mỗi message có `sequence number`, broker reject duplicate. Kafka Transactions cho phép atomic write across multiple partitions/topics: producer dùng `initTransactions()`, `beginTransaction()`, write messages, `commitTransaction()` hoặc `abortTransaction()`. Consumer dùng `isolation.level=read_committed` để chỉ đọc message từ committed transaction. EOS trong Kafka Streams được bật bằng `processing.guarantee=exactly_once_v2`. \n\n**Lưu ý:** EOS có overhead về latency và throughput (~20-30%), chỉ dùng khi thực sự cần thiết (tài chính, billing).",
    a_en: "Kafka supports three delivery semantics: at-most-once (messages may be lost), at-least-once (messages may be duplicated), and exactly-once. An idempotent producer (`enable.idempotence=true`) ensures each message is written exactly once to a partition even on retries — the producer is assigned a `PID` and each message carries a `sequence number`; the broker rejects duplicates. Kafka Transactions enable atomic writes across multiple partitions/topics: the producer calls `initTransactions()`, `beginTransaction()`, writes messages, then `commitTransaction()` or `abortTransaction()`. Consumers set `isolation.level=read_committed` to only read messages from committed transactions. EOS in Kafka Streams is enabled via `processing.guarantee=exactly_once_v2`. \n\n**Note:** EOS adds ~20-30% latency and throughput overhead, so use it only when truly necessary (e.g., financial or billing systems).",
  },
  {
    id: 2212,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Các chiến lược partition trong Kafka: khi nào dùng key-based, round-robin, hay custom partitioner?",
    q_en: "Partitioning strategies in Kafka: when should you use key-based, round-robin, or a custom partitioner?",
    a: "Round-robin (khi message key là null): phân phối đều message sang các partition, tối ưu throughput nhưng không đảm bảo ordering. Key-based partitioning (hash của key % numPartitions): đảm bảo tất cả message cùng key vào một partition — bắt buộc khi cần ordering (ví dụ: tất cả event của user_id=123 phải theo thứ tự). Vấn đề hotspot: nếu key phân phối không đều (ví dụ: một số user_id hoạt động cực kỳ nhiều), một số partition sẽ overloaded — giải pháp là thêm random suffix vào key hoặc dùng custom partitioner với logic phức tạp hơn. Custom partitioner cho phép route theo business logic (ví dụ: VIP customer vào partition riêng để ưu tiên xử lý). Khi tăng số partition của existing topic, message key cũ có thể bị route sang partition khác — cần planning kỹ trước khi deploy.",
    a_en: "Round-robin (when the message key is null): distributes messages evenly across partitions, maximizing throughput but without ordering guarantees. Key-based partitioning (hash of key % numPartitions): ensures all messages with the same key go to the same partition — required when ordering matters (e.g., all events for user_id=123 must be in sequence). Hotspot problem: if keys are skewed (some user IDs generate far more events), certain partitions become overloaded — the fix is to append a random suffix to the key or use a custom partitioner with more sophisticated logic. A custom partitioner enables business-logic routing (e.g., VIP customers go to a dedicated partition for priority processing). When increasing the partition count of an existing topic, existing key-to-partition mappings change — plan carefully before deploying.",
  },
  {
    id: 2213,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Consumer rebalancing trong Kafka: vấn đề gì có thể xảy ra và cách tối ưu?",
    q_en: "Consumer rebalancing in Kafka: what issues can occur and how do you optimize it?",
    a: "Rebalancing xảy ra khi consumer group thay đổi (thêm/xóa consumer, consumer crash, hoặc subscription thay đổi). Trong quá trình rebalance, toàn bộ group dừng consume (stop-the-world), có thể gây latency spike. Vấn đề phổ biến: `session.timeout.ms` quá ngắn → consumer bị kick ra group vì GC pause dài; `max.poll.interval.ms` quá ngắn → consumer xử lý lâu bị coi là dead. Tối ưu: tăng `session.timeout.ms` và `heartbeat.interval.ms`, giảm `max.poll.records`, dùng incremental cooperative rebalancing (`partition.assignment.strategy=CooperativeStickyAssignor`) thay vì eager rebalancing — chỉ revoke partition thực sự cần chuyển, không dừng toàn bộ group. Static group membership (`group.instance.id`) giúp tránh rebalance khi restart consumer (reuse partition assignment cũ trong vòng `session.timeout.ms`).",
    a_en: "Rebalancing occurs when the consumer group changes (consumers added or removed, a consumer crashes, or subscriptions change). During a rebalance the entire group stops consuming (stop-the-world), potentially causing a latency spike. Common problems: `session.timeout.ms` set too low causes consumers to be ejected due to long GC pauses; `max.poll.interval.ms` set too low causes slow consumers to be considered dead. Optimizations: increase `session.timeout.ms` and `heartbeat.interval.ms`, reduce `max.poll.records`, and use incremental cooperative rebalancing (`partition.assignment.strategy=CooperativeStickyAssignor`) instead of eager rebalancing — only the partitions that truly need to move are revoked, avoiding a full group stop. Static group membership (`group.instance.id`) prevents rebalancing on consumer restarts by reusing the previous partition assignment within `session.timeout.ms`.",
  },
  {
    id: 2214,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Dead Letter Queue (DLQ) trong Kafka là gì? Cách implement xử lý message lỗi?",
    q_en: "What is a Dead Letter Queue (DLQ) in Kafka? How do you implement error message handling?",
    a: "Kafka không có DLQ built-in như RabbitMQ, nhưng pattern DLQ được implement bằng cách: khi consumer fail xử lý một message sau N lần retry, thay vì block toàn bộ partition, message được forward sang một topic DLQ riêng (ví dụ: `orders.DLT`) kèm theo metadata (exception, timestamp, original topic, partition, offset). Kafka có Spring Kafka `@RetryableTopic` và `@DltHandler` để implement pattern này tự động với exponential backoff. Cần cân nhắc: nếu dừng xử lý để retry, các message sau sẽ bị delay (ordering preserved nhưng throughput giảm); nếu skip và gửi DLQ, ordering bị phá vỡ nhưng throughput không bị ảnh hưởng. Monitoring DLQ là critical — nên alert khi DLQ có message, có team xử lý manual hoặc replay sau khi fix bug. Một best practice khác là dùng retry topic với tên `topic.RETRY-1`, `topic.RETRY-2` với delay tăng dần.",
    a_en: "Kafka does not have a built-in DLQ like RabbitMQ, but the pattern is implemented as follows: when a consumer fails to process a message after N retries, instead of blocking the entire partition, the message is forwarded to a dedicated DLQ topic (e.g., `orders.DLT`) along with metadata (exception, timestamp, original topic, partition, offset). Spring Kafka provides `@RetryableTopic` and `@DltHandler` to implement this pattern automatically with exponential backoff. Trade-offs to consider: pausing consumption for retries preserves ordering but reduces throughput; skipping to a DLQ preserves throughput but breaks ordering. Monitoring the DLQ is critical — alert when messages arrive, and have a process for manual review or replay after fixing bugs. Another best practice is using named retry topics like `topic.RETRY-1`, `topic.RETRY-2` with increasing delays.",
  },
  {
    id: 2215,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Monitoring và performance tuning Kafka: các metrics quan trọng và cách tối ưu throughput/latency?",
    q_en: "Kafka monitoring and performance tuning: what are the key metrics and how do you optimize throughput/latency?",
    a: "Metrics quan trọng cần monitor: `UnderReplicatedPartitions` (>0 là dấu hiệu vấn đề replication), `OfflinePartitionsCount` (cần alert ngay khi >0), `BytesInPerSec/BytesOutPerSec` (throughput), `RequestHandlerAvgIdlePercent` (<0.2 là broker overloaded), consumer lag (`records-lag-max`) để detect consumer chậm. Tối ưu throughput producer: tăng `batch.size` (16KB→128KB), thêm `linger.ms` (0→20ms), bật `compression.type=lz4` giảm network I/O. Tối ưu throughput consumer: tăng `fetch.min.bytes` và `fetch.max.wait.ms` để fetch theo batch lớn, tăng `max.poll.records`. Tối ưu broker: tăng số thread I/O (`num.io.threads`), dùng dedicated disk cho Kafka log (tránh share với OS), đặt `log.dirs` trên multiple disk để parallel I/O. Dùng Kafka Exporter + Prometheus + Grafana cho observability stack.",
    a_en: "Key metrics to monitor: `UnderReplicatedPartitions` (> 0 signals a replication issue), `OfflinePartitionsCount` (alert immediately if > 0), `BytesInPerSec/BytesOutPerSec` (throughput), `RequestHandlerAvgIdlePercent` (< 0.2 means the broker is overloaded), and consumer lag (`records-lag-max`) to detect slow consumers. Producer throughput tuning: increase `batch.size` (16 KB → 128 KB), add `linger.ms` (0 → 20 ms), enable `compression.type=lz4` to reduce network I/O. Consumer throughput tuning: increase `fetch.min.bytes` and `fetch.max.wait.ms` to fetch in larger batches, increase `max.poll.records`. Broker tuning: increase I/O threads (`num.io.threads`), use a dedicated disk for Kafka logs (avoid sharing with the OS), and configure `log.dirs` across multiple disks for parallel I/O. Use Kafka Exporter + Prometheus + Grafana for the observability stack.",
  },
  {
    id: 2216,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Kafka trong kiến trúc microservices: event-driven architecture, saga pattern, và các pitfall cần tránh?",
    q_en: "Kafka in microservices architecture: event-driven design, the saga pattern, and pitfalls to avoid?",
    a: "Kafka là backbone của event-driven microservices: service A publish event (OrderCreated), service B và C subscribe để thực hiện action tương ứng (PaymentService charge, InventoryService deduct). Saga pattern dùng Kafka để coordinate distributed transaction: choreography-based saga — mỗi service lắng nghe event và publish event tiếp theo, không có central coordinator; orchestration-based saga — Saga Orchestrator gửi command đến từng service qua Kafka và lắng nghe response. Pitfall cần tránh: event schema thay đổi breaking consumer (dùng Schema Registry + Avro để enforce backward/forward compatibility); consumer idempotency — cùng event có thể arrive nhiều lần, mọi handler phải idempotent; transaction outbox pattern để đảm bảo atomicity giữa database write và Kafka publish (tránh case: DB write thành công nhưng Kafka publish fail hoặc ngược lại).",
    a_en: "Kafka is the backbone of event-driven microservices: Service A publishes an event (OrderCreated), and Services B and C subscribe to take corresponding actions (PaymentService charges, InventoryService deducts). The saga pattern uses Kafka to coordinate distributed transactions: choreography-based sagas — each service listens for events and publishes the next event, with no central coordinator; orchestration-based sagas — a Saga Orchestrator sends commands to each service via Kafka and listens for responses. Pitfalls to avoid: breaking schema changes in events (use Schema Registry + Avro to enforce backward/forward compatibility); consumer idempotency — the same event may arrive multiple times, so every handler must be idempotent; the transactional outbox pattern to guarantee atomicity between a database write and a Kafka publish (preventing scenarios where the DB write succeeds but the Kafka publish fails, or vice versa).",
  },
  {
    id: 2217,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "Schema Registry trong Kafka ecosystem là gì? Tại sao cần dùng Avro/Protobuf thay vì JSON?",
    q_en: "What is Schema Registry in the Kafka ecosystem? Why use Avro/Protobuf instead of JSON?",
    a: "Schema Registry (Confluent) là service lưu trữ và quản lý schema của Kafka message, đảm bảo producer và consumer đồng thuận về format dữ liệu. JSON không có schema enforcement — producer có thể thay đổi field name/type mà không báo, khiến consumer bị lỗi. Avro và Protobuf là binary serialization formats: nhỏ hơn JSON ~3-10x (giảm storage và network cost), có schema evolution với compatibility rules (BACKWARD, FORWARD, FULL). Schema Registry lưu schema theo `subject` (mặc định là topic name), assign `schema ID`; message chỉ chứa schema ID (4 bytes) thay vì full schema, consumer lookup schema từ registry khi cần. Khi thêm field mới với default value (BACKWARD compatible), consumer cũ vẫn deserialize được; xóa field hoặc đổi type là BREAKING change bị Schema Registry reject nếu cấu hình không cho phép. Đây là best practice bắt buộc trong production Kafka cluster.",
    a_en: "Schema Registry (Confluent) is a service that stores and manages Kafka message schemas, ensuring producers and consumers agree on data formats. JSON has no schema enforcement — a producer can rename or retype a field without warning, breaking consumers. Avro and Protobuf are binary serialization formats: 3-10x smaller than JSON (reducing storage and network costs) and supporting schema evolution with compatibility rules (BACKWARD, FORWARD, FULL). Schema Registry stores schemas by `subject` (default: topic name) and assigns a `schema ID`; each message carries only the schema ID (4 bytes) rather than the full schema, and consumers look up the schema from the registry as needed. Adding a new field with a default value is BACKWARD compatible and old consumers can still deserialize; removing a field or changing its type is a BREAKING change that Schema Registry will reject if the compatibility mode disallows it. This is a must-follow best practice in any production Kafka cluster.",
  },
  {
    id: 2218,
    category: "Kafka",
    subcategory: "Advanced",
    level: "advanced",
    q: "KRaft mode trong Kafka là gì? Tại sao Kafka loại bỏ ZooKeeper?",
    q_en: "What is KRaft mode in Kafka? Why is Kafka removing ZooKeeper?",
    a: "Trước Kafka 3.3, ZooKeeper được dùng để manage cluster metadata (broker registration, partition leader election, topic config). ZooKeeper là một external dependency phức tạp, tạo ra operational overhead (phải manage thêm một cluster), giới hạn số partition (~200k partition/cluster vì ZooKeeper bottleneck), và có vấn đề về split-brain scenario. KRaft (Kafka Raft Metadata mode) thay thế ZooKeeper bằng cách dùng Raft consensus protocol ngay trong Kafka cluster — một số broker được bầu làm controller voter. \n\n**Lợi ích:** đơn giản hóa deployment (không cần ZooKeeper), tăng giới hạn partition lên hàng triệu, metadata propagation nhanh hơn, startup/failover time giảm từ phút xuống giây. Kafka 3.3+ stable với KRaft, Kafka 4.0 hoàn toàn loại bỏ ZooKeeper. Trong production mới nên bắt đầu với KRaft mode.",
    a_en: "Before Kafka 3.3, ZooKeeper managed cluster metadata (broker registration, partition leader election, topic configuration). ZooKeeper is a complex external dependency that adds operational overhead (managing a separate cluster), limits partition count (~200k partitions per cluster due to ZooKeeper bottlenecks), and is prone to split-brain scenarios. KRaft (Kafka Raft Metadata mode) replaces ZooKeeper by embedding the Raft consensus protocol directly in the Kafka cluster — a subset of brokers are elected as controller voters. \n\n**Benefits:** simplified deployment (no ZooKeeper), partition limits raised to millions, faster metadata propagation, and startup/failover time reduced from minutes to seconds. Kafka 3.3+ is stable with KRaft; Kafka 4.0 removes ZooKeeper entirely. New production deployments should start with KRaft mode.",
  },

  // ─── Redis Fundamentals (2219–2228) ──────────────────────────────────────────
  {
    id: 2219,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Redis là gì và tại sao nó có tốc độ cực nhanh?",
    q_en: "What is Redis and why is it extremely fast?",
    a: "Redis (Remote Dictionary Server) là in-memory data structure store, thường được dùng làm cache, message broker, và session store. Redis nhanh vì toàn bộ data được lưu trong RAM — tốc độ đọc/ghi RAM nhanh hơn disk hàng nghìn lần. Ngoài ra, Redis single-threaded (cho đến version 6) với I/O multiplexing (epoll/kqueue) — tránh được overhead của context switching và lock contention. Redis dùng non-blocking I/O và event loop tương tự Node.js, xử lý hàng trăm nghìn operation/giây trên một core. Redis 6.0 giới thiệu multi-threaded I/O cho việc đọc/ghi network (nhưng vẫn single-threaded cho command processing). Benchmark thông thường: Redis đạt 100,000-1,000,000 ops/giây tùy loại operation và hardware.",
    a_en: "Redis (Remote Dictionary Server) is an in-memory data structure store commonly used as a cache, message broker, and session store. It is fast because all data resides in RAM — RAM read/write speeds are thousands of times faster than disk. Additionally, Redis is single-threaded (up to version 6) with I/O multiplexing (epoll/kqueue), avoiding the overhead of context switching and lock contention. Redis uses non-blocking I/O and an event loop similar to Node.js, processing hundreds of thousands of operations per second on a single core. Redis 6.0 introduced multi-threaded I/O for network reads and writes (while keeping command processing single-threaded). Typical benchmarks: Redis achieves 100,000–1,000,000 ops/second depending on operation type and hardware.",
  },
  {
    id: 2220,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Các kiểu dữ liệu trong Redis: String, Hash, List, Set, Sorted Set dùng khi nào?",
    q_en: "Redis data types: when should you use String, Hash, List, Set, and Sorted Set?",
    a: `Các kiểu dữ liệu Redis và khi nào dùng:

- String: kiểu cơ bản nhất, dùng cho cache HTML/JSON, counter (\`INCR pageview\`), session token. Lệnh: \`SET key value EX 3600\`, \`GET key\`, \`INCR counter\`.
- Hash: lưu object có nhiều field (như row trong database), hiệu quả hơn lưu từng field dưới dạng String riêng. Dùng cho: user profile, product info. Lệnh: \`HSET user:1 name 'Alice' age 30\`, \`HGETALL user:1\`.
- List: linked list có thể push/pop từ cả hai đầu — dùng cho message queue, activity feed, recent items. Lệnh: \`LPUSH queue task1\`, \`RPOP queue\`.
- Set: tập hợp unique member — dùng cho tags, unique visitors, friend list. Lệnh: \`SADD tags:post:1 redis database\`, \`SISMEMBER\`, \`SUNION\`.
- Sorted Set: như Set nhưng mỗi member có score — dùng cho leaderboard, rate limiting, priority queue. Lệnh: \`ZADD leaderboard 1000 'Alice'\`, \`ZRANGE leaderboard 0 9 REV WITHSCORES\`.`,
    a_en: `Redis data types and when to use them:

- String: the most basic type, used for caching HTML/JSON, counters (\`INCR pageview\`), and session tokens. Commands: \`SET key value EX 3600\`, \`GET key\`, \`INCR counter\`.
- Hash: stores objects with multiple fields (like a database row), more efficient than individual String keys per field. Use for user profiles, product info. Commands: \`HSET user:1 name Alice age 30\`, \`HGETALL user:1\`.
- List: a doubly-linked list supporting push/pop from both ends — used for message queues, activity feeds, and recent-items lists. Commands: \`LPUSH queue task1\`, \`RPOP queue\`.
- Set: a collection of unique members — used for tags, unique visitor tracking, and friend lists. Commands: \`SADD tags:post:1 redis database\`, \`SISMEMBER\`, \`SUNION\`.
- Sorted Set: like a Set but each member has a score — used for leaderboards, rate limiting, and priority queues. Commands: \`ZADD leaderboard 1000 Alice\`, \`ZRANGE leaderboard 0 9 REV WITHSCORES\`.`,
  },
  {
    id: 2221,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Redis persistence: phân biệt RDB và AOF, khi nào nên dùng loại nào?",
    q_en: "Redis persistence: what is the difference between RDB and AOF, and when should you use each?",
    a: "RDB (Redis Database Snapshot): tạo snapshot toàn bộ data ra file `.rdb` theo định kỳ (ví dụ: `save 900 1` = snapshot nếu có ít nhất 1 key thay đổi trong 900 giây). RDB compact, restart nhanh vì chỉ load một file, nhưng có thể mất data của khoảng thời gian kể từ snapshot cuối. AOF (Append-Only File): log mọi write operation vào file `.aof`; khi restart, replay toàn bộ command để rebuild state. AOF bền hơn (cấu hình `appendfsync always` không mất data, `everysec` mất tối đa 1 giây), nhưng file lớn hơn và restart chậm hơn. Có thể dùng cả hai cùng lúc (khuyến nghị cho production): RDB cho backup định kỳ, AOF cho durability. Redis 7.0 giới thiệu RDB-AOF hybrid format — AOF rewrite dùng RDB snapshot + delta AOF, kết hợp ưu điểm của cả hai. Nếu Redis chỉ dùng thuần túy làm cache, có thể disable cả hai để tối đa performance.",
    a_en: "RDB (Redis Database Snapshot): periodically creates a full snapshot of all data to a `.rdb` file (e.g., `save 900 1` = snapshot if at least 1 key changed within 900 seconds). RDB is compact and restarts quickly since only one file needs to be loaded, but data written since the last snapshot can be lost. AOF (Append-Only File): logs every write operation to a `.aof` file; on restart, all commands are replayed to rebuild state. AOF is more durable (`appendfsync always` loses no data; `everysec` loses at most 1 second of data) but produces a larger file and slower restarts. Both can be used together (recommended for production): RDB for periodic backups, AOF for durability. Redis 7.0 introduced a hybrid RDB-AOF format — AOF rewrite uses an RDB snapshot plus an incremental AOF, combining the benefits of both. If Redis is used purely as a cache, both can be disabled for maximum performance.",
  },
  {
    id: 2222,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Redis Pub/Sub là gì? Cách hoạt động và hạn chế so với Kafka?",
    q_en: "What is Redis Pub/Sub? How does it work and what are its limitations compared to Kafka?",
    a: "Redis Pub/Sub cho phép publisher gửi message đến một channel và tất cả subscriber đang lắng nghe channel đó nhận được message ngay lập tức. Lệnh: `SUBSCRIBE news`, `PUBLISH news 'Hello World'`. Pub/Sub của Redis là fire-and-forget — message không được lưu trữ, nếu không có subscriber nào online khi publish thì message bị mất; subscriber mới không nhận được message cũ. Hạn chế so với Kafka: không có message persistence, không replay, không consumer group với offset management, không đảm bảo delivery. Pub/Sub phù hợp cho: real-time notification, chat message, live dashboard update, cache invalidation signal. Nếu cần reliable messaging với durability và replay, dùng Redis Streams (thêm vào Redis 5.0) hoặc Kafka. Redis Keyspace Notifications là biến thể của Pub/Sub để lắng nghe events từ Redis chính nó (key expired, key set, etc.).",
    a_en: "Redis Pub/Sub allows a publisher to send a message to a channel, and all subscribers currently listening on that channel receive it instantly. Commands: `SUBSCRIBE news`, `PUBLISH news 'Hello World'`. Redis Pub/Sub is fire-and-forget — messages are not stored; if no subscribers are online when a message is published, it is lost, and new subscribers cannot receive past messages. Limitations compared to Kafka: no message persistence, no replay, no consumer groups with offset management, no delivery guarantees. Pub/Sub suits real-time notifications, chat messages, live dashboard updates, and cache invalidation signals. For reliable messaging with durability and replay, use Redis Streams (added in Redis 5.0) or Kafka. Redis Keyspace Notifications are a variant of Pub/Sub that lets you listen to Redis-internal events (key expired, key set, etc.).",
  },
  {
    id: 2223,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Transactions trong Redis: MULTI/EXEC và pipeline khác nhau như thế nào?",
    q_en: "Transactions in Redis: how do MULTI/EXEC and pipeline differ?",
    a: "Redis Transaction dùng `MULTI`/`EXEC`: các command giữa MULTI và EXEC được queue lại và execute atomically — không có command nào khác được xen vào giữa. Tuy nhiên, Redis transaction không có rollback — nếu một command fail (runtime error như sai kiểu data), các command khác vẫn execute. `DISCARD` hủy transaction. `WATCH key` cho phép optimistic locking: nếu key thay đổi trước khi EXEC, transaction bị abort (EXEC trả về nil) — dùng để implement compare-and-swap. Pipeline khác với transaction: pipeline đơn giản là gom nhiều command gửi một lần để giảm network round-trip, không đảm bảo atomicity. Ví dụ dùng WATCH: đọc balance, kiểm tra đủ tiền, WATCH balance, MULTI, deduct, EXEC — nếu có race condition thì EXEC fail và retry. Trong thực tế, Lua script thường được ưa hơn MULTI/EXEC vì atomic và flexible hơn.",
    a_en: "Redis transactions use `MULTI`/`EXEC`: commands queued between MULTI and EXEC are executed atomically — no other command can interleave. However, Redis transactions have no rollback — if one command fails at runtime (e.g., wrong data type), the remaining commands still execute. `DISCARD` cancels the transaction. `WATCH key` enables optimistic locking: if the watched key changes before EXEC, the transaction is aborted (EXEC returns nil) — used to implement compare-and-swap. A pipeline is different: it simply batches multiple commands into one network call to reduce round-trips, with no atomicity guarantee. Example using WATCH: read balance, verify sufficient funds, WATCH balance, MULTI, deduct, EXEC — if a race condition occurs, EXEC fails and the caller retries. In practice, Lua scripts are often preferred over MULTI/EXEC because they are atomic and more flexible.",
  },
  {
    id: 2224,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "advanced",
    q: "Lua scripting trong Redis: tại sao cần dùng và các use case điển hình?",
    q_en: "Lua scripting in Redis: why use it and what are the typical use cases?",
    a: "Lua script trong Redis chạy atomically — toàn bộ script không thể bị interrupt bởi command khác, đây là điểm mạnh so với MULTI/EXEC. Dùng lệnh `EVAL script numkeys key [key ...] arg [arg ...]` hoặc `EVALSHA` (dùng SHA hash của script đã load để tránh gửi lại script). Use case: rate limiting — đọc counter, kiểm tra limit, tăng counter, set TTL trong một atomic operation; distributed lock — check và set lock atomically; complex conditional update không thể implement bằng một Redis command. Ví dụ rate limiter: `local current = redis.call('INCR', KEYS[1]); if current == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end; return current`. \n\n**Lưu ý:** Lua script block toàn bộ Redis trong khi chạy, không nên viết script chạy lâu; nên dùng `SCRIPT LOAD` để pre-load script và gọi bằng EVALSHA cho hiệu năng tốt hơn.",
    a_en: "Lua scripts in Redis execute atomically — the entire script cannot be interrupted by another command, which is a key advantage over MULTI/EXEC. Use `EVAL script numkeys key [key ...] arg [arg ...]` or `EVALSHA` (using the SHA hash of a pre-loaded script to avoid resending the script body). Use cases: rate limiting — read a counter, check the limit, increment, and set TTL all in one atomic operation; distributed locks — check and set a lock atomically; complex conditional updates that cannot be expressed as a single Redis command. Rate limiter example: `local current = redis.call('INCR', KEYS[1]); if current == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end; return current`. \n\n**Note:** Lua scripts block all of Redis while running, so scripts must be kept short; use `SCRIPT LOAD` to pre-load scripts and call them via EVALSHA for better performance.",
  },
  {
    id: 2225,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Key expiration và eviction policy trong Redis: các policy là gì và khi nào dùng?",
    q_en: "Key expiration and eviction policies in Redis: what are the policies and when should you use each?",
    a: "Key expiration: dùng `EXPIRE key seconds`, `PEXPIRE key milliseconds`, hoặc `SET key value EX seconds` để tự động xóa key sau khoảng thời gian. Redis kiểm tra expiry theo hai cách: lazy expiration (kiểm tra khi access key) và active expiration (background job mỗi 100ms xóa random sample 20 key trong set expired keys). Eviction policy được áp dụng khi Redis đạt `maxmemory`: `noeviction` (reject write khi full), `allkeys-lru` (xóa key ít dùng nhất gần đây trong toàn bộ keyspace), `volatile-lru` (chỉ xóa key có TTL ít dùng nhất), `allkeys-lfu` (xóa key ít dùng nhất theo frequency — Redis 4.0+), `volatile-ttl` (xóa key có TTL ngắn nhất), `allkeys-random`. Cache dùng `allkeys-lru` hoặc `allkeys-lfu`; session store dùng `volatile-lru`; data không thể mất dùng `noeviction`. Nên set `maxmemory-policy` phù hợp và monitor `evicted_keys` metric.",
    a_en: "Key expiration: use `EXPIRE key seconds`, `PEXPIRE key milliseconds`, or `SET key value EX seconds` to automatically delete keys after a given time. Redis checks expiry in two ways: lazy expiration (checked on access) and active expiration (a background job runs every 100ms and deletes a random sample of expired keys). Eviction policies apply when Redis reaches `maxmemory`: `noeviction` (reject writes when full), `allkeys-lru` (evict the least recently used key from the entire keyspace), `volatile-lru` (evict the least recently used key that has a TTL), `allkeys-lfu` (evict the least frequently used key — Redis 4.0+), `volatile-ttl` (evict the key with the shortest remaining TTL), `allkeys-random`. Use `allkeys-lru` or `allkeys-lfu` for caches; `volatile-lru` for session stores; `noeviction` when data must not be lost. Always set an appropriate `maxmemory-policy` and monitor the `evicted_keys` metric.",
  },
  {
    id: 2226,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "So sánh Redis và Memcached: khi nào nên dùng cái nào?",
    q_en: "Compare Redis and Memcached: when should you use each?",
    a: "Memcached là pure cache với chỉ một kiểu dữ liệu (string), multi-threaded, đơn giản. Redis có nhiều kiểu dữ liệu (String, Hash, List, Set, Sorted Set, Stream, HyperLogLog, Geospatial), hỗ trợ persistence, pub/sub, transactions, Lua scripting, clustering native. Redis phù hợp cho hầu hết use case hiện đại. Nên dùng Memcached khi: chỉ cần simple key-value cache, muốn tận dụng multi-threading tốt hơn cho CPU-bound workload (hiếm gặp trong practice), team đã quen thuộc. Nên dùng Redis khi: cần data structure phong phú, persistence, pub/sub, session store, rate limiting, leaderboard, distributed lock — về cơ bản hầu hết mọi trường hợp. Trong thực tế, Redis đã thay thế Memcached ở phần lớn use case mới; Memcached chỉ còn được dùng trong legacy system.",
    a_en: "Memcached is a pure cache with a single data type (string), is multi-threaded, and is straightforward to operate. Redis supports rich data types (String, Hash, List, Set, Sorted Set, Stream, HyperLogLog, Geospatial), persistence, pub/sub, transactions, Lua scripting, and native clustering — making it suitable for the vast majority of modern use cases. Choose Memcached when: you only need simple key-value caching, want better multi-threading for CPU-bound workloads (rare in practice), or your team is already familiar with it. Choose Redis when: you need rich data structures, persistence, pub/sub, session storage, rate limiting, leaderboards, or distributed locks — essentially almost every scenario. In practice, Redis has replaced Memcached in most new projects; Memcached is mainly found in legacy systems.",
  },
  {
    id: 2227,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "beginner",
    q: "Các use case phổ biến nhất của Redis trong production là gì?",
    q_en: "What are the most common production use cases for Redis?",
    a: `Các use case phổ biến của Redis trong production:

- Caching: lưu kết quả database query, API response, rendered HTML để giảm latency và tải cho database — đây là use case phổ biến nhất.
- Session store: lưu session người dùng với TTL, dễ share giữa nhiều server instance.
- Rate limiting: dùng INCR + EXPIRE hoặc Sorted Set để giới hạn API request theo IP/user.
- Leaderboard: dùng Sorted Set để rank user theo điểm, cực kỳ efficient với \`ZADD\`, \`ZRANGE\`, \`ZRANK\`.
- Queue: dùng List với \`LPUSH\`/\`BRPOP\` để implement simple task queue (hoặc Redis Streams cho production).
- Pub/Sub: real-time notification, live dashboard, chat.
- Distributed lock: implement lock bằng \`SET key value NX EX timeout\` để tránh race condition trong distributed system.
- Geospatial: dùng Geo commands (\`GEOADD\`, \`GEODIST\`, \`GEORADIUS\`) cho tính năng tìm store gần nhất.
- Full-text search: RedisSearch module (Redis Stack) cho phép search index trực tiếp trên Redis data.`,
    a_en: `Most common production use cases for Redis:

- Caching: storing database query results, API responses, and rendered HTML to reduce latency and database load — the most common use case.
- Session store: storing user sessions with a TTL, easily shared across multiple server instances.
- Rate limiting: using INCR + EXPIRE or a Sorted Set to limit API requests per IP or user.
- Leaderboard: using a Sorted Set to rank users by score — extremely efficient with \`ZADD\`, \`ZRANGE\`, and \`ZRANK\`.
- Queue: using a List with \`LPUSH\`/\`BRPOP\` for a simple task queue (or Redis Streams for production-grade queuing).
- Pub/Sub: real-time notifications, live dashboards, and chat.
- Distributed lock: using \`SET key value NX EX timeout\` to prevent race conditions in distributed systems.
- Geospatial: using Geo commands (\`GEOADD\`, \`GEODIST\`, \`GEORADIUS\`) for nearest-store lookups.
- Full-text search: the RedisSearch module (Redis Stack) enables search indexing directly on Redis data.`,
  },
  {
    id: 2228,
    category: "Redis",
    subcategory: "Fundamentals",
    level: "intermediate",
    q: "Key naming conventions trong Redis: best practices để tổ chức namespace?",
    q_en: "Key naming conventions in Redis: best practices for organizing namespaces?",
    a: "Best practice là dùng dấu hai chấm `:` làm separator để tạo namespace hierarchy, ví dụ: `user:1001:profile`, `user:1001:session`, `product:sku:ABC123:stock`. Các rule quan trọng: dùng tên có ý nghĩa và mô tả rõ object type + identifier + attribute (ví dụ: `order:order_id:status`); tránh key quá dài (mỗi key đều tốn memory cho metadata overhead); tránh key quá ngắn khó đọc; thống nhất format trong toàn team và document lại. Dùng `SCAN` thay vì `KEYS *` khi cần tìm key theo pattern vì KEYS block Redis; `SCAN` iteration không block. Đối với hot key (một key được access cực nhiều), có thể dùng local cache hoặc key sharding (`user:1001:profile:shard:3`). Một pattern hay là thêm version vào key namespace để dễ cache invalidation hàng loạt: `v2:user:1001:profile` — khi cần invalidate tất cả, chỉ cần tăng version prefix.",
    a_en: "The best practice is to use colons `:` as separators to create a namespace hierarchy, e.g., `user:1001:profile`, `user:1001:session`, `product:sku:ABC123:stock`. Key rules: use descriptive names that clearly indicate object type + identifier + attribute (e.g., `order:order_id:status`); avoid overly long keys (every key incurs memory overhead for metadata); avoid overly short keys that are hard to read; agree on a consistent format across the team and document it. Use `SCAN` instead of `KEYS *` when searching for keys by pattern, since `KEYS` blocks Redis; `SCAN` is iterative and non-blocking. For hot keys (accessed extremely frequently), consider local caching or key sharding (`user:1001:profile:shard:3`). A useful pattern is adding a version to the namespace for bulk cache invalidation: `v2:user:1001:profile` — to invalidate everything, simply increment the version prefix.",
  },

  // ─── Redis Advanced (2229–2235) ──────────────────────────────────────────────
  {
    id: 2229,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Redis Cluster hoạt động như thế nào? Sharding, slot allocation, và resharding?",
    q_en: "How does Redis Cluster work? Explain sharding, slot allocation, and resharding.",
    a: "Redis Cluster chia keyspace thành 16384 hash slot; mỗi key được hash bằng CRC16 và map vào một slot cụ thể (`slot = CRC16(key) % 16384`). Mỗi master node chịu trách nhiệm một range slot (ví dụ: node A: 0-5460, node B: 5461-10922, node C: 10923-16383), mỗi master có ít nhất một replica. Client dùng CLUSTER-aware client library để route request trực tiếp đến node chứa slot tương ứng; nếu route sai, node trả về `MOVED` redirect. Hash tags (`{user}.profile`) cho phép force nhiều key vào cùng một slot để support multi-key operations và transaction. Resharding (di chuyển slot giữa các node) được thực hiện online không cần downtime bằng `redis-cli --cluster reshard`. Minimum recommended: 3 master + 3 replica (total 6 nodes) để có HA và survive node failure. Limitation: không support cross-slot transaction và multi-key operation (trừ khi dùng hash tag).",
    a_en: "Redis Cluster divides the keyspace into 16,384 hash slots; each key is hashed using CRC16 and mapped to a specific slot (`slot = CRC16(key) % 16384`). Each master node is responsible for a range of slots (e.g., Node A: 0-5460, Node B: 5461-10922, Node C: 10923-16383), and each master has at least one replica. Clients use a cluster-aware client library to route requests directly to the node holding the relevant slot; if a request is routed to the wrong node, it returns a `MOVED` redirect. Hash tags (`{user}.profile`) force multiple keys into the same slot to support multi-key operations and transactions. Resharding (moving slots between nodes) is performed online with no downtime using `redis-cli --cluster reshard`. Minimum recommended setup: 3 masters + 3 replicas (6 nodes total) for HA and single-node failure tolerance. Limitation: cross-slot transactions and multi-key operations are not supported unless hash tags are used.",
  },
  {
    id: 2230,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Redis Sentinel là gì? Khác gì với Redis Cluster và khi nào dùng?",
    q_en: "What is Redis Sentinel? How does it differ from Redis Cluster and when should you use it?",
    a: "Redis Sentinel là giải pháp high availability cho Redis standalone (không phải Cluster), cung cấp: automatic failover (promote replica lên master khi master fail), monitoring, notification, và service discovery (client hỏi Sentinel để biết master hiện tại là ai). Cần ít nhất 3 Sentinel instance để có quorum và tránh split-brain. Khi master fail, Sentinels bầu chọn nhau theo quorum (majority), sau đó trigger failover: chọn replica tốt nhất làm master mới, cấu hình lại replicas còn lại. Khác với Cluster: Sentinel chỉ quản lý một master với replicas (không sharding), phù hợp khi data size vừa đủ fit trong một node nhưng cần HA. Redis Cluster phù hợp khi cần horizontal scaling (data lớn hơn RAM một node, cần high throughput). Trong thực tế nhiều team dùng Redis Cluster ngay cả khi data nhỏ vì nó tích hợp cả HA lẫn sharding; Sentinel phù hợp cho setup đơn giản hơn với data size vừa phải.",
    a_en: "Redis Sentinel is a high-availability solution for standalone Redis (not Cluster), providing: automatic failover (promoting a replica to master when the master fails), monitoring, notifications, and service discovery (clients query Sentinel to find the current master). At least 3 Sentinel instances are required for quorum and to avoid split-brain. When a master fails, Sentinels elect a leader by quorum (majority) and trigger failover: the best replica is promoted to master and remaining replicas are reconfigured. Difference from Cluster: Sentinel manages a single master with replicas (no sharding), suited for datasets that fit in one node but require HA. Redis Cluster is appropriate when horizontal scaling is needed (data exceeds a single node's RAM or high throughput is required). In practice, many teams use Redis Cluster even for small datasets because it provides both HA and sharding; Sentinel is a better fit for simpler setups with modest data sizes.",
  },
  {
    id: 2231,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Distributed lock với Redis: SET NX và Redlock algorithm, những pitfall cần biết?",
    q_en: "Distributed locks with Redis: SET NX and the Redlock algorithm — what pitfalls should you know?",
    a: `Distributed lock với Redis:

- Basic lock: \`SET lock:resource_name unique_value NX PX 30000\` — atomic set-if-not-exists với TTL.
- Release lock: chỉ xóa nếu value match (dùng Lua script: \`if redis.call('GET', KEYS[1]) == ARGV[1] then return redis.call('DEL', KEYS[1]) else return 0 end\`).
- Dùng unique value (UUID) per lock acquisition để tránh xóa nhầm lock của client khác.
- Vấn đề với single Redis: nếu master fail trước khi replicate sang replica, lock bị mất → nhiều client cùng hold lock.
- Redlock algorithm (Martin Kleppmann vs Antirez debate): acquire lock trên N/2+1 node Redis độc lập, chỉ coi là success khi acquire được majority trong thời gian nhỏ hơn TTL. Vẫn có edge case với GC pause và clock skew.

Trong production critical system, nên dùng ZooKeeper hoặc etcd; Redis lock phù hợp cho use case không quá critical (rate limiting, idempotency key).`,
    a_en: `Distributed locks with Redis:

- Basic lock: \`SET lock:resource_name unique_value NX PX 30000\` — atomic set-if-not-exists with a TTL.
- Release: only delete if the value matches (Lua script: \`if redis.call('GET', KEYS[1]) == ARGV[1] then return redis.call('DEL', KEYS[1]) else return 0 end\`).
- Use a unique value (UUID) per lock acquisition to avoid accidentally releasing another client's lock.
- Problem with a single Redis node: if the master fails before replicating to a replica, the lock is lost and multiple clients can simultaneously hold it.
- Redlock algorithm (Martin Kleppmann vs. Antirez debate): acquire the lock on N/2+1 independent Redis nodes, considering success only when a majority is acquired within a time shorter than the TTL. Still has edge cases involving GC pauses and clock skew.

For truly critical production systems, use ZooKeeper or etcd; Redis locks are well-suited for less-critical scenarios such as rate limiting and idempotency keys.`,
  },
  {
    id: 2232,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Redis Streams là gì? So sánh với Pub/Sub và Kafka, khi nào dùng?",
    q_en: "What are Redis Streams? How do they compare to Pub/Sub and Kafka, and when should you use them?",
    a: "Redis Streams (Redis 5.0) là log data structure lưu message theo thứ tự với persistent storage, consumer group, và message acknowledgment — lấp đầy khoảng cách giữa Pub/Sub (fire-and-forget) và Kafka (phức tạp, separate infrastructure). Mỗi message có auto-generated ID dạng `timestamp-sequence` (ví dụ: `1638000000000-0`). Consumer group trong Redis Streams tương tự Kafka: `XREADGROUP GROUP mygroup consumer1 COUNT 10 STREAMS mystream >` đọc undelivered message; `XACK mystream mygroup message-id` acknowledge; `XPENDING` kiểm tra message chưa ack (để xử lý lại nếu consumer crash). `XADD stream * field1 value1` thêm message; `MAXLEN ~1000` để cap stream size. Dùng Redis Streams khi: cần reliable messaging nhưng không muốn setup Kafka, data volume vừa phải, team đã dùng Redis. Dùng Kafka khi: data volume cực lớn, cần long-term retention, multi-datacenter replication, hoặc cần Kafka ecosystem (Kafka Streams, Connect).",
    a_en: "Redis Streams (introduced in Redis 5.0) is an append-only log data structure with persistent storage, consumer groups, and message acknowledgment — bridging the gap between Pub/Sub (fire-and-forget) and Kafka (complex, separate infrastructure). Each message gets an auto-generated ID in the format `timestamp-sequence` (e.g., `1638000000000-0`). Consumer groups in Redis Streams work similarly to Kafka: `XREADGROUP GROUP mygroup consumer1 COUNT 10 STREAMS mystream >` reads undelivered messages; `XACK mystream mygroup message-id` acknowledges; `XPENDING` checks unacknowledged messages for reprocessing after a consumer crash. `XADD stream * field1 value1` appends a message; `MAXLEN ~1000` caps the stream size. Use Redis Streams when: you need reliable messaging without setting up Kafka, data volume is moderate, and your team already uses Redis. Use Kafka when: data volume is very large, long-term retention is needed, multi-datacenter replication is required, or you need the Kafka ecosystem (Kafka Streams, Kafka Connect).",
  },
  {
    id: 2233,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Memory optimization trong Redis: các kỹ thuật giảm memory footprint?",
    q_en: "Memory optimization in Redis: what techniques reduce memory footprint?",
    a: "Dùng appropriate data type: Hash thay vì nhiều String key riêng lẻ cho object nhỏ (Redis tự động dùng ziplist encoding khi Hash nhỏ hơn `hash-max-ziplist-entries` entries và mỗi value nhỏ hơn `hash-max-ziplist-value` bytes — memory efficient hơn hashtable). Compressed encoding: Redis tự optimize encoding dựa trên size (listpack, ziplist, intset, skiplist). Dùng `DEBUG OBJECT key` để xem encoding. Giảm key size: `usr:1001:prf` thay vì `user:1001:profile` tiết kiệm memory nhân với hàng triệu key. Set TTL cho tất cả cache key tránh memory leak. Dùng `OBJECT ENCODING key` và `MEMORY USAGE key` để profile. `MEMORY DOCTOR` chẩn đoán vấn đề memory. Nén value ở application layer (gzip JSON trước khi lưu) giảm 70-80% với JSON lớn. Redis 7.0 có `loglevel verbose` + memory profiling. Monitor `used_memory`, `mem_fragmentation_ratio` (>1.5 là vấn đề fragmentation — có thể dùng `MEMORY PURGE` để defragment).",
    a_en: "Use appropriate data types: Hash instead of many individual String keys for small objects (Redis automatically uses ziplist encoding when a Hash has fewer than `hash-max-ziplist-entries` entries and each value is smaller than `hash-max-ziplist-value` bytes — more memory-efficient than a hashtable). Compressed encodings: Redis automatically selects efficient encodings based on size (listpack, ziplist, intset, skiplist). Use `DEBUG OBJECT key` to inspect the encoding. Shorten key names: `usr:1001:prf` instead of `user:1001:profile` saves memory when multiplied across millions of keys. Set a TTL on all cache keys to prevent memory leaks. Profile with `OBJECT ENCODING key` and `MEMORY USAGE key`. Use `MEMORY DOCTOR` to diagnose memory issues. Compress values at the application layer (gzip JSON before storing) to achieve 70-80% size reduction for large JSON payloads. Monitor `used_memory` and `mem_fragmentation_ratio` (> 1.5 indicates fragmentation — use `MEMORY PURGE` to defragment).",
  },
  {
    id: 2234,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Cache stampede (thundering herd) là gì? Các cách phòng tránh trong Redis?",
    q_en: "What is a cache stampede (thundering herd)? How do you prevent it in Redis?",
    a: "Cache stampede xảy ra khi một hot cache key expire, hàng trăm/nghìn request đồng thời không thấy key trong cache, tất cả cùng query database, gây overload. Cách phòng tránh: Probabilistic Early Expiration — thay vì expire chính xác, tính toán xác suất recompute tăng dần khi gần expire, một request 'may mắn' sẽ recompute trước khi thực sự expire (không cần lock). Mutex/Distributed lock — request đầu tiên acquire lock và load data, các request khác đợi hoặc trả về stale data. Stale-while-revalidate — trả về data cũ ngay lập tức trong khi background job refresh cache (không có downtime nhưng data có thể stale ngắn). Cache warming — preload cache trước khi deploy hoặc khi key sắp expire. Dùng TTL jitter (thêm random ±10-20% vào TTL) để tránh nhiều key expire cùng lúc (tránh stampede hàng loạt). Trong practice, kết hợp mutex lock + stale cache fallback là pattern phổ biến nhất.",
    a_en: "A cache stampede occurs when a hot cache key expires and hundreds or thousands of concurrent requests simultaneously find no data in the cache, all hitting the database at once and causing overload. Prevention strategies: Probabilistic Early Expiration — instead of a hard expiry, increase the probability of a cache refresh as the TTL approaches zero; one 'lucky' request recomputes the value before it actually expires (no lock needed). Mutex/Distributed lock — the first request acquires a lock and loads fresh data; other requests either wait or return stale data. Stale-while-revalidate — immediately return the stale value while a background job refreshes the cache (no downtime, but data may be briefly stale). Cache warming — preload the cache before deployment or before a key is about to expire. Use TTL jitter (add a random ±10-20% offset to TTLs) to prevent many keys from expiring simultaneously. In practice, combining a mutex lock with a stale-cache fallback is the most common pattern.",
  },
  {
    id: 2235,
    category: "Redis",
    subcategory: "Advanced",
    level: "advanced",
    q: "Redis trong production: các best practices quan trọng nhất cần tuân thủ?",
    q_en: "Redis in production: what are the most important best practices to follow?",
    a: `Best practices khi vận hành Redis trong production:

- Security: bật authentication (\`requirepass\`), disable unused commands (\`rename-command FLUSHALL ''\`), bind Redis chỉ trên internal interface (không expose ra internet), dùng TLS cho Redis 6+.
- Availability: dùng Sentinel hoặc Cluster, đặt \`replica-priority\` hợp lý, test failover định kỳ.
- Performance: đặt \`maxmemory\` phù hợp với RAM (để lại 20-30% cho OS và fragmentation), chọn \`maxmemory-policy\` đúng, monitor \`slowlog\` (\`slowlog-log-slower-than 10000\` microseconds).
- Tránh blocking operation: không dùng \`KEYS *\` trên production (dùng \`SCAN\`), không dùng \`SMEMBERS\` trên Set lớn (dùng \`SSCAN\`), cẩn thận với \`SORT\`, \`LRANGE\` trên List dài.
- Connection management: dùng connection pool (\`max pool size = 10-50\`), set \`tcp-keepalive 300\`.
- Backup: cấu hình RDB snapshot, monitor \`rdb_last_save_time\` và \`rdb_changes_since_last_save\`.
- Upgrade: Redis minor version backward compatible, major version cần test kỹ; dùng Redis managed service (ElastiCache, Redis Cloud) để giảm operational burden.`,
    a_en: `Most important best practices for Redis in production:

- Security: enable authentication (\`requirepass\`), disable unused commands (\`rename-command FLUSHALL ''\`), bind Redis only to internal interfaces (never expose to the internet), and use TLS for Redis 6+.
- Availability: use Sentinel or Cluster, set \`replica-priority\` appropriately, and test failover regularly.
- Performance: set \`maxmemory\` to leave 20-30% of RAM free for the OS and fragmentation, choose the correct \`maxmemory-policy\`, and monitor the slow log (\`slowlog-log-slower-than 10000\` microseconds).
- Avoid blocking operations: never use \`KEYS *\` in production (use \`SCAN\`), never use \`SMEMBERS\` on large Sets (use \`SSCAN\`), and be cautious with \`SORT\` and \`LRANGE\` on long Lists.
- Connection management: use a connection pool (max pool size 10-50) and set \`tcp-keepalive 300\`.
- Backups: configure RDB snapshots and monitor \`rdb_last_save_time\` and \`rdb_changes_since_last_save\`.
- Upgrades: Redis minor versions are backward compatible; major versions require thorough testing. Consider using a managed Redis service (ElastiCache, Redis Cloud) to reduce operational overhead.`,
  },
]
