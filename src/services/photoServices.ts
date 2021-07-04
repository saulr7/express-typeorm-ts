
import AlbumService from './albumServices'
import { PostgresManager } from '../db/db'
import { Photo } from '../entities/Photo'


class PhotoService {


  public getPhotos = () => {
    return PostgresManager().find(Photo)
  }


  public createPhoto = async (photo: Photo, albumId: number) => {

    const albumService = new AlbumService()

    const album = await albumService.getAlbumByID(albumId)

    if (!album) {
      throw "Album no found"
    }

    photo.album = album

    return PostgresManager().save(photo)
  }


  public getPhotoByID = async (id: number) => {

    const photoRepository = PostgresManager().getRepository(Photo);

    return photoRepository.findOne({ id }, { relations: ["album"] });

  }


  public updatePhoto = (id: number, photo: Photo) => {
    return PostgresManager().update(Photo, { id }, photo)
  }


  public deletePhoto = (id: number) => {
    return PostgresManager().delete(Photo, { id })
  }



}


export default PhotoService