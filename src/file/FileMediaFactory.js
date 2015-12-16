import FileMediaTypes from './FileMediaTypes';
import TorrentFileMedia from './TorrentFileMedia';
import LocalFileMedia from './LocalFileMedia';

export default {
  createInstance(type, fileInfo){
    if(!type){
      throw new Error("Invalid Arguments, type need to be passed to the constructor");
    }
    if(!fileInfo){
      throw new Error("Invalid Arguments, fileInfo need to be passed to the constructor");
    }

    switch(type){
      case FileMediaTypes.TORRENT: {
        return new TorrentFileMedia(fileInfo);
      }
      case FileMediaTypes.LOCAL: {
        return new LocalFileMedia(fileInfo);
      }

      default: return null;
    }
  }
}