import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import Album from "../entities/Album";
import { Photo } from "../entities/Photo";


class Postgres {

  private static _instance: Postgres;

  Conn: Connection;

  constructor() {
    this.connectDB()
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private connectDB = async () => {

    this.Conn = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Killzone3",
      database: "store",
      entities: [
        Photo,
        Album
      ],
      synchronize: true,
      logging: false
    })

  }

}

export default Postgres