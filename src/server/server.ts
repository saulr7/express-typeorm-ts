import express, { Request, Response } from 'express'
import AlbumRoutes from '../routes/albumRoutes'
import PhotoRoutes from '../routes/photoRoutes'

class Server {

  private app: express.Application
  private photoRoutes: PhotoRoutes
  private albumRoutes: AlbumRoutes

  constructor() {

    this.app = express()
    this.configuration()
    this.photoRoutes = new PhotoRoutes()
    this.albumRoutes = new AlbumRoutes()
    this.routes()

  }

  public configuration() {
    this.app.set("port", process.env.PORT || 3002)
    this.app.use(express.json())
  }

  public routes() {

    this.app.use('/api/photo/', this.photoRoutes.router)
    this.app.use('/api/album/', this.albumRoutes.router)

    this.app.get('/', (req: Request, res: Response) => {
      res.send("It works")
    })

  }

  public start() {

    const PORT = this.app.get("port") || 0

    this.app.listen(PORT, () => {

      console.log(`Running at ${PORT}`)

    })

  }

}

export default Server