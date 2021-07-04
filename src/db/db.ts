import Postgres from "./Postgres";

const PostgresConn = () => Postgres.instance.Conn
const PostgresManager = () => Postgres.instance.Conn.manager

export {
  PostgresConn,
  PostgresManager
}