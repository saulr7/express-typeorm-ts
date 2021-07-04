import { Router, Request, Response } from "express"
import Album from "../entities/Album";
import AlbumService from "../services/albumServices";

class AlbumRoutes {

  public router: Router;
  public albumService: AlbumService;

  constructor() {

    this.router = Router();
    this.routes()
    this.albumService = new AlbumService()

  }

  public albums = (req: Request, res: Response) => {

    this.albumService.getAlbums()
      .then((p) => res.json(p))
      .catch((err) => res.json(err))

  }

  public create = (req: Request, res: Response) => {

    const body = req.body

    let album = new Album()
    album.name = body.name;
    album.description = body.description

    this.albumService.createAlbum(album)
      .then((p) => res.json(p))
      .catch((err) => res.status(500).json(err))

  }

  public deleteAlbum = (req: Request, res: Response) => {


    const idString = req.params.id

    const ID = parseInt(idString) || 0


    this.albumService.deleteAlbum(ID)
      .then((p) => res.json(p))
      .catch((err) => res.status(500).json(err))

  }


  public routes() {

    this.router.get('/', this.albums);
    this.router.post('/', this.create);
    this.router.delete('/:id', this.deleteAlbum);

  }


}

export default AlbumRoutes