CREATE TABLE IF NOT EXISTS proposals (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 type TEXT NOT NULL CHECK(type IN ('mejora','funcion','problema','usabilidad')),
 proposal TEXT NOT NULL,
 contact TEXT,
 created_at TEXT NOT NULL DEFAULT (datetime('now')),
 status TEXT NOT NULL DEFAULT 'nueva' CHECK(status IN ('nueva','revisando','implementada','descartada'))
);
CREATE INDEX IF NOT EXISTS idx_proposals_created_at ON proposals(created_at DESC);
CREATE TABLE IF NOT EXISTS rate_limits (
 ip_hash TEXT PRIMARY KEY,
 count INTEGER NOT NULL DEFAULT 0,
 window_start TEXT NOT NULL
);
