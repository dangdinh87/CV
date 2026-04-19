import type { QAItem } from "../interview-data";

export const NETWORKING_OS_DATA: QAItem[] = [
  // ─── Network / OSI & TCP/IP (2301–2308) ─── beginner ───────────────────────
  {
    id: 2301,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "Mô hình OSI 7 tầng là gì? Mỗi tầng có chức năng gì?",
    q_en: "What is the OSI 7-layer model? What is the function of each layer?",
    a: "Mô hình OSI (Open Systems Interconnection) chia giao tiếp mạng thành 7 tầng từ dưới lên: Physical (truyền bit qua cáp/sóng), Data Link (đóng gói frame, MAC address, phát hiện lỗi), Network (định tuyến gói tin qua IP), Transport (kiểm soát luồng & lỗi, TCP/UDP), Session (quản lý phiên kết nối), Presentation (mã hóa/giải mã, nén dữ liệu), Application (giao thức ứng dụng HTTP/FTP/SMTP). Trong thực tế, lập trình viên chủ yếu làm việc với tầng 4–7: tầng Transport xác định TCP hay UDP, tầng Application chứa logic nghiệp vụ HTTP/WebSocket. Mô hình OSI mang tính lý thuyết giúp debug và thiết kế hệ thống — ví dụ khi gói tin bị mất có thể trace từng tầng để xác định vấn đề nằm ở đâu (card mạng lỗi = tầng 1, ARP storm = tầng 2, routing sai = tầng 3).",
    a_en: "The OSI (Open Systems Interconnection) model divides network communication into 7 layers from bottom to top: Physical (transmits raw bits over cables/radio), Data Link (frames packets, handles MAC addresses and error detection), Network (routes packets via IP), Transport (flow control and error recovery, TCP/UDP), Session (manages connection sessions), Presentation (encoding/decoding, data compression), Application (application protocols like HTTP/FTP/SMTP). In practice, developers mainly work with layers 4–7: the Transport layer determines TCP vs UDP, while the Application layer contains HTTP/WebSocket business logic. OSI is a theoretical reference model useful for debugging and system design — when packets are dropped you can trace each layer to pinpoint the issue (faulty NIC = layer 1, ARP storm = layer 2, misconfigured routing = layer 3).",
  },
  {
    id: 2302,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "Mô hình TCP/IP khác gì so với mô hình OSI?",
    q_en: "How does the TCP/IP model differ from the OSI model?",
    a: "TCP/IP (hay DoD model) gộp OSI 7 tầng xuống còn 4 tầng: Network Access (= Physical + Data Link), Internet (= Network), Transport (giữ nguyên), Application (= Session + Presentation + Application). TCP/IP là mô hình thực tiễn được dùng trong toàn bộ Internet hiện đại, trong khi OSI là mô hình tham chiếu lý thuyết để chuẩn hóa giao tiếp giữa các vendor. Khi lập trình với socket (Node.js `net`, Go `net.Dial`), bạn đang làm việc ở tầng Transport của TCP/IP. Hiểu sự khác biệt này giúp khi đọc tài liệu — RFC mô tả TCP/IP, còn sách giáo khoa network dùng OSI.",
    a_en: "The TCP/IP model (also called the DoD model) collapses the OSI 7 layers into 4: Network Access (= Physical + Data Link), Internet (= Network), Transport (unchanged), and Application (= Session + Presentation + Application). TCP/IP is the practical model used across the modern Internet, while OSI is a theoretical reference model designed to standardize inter-vendor communication. When programming with sockets (Node.js `net`, Go `net.Dial`), you are working at the TCP/IP Transport layer. Understanding this distinction helps when reading documentation — RFCs describe TCP/IP, while networking textbooks typically use OSI.",
  },
  {
    id: 2303,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "TCP và UDP khác nhau thế nào? Khi nào dùng cái nào?",
    q_en: "How do TCP and UDP differ? When should you use each?",
    a: "TCP (Transmission Control Protocol) là kết nối hướng kết nối (connection-oriented): đảm bảo gói tin đến đúng thứ tự, không mất mát nhờ ACK/retransmit, kiểm soát tắc nghẽn — nhưng tốn overhead hơn. UDP (User Datagram Protocol) là connectionless: gửi gói tin không cần thiết lập kết nối, không đảm bảo thứ tự hay delivery, nhưng latency thấp hơn nhiều. Dùng TCP khi tính toàn vẹn dữ liệu quan trọng: HTTP/HTTPS, database queries, file transfer, email. Dùng UDP khi latency ưu tiên hơn độ chính xác: game online (vị trí nhân vật), VoIP/video call (mất vài frame chấp nhận được), DNS queries, DHCP. HTTP/3 dùng QUIC protocol xây trên UDP để giảm latency kết nối nhưng tự implement reliability ở tầng application.",
    a_en: "TCP (Transmission Control Protocol) is connection-oriented: it guarantees in-order, lossless delivery through ACKs and retransmits, and includes congestion control — at the cost of higher overhead. UDP (User Datagram Protocol) is connectionless: packets are sent without establishing a connection, with no ordering or delivery guarantees, but with much lower latency. Use TCP when data integrity matters: HTTP/HTTPS, database queries, file transfers, email. Use UDP when latency is more important than accuracy: online games (player positions), VoIP/video calls (a few dropped frames are acceptable), DNS queries, DHCP. HTTP/3 uses the QUIC protocol built on top of UDP to reduce connection latency while implementing its own reliability at the application layer.",
  },
  {
    id: 2304,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "TCP 3-way handshake hoạt động thế nào? Tại sao cần 3 bước?",
    q_en: "How does the TCP 3-way handshake work? Why are 3 steps necessary?",
    a: "Ba bước gồm: (1) Client gửi SYN (synchronize) với sequence number ngẫu nhiên X, (2) Server trả SYN-ACK với ACK=X+1 và sequence number Y của server, (3) Client gửi ACK=Y+1 xác nhận nhận được Y. Sau đó kết nối được thiết lập và dữ liệu có thể truyền. Cần đủ 3 bước vì cả hai phía cần đồng bộ sequence number của nhau: 2 bước chỉ đảm bảo server nghe được client, bước 3 đảm bảo client nghe được server. Khi đóng kết nối có 4-way handshake (FIN/ACK/FIN/ACK) vì hai hướng đóng độc lập. Trong thực tế, 3-way handshake là một nguồn latency đáng kể — đó là lý do HTTP/2 multiplexing và QUIC (HTTP/3) ra đời để giảm số lần handshake.",
    a_en: "The three steps are: (1) The client sends a SYN with a random sequence number X, (2) the server replies with SYN-ACK, acknowledging X+1 and providing its own sequence number Y, (3) the client sends ACK=Y+1 confirming receipt of Y. The connection is then established and data transfer can begin. Three steps are required because both sides must synchronize sequence numbers: two steps only confirm the server can hear the client, while the third step confirms the client can hear the server. Connection teardown uses a 4-way handshake (FIN/ACK/FIN/ACK) because each direction closes independently. In practice, the 3-way handshake is a significant source of latency — that is why HTTP/2 multiplexing and QUIC (HTTP/3) were introduced to reduce the number of handshakes.",
  },
  {
    id: 2305,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "HTTP/1.1, HTTP/2 và HTTP/3 khác nhau như thế nào?",
    q_en: "How do HTTP/1.1, HTTP/2, and HTTP/3 differ?",
    a: "HTTP/1.1 (1997) dùng text-based protocol, mỗi request cần một TCP connection riêng hoặc dùng persistent connection nhưng bị head-of-line blocking (request sau phải chờ response trước). HTTP/2 (2015) giới thiệu binary framing, multiplexing (nhiều request/response cùng lúc trên 1 TCP connection), header compression (HPACK), server push — giảm đáng kể latency cho web hiện đại. HTTP/3 (2022) bỏ hẳn TCP, dùng QUIC protocol trên UDP: giải quyết TCP-level head-of-line blocking, 0-RTT connection resumption, built-in TLS 1.3. Thực tế: hầu hết browser và CDN đã support HTTP/2; HTTP/3 ngày càng phổ biến qua Cloudflare, Google. Lập trình viên thường không cần config trực tiếp — Nginx/reverse proxy xử lý — nhưng hiểu nguyên lý giúp tối ưu asset bundling và caching strategy.",
    a_en: "HTTP/1.1 (1997) uses a text-based protocol; each request either requires its own TCP connection or shares a persistent connection that suffers from head-of-line blocking (each response must complete before the next request can proceed). HTTP/2 (2015) introduced binary framing, multiplexing (multiple request/response pairs concurrently over a single TCP connection), header compression (HPACK), and server push — dramatically reducing latency for modern web apps. HTTP/3 (2022) drops TCP entirely, using QUIC over UDP: it eliminates TCP-level head-of-line blocking, supports 0-RTT connection resumption, and has TLS 1.3 built in. In practice, most browsers and CDNs already support HTTP/2; HTTP/3 is increasingly common via Cloudflare and Google. Developers rarely configure this directly — Nginx or a reverse proxy handles it — but understanding the principles helps optimize asset bundling and caching strategies.",
  },
  {
    id: 2306,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "DNS hoạt động thế nào? Giải thích quá trình resolve một domain name.",
    q_en: "How does DNS work? Explain the process of resolving a domain name.",
    a: "DNS (Domain Name System) dịch domain name (google.com) thành IP address. Quá trình resolve: (1) Browser kiểm tra local cache, (2) Hỏi OS resolver (kiểm tra /etc/hosts), (3) Hỏi Recursive Resolver của ISP, (4) Resolver hỏi Root Name Server (biết địa chỉ TLD servers), (5) Hỏi TLD Name Server (.com, .vn), (6) Hỏi Authoritative Name Server của domain (trả về IP cuối cùng). Kết quả được cache theo TTL (Time To Live). Có nhiều record type: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (SPF/DKIM), NS (name server). Thực tế lập trình: DNS propagation khi thay đổi record có thể mất vài giờ đến 48h tùy TTL. Dùng `dig`, `nslookup` để debug; DNS-over-HTTPS (DoH) và DNS-over-TLS (DoT) mã hóa DNS queries để tăng privacy.",
    a_en: "DNS (Domain Name System) translates domain names (e.g., google.com) into IP addresses. The resolution process: (1) the browser checks its local cache, (2) queries the OS resolver (checks /etc/hosts), (3) queries the ISP's recursive resolver, (4) the resolver queries a root name server (which knows TLD server addresses), (5) queries the TLD name server (.com, .vn), (6) queries the authoritative name server for the domain, which returns the final IP. Results are cached according to their TTL (Time To Live). Common record types include: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (SPF/DKIM), NS (name server). In practice: DNS propagation after a record change can take minutes to 48 hours depending on TTL. Use `dig` or `nslookup` for debugging; DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) encrypt DNS queries for improved privacy.",
  },
  {
    id: 2307,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "HTTPS và TLS handshake hoạt động thế nào?",
    q_en: "How does HTTPS and the TLS handshake work?",
    a: "HTTPS = HTTP + TLS (Transport Layer Security). TLS handshake (TLS 1.3) gồm: (1) Client gửi ClientHello với danh sách cipher suites và key shares, (2) Server chọn cipher, gửi ServerHello + certificate + Finished, (3) Client verify certificate qua Certificate Authority chain, tính session key, gửi Finished. Sau đó dữ liệu được mã hóa đối xứng (AES-GCM) bằng session key — asymmetric crypto chỉ dùng trong handshake. TLS 1.3 giảm từ 2-RTT (TLS 1.2) xuống 1-RTT, thậm chí 0-RTT cho resumed sessions. Certificate pinning là kỹ thuật hardcode expected certificate trong app để chống MITM attack. Lập trình viên nên biết: expired SSL cert gây 526/525 error; Let's Encrypt cung cấp free cert tự động gia hạn; HSTS header buộc browser dùng HTTPS.",
    a_en: "HTTPS = HTTP + TLS (Transport Layer Security). The TLS 1.3 handshake works as follows: (1) the client sends a ClientHello with supported cipher suites and key shares, (2) the server selects a cipher and responds with ServerHello + certificate + Finished, (3) the client verifies the certificate through the Certificate Authority chain, derives the session key, and sends Finished. All subsequent data is encrypted symmetrically (AES-GCM) using the session key — asymmetric cryptography is only used during the handshake. TLS 1.3 reduced the handshake from 2-RTT (TLS 1.2) to 1-RTT, and even supports 0-RTT for resumed sessions. Certificate pinning is a technique where the expected certificate is hardcoded in the app to defend against MITM attacks. Developers should know: an expired SSL cert causes 526/525 errors; Let's Encrypt provides free, auto-renewing certificates; the HSTS header forces browsers to always use HTTPS.",
  },
  {
    id: 2308,
    category: "Network",
    subcategory: "OSI & TCP/IP",
    level: "beginner",
    q: "WebSocket khác gì so với HTTP thông thường? Khi nào nên dùng WebSocket?",
    q_en: "How does WebSocket differ from regular HTTP? When should you use WebSocket?",
    a: "HTTP là request-response: client luôn phải khởi tạo request trước, server không thể chủ động push data. WebSocket là full-duplex persistent connection: sau khi upgrade từ HTTP (101 Switching Protocols), cả client và server có thể gửi message bất kỳ lúc nào với latency rất thấp (không cần header HTTP cho mỗi message). WebSocket phù hợp cho: real-time chat, live notifications, collaborative editing (Google Docs), live trading/stock prices, game online, live dashboard. Không nên dùng WebSocket khi: data không cần real-time (dùng REST polling hoặc Server-Sent Events thay thế), hoặc khi cần cache/CDN (WebSocket không cache được). Thực tế scaling: WebSocket cần sticky sessions hoặc pub/sub broker (Redis Pub/Sub, Socket.IO adapter) khi có nhiều server instance.",
    a_en: "HTTP is request-response: the client always initiates a request and the server cannot push data proactively. WebSocket is a full-duplex, persistent connection: after upgrading from HTTP (101 Switching Protocols), both client and server can send messages at any time with very low latency (no HTTP headers per message). WebSocket is well-suited for: real-time chat, live notifications, collaborative editing (e.g., Google Docs), live trading/stock prices, online games, and live dashboards. Avoid WebSocket when data does not need to be real-time (use REST polling or Server-Sent Events instead), or when caching via a CDN is required (WebSocket connections cannot be cached). Scaling consideration: WebSocket requires sticky sessions or a pub/sub broker (Redis Pub/Sub, Socket.IO adapter) when running multiple server instances.",
  },

  // ─── Network / Web & API (2309–2316) ─── intermediate ──────────────────────
  {
    id: 2309,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "REST, GraphQL và gRPC khác nhau thế nào? Khi nào dùng cái nào?",
    q_en: "How do REST, GraphQL, and gRPC differ? When should you use each?",
    a: "REST dùng HTTP verbs (GET/POST/PUT/DELETE) + URL resources, stateless, dễ cache, phổ biến nhất — phù hợp CRUD APIs đơn giản, public APIs, mobile apps. GraphQL cho phép client chỉ định chính xác data cần lấy qua query language, giải quyết over-fetching/under-fetching của REST, có single endpoint — phù hợp khi nhiều client (web/mobile) cần data shapes khác nhau, hoặc data graph phức tạp. gRPC dùng Protocol Buffers (binary, nhỏ hơn JSON ~3-5x), HTTP/2 multiplexing, strongly-typed contracts, hỗ trợ streaming bidirectional — phù hợp microservices internal communication, khi performance critical. Trong thực tế: public-facing API thường dùng REST; BFF (Backend for Frontend) hoặc dashboard phức tạp hỏi dùng GraphQL (Shopify, GitHub); service mesh nội bộ dùng gRPC (Google, Netflix).",
    a_en: "REST uses HTTP verbs (GET/POST/PUT/DELETE) with URL-based resources, is stateless, easy to cache, and the most widely adopted — ideal for simple CRUD APIs, public APIs, and mobile apps. GraphQL lets clients specify exactly the data they need via a query language, solving REST's over-fetching and under-fetching problems through a single endpoint — great when multiple clients (web/mobile) need different data shapes or when dealing with a complex data graph. gRPC uses Protocol Buffers (binary format, ~3-5x smaller than JSON), HTTP/2 multiplexing, strongly-typed contracts, and bidirectional streaming — best for internal microservice communication where performance is critical. In practice: public-facing APIs typically use REST; complex dashboards or BFF (Backend for Frontend) layers often use GraphQL (Shopify, GitHub); internal service meshes use gRPC (Google, Netflix).",
  },
  {
    id: 2310,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "Các thuật toán load balancing phổ biến là gì? Ưu nhược điểm của từng loại?",
    q_en: "What are the common load balancing algorithms? What are the pros and cons of each?",
    a: `Các thuật toán load balancing phổ biến:

- Round Robin: phân phối request lần lượt qua các server — đơn giản nhưng không tính đến load thực tế.
- Weighted Round Robin: server mạnh hơn nhận nhiều request hơn theo tỷ lệ cấu hình.
- Least Connections: gửi đến server có ít active connections nhất — tốt khi request duration không đều nhau.
- Least Response Time: chọn server có response time thấp nhất — cần monitoring liên tục.
- IP Hash: hash IP client để luôn route đến cùng một server (sticky session) — quan trọng khi app có state (session).
- Random: chọn ngẫu nhiên — đơn giản, hoạt động tốt với số lượng server lớn.

Trong thực tế: Nginx/HAProxy/AWS ALB hỗ trợ hầu hết các thuật toán này; Kubernetes dùng iptables/ipvs với round-robin mặc định. Health check là thành phần bắt buộc — LB phải tự động loại server unhealthy khỏi pool.`,
    a_en: `Common load balancing algorithms:

- Round Robin: distributes requests sequentially across servers — simple but ignores actual server load.
- Weighted Round Robin: higher-capacity servers receive a proportionally larger share of requests based on configured weights.
- Least Connections: routes to the server with the fewest active connections — effective when request durations vary.
- Least Response Time: selects the server with the lowest response time — requires continuous monitoring.
- IP Hash: hashes the client IP to always route to the same server (sticky session) — important for stateful applications using sessions.
- Random: selects a server at random — simple and works well at scale.

In practice, Nginx/HAProxy/AWS ALB support most of these algorithms; Kubernetes uses iptables/ipvs with round-robin by default. Health checks are mandatory — the load balancer must automatically remove unhealthy servers from the pool.`,
  },
  {
    id: 2311,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "Reverse proxy và forward proxy khác nhau thế nào? Tại sao reverse proxy quan trọng trong production?",
    q_en: "How do reverse proxy and forward proxy differ? Why is reverse proxy important in production?",
    a: "Forward proxy đứng giữa client và internet: client cấu hình proxy, mọi request đi qua proxy — dùng để ẩn danh tính client, bypass geo-restriction, corporate filtering. Reverse proxy đứng trước server: client không biết server thật sự, mọi request qua reverse proxy trước — dùng để load balancing, SSL termination, caching, compression, security (ẩn internal architecture). Reverse proxy quan trọng trong production vì: (1) SSL termination — giải mã HTTPS một lần tại proxy, backend dùng HTTP thuần; (2) Load balancing giữa các server instances; (3) Caching static assets, giảm load backend; (4) Rate limiting và WAF protection; (5) Gzip/Brotli compression. Nginx là reverse proxy phổ biến nhất; Caddy tự động HTTPS; Cloudflare là reverse proxy CDN toàn cầu. Trong Next.js/Vercel, Edge Network đóng vai trò reverse proxy trước Next.js server.",
    a_en: "A forward proxy sits between the client and the internet: the client is configured to route all requests through it — used to hide the client's identity, bypass geo-restrictions, or enforce corporate filtering. A reverse proxy sits in front of servers: the client is unaware of the actual servers and all requests pass through the proxy first — used for load balancing, SSL termination, caching, compression, and security (hiding the internal architecture). Reverse proxies are critical in production because: (1) SSL termination — HTTPS is decrypted once at the proxy, so backends communicate over plain HTTP; (2) load balancing across server instances; (3) caching of static assets, reducing backend load; (4) rate limiting and WAF protection; (5) Gzip/Brotli compression. Nginx is the most popular reverse proxy; Caddy handles HTTPS automatically; Cloudflare acts as a global CDN reverse proxy. In Next.js/Vercel, the Edge Network acts as a reverse proxy in front of the Next.js server.",
  },
  {
    id: 2312,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "CDN hoạt động thế nào? Khi nào nên và không nên dùng CDN?",
    q_en: "How does a CDN work? When should and should not you use a CDN?",
    a: "CDN (Content Delivery Network) là mạng lưới server phân tán toàn cầu (PoP - Points of Presence). Khi user request file, CDN router tìm server gần nhất về mặt địa lý/network. Lần đầu cache miss: CDN fetch từ origin server và cache lại. Các lần sau: phục vụ từ edge cache — giảm latency đáng kể (từ 200ms còn 20ms) và giảm tải origin. CDN xử lý: static assets (JS/CSS/images), video streaming, software downloads, và ngày nay cả dynamic content qua Edge Functions. Nên dùng CDN khi: user phân tán toàn cầu, static assets chiếm traffic lớn, cần DDoS protection, media streaming. Không hiệu quả khi: nội dung cực kỳ dynamic/personalized (không cache được), API responses có private data, nội dung thay đổi liên tục với TTL ngắn. Cache invalidation là thách thức lớn: dùng content hashing (main.abc123.js) để bust cache ngay lập tức khi deploy.",
    a_en: "A CDN (Content Delivery Network) is a globally distributed network of servers (Points of Presence, or PoPs). When a user requests a file, the CDN router finds the geographically or network-closest server. On the first cache miss, the CDN fetches from the origin server and caches the response. Subsequent requests are served from the edge cache — significantly reducing latency (e.g., from 200ms to 20ms) and offloading the origin. CDNs handle: static assets (JS/CSS/images), video streaming, software downloads, and increasingly dynamic content via Edge Functions. Use a CDN when: users are geographically distributed, static assets account for significant traffic, DDoS protection is needed, or for media streaming. CDNs are less effective when: content is highly dynamic or personalized (not cacheable), API responses contain private data, or content changes so frequently that TTLs are very short. Cache invalidation is a key challenge — use content hashing (e.g., main.abc123.js) to bust the cache immediately on deploy.",
  },
  {
    id: 2313,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "CORS là gì? Giải thích chi tiết cơ chế preflight request và cách cấu hình đúng.",
    q_en: "What is CORS? Explain the preflight request mechanism and how to configure it correctly.",
    a: "CORS (Cross-Origin Resource Sharing) là cơ chế browser ngăn JavaScript đọc response từ origin khác (khác domain/port/protocol) — Same-Origin Policy. Khi cần cross-origin, server phải trả về CORS headers. Simple requests (GET/POST với Content-Type text/plain hoặc form) không cần preflight. Preflight request là OPTIONS request tự động browser gửi trước khi gửi non-simple request (PUT/DELETE/custom headers/JSON body) — server phải trả `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, `Access-Control-Allow-Origin`. Cấu hình đúng: `Access-Control-Allow-Origin: https://yourdomain.com` (không nên `*` cho authenticated endpoints), `Access-Control-Allow-Credentials: true` nếu dùng cookies, `Access-Control-Max-Age: 86400` để cache preflight. Lỗi phổ biến: đặt `*` cùng `credentials: true` sẽ bị browser block; CORS chỉ là browser policy, không bảo vệ server-to-server calls.",
    a_en: "CORS (Cross-Origin Resource Sharing) is a browser mechanism that prevents JavaScript from reading responses from a different origin (different domain, port, or protocol) — the Same-Origin Policy. When cross-origin access is needed, the server must return CORS headers. Simple requests (GET/POST with Content-Type of text/plain or a form type) do not require a preflight. A preflight request is an OPTIONS request automatically sent by the browser before non-simple requests (PUT/DELETE/custom headers/JSON body) — the server must respond with `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, and `Access-Control-Allow-Origin`. Correct configuration: `Access-Control-Allow-Origin: https://yourdomain.com` (avoid `*` for authenticated endpoints), `Access-Control-Allow-Credentials: true` if cookies are used, `Access-Control-Max-Age: 86400` to cache the preflight result. Common mistake: using `*` together with `credentials: true` will be blocked by the browser; CORS is a browser-only policy and does not protect server-to-server calls.",
  },
  {
    id: 2314,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "Rate limiting là gì? Các chiến lược rate limiting phổ biến và cách implement?",
    q_en: "What is rate limiting? What are common rate limiting strategies and how do you implement them?",
    a: "Rate limiting giới hạn số request trong khoảng thời gian để bảo vệ server khỏi abuse, DDoS, và đảm bảo fair usage. Các thuật toán: (1) Fixed Window: đếm request trong window cố định (100 req/minute) — đơn giản nhưng có edge case tại boundary; (2) Sliding Window Log: lưu timestamp từng request, đếm trong rolling window — chính xác nhưng tốn memory; (3) Sliding Window Counter: kết hợp hai window giữa — balance giữa độ chính xác và hiệu quả; (4) Token Bucket: bucket chứa tokens, mỗi request tiêu 1 token, token được refill đều — cho phép burst ngắn hạn; (5) Leaky Bucket: queue request và xử lý với tốc độ cố định — smooth output. Implement: Redis INCR + EXPIRE cho distributed rate limiting; response headers `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After` để client biết limit. Rate limit theo IP, user ID, API key, hoặc kết hợp.",
    a_en: "Rate limiting restricts the number of requests within a time window to protect the server from abuse, DDoS attacks, and to ensure fair usage. Common algorithms: (1) Fixed Window: counts requests in a fixed window (100 req/minute) — simple but has an edge case at window boundaries; (2) Sliding Window Log: stores a timestamp for each request and counts within a rolling window — accurate but memory-intensive; (3) Sliding Window Counter: combines two adjacent fixed windows — balances accuracy and efficiency; (4) Token Bucket: a bucket holds tokens, each request consumes one token, tokens refill at a steady rate — allows short bursts; (5) Leaky Bucket: queues requests and processes them at a fixed rate — smooths output. Implementation: use Redis INCR + EXPIRE for distributed rate limiting; include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `Retry-After` response headers so clients know their limits. Rate limit by IP, user ID, API key, or a combination.",
  },
  {
    id: 2315,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "So sánh các phương thức API authentication: OAuth2, JWT và API Key. Khi nào dùng cái nào?",
    q_en: "Compare API authentication methods: OAuth2, JWT, and API Key. When should you use each?",
    a: `So sánh các phương thức API authentication:

- API Key: chuỗi secret gửi trong header (\`X-API-Key\`) hoặc query param — đơn giản, phù hợp server-to-server, machine-to-machine; không có expiry tự động; nếu lộ phải revoke thủ công.
- JWT (JSON Web Token): self-contained token chứa claims (user ID, roles) được ký bằng secret/private key — stateless, không cần query DB mỗi request; có expiry; Access token (15 phút) + Refresh token (7-30 ngày) là pattern chuẩn; nhược điểm: không thể revoke trước expiry trừ khi dùng blocklist.
- OAuth2: authorization framework (không phải authentication) — cho phép third-party app access resource thay mặt user mà không cần share password; các flows: Authorization Code (web app), PKCE (mobile/SPA), Client Credentials (server-to-server), Device Flow (TV/CLI).

Thực tế: Internal API dùng JWT; Public API cho developers dùng API Key; Login với Google/GitHub dùng OAuth2 + OpenID Connect (OIDC) để lấy user identity.`,
    a_en: `Comparing API authentication methods:

- API Key: a secret string sent in a header (\`X-API-Key\`) or query parameter — simple, suitable for server-to-server or machine-to-machine communication; no automatic expiry; must be manually revoked if compromised.
- JWT (JSON Web Token): a self-contained token carrying claims (user ID, roles) signed with a secret or private key — stateless, no DB lookup needed per request; has an expiry; the standard pattern is a short-lived access token (15 minutes) plus a refresh token (7–30 days); downside: cannot be revoked before expiry without a blocklist.
- OAuth2: an authorization framework (not an authentication protocol) — allows third-party apps to access resources on behalf of a user without sharing passwords; flows include Authorization Code (web apps), PKCE (mobile/SPA), Client Credentials (server-to-server), and Device Flow (TV/CLI).

In practice: internal APIs use JWT; public developer APIs use API Keys; login with Google/GitHub uses OAuth2 + OpenID Connect (OIDC) to obtain user identity.`,
  },
  {
    id: 2316,
    category: "Network",
    subcategory: "Web & API",
    level: "intermediate",
    q: "WebSocket scaling gặp những thách thức gì? Cách giải quyết trong hệ thống nhiều server?",
    q_en: "What challenges does WebSocket scaling present? How do you solve them in a multi-server system?",
    a: "WebSocket là persistent connection — mỗi connected client chiếm một file descriptor và memory trên server. Với 10,000 concurrent connections, single server có thể chịu được; nhưng khi scale horizontal lên nhiều server, gặp vấn đề: client A kết nối server 1, client B kết nối server 2, làm sao server 1 biết để gửi message tới client B? Giải pháp: (1) Sticky sessions (IP hash) — load balancer luôn route cùng client về cùng server, nhưng không giúp giao tiếp cross-server; (2) Pub/Sub broker: tất cả server subscribe vào Redis Pub/Sub hoặc Kafka, khi cần broadcast/unicast thì publish vào broker, server nào cũng nhận được; Socket.IO có adapter pattern cho việc này. (3) Dedicated WebSocket service: tách service riêng (Pusher, Ably, AWS API Gateway WebSocket) xử lý connection management. Ngoài ra: WebSocket không qua CDN cache được; cần load balancer hỗ trợ upgrade protocol (Nginx `proxy_http_version 1.1`, `proxy_set_header Upgrade`).",
    a_en: "Each WebSocket is a persistent connection that consumes a file descriptor and memory on the server. A single server can handle around 10,000 concurrent connections, but horizontal scaling introduces a fan-out problem: client A is connected to server 1, client B is on server 2 — how does server 1 know to forward a message to client B? Solutions: (1) Sticky sessions (IP hash) — the load balancer always routes the same client to the same server, but this does not help cross-server messaging; (2) Pub/Sub broker — all servers subscribe to Redis Pub/Sub or Kafka; when a message needs to be broadcast or unicast, it is published to the broker and every server receives it; Socket.IO has an adapter pattern for this. (3) Dedicated WebSocket service — offload connection management to a managed service (Pusher, Ably, AWS API Gateway WebSocket). Additionally: WebSocket connections cannot be cached by a CDN; the load balancer must support protocol upgrades (Nginx `proxy_http_version 1.1` and `proxy_set_header Upgrade`).",
  },

  // ─── Operating System / Process & Thread (2317–2324) ─── beginner/intermediate
  {
    id: 2317,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "beginner",
    q: "Process và Thread khác nhau thế nào? Khi nào nên dùng multi-process vs multi-thread?",
    q_en: "How do processes and threads differ? When should you use multi-process vs multi-thread?",
    a: "Process là đơn vị thực thi độc lập với không gian bộ nhớ riêng (virtual address space, heap, stack, file descriptors). Thread là đơn vị thực thi nhẹ hơn bên trong process: các thread cùng process chia sẻ heap/code/file descriptors nhưng có stack riêng. Tạo process tốn kém hơn thread (fork copy page tables), giao tiếp giữa process phức tạp hơn (IPC), nhưng cô lập tốt hơn — crash một process không ảnh hưởng process khác. Multi-process phù hợp: Chrome (mỗi tab là process riêng để cô lập crash/security), Node.js cluster module để tận dụng CPU cores. Multi-thread phù hợp: ứng dụng cần chia sẻ dữ liệu nhiều và frequent (Java web server, game engine). Với Python, GIL (Global Interpreter Lock) ngăn true parallelism trong threads — phải dùng multiprocessing. Go goroutines là green threads cực nhẹ (~2KB stack), runtime scheduler map M goroutines lên N OS threads.",
    a_en: "A process is an independent unit of execution with its own memory space (virtual address space, heap, stack, file descriptors). A thread is a lighter-weight unit of execution within a process: threads in the same process share the heap, code, and file descriptors but each has its own stack. Creating a process is more expensive than creating a thread (fork copies page tables), and inter-process communication is more complex (IPC), but processes provide better isolation — a crash in one process does not affect others. Multi-process is appropriate for: Chrome (each tab is a separate process for crash/security isolation), Node.js cluster module to leverage multiple CPU cores. Multi-thread is appropriate for: applications with frequent shared data access (Java web servers, game engines). In Python, the GIL (Global Interpreter Lock) prevents true thread parallelism — multiprocessing is required for CPU-bound work. Go goroutines are extremely lightweight green threads (~2KB stack); the Go runtime scheduler maps M goroutines onto N OS threads.",
  },
  {
    id: 2318,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "beginner",
    q: "Context switching là gì? Chi phí của nó ảnh hưởng thế nào đến performance?",
    q_en: "What is context switching? How does its cost impact performance?",
    a: "Context switching là quá trình OS lưu trạng thái CPU (registers, program counter, stack pointer) của process/thread hiện tại vào PCB (Process Control Block), rồi nạp trạng thái của process/thread kế tiếp để chạy. Chi phí bao gồm: (1) Thời gian lưu/nạp CPU state (~microseconds); (2) Cache invalidation — khi switch process, CPU cache (L1/L2) bị flush, process mới phải warm up cache lại từ đầu (cold start); (3) TLB flush khi switch process (vì địa chỉ ảo khác nhau). Thread switching trong cùng process nhẹ hơn vì không flush TLB. Ảnh hưởng thực tế: hệ thống với quá nhiều thread (C10K problem) tốn nhiều thời gian context switching hơn là làm việc thực. Đó là lý do Node.js single-threaded event loop và Go goroutines thắng trong high-concurrency — ít context switch hơn 1000 OS threads. Lập trình viên nên tránh: vòng lặp tight với `sleep(1ms)`, quá nhiều thread chờ I/O — dùng async/await thay thế.",
    a_en: "Context switching is the process by which the OS saves the current CPU state (registers, program counter, stack pointer) of a process or thread into its PCB (Process Control Block), then loads the state of the next process or thread to run. The costs include: (1) time to save and restore CPU state (~microseconds); (2) cache invalidation — when switching between processes, the CPU cache (L1/L2) is flushed and the new process must warm it up from scratch; (3) TLB flush on process switches (because virtual address spaces differ). Thread switching within the same process is cheaper because the TLB is not flushed. Real-world impact: a system with too many threads (the C10K problem) spends more time context switching than doing actual work. This is why Node.js's single-threaded event loop and Go goroutines outperform 1,000 OS threads in high-concurrency scenarios — far fewer context switches. Developers should avoid tight loops with `sleep(1ms)` and excessive I/O-blocking threads — use async/await instead.",
  },
  {
    id: 2319,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "beginner",
    q: "Các thuật toán process scheduling phổ biến là gì? (FCFS, Round Robin, SJF)",
    q_en: "What are the common process scheduling algorithms? (FCFS, Round Robin, SJF)",
    a: "FCFS (First-Come First-Served): process đến trước chạy trước — đơn giản nhưng convoy effect: một process dài block tất cả process ngắn phía sau, average waiting time cao. Round Robin (RR): mỗi process chạy một time quantum (10-100ms) rồi preempt, cho process tiếp theo — fair, responsive, phù hợp time-sharing systems; quantum quá nhỏ tốn context switch, quá lớn thành FCFS. SJF (Shortest Job First): chạy process có burst time ngắn nhất trước — tối ưu average waiting time nhưng starvation cho process dài, và không biết trước burst time trong thực tế. Priority Scheduling: mỗi process có độ ưu tiên, process ưu tiên cao chạy trước — có thể bị starvation (giải quyết bằng aging: tăng priority theo thời gian chờ). Multilevel Feedback Queue (Linux CFS): kết hợp nhiều queue với priority khác nhau, tự động điều chỉnh — đây là algorithm Linux kernel dùng, fair nhưng ưu tiên interactive process hơn batch.",
    a_en: "FCFS (First-Come First-Served): processes run in arrival order — simple but suffers from the convoy effect: one long process blocks all shorter processes behind it, resulting in high average waiting time. Round Robin (RR): each process runs for a time quantum (10–100ms) before being preempted and giving way to the next — fair, responsive, suitable for time-sharing systems; a quantum that is too small wastes time on context switches, while too large degrades into FCFS. SJF (Shortest Job First): runs the process with the shortest burst time first — minimizes average waiting time but causes starvation for long processes, and burst time is generally unknown in advance. Priority Scheduling: each process has a priority and higher-priority processes run first — can lead to starvation (mitigated by aging: gradually increasing the priority of waiting processes). Multilevel Feedback Queue (Linux CFS): combines multiple queues with different priorities and adjusts dynamically — this is the algorithm used by the Linux kernel, fair while favoring interactive processes over batch workloads.",
  },
  {
    id: 2320,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "intermediate",
    q: "Inter-Process Communication (IPC) là gì? Các cơ chế IPC phổ biến?",
    q_en: "What is Inter-Process Communication (IPC)? What are the common IPC mechanisms?",
    a: `IPC là các cơ chế để các process độc lập trao đổi dữ liệu, vì chúng không chia sẻ bộ nhớ trực tiếp.

- Pipe (anonymous pipe): luồng dữ liệu một chiều giữa parent-child process.
- Named pipe (FIFO): pipe có tên trong filesystem, không cần parent-child relationship.
- Shared Memory: vùng nhớ được map vào address space của nhiều process — nhanh nhất vì không copy data, nhưng cần đồng bộ (mutex/semaphore).
- Message Queue: process gửi/nhận messages qua kernel queue (POSIX mqueue, System V) — asynchronous, có thể buffer.
- Socket: Unix domain socket (local) hoặc TCP/UDP socket (network) — linh hoạt nhất, dùng cả local và remote; microservices giao tiếp qua HTTP/gRPC là IPC qua socket.
- Signal: notification đơn giản (SIGTERM, SIGKILL, SIGUSR1) — limited data.
- Memory-mapped file (mmap): file được map vào memory, nhiều process cùng đọc/ghi — Node.js dùng cho large file processing.

Thực tế: Nginx worker processes giao tiếp với master qua pipe và shared memory.`,
    a_en: `IPC refers to the mechanisms that allow independent processes to exchange data, since they do not share memory directly.

- Pipe (anonymous pipe): a one-way data stream between a parent and child process.
- Named pipe (FIFO): a pipe with a filesystem name that does not require a parent-child relationship.
- Shared Memory: a memory region mapped into the address space of multiple processes — the fastest mechanism since no data is copied, but requires synchronization (mutex/semaphore).
- Message Queue: processes send and receive messages through a kernel-managed queue (POSIX mqueue, System V) — asynchronous and buffered.
- Socket: Unix domain socket (local IPC) or TCP/UDP socket (network) — the most flexible, supporting both local and remote communication; microservices communicating via HTTP/gRPC are using socket-based IPC.
- Signal: a simple notification mechanism (SIGTERM, SIGKILL, SIGUSR1) — carries no data payload.
- Memory-mapped file (mmap): a file mapped into memory, allowing multiple processes to read and write it concurrently — used in Node.js for large file processing.

In practice, Nginx worker processes communicate with the master process via pipes and shared memory.`,
  },
  {
    id: 2321,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "intermediate",
    q: "Deadlock là gì? 4 điều kiện cần thiết và các cách phòng tránh?",
    q_en: "What is a deadlock? What are the 4 necessary conditions and how do you prevent it?",
    a: "Deadlock xảy ra khi nhiều process chờ nhau giải phóng resource mà không process nào có thể tiếp tục. Coffman (1971) xác định 4 điều kiện cần thiết đồng thời: (1) Mutual Exclusion: resource chỉ 1 process dùng tại một thời điểm; (2) Hold and Wait: process giữ ít nhất 1 resource và chờ thêm resource khác; (3) No Preemption: resource không thể bị lấy bắt buộc; (4) Circular Wait: tồn tại chuỗi vòng P1→P2→...→Pn→P1 chờ nhau. Phòng tránh bằng cách phá vỡ một điều kiện: Lock Ordering (phá Circular Wait): luôn acquire lock theo thứ tự cố định — ví dụ database luôn lock bảng A trước bảng B. Trylock với timeout (phá Hold and Wait): nếu không lấy được lock sau timeout thì release tất cả và retry. Banker's Algorithm: OS kiểm tra trước khi cấp resource. Thực tế: Java synchronized blocks, Go channel patterns, và database transaction isolation level đều phải xử lý deadlock — PostgreSQL phát hiện deadlock và rollback một transaction.",
    a_en: "A deadlock occurs when multiple processes are each waiting for another to release a resource, so none can proceed. Coffman (1971) identified 4 conditions that must all hold simultaneously: (1) Mutual Exclusion: a resource can be held by only one process at a time; (2) Hold and Wait: a process holds at least one resource while waiting to acquire additional resources; (3) No Preemption: resources cannot be forcibly taken from a process; (4) Circular Wait: a circular chain P1→P2→...→Pn→P1 exists where each process waits for a resource held by the next. Prevention involves breaking one condition: Lock Ordering (breaks Circular Wait) — always acquire locks in a fixed global order, e.g., a database always locks table A before table B. Trylock with timeout (breaks Hold and Wait) — if a lock cannot be acquired within the timeout, release all held locks and retry. Banker's Algorithm — the OS checks resource availability before granting a request. In practice, Java synchronized blocks, Go channel patterns, and database transaction isolation levels all must handle deadlocks — PostgreSQL detects deadlocks and rolls back one of the transactions.",
  },
  {
    id: 2322,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "intermediate",
    q: "Mutex và Semaphore khác nhau thế nào? Khi nào dùng cái nào?",
    q_en: "How do Mutex and Semaphore differ? When should you use each?",
    a: "Mutex (Mutual Exclusion Lock) là binary lock: chỉ có 2 trạng thái locked/unlocked, và quan trọng là chỉ thread nào lock thì mới được unlock (ownership semantics). Dùng để bảo vệ critical section — chỉ 1 thread access vào một lúc. Semaphore là counter: counting semaphore cho phép N thread cùng access (semaphore=N); binary semaphore (N=1) tương tự mutex nhưng không có ownership — thread A có thể signal semaphore mà thread B đã wait. Dùng mutex khi: bảo vệ shared data (HashMap, linked list) — một thread đọc/ghi tại một thời điểm. Dùng semaphore khi: giới hạn concurrent access (connection pool tối đa 10 connections), producer-consumer synchronization (producer signal khi có item mới). Deadlock risk: mutex thường dùng recursive mutex để tránh self-deadlock. Go dùng `sync.Mutex` và `sync.RWMutex` (nhiều reader, 1 writer); channel thường là cách idiomatic hơn để synchronize trong Go.",
    a_en: "A Mutex (Mutual Exclusion Lock) is a binary lock with two states: locked and unlocked. Critically, only the thread that locked it can unlock it (ownership semantics). It is used to protect a critical section, ensuring only one thread accesses it at a time. A Semaphore is a counter: a counting semaphore allows up to N threads concurrent access (initialized to N); a binary semaphore (N=1) is similar to a mutex but lacks ownership — thread A can signal a semaphore that thread B is waiting on. Use a mutex when protecting shared data (e.g., a HashMap or linked list) — one thread reads or writes at a time. Use a semaphore when limiting concurrent access (e.g., a connection pool capped at 10 connections) or for producer-consumer synchronization (producer signals when a new item is available). Deadlock risk: recursive mutexes are often used to prevent self-deadlock. Go provides `sync.Mutex` and `sync.RWMutex` (multiple concurrent readers, one writer); channels are generally the more idiomatic way to synchronize in Go.",
  },
  {
    id: 2323,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "beginner",
    q: "Concurrency và Parallelism khác nhau thế nào?",
    q_en: "How do Concurrency and Parallelism differ?",
    a: "Concurrency là khả năng xử lý nhiều task đồng thời về mặt logic — các task có thể interleave nhau (chạy một ít rồi nhường, rồi lại chạy) nhưng không nhất thiết cùng lúc trên nhiều CPU. Parallelism là thực sự chạy nhiều task cùng một lúc trên nhiều CPU core. Rob Pike (Go): 'Concurrency là về cấu trúc, Parallelism là về thực thi.' \n\n**Ví dụ:** Node.js event loop là concurrent nhưng không parallel (single-threaded) — handle 10,000 I/O operations concurrently nhờ non-blocking I/O, nhưng chỉ 1 lúc chạy 1 JavaScript callback. Go runtime chạy goroutines concurrently VÀ parallel: GOMAXPROCS goroutines có thể thực sự chạy song song trên nhiều OS thread. Thực tế lập trình: concurrency giải quyết throughput (nhiều I/O operations); parallelism giải quyết CPU-bound tasks (image processing, ML inference). Async/await trong JavaScript/Python là concurrency pattern, không phải parallelism.",
    a_en: 'Concurrency is the ability to handle multiple tasks logically at the same time — tasks may interleave (run a bit, yield, then resume) but do not necessarily execute simultaneously on multiple CPUs. Parallelism means actually executing multiple tasks at the same instant on multiple CPU cores. Rob Pike (Go): "Concurrency is about structure, parallelism is about execution." \n\n**Example:** the Node.js event loop is concurrent but not parallel (single-threaded) — it handles 10,000 I/O operations concurrently via non-blocking I/O, but only one JavaScript callback runs at a time. The Go runtime runs goroutines both concurrently AND in parallel: up to GOMAXPROCS goroutines can truly run simultaneously across multiple OS threads. In practice: concurrency addresses throughput (many I/O operations); parallelism addresses CPU-bound tasks (image processing, ML inference). Async/await in JavaScript and Python is a concurrency pattern, not parallelism.',
  },
  {
    id: 2324,
    category: "Operating System",
    subcategory: "Process & Thread",
    level: "intermediate",
    q: "Thread pool là gì? Tại sao cần thread pool và cách sizing đúng cách?",
    q_en: "What is a thread pool? Why is it needed and how do you size it correctly?",
    a: "Thread pool là tập hợp các worker threads được tạo sẵn và tái sử dụng, thay vì tạo/hủy thread mới cho mỗi task — vì tạo thread tốn ~1MB stack, time để OS allocate, và context switch overhead. Hoạt động: task queue nhận công việc, worker thread nhàn rỗi lấy task từ queue, thực thi, rồi chờ task tiếp theo. ThreadPoolExecutor (Java), `worker_threads` pool (Node.js), Goroutine worker pattern (Go). Sizing là bài toán quan trọng: với CPU-bound tasks, pool size = số CPU cores (thêm thread không giúp, chỉ tốn context switch); với I/O-bound tasks, pool size lớn hơn số CPU (vì thread chờ I/O không chiếm CPU) — formula tham khảo: `threads = cores * (1 + wait_time/service_time)`. Pool quá nhỏ: task queue dài, high latency. Pool quá lớn: memory tốn kém, nhiều context switch, performance giảm. Java Tomcat default pool size 200; Node.js libuv I/O thread pool default 4 (UV_THREADPOOL_SIZE).",
    a_en: "A thread pool is a set of pre-created worker threads that are reused, rather than spawning and destroying a new thread for every task — because thread creation costs ~1MB of stack space, OS allocation time, and context-switch overhead. \n\n**How it works:** a task queue receives incoming work, an idle worker thread picks up a task, executes it, then waits for the next one. Examples: ThreadPoolExecutor (Java), `worker_threads` pool (Node.js), goroutine worker pattern (Go). Sizing is critical: for CPU-bound tasks, pool size = number of CPU cores (adding more threads only increases context switching with no gain); for I/O-bound tasks, the pool can be larger than the core count (since threads waiting on I/O do not consume CPU) — a reference formula is `threads = cores * (1 + wait_time / service_time)`. Too small a pool: long task queues and high latency. Too large a pool: wasted memory, excessive context switching, and degraded performance. Java Tomcat defaults to a pool size of 200; Node.js libuv's I/O thread pool defaults to 4 (configurable via UV_THREADPOOL_SIZE).",
  },

  // ─── Operating System / Memory & Storage (2325–2335) ─── intermediate/advanced
  {
    id: 2325,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "intermediate",
    q: "Virtual memory là gì? Tại sao cần virtual memory?",
    q_en: "What is virtual memory? Why is it needed?",
    a: "Virtual memory là abstraction layer giữa process và RAM vật lý: mỗi process có không gian địa chỉ ảo riêng (64-bit: 128TB), OS + MMU (Memory Management Unit) dịch virtual address sang physical address qua page table. \n\n**Lợi ích:** (1) Isolation: process A không thể đọc bộ nhớ process B dù cùng máy; (2) Overcommit: tổng virtual memory của tất cả process có thể vượt RAM thực (OS swap ít-dùng pages ra disk); (3) Shared libraries: nhiều process share cùng physical pages của libc nhưng map vào virtual address space riêng; (4) Memory-mapped files (mmap): file map vào virtual memory, OS lazily load pages khi access; (5) Copy-on-Write (CoW) khi fork: parent và child share physical pages cho đến khi một bên write. \n\n**Nhược điểm:** page table overhead (~8MB per process với 4-level paging); TLB miss latency. Thực tế: `docker stats` show virtual memory rất lớn nhưng RSS (Resident Set Size) là RAM thực dùng; OOM Killer kill process dùng nhiều RAM nhất khi system hết memory.",
    a_en: "Virtual memory is an abstraction layer between a process and physical RAM: each process has its own virtual address space (128TB on 64-bit systems), and the OS + MMU (Memory Management Unit) translates virtual addresses to physical addresses via page tables. \n\n**Benefits:** (1) Isolation — process A cannot read process B's memory even on the same machine; (2) Overcommit — the combined virtual memory of all processes can exceed physical RAM, with the OS swapping less-used pages to disk; (3) Shared libraries — multiple processes share the same physical pages of libc while each maps them into its own virtual address space; (4) Memory-mapped files (mmap) — files are mapped into virtual memory and the OS lazily loads pages on access; (5) Copy-on-Write (CoW) on fork — parent and child share physical pages until one of them writes. Drawbacks: page table overhead (~8MB per process with 4-level paging) and TLB miss latency. In practice: `docker stats` shows very large virtual memory, but RSS (Resident Set Size) reflects actual RAM usage; the OOM Killer terminates the process consuming the most memory when the system runs out.",
  },
  {
    id: 2326,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "intermediate",
    q: "Paging và Segmentation khác nhau thế nào? x86-64 dùng cơ chế nào?",
    q_en: "How do Paging and Segmentation differ? Which mechanism does x86-64 use?",
    a: "Paging chia physical memory thành các frame kích thước cố định (4KB, 2MB, 1GB huge pages), và virtual memory thành pages cùng kích thước — OS map pages lên frames qua page table. Fragmentation chỉ là internal (page cuối có thể dư), không có external fragmentation. Segmentation chia memory thành các segment logic kích thước khác nhau (code, data, stack, heap) — phản ánh structure của program; có external fragmentation vì segment size biến động. x86-64 trên thực tế dùng paging là primary mechanism: 4-level page table (PML4→PDPT→PD→PT) với page size 4KB mặc định; segmentation vẫn tồn tại nhưng flat segmentation (base=0, limit=max) — essentially disabled. Linux dùng huge pages (2MB/1GB) để giảm TLB pressure cho database workloads: PostgreSQL và Redis benefit từ transparent huge pages. Thực tế lập trình: stack overflow = page fault khi access stack guard page; segfault = access unmapped virtual address.",
    a_en: "Paging divides physical memory into fixed-size frames (4KB, 2MB, 1GB huge pages) and virtual memory into pages of the same size — the OS maps pages to frames via page tables. Fragmentation is only internal (the last page of an allocation may be partially unused); there is no external fragmentation. Segmentation divides memory into variable-size logical segments (code, data, stack, heap) that reflect program structure; it suffers from external fragmentation because segment sizes vary. In practice, x86-64 uses paging as the primary mechanism: a 4-level page table (PML4→PDPT→PD→PT) with a default page size of 4KB; segmentation still exists but uses flat segmentation (base=0, limit=max) — effectively disabled. Linux uses huge pages (2MB/1GB) to reduce TLB pressure for database workloads: PostgreSQL and Redis benefit from transparent huge pages. Practical implications: a stack overflow is a page fault on the stack guard page; a segfault is an access to an unmapped virtual address.",
  },
  {
    id: 2327,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "intermediate",
    q: "Các thuật toán page replacement là gì? OPT, LRU, Clock/CLOCK-Pro.",
    q_en: "What are page replacement algorithms? OPT, LRU, Clock/CLOCK-Pro.",
    a: "Khi RAM đầy và cần load page mới, OS phải chọn page nào để evict (swap ra disk). OPT (Optimal): evict page sẽ được dùng xa nhất trong tương lai — tối ưu nhưng không thể implement thực tế (không biết tương lai); dùng làm baseline đo các thuật toán khác. LRU (Least Recently Used): evict page không dùng lâu nhất — gần với OPT nhưng tốn kém để implement chính xác (cần timestamp mọi access); approximate bằng reference bit. CLOCK (Second Chance): circular buffer pages với reference bit; khi cần evict, duyệt theo vòng: nếu ref=1 thì set ref=0 và bỏ qua, nếu ref=0 thì evict — O(1) và gần với LRU. Linux dùng variant của CLOCK với active/inactive list. CLOCK-Pro cải tiến thêm để xử lý one-time access scans (file read lớn không nên pollute cache). Thực tế: database buffer pools (PostgreSQL shared_buffers) implement LRU riêng vì biết access pattern tốt hơn OS.",
    a_en: "When RAM is full and a new page must be loaded, the OS must choose which page to evict (swap to disk). OPT (Optimal): evicts the page that will not be used for the longest time in the future — theoretically optimal but not implementable in practice (the future is unknown); used as a baseline to benchmark other algorithms. LRU (Least Recently Used): evicts the page that has not been accessed for the longest time — approximates OPT but is expensive to implement precisely (requires timestamping every access); approximated using a reference bit. CLOCK (Second Chance): arranges pages in a circular buffer with a reference bit; when eviction is needed, sweep clockwise: if ref=1 clear it and skip, if ref=0 evict — O(1) and close to LRU. Linux uses a CLOCK variant with active and inactive lists. CLOCK-Pro further improves on CLOCK to handle one-time scan access patterns (large file reads should not pollute the cache). In practice, database buffer pools (e.g., PostgreSQL shared_buffers) implement their own LRU because they have better insight into access patterns than the OS.",
  },
  {
    id: 2328,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "intermediate",
    q: "Memory leak là gì? Cách phát hiện và phòng tránh trong Node.js/Go?",
    q_en: "What is a memory leak? How do you detect and prevent it in Node.js/Go?",
    a: `Memory leak xảy ra khi program allocate memory nhưng không release, dần dần RSS tăng cho đến khi OOM.

Nguyên nhân phổ biến:
- global/module-level variables tích lũy data.
- event listeners không được removeListener.
- closures capture large objects.
- circular references (trong ngôn ngữ reference-counted).
- unbounded cache/map.
- timer setInterval không clearInterval.

Trong Node.js: dùng \`node --inspect\` + Chrome DevTools Memory tab để heap snapshot và so sánh; \`clinic.js heapprofiler\` cho production; \`process.memoryUsage().heapUsed\` monitor; \`WeakMap\`/\`WeakRef\` cho cache để GC tự thu dọn khi key không còn reference.

Trong Go: goroutine leak (goroutine blocked trên channel mãi mãi, không bao giờ exit) là phổ biến hơn memory leak; dùng \`pprof\` heap/goroutine profiler; \`runtime.ReadMemStats\` để monitor.

Best practice: giới hạn size của in-memory cache; dùng context cancellation để goroutines tự cleanup; integration test monitor memory growth theo thời gian.`,
    a_en: `A memory leak occurs when a program allocates memory but never releases it, causing RSS to grow steadily until an OOM kill.

Common causes:
- Global or module-level variables accumulating data.
- Event listeners that are never removed.
- Closures capturing large objects.
- Circular references in reference-counted languages.
- Unbounded caches or maps.
- \`setInterval\` timers that are never cleared.

In Node.js: use \`node --inspect\` + the Chrome DevTools Memory tab to take and compare heap snapshots; \`clinic.js heapprofiler\` for production profiling; monitor \`process.memoryUsage().heapUsed\`; use \`WeakMap\`/\`WeakRef\` for caches so the GC can collect entries when keys are no longer referenced.

In Go: goroutine leaks (a goroutine blocked on a channel forever, never exiting) are more common than memory leaks; use \`pprof\` for heap and goroutine profiling; use \`runtime.ReadMemStats\` for monitoring.

Best practices: cap the size of in-memory caches; use context cancellation so goroutines clean up on shutdown; write integration tests that monitor memory growth over time.`,
  },
  {
    id: 2329,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "advanced",
    q: "Garbage Collection hoạt động thế nào? So sánh GC trong JVM, Go và V8.",
    q_en: "How does Garbage Collection work? Compare GC in JVM, Go, and V8.",
    a: "GC tự động reclaim memory không còn được reference. Thuật toán cơ bản: Mark-and-Sweep (mark reachable objects từ roots, sweep unmarked); Reference Counting (Python: mỗi object đếm số references, về 0 thì free — không xử lý được circular references nên có cyclic GC bổ sung). JVM (G1GC/ZGC): generational GC (young gen/old gen/metaspace) vì hầu hết objects chết sớm; minor GC thường xuyên cho young gen; major/full GC cho old gen — là nguồn Stop-The-World pause. ZGC (Java 15+) và Shenandoah: concurrent GC với pause < 1ms dù heap hàng trăm GB. Go GC: non-generational, concurrent tri-color mark-and-sweep; GOGC=100 trigger GC khi heap tăng gấp đôi; target < 1ms STW; Go 1.18+ có memory arena (soft). V8 (Node.js): generational, Orinoco concurrent GC; young gen dùng Scavenge (semi-space copy); old gen dùng Mark-Compact. Thực tế: GC pressure là vấn đề performance — giảm bằng cách tái sử dụng objects (Go sync.Pool), giảm allocation trong hot path, tune heap size.",
    a_en: "GC automatically reclaims memory that is no longer referenced. Core algorithms: Mark-and-Sweep (marks all objects reachable from roots, then sweeps and frees unmarked ones); Reference Counting (used in Python — each object tracks its reference count and is freed when it reaches zero; cannot handle circular references without a supplemental cyclic GC). JVM (G1GC/ZGC): generational GC (young gen/old gen/metaspace) because most objects die young; minor GC runs frequently on the young generation; major/full GC targets the old generation and is a source of Stop-The-World pauses. ZGC (Java 15+) and Shenandoah achieve concurrent GC with pauses under 1ms even on hundred-gigabyte heaps. Go GC: non-generational, concurrent tri-color mark-and-sweep; GOGC=100 triggers a GC cycle when the heap doubles in size; targets STW pauses under 1ms; Go 1.18+ introduced soft memory arenas. V8 (Node.js): generational with the Orinoco concurrent GC; the young generation uses Scavenge (semi-space copying); the old generation uses Mark-Compact. In practice, GC pressure is a performance concern — reduce it by reusing objects (Go sync.Pool), minimizing allocations in hot paths, and tuning heap size.",
  },
  {
    id: 2330,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "intermediate",
    q: "File system hoạt động thế nào? So sánh ext4, NTFS và APFS.",
    q_en: "How does a file system work? Compare ext4, NTFS, and APFS.",
    a: "File system quản lý cách data được lưu trên storage: cấu trúc directory tree, metadata (inode: permissions/timestamps/size/data block pointers), free space management, journaling để tránh corruption khi crash. ext4 (Linux): journaling filesystem, extents thay vì block maps, delayed allocation, dir_index (HTree), max file 16TB, max volume 1EB — workhorse của Linux servers, stable và battle-tested. NTFS (Windows): journaling, Master File Table (MFT), support NTFS permissions/ACL, Alternate Data Streams, compression/encryption built-in, max 16EB — nhưng Linux support read/write NTFS qua ntfs-3g/ntfs3. APFS (Apple): Copy-on-Write (không corrupt khi crash), native encryption, snapshots (Time Machine), clones (copy-on-write files — cp instant), space sharing giữa volumes trong container — optimized cho SSD/Flash. Thực tế DevOps: Docker image layers dùng overlay2 filesystem; ZFS (FreeBSD/Linux) thêm checksums và RAID tích hợp cho NAS; volume mount giữa host và container cần match permissions.",
    a_en: "A file system manages how data is stored on a storage device: it maintains a directory tree, metadata (inodes: permissions, timestamps, size, data block pointers), free space management, and journaling to prevent corruption on crash. ext4 (Linux): a journaling file system using extents instead of block maps, delayed allocation, dir_index (HTree), max file size 16TB, max volume 1EB — the workhorse of Linux servers, stable and battle-tested. NTFS (Windows): journaling, Master File Table (MFT), NTFS permissions/ACLs, Alternate Data Streams, built-in compression and encryption, max 16EB — Linux can read and write NTFS via ntfs-3g/ntfs3. APFS (Apple): Copy-on-Write (no corruption on crash), native encryption, snapshots (Time Machine), instant file clones (copy-on-write — `cp` is instant), and volume space sharing within a container — optimized for SSDs and Flash storage. DevOps context: Docker image layers use the overlay2 file system; ZFS (FreeBSD/Linux) adds checksums and integrated RAID for NAS; volume mounts between host and container require matching permissions.",
  },
  {
    id: 2331,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "advanced",
    q: "Các I/O models là gì? So sánh blocking, non-blocking, I/O multiplexing và async I/O.",
    q_en: "What are the I/O models? Compare blocking, non-blocking, I/O multiplexing, and async I/O.",
    a: "Blocking I/O: syscall (read/write) block thread cho đến khi data sẵn sàng — đơn giản nhưng thread không làm gì được trong lúc chờ. Non-blocking I/O: syscall trả về EAGAIN ngay nếu chưa có data — application phải poll liên tục (busy waiting, tốn CPU). I/O Multiplexing (select/poll/epoll): một thread monitor nhiều file descriptors, block trên select/epoll_wait cho đến khi ít nhất 1 fd ready — đây là nền tảng của event loop (Node.js, Nginx). Async I/O (AIO/io_uring): initiate I/O và tiếp tục làm việc khác, được notify qua callback/completion queue khi xong — truly async, không block. io_uring (Linux 5.1+) là next-gen: zero-copy, batching syscalls, giảm context switch đáng kể; Node.js 18+ và io_uring đang integrate. Signal-driven I/O (SIGIO): kernel gửi signal khi fd ready — khó dùng, hiếm gặp. Thực tế: Node.js libuv dùng epoll (Linux)/kqueue (macOS)/IOCP (Windows) cho I/O multiplexing; Java NIO/Netty cũng dùng epoll; Go runtime có custom network poller trên epoll/kqueue.",
    a_en: "Blocking I/O: a syscall (read/write) blocks the thread until data is available — simple, but the thread cannot do anything else while waiting. Non-blocking I/O: the syscall returns EAGAIN immediately if data is not yet available — the application must poll continuously (busy waiting, which wastes CPU). I/O Multiplexing (select/poll/epoll): a single thread monitors multiple file descriptors and blocks on select/epoll_wait until at least one fd is ready — this is the foundation of event loops (Node.js, Nginx). Async I/O (AIO/io_uring): the application initiates I/O and continues other work, receiving a notification via callback or completion queue when the operation finishes — truly asynchronous, never blocks. io_uring (Linux 5.1+) is the next generation: zero-copy, syscall batching, dramatically reduced context switches; Node.js 18+ is integrating io_uring. Signal-driven I/O (SIGIO): the kernel sends a signal when an fd is ready — difficult to use and rarely seen in practice. In practice: Node.js libuv uses epoll (Linux)/kqueue (macOS)/IOCP (Windows) for I/O multiplexing; Java NIO/Netty also leverage epoll; the Go runtime has a custom network poller built on epoll/kqueue.",
  },
  {
    id: 2332,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "advanced",
    q: "epoll và kqueue là gì? Tại sao chúng superior so với select/poll?",
    q_en: "What are epoll and kqueue? Why are they superior to select/poll?",
    a: "select/poll scan toàn bộ list file descriptors mỗi lần gọi — O(n) với n là số FDs monitored; limit của select là 1024 FDs (FD_SETSIZE); không scale được với C10K connections. epoll (Linux 2.6+): edge-triggered hoặc level-triggered, kernel duy trì interest list (epoll_ctl ADD/MOD/DEL) và ready list — epoll_wait chỉ trả về FDs đã ready, O(1) theo số events (không phải số FDs); support đến hàng triệu connections. kqueue (BSD/macOS): tương tự epoll nhưng API tổng quát hơn — không chỉ FD mà còn monitor signals, timers, vnodes (file changes), processes; dùng kevent struct. IOCP (Windows): completion-based (không phải readiness-based) — post I/O operation và nhận notification khi complete, phù hợp Proactor pattern. Thực tế: Redis single thread handle 100K+ connections nhờ epoll; libuv abstract cross-platform: epoll trên Linux, kqueue trên macOS, IOCP trên Windows; Nginx worker process có thể handle hàng chục nghìn connections per core nhờ epoll.",
    a_en: "select/poll scan the entire list of file descriptors on every call — O(n) where n is the number of monitored FDs; select is limited to 1,024 FDs (FD_SETSIZE) and neither scales to C10K connections. epoll (Linux 2.6+): supports edge-triggered and level-triggered modes; the kernel maintains an interest list (epoll_ctl ADD/MOD/DEL) and a ready list — epoll_wait only returns FDs that are ready, O(1) relative to the number of events (not the total number of FDs); scales to millions of connections. kqueue (BSD/macOS): similar to epoll but with a more general API — monitors not just FDs but also signals, timers, vnodes (file system changes), and processes, all via the kevent struct. IOCP (Windows): completion-based rather than readiness-based — you post an I/O operation and receive a notification when it completes; suited to the Proactor pattern. In practice: Redis handles 100K+ connections on a single thread thanks to epoll; libuv abstracts the platform differences: epoll on Linux, kqueue on macOS, IOCP on Windows; an Nginx worker process can handle tens of thousands of connections per core using epoll.",
  },
  {
    id: 2333,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "intermediate",
    q: "Linux signals là gì? Các signal quan trọng và cách handle graceful shutdown?",
    q_en: "What are Linux signals? What are the important signals and how do you implement graceful shutdown?",
    a: "Signal là cơ chế notification asynchronous mà OS hoặc process khác gửi đến process: SIGTERM (15, terminate request — default cho `kill PID`), SIGKILL (9, force kill — không thể catch/ignore), SIGINT (2, Ctrl+C), SIGHUP (1, terminal closed/reload config), SIGUSR1/SIGUSR2 (user-defined, Node.js dùng SIGUSR1 để enable debugger), SIGCHLD (child process terminated), SIGPIPE (write to broken pipe). Graceful shutdown là critical trong production: khi nhận SIGTERM, server stop accepting new connections, drain in-flight requests, close DB connections, flush logs — rồi mới exit. Node.js graceful shutdown: `process.on('SIGTERM', async () => { await server.close(); await db.disconnect(); process.exit(0); })`. Kubernetes gửi SIGTERM trước khi terminationGracePeriodSeconds (default 30s), sau đó gửi SIGKILL — phải handle SIGTERM để zero-downtime deploy. Go: `signal.NotifyContext(ctx, syscall.SIGTERM)` để propagate cancellation đến tất cả goroutines khi nhận signal.",
    a_en: "A signal is an asynchronous notification mechanism that the OS or another process sends to a process. Key signals: SIGTERM (15, termination request — the default signal sent by `kill PID`), SIGKILL (9, force kill — cannot be caught or ignored), SIGINT (2, Ctrl+C), SIGHUP (1, terminal closed / reload config), SIGUSR1/SIGUSR2 (user-defined; Node.js uses SIGUSR1 to enable the debugger), SIGCHLD (child process terminated), SIGPIPE (write to a broken pipe). Graceful shutdown is critical in production: upon receiving SIGTERM, the server stops accepting new connections, drains in-flight requests, closes DB connections, and flushes logs before exiting. Node.js graceful shutdown: `process.on('SIGTERM', async () => { await server.close(); await db.disconnect(); process.exit(0); })`. Kubernetes sends SIGTERM before the `terminationGracePeriodSeconds` window (default 30s) and then sends SIGKILL — handling SIGTERM properly is required for zero-downtime deployments. In Go: `signal.NotifyContext(ctx, syscall.SIGTERM)` propagates cancellation to all goroutines when the signal is received.",
  },
  {
    id: 2334,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "advanced",
    q: "Container khác gì so với VM? Cách container hoạt động ở cấp OS?",
    q_en: "How do containers differ from VMs? How do containers work at the OS level?",
    a: "VM (Virtual Machine) dùng hypervisor (VMware, KVM, VirtualBox) virtualize toàn bộ hardware, mỗi VM có OS kernel riêng — strong isolation, có thể chạy Windows trên Linux host; overhead: mỗi VM tốn hàng GB RAM cho OS, boot time hàng phút. Container share kernel của host OS, chỉ isolate userspace — nhỏ hơn (MB thay vì GB), start trong milliseconds, dense packing (hàng trăm containers/host). Container không phải magic: đó chỉ là Linux process với namespace isolation và cgroup resource limits. Docker thực ra tạo: (1) Namespaces: PID namespace (container có PID 1 riêng), Network namespace (interface riêng), Mount namespace (filesystem riêng), UTS (hostname riêng), IPC, User namespace; (2) cgroups giới hạn CPU/memory/disk I/O/network; (3) Union filesystem (overlay2) cho image layers. `docker run` thực sự gọi `clone(CLONE_NEWPID | CLONE_NEWNET | ...)`. Bảo mật: container escape là lỗ hổng khai thác syscall để thoát namespace; privileged container nguy hiểm vì bỏ qua nhiều restriction.",
    a_en: "A VM (Virtual Machine) uses a hypervisor (VMware, KVM, VirtualBox) to virtualize the full hardware stack; each VM runs its own OS kernel — providing strong isolation and the ability to run Windows on a Linux host; overhead: each VM consumes gigabytes of RAM for its OS and takes minutes to boot. Containers share the host OS kernel and only isolate the userspace — much smaller (megabytes instead of gigabytes), start in milliseconds, and allow dense packing (hundreds of containers per host). Containers are not magic: they are simply Linux processes with namespace isolation and cgroup resource limits. When Docker creates a container it sets up: (1) Namespaces — PID namespace (the container has its own PID 1), Network namespace (its own network interface), Mount namespace (its own filesystem view), UTS (its own hostname), IPC, and User namespaces; (2) cgroups to limit CPU, memory, disk I/O, and network; (3) a union filesystem (overlay2) for layered images. `docker run` essentially calls `clone(CLONE_NEWPID | CLONE_NEWNET | ...)`. Security: container escapes exploit syscalls to break out of namespace isolation; privileged containers are dangerous because they bypass many of these restrictions.",
  },
  {
    id: 2335,
    category: "Operating System",
    subcategory: "Memory & Storage",
    level: "advanced",
    q: "cgroups và namespaces là gì? Cách Kubernetes dùng chúng để quản lý pods?",
    q_en: "What are cgroups and namespaces? How does Kubernetes use them to manage pods?",
    a: "Namespaces cung cấp isolation view: mỗi process thấy một view riêng của system resources. Linux có 8 namespace types: PID (process IDs), Network (interfaces, routing tables), Mount (filesystem mounts), UTS (hostname), IPC (shared memory, semaphores), User (UID/GID mapping), Cgroup, Time. Khi tạo container, Docker/containerd tạo new namespace set, clone process vào đó — process chỉ thấy resources trong namespace của nó. cgroups (control groups) giới hạn và accounting resource usage: cpu (shares, quota, period), memory (limit, swap), blkio (I/O bandwidth), network (tc), pids (max processes). Kubernetes Pod là nhóm containers chia sẻ Network namespace (cùng IP, cùng localhost) và IPC namespace — đó là sao containers trong cùng Pod giao tiếp qua `localhost`. Kubelet cấu hình cgroups per-container dựa trên `resources.requests/limits`: CPU limit dùng cpu.cfs_quota_us, Memory limit dùng memory.limit_in_bytes — exceed memory limit → OOMKilled; throttle CPU khi vượt quota. cgroups v2 (systemd default) unified hierarchy, better accounting, được Kubernetes adopt từ v1.25.",
    a_en: "Namespaces provide an isolated view: each process sees its own view of system resources. Linux has 8 namespace types: PID (process IDs), Network (interfaces and routing tables), Mount (filesystem mount points), UTS (hostname), IPC (shared memory and semaphores), User (UID/GID mappings), Cgroup, and Time. When a container is created, Docker/containerd creates a new set of namespaces and clones the process into them — the process can only see resources within its own namespaces. cgroups (control groups) limit and account for resource usage: cpu (shares, quota, period), memory (limit, swap), blkio (I/O bandwidth), network (tc), pids (max processes). A Kubernetes Pod is a group of containers that share a Network namespace (same IP address, same localhost) and IPC namespace — this is why containers in the same Pod communicate over `localhost`. The kubelet configures cgroups per-container based on `resources.requests/limits`: the CPU limit uses cpu.cfs_quota_us and the memory limit uses memory.limit_in_bytes — exceeding the memory limit results in OOMKilled; exceeding the CPU quota causes throttling. cgroups v2 (the systemd default) introduces a unified hierarchy and improved accounting; Kubernetes adopted it starting from v1.25.",
  },
];
