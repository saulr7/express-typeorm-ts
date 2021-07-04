
import { PostgresManager } from '../db/db'
import Album from "../entities/Album"

class AlbumService {

  public getAlbums = () => {
    return PostgresManager().find(Album)
  }

  public getAlbumByID = (id: number) => {
    return PostgresManager().findOne(Album, id)
  }

  public createAlbum = (album: Album) => {
    return PostgresManager().save(album)
  }

  public deleteAlbum = (id: number) => {
    return PostgresManager().delete(Album, { id })
  }


}


export default AlbumService