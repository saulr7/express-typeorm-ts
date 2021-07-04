import { Router, Request, Response } from "express"
import { Photo } from "../entities/Photo";
import PhotoService from "../services/photoServices";

class PhotoRoutes {

  public router: Router;
  private photoService: PhotoService;

  constructor() {

    this.router = Router();
    this.routes()
    this.photoService = new PhotoService()

  }

  public index = (_: Request, res: Response) => {

    this.photoService.getPhotos()
      .then((photos) => res.json(photos))
      .catch((err) => res.status(500).json(err))

  }

  public getPhotoByID = (req: Request, res: Response) => {

    const idString = req.params.id
    const ID = parseInt(idString) || 0

    this.photoService.getPhotoByID(ID)
      .then((photo) => res.json(photo))
      .catch((err) => res.status(500).json(err))

  }


  public create = (req: Request, res: Response) => {

    const idString = req.params.albumId
    const albumId = parseInt(idString) || 0

    const body = req.body

    let photo = new Photo()
    photo.name = body.name;
    photo.description = body.description
    photo.filename = body.filename
    photo.views = body.views || 0
    photo.isPublished = body.isPublished

    this.photoService.createPhoto(photo, albumId)
      .then((p) => res.json(p))
      .catch((err) => res.status(500).json(err))

  }


  public deletePhoto = (req: Request, res: Response) => {

    const idString = req.params.id

    const ID = parseInt(idString) || 0

    this.photoService.deletePhoto(ID)
      .then((p) => res.json({ msg: "ok" }))
      .catch((err) => res.status(500).json(err))
  }


  public routes() {
    this.router.get('/', this.index);
    this.router.get('/:id', this.getPhotoByID);
    this.router.post('/:albumId', this.create);
    this.router.delete('/:id', this.deletePhoto);
  }


}


export default PhotoRoutes